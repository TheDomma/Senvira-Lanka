import fs from 'node:fs';
import path from 'node:path';
import { Buffer } from 'node:buffer';
import { fileURLToPath } from 'node:url';

// Import catalogue metadata
import { catalogueEntries as baseEntries } from '../src/data/destinationCatalogue.ts';
import { extraCatalogueEntries as extras } from '../src/data/destinationCatalogueExtras.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const checklistPath = path.join(rootDir, 'docs', 'destination-image-sourcing-checklist.md');
const imagesDir = path.join(rootDir, 'src', 'assets', 'images', 'destinations');
const catalogueImagesTsPath = path.join(rootDir, 'src', 'data', 'catalogueCardImages.ts');

const allEntries = [...baseEntries, ...extras];
const VALID_IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.avif', '.svg'];

function normalizeName(str) {
  return str
    .toLowerCase()
    .replace(/botanical/g, 'botanic')
    .replace(/[’'–—\-]/g, ' ')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function findCatalogueId(title) {
  const normTitle = normalizeName(title);

  const exact = allEntries.find((e) => normalizeName(e.name) === normTitle);
  if (exact) return exact.id;

  // Try substring or keyword match
  const match = allEntries.find((e) => {
    const en = normalizeName(e.name);
    return en.includes(normTitle) || normTitle.includes(en);
  });
  if (match) return match.id;

  return null;
}

// Preserve existing manual objectPosition tunings
const preservedPositions = {
  mihintale: 'center 22%',
  'ritigala-strict-nature-reserve': 'center 46%',
  'minneriya-national-park': 'center 52%',
  'kaudulla-national-park': 'center 48%',
  'pidurangala-rock': 'center 32%',
  dambadeniya: 'center 35%',
  'yapahuwa-rock-fortress': 'center 45%',
  'avukana-buddha-statue': 'center 20%',
  'kala-wewa': 'center 50%',
  'somawathiya-national-park': 'center 50%',
  'maduru-oya-national-park': 'center 40%',
  ruwanwelisaya: 'center 35%',
  jetavanaramaya: 'center 40%',
  'abhayagiri-monastery': 'center 50%',
  'isurumuniya-temple': 'center 35%',
  'gal-vihara': 'center 45%',
  'polonnaruwa-vatadage': 'center 45%',
  'rankoth-vehera': 'center 45%',
  'medirigiriya-vatadage': 'center 45%',
  negombo: 'center 50%',
};

function detectImageExtension(filePath) {
  try {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(16);
    fs.readSync(fd, buffer, 0, 16, 0);
    fs.closeSync(fd);

    if (buffer[0] === 0xff && buffer[1] === 0xd8) return '.jpg';
    if (buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47) return '.png';
    if (buffer.toString('ascii', 0, 4) === 'RIFF' && buffer.toString('ascii', 8, 12) === 'WEBP') return '.webp';
    if (buffer.toString('ascii', 4, 8) === 'ftyp') {
      const brand = buffer.toString('ascii', 8, 12).trim().toLowerCase();
      if (brand === 'avif' || brand === 'avis') return '.avif';
    }
  } catch {
    // ignore
  }
  return null;
}

function ensureExtension(fileName, fullPath) {
  const currentExt = path.extname(fileName).toLowerCase();
  if (VALID_IMAGE_EXTS.includes(currentExt)) {
    return fileName;
  }

  // File is missing extension, try detecting from magic bytes
  if (fs.existsSync(fullPath)) {
    const detected = detectImageExtension(fullPath);
    if (detected) {
      const newFileName = fileName + detected;
      const newPath = path.join(path.dirname(fullPath), newFileName);
      try {
        fs.renameSync(fullPath, newPath);
        console.log(`[RENAME] Added missing extension: ${fileName} -> ${newFileName}`);
        return newFileName;
      } catch (err) {
        console.warn(`[RENAME ERROR] Could not rename ${fileName}:`, err.message);
      }
    }
  }

  return fileName;
}

async function downloadImageIfMissing(targetPath, sourceUrl) {
  if (fs.existsSync(targetPath)) return true;
  if (!sourceUrl || !sourceUrl.startsWith('http')) return false;

  console.log(`[DOWNLOAD] Attempting download for ${path.basename(targetPath)} from ${sourceUrl}`);
  try {
    const headers = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
    };

    let downloadUrl = sourceUrl;
    const ext = path.extname(sourceUrl.split('?')[0]).toLowerCase();
    const isDirectImage = VALID_IMAGE_EXTS.includes(ext);

    if (!isDirectImage) {
      try {
        const pageRes = await fetch(sourceUrl, { headers, signal: AbortSignal.timeout(8000) });
        if (pageRes.ok) {
          const contentType = pageRes.headers.get('content-type') || '';
          if (contentType.startsWith('image/')) {
            const buffer = Buffer.from(await pageRes.arrayBuffer());
            fs.writeFileSync(targetPath, buffer);
            console.log(`[DOWNLOAD] Saved ${path.basename(targetPath)} (${buffer.length} bytes)`);
            return true;
          }
          const html = await pageRes.text();
          const ogMatch =
            html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
            html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
          if (ogMatch) {
            downloadUrl = ogMatch[1];
            if (downloadUrl.startsWith('//')) downloadUrl = 'https:' + downloadUrl;
            console.log(`[DOWNLOAD] Found og:image: ${downloadUrl}`);
          }
        }
      } catch (err) {
        console.warn(`[DOWNLOAD] Page fetch notice: ${err.message}`);
      }
    }

    const res = await fetch(downloadUrl, { headers, signal: AbortSignal.timeout(15000) });
    if (!res.ok) {
      console.warn(`[DOWNLOAD] HTTP ${res.status} from ${downloadUrl}`);
      return false;
    }

    const buffer = Buffer.from(await res.arrayBuffer());
    if (buffer.length < 1000) {
      console.warn(`[DOWNLOAD] Warning: image suspiciously small (${buffer.length} bytes)`);
    }

    fs.writeFileSync(targetPath, buffer);
    console.log(`[DOWNLOAD] Successfully saved ${path.basename(targetPath)} (${buffer.length} bytes)`);
    return true;
  } catch (err) {
    console.warn(`[DOWNLOAD] Failed downloading ${targetPath}: ${err.message}`);
    return false;
  }
}

export async function syncChecklist() {
  if (!fs.existsSync(checklistPath)) {
    console.error('Checklist not found at', checklistPath);
    return;
  }

  const content = fs.readFileSync(checklistPath, 'utf-8');
  const sections = content.split(/^###\s+/m).slice(1);
  let availableFiles = fs.readdirSync(imagesDir);

  // Pre-pass: check if any files on disk are missing extension and rename them
  for (const f of availableFiles) {
    const currentExt = path.extname(f).toLowerCase();
    if (!VALID_IMAGE_EXTS.includes(currentExt)) {
      const full = path.join(imagesDir, f);
      ensureExtension(f, full);
    }
  }
  availableFiles = fs.readdirSync(imagesDir);

  const matchedEntries = [];

  for (const s of sections) {
    const titleMatch = s.match(/^(\d+)\.\s+(.*)/);
    if (!titleMatch) continue;
    const num = titleMatch[1];
    const name = titleMatch[2].trim();

    const fileMatch = s.match(/- \*\*Image file\/path:\*\*\s*`?([^`\r\n]+)`?/);
    const urlMatch = s.match(/- \*\*Image source page URL:\*\*\s*(https?:\/\/[^\r\n]+)/);
    const creditMatch = s.match(/- \*\*Photographer \/ creator credit:\*\*\s*([^\r\n]*)/);
    const altMatch = s.match(/- \*\*Alt text:\*\*\s*([^\r\n]*)/);
    const whyMatch = s.match(/\*\*Why it is listed:\*\*\s*([^\r\n]+)/);

    let filePath = fileMatch ? fileMatch[1].trim() : '';
    filePath = filePath.replace(/[/\\]+$/, '');

    const url = urlMatch ? urlMatch[1].trim() : '';
    let credit = creditMatch ? creditMatch[1].trim() : '';
    if (credit.startsWith('- **')) credit = '';
    let alt = altMatch ? altMatch[1].trim() : '';
    if (alt.startsWith('- **')) alt = '';
    const why = whyMatch ? whyMatch[1].trim() : '';

    if (!filePath && !url) continue;

    const destId = findCatalogueId(name);
    if (!destId) {
      console.warn(`[WARN] Could not find catalogue ID for #${num} ${name}`);
      continue;
    }

    // Determine target file name
    let targetFileName = filePath ? path.basename(filePath) : '';
    if (!targetFileName || targetFileName === 'destinations') {
      const ext = url.includes('.webp') ? '.webp' : '.jpg';
      targetFileName = `${destId}${ext}`;
    }

    let resolvedFileName = null;
    const localFullPath = path.join(imagesDir, targetFileName);

    if (fs.existsSync(localFullPath)) {
      resolvedFileName = targetFileName;
    } else {
      // Check case-insensitive / extension variations
      const targetBase = path.parse(targetFileName).name.toLowerCase();
      const match = availableFiles.find((f) => {
        const fBase = path.parse(f).name.toLowerCase();
        return fBase === targetBase || f.toLowerCase() === targetFileName.toLowerCase();
      });
      if (match) {
        resolvedFileName = match;
      }
    }

    // Match by name or ID if file wasn't found yet
    if (!resolvedFileName) {
      const nameNorm = normalizeName(name);
      const idNorm = destId.toLowerCase();
      const match = availableFiles.find((f) => {
        const fBase = normalizeName(path.parse(f).name);
        return fBase === idNorm || fBase === nameNorm || nameNorm.startsWith(fBase) || fBase.startsWith(nameNorm);
      });
      if (match) {
        resolvedFileName = match;
      }
    }

    // If still missing and we have a URL, attempt download
    if (!resolvedFileName && url) {
      const success = await downloadImageIfMissing(localFullPath, url);
      if (success) {
        resolvedFileName = targetFileName;
        availableFiles.push(targetFileName);
      }
    }

    if (resolvedFileName) {
      // Make sure the resolved filename has a valid extension
      const fullPath = path.join(imagesDir, resolvedFileName);
      resolvedFileName = ensureExtension(resolvedFileName, fullPath);

      const ext = path.extname(resolvedFileName).toLowerCase();
      if (!VALID_IMAGE_EXTS.includes(ext)) {
        console.warn(`[SKIP] File ${resolvedFileName} does not have a recognized image extension.`);
        continue;
      }

      matchedEntries.push({
        num,
        id: destId,
        name,
        fileName: resolvedFileName,
        credit: credit || undefined,
        alt: alt || why || `${name}, Sri Lanka`,
        objectPosition: preservedPositions[destId] || 'center 45%',
      });
    }
  }

  // Deduplicate
  const seenIds = new Set();
  const uniqueEntries = [];
  for (const item of matchedEntries) {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id);
      uniqueEntries.push(item);
    }
  }

  // Generate code for catalogueCardImages.ts
  const importLines = [];
  const recordLines = [];

  function makeVarName(id) {
    const clean = id.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
    return clean + 'Img';
  }

  for (const item of uniqueEntries) {
    const varName = makeVarName(item.id);
    importLines.push(`import ${varName} from '../assets/images/destinations/${item.fileName}';`);

    const altEscaped = item.alt.replace(/'/g, "\\'");
    const creditEscaped = item.credit ? item.credit.replace(/'/g, "\\'") : '';
    const creditProp = item.credit ? `\n    credit: '${creditEscaped}',` : '';

    recordLines.push(`  '${item.id}': {
    src: ${varName},
    alt: '${altEscaped}',${creditProp}
    objectPosition: '${item.objectPosition}',
  },`);
  }

  const tsContent = `import type { ImageMetadata } from 'astro';

${importLines.join('\n')}

export interface CatalogueCardImageData {
  src: ImageMetadata;
  alt: string;
  credit?: string;
  objectPosition: string;
}

/**
 * Verified real destination photography for directory catalogue cards.
 * Custom object-position cuts preserve the focal subject (e.g. stupa domes,
 * towering statues, stairways, wildlife) within fixed-height card frames.
 *
 * Generated automatically from docs/destination-image-sourcing-checklist.md
 */
export const catalogueCardImages: Record<string, CatalogueCardImageData> = {
${recordLines.join('\n')}
};
`;

  const currentTs = fs.existsSync(catalogueImagesTsPath)
    ? fs.readFileSync(catalogueImagesTsPath, 'utf-8')
    : '';

  if (currentTs.trim() !== tsContent.trim()) {
    fs.writeFileSync(catalogueImagesTsPath, tsContent, 'utf-8');
    console.log(`[SYNC] Updated catalogueCardImages.ts: ${uniqueEntries.length} images active.`);
  } else {
    console.log(`[SYNC] Up to date: ${uniqueEntries.length} images active.`);
  }

  return uniqueEntries.length;
}

if (process.argv.includes('--watch')) {
  console.log('--- Starting Destination Image Realtime Watcher ---');
  await syncChecklist();

  let isSyncing = false;
  async function triggerSync(trigger) {
    if (isSyncing) return;
    isSyncing = true;
    try {
      console.log(`[WATCH] Triggered by ${trigger}`);
      await syncChecklist();
    } catch (err) {
      console.error('[WATCH ERROR]', err);
    } finally {
      isSyncing = false;
    }
  }

  let debounceTimer = null;
  function debouncedSync(trigger) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => triggerSync(trigger), 600);
  }

  try {
    fs.watch(checklistPath, () => debouncedSync('checklist file edit'));
  } catch (err) {
    console.warn('[WATCH] fs.watch notice on checklist:', err.message);
  }

  try {
    fs.watch(imagesDir, () => debouncedSync('new image file in directory'));
  } catch (err) {
    console.warn('[WATCH] fs.watch notice on images dir:', err.message);
  }

  // Polling every 2 seconds
  let lastMtime = 0;
  setInterval(() => {
    try {
      const stat = fs.statSync(checklistPath);
      if (stat.mtimeMs !== lastMtime) {
        lastMtime = stat.mtimeMs;
        debouncedSync('checklist poll modified');
      }
    } catch {}
  }, 2000);

  console.log('[WATCH] Realtime synchronization running in background...');
} else {
  await syncChecklist();
}
