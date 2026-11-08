/**
 * Image-rights registry for the Packages hub and package pages.
 *
 * Only photographs whose licence is recorded in a project ledger are listed here:
 *   - src/assets/images/destination-sources.md                 (ledger A)
 *   - docs/destination-image-sourcing-checklist.md              (ledger B)
 * A local file alone does not prove rights, so anything that is not recorded in a ledger
 * (for example Udawalawe, Knuckles, Lipton's Seat, the Kitulgala raft photo whose credit
 * names an Indian resort, and the experience-page tea/cooking/whale files) is deliberately
 * NOT used on package pages. Alt text describes what is visible in the photograph.
 */
import type { PackageImage } from './types';

import sigiriya from '../../assets/images/destinations/directory-sigiriya.avif';
import anuradhapura from '../../assets/images/destinations/directory-anuradhapura.avif';
import nuwaraEliya from '../../assets/images/destinations/directory-nuwara-eliya.avif';
import trincomalee from '../../assets/images/destinations/directory-trincomalee.avif';
import colombo from '../../assets/images/destinations/directory-colombo.jpg';
import mirissa from '../../assets/images/destinations/directory-mirissa.avif';
import yala from '../../assets/images/destinations/directory-yala.avif';
import bentota from '../../assets/images/destinations/directory-bentota.avif';
import dambulla from '../../assets/images/destinations/new-dambulla.jpg';
import galle from '../../assets/images/destinations/new-galle.jpg';
import nallur from '../../assets/images/destinations/new-jaffna.jpg';
import negombo from '../../assets/images/destinations/negombo.jpg';
import pidurangala from '../../assets/images/destinations/pidurangala-rock.jpg';
import galVihara from '../../assets/images/destinations/Gal Vihara.jpg';
import jetavanaramaya from '../../assets/images/destinations/Jetavanaramaya.jpg';
import mihintale from '../../assets/images/destinations/mihintale.jpg';
import hortonPlains from '../../assets/images/destinations/Horton Plains1.webp';
import haputale from '../../assets/images/destinations/Haputale.jpg';
import ellaRock from '../../assets/images/destinations/Ella Rock.jpg';
import adamsPeak from '../../assets/images/destinations/Adam’s Peak.jpg';
import templeOfTheTooth from '../../assets/images/destinations/Temple of the Tooth.jpg';
import hillTrain from '../../assets/images/destinations/Bandarawela.jpg';
import minneriya from '../../assets/images/destinations/minneriya.jpg';
import wilpattuVillus from '../../assets/images/destinations/Wilpattu Villus.jpg';
import wilpattuLeopard from '../../assets/images/destinations/Wilpattu.jpg';
import nilaveli from '../../assets/images/destinations/Nilaveli.jpg';
import pasikuda from '../../assets/images/destinations/Pasikuda.jpg';
import keerimalai from '../../assets/images/destinations/Keerimalai Springs.jpg';
import jaffnaFort from '../../assets/images/destinations/Jaffna Fort.jpg';
import unawatuna from '../../assets/images/destinations/Unawatuna.jpg';
import weligama from '../../assets/images/destinations/Weligama.jpg';
import hikkaduwa from '../../assets/images/destinations/Hikkaduwa.jpg';
import tangalle from '../../assets/images/destinations/Tangalle.jpg';
import sinharaja from '../../assets/images/destinations/Sinharaja Forest.jpg';

const A = 'src/assets/images/destination-sources.md';
const B = 'docs/destination-image-sourcing-checklist.md';

const PEXELS = { platform: 'Pexels', license: 'Pexels License', licenseUrl: 'https://www.pexels.com/license/', attributionRequired: false } as const;
const UNSPLASH = { platform: 'Unsplash', license: 'Unsplash License', licenseUrl: 'https://unsplash.com/license', attributionRequired: false } as const;
const COMMONS = (license: string, licenseUrl: string) =>
  ({ platform: 'Wikimedia Commons', license, licenseUrl, attributionRequired: true }) as const;

const images: PackageImage[] = [
  // ── Ledger A (destination-sources.md) ───────────────────────────────────────
  {
    id: 'sigiriya', src: sigiriya, ledger: A, subject: 'Sigiriya Rock Fortress',
    alt: 'Sigiriya Rock Fortress rising above green trees, seen along a garden path under a partly cloudy sky.',
    creator: 'Ákos Helgert', sourceUrl: 'https://www.pexels.com/photo/rock-formation-under-cloudy-sky-9013701/', ...PEXELS,
  },
  {
    id: 'anuradhapura', src: anuradhapura, ledger: A, subject: 'Ruwanwelisaya, Anuradhapura',
    alt: 'A tall white stupa with a slim spire rising above trees on a grey day in Anuradhapura.',
    creator: 'Roshan Kumara', sourceUrl: 'https://www.pexels.com/photo/majestic-ruwanwelisaya-stupa-in-anuradhapura-37091540/', ...PEXELS,
  },
  {
    id: 'nuwara-eliya-tea', src: nuwaraEliya, ledger: A, subject: 'Tea plantations, Nuwara Eliya',
    alt: 'Rows of bright green tea bushes on a hillside below dense forest in the Nuwara Eliya highlands.',
    creator: 'Atlantic Ambience', sourceUrl: 'https://www.pexels.com/photo/green-mountain-321571/', ...PEXELS,
  },
  {
    id: 'trincomalee', src: trincomalee, ledger: A, subject: 'Cliffs at Trincomalee',
    alt: 'Two rust-coloured sea cliffs frame a view down to dark blue water at Trincomalee.',
    creator: 'Charith Kodagoda', sourceUrl: 'https://www.pexels.com/photo/majestic-cliffs-overlooking-trincomalee-sea-37106726/', ...PEXELS,
  },
  {
    id: 'colombo', src: colombo, ledger: A, subject: 'Colombo skyline',
    alt: 'The Colombo skyline at night, with lit high-rise towers under a dark cloudy sky.',
    creator: 'Thilina Alagiyawanna', sourceUrl: 'https://images.pexels.com/photos/36703580/pexels-photo-36703580.jpeg', ...PEXELS,
  },
  {
    id: 'mirissa', src: mirissa, ledger: A, subject: 'Secret Beach, Mirissa',
    alt: 'A rocky, sandy beach below a palm-covered headland at Mirissa, with waves breaking beyond.',
    creator: 'Chandi Saha', sourceUrl: 'https://www.pexels.com/photo/scenic-view-of-secluded-beach-in-mirissa-sri-lanka-32574422/', ...PEXELS,
  },
  {
    id: 'yala', src: yala, ledger: A, subject: 'Yala National Park',
    alt: 'A wild elephant walks along a dirt track ahead of a safari vehicle in Yala National Park, in black and white.',
    creator: 'Iakub Arifulin', sourceUrl: 'https://www.pexels.com/photo/an-elephant-following-the-vehicle-11718270/', ...PEXELS,
  },
  {
    id: 'bentota', src: bentota, ledger: A, subject: 'Bentota Beach',
    alt: 'A wide sandy beach at Bentota under a sky of gold-edged clouds.',
    creator: 'Mohan Nannapaneni', sourceUrl: 'https://www.pexels.com/photo/beach-at-sunset-15589614/', ...PEXELS,
  },
  {
    id: 'dambulla', src: dambulla, ledger: A, subject: 'Dambulla cave temple',
    alt: 'Seated Buddha statues around a small stupa inside a painted cave temple at Dambulla.',
    creator: 'Philip Nalangan', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Buddha_Dambulla_3.jpg',
    ...COMMONS('CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/'),
  },
  {
    id: 'galle', src: galle, ledger: A, subject: 'Galle Fort lighthouse',
    alt: 'A white lighthouse and palm trees on the Galle Fort ramparts under a bright blue sky.',
    creator: 'Samal Nadeeshan', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lighthouse_Galle,_Sri_Lanka.jpg',
    ...COMMONS('CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'),
    note: 'Share-alike applies to adapted material; shown with credit and licence link.',
  },
  {
    id: 'nallur', src: nallur, ledger: A, subject: 'Nallur Kandaswamy Kovil, Jaffna',
    alt: 'The gold and red gopuram and pillared hall of the Nallur Kandaswamy temple in Jaffna, with visitors beneath umbrellas.',
    creator: 'Yercaud-elango', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kandaswamy_koil-2-nallur-jaffna-Sri_Lanka.jpg',
    ...COMMONS('CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'),
    note: 'Share-alike applies to adapted material; shown with credit and licence link.',
  },

  // ── Ledger B (destination-image-sourcing-checklist.md) ──────────────────────
  {
    id: 'negombo', src: negombo, ledger: B, subject: 'Negombo beach',
    alt: 'Two traditional sailing outrigger boats with tan sails drawn up on a Negombo beach.',
    creator: 'Amod S Pallemulla', sourceUrl: 'https://images.pexels.com/photos/33929221/pexels-photo-33929221.jpeg', ...PEXELS,
  },
  {
    id: 'pidurangala', src: pidurangala, ledger: B, subject: 'Pidurangala Rock',
    alt: 'A rugged boulder rises above misty forested hills near Sigiriya.',
    creator: 'Aravindhan Sathiyanathan', sourceUrl: 'https://images.pexels.com/photos/28838276/pexels-photo-28838276.jpeg', ...PEXELS,
  },
  {
    id: 'gal-vihara', src: galVihara, ledger: B, subject: 'Gal Vihara, Polonnaruwa',
    alt: 'A seated Buddha carved into a granite rock face at Gal Vihara, Polonnaruwa.',
    creator: 'Rajitha Fernando', sourceUrl: 'https://images.pexels.com/photos/1259789/pexels-photo-1259789.jpeg', ...PEXELS,
  },
  {
    id: 'jetavanaramaya', src: jetavanaramaya, ledger: B, subject: 'Jetavanaramaya, Anuradhapura',
    alt: 'The huge red-brick dome of Jetavanaramaya rising above surrounding trees.',
    creator: 'Madew Rajawasan', sourceUrl: 'https://images.pexels.com/photos/39207884/pexels-photo-39207884.jpeg', ...PEXELS,
  },
  {
    id: 'mihintale', src: mihintale, ledger: B, subject: 'Mihintale',
    alt: 'Pilgrims gather on a rocky summit at Mihintale beside a flying Buddhist flag.',
    creator: 'Dimath Dayananda', sourceUrl: 'https://images.pexels.com/photos/17092145/pexels-photo-17092145.jpeg', ...PEXELS,
  },
  {
    id: 'horton-plains', src: hortonPlains, ledger: B, subject: 'Horton Plains grassland',
    alt: 'Two deer stand on open grassland with scrubby trees behind, in the Horton Plains highlands.',
    creator: 'Ravishka Samarakoon', sourceUrl: 'https://images.pexels.com/photos/37720712/pexels-photo-37720712.jpeg', ...PEXELS,
  },
  {
    id: 'haputale-tea', src: haputale, ledger: B, subject: 'Tea slopes near Haputale',
    alt: 'Aerial view of terraced tea rows on a steep, forested hillside near Haputale.',
    creator: 'Charith Kodagoda', sourceUrl: 'https://images.pexels.com/photos/14023536/pexels-photo-14023536.jpeg', ...PEXELS,
  },
  {
    id: 'ella-rock', src: ellaRock, ledger: B, subject: 'Ella Rock',
    alt: 'A green, rocky ridge rising above layers of hazy forested hills near Ella.',
    creator: 'Lucas Klein', sourceUrl: 'https://images.pexels.com/photos/34714985/pexels-photo-34714985.jpeg', ...PEXELS,
  },
  {
    id: 'adams-peak', src: adamsPeak, ledger: B, subject: "Adam's Peak",
    alt: "A line of lights climbing the dark outline of Adam's Peak at dusk.",
    creator: 'Kavin Sandaruwan', sourceUrl: 'https://images.pexels.com/photos/37673042/pexels-photo-37673042.jpeg', ...PEXELS,
  },
  {
    id: 'kandy-temple', src: templeOfTheTooth, ledger: B, subject: 'Temple of the Tooth, Kandy',
    alt: 'Worshippers in white walk towards the Temple of the Tooth in Kandy, with Buddhist flags beside the path.',
    creator: 'Thilina Alagiyawanna', sourceUrl: 'https://images.pexels.com/photos/40442121/pexels-photo-40442121.jpeg', ...PEXELS,
  },
  {
    id: 'hill-train', src: hillTrain, ledger: B, subject: 'Hill-country train',
    alt: 'A passenger train curves along a wooded hillside in warm, hazy light.',
    creator: 'Charith Kodagoda', sourceUrl: 'https://images.pexels.com/photos/4382096/pexels-photo-4382096.jpeg', ...PEXELS,
    note: 'Ledger entry is titled Bandarawela; the photo shows a hill-country train, so it is captioned as illustrative.',
  },
  {
    id: 'minneriya', src: minneriya, ledger: B, subject: 'Minneriya National Park',
    alt: 'An adult elephant and a calf graze on green grass beside shallow water, with more elephants in the distance.',
    creator: 'Inguaribile Viaggiatore', sourceUrl: 'https://images.pexels.com/photos/7015754/pexels-photo-7015754.jpeg', ...PEXELS,
  },
  {
    id: 'wilpattu-villu', src: wilpattuVillus, ledger: B, subject: 'Wilpattu villu at sunset',
    alt: 'The sun setting orange behind a large tree on the edge of a still lake covered in water plants.',
    creator: 'Senux', sourceUrl: 'https://images.unsplash.com/photo-1670046368526-3b041bb63b03', ...UNSPLASH,
  },
  {
    id: 'wilpattu-leopard', src: wilpattuLeopard, ledger: B, subject: 'Wilpattu National Park',
    alt: 'A leopard crouches in shallow water beside reeds.',
    creator: 'Udara Karunarathna', sourceUrl: 'https://images.unsplash.com/photo-1621847473222-d85c022cbf07', ...UNSPLASH,
    note: 'Not used on package pages, to avoid implying a guaranteed sighting.',
  },
  {
    id: 'nilaveli', src: nilaveli, ledger: B, subject: 'Nilaveli beach',
    alt: 'A quiet sandy beach at Nilaveli with a small boat on the shore under a blue sky and heavy clouds.',
    creator: 'Sajeevan Balachandran', sourceUrl: 'https://images.unsplash.com/photo-1695090177375-0351b2314e3a', ...UNSPLASH,
  },
  {
    id: 'pasikuda', src: pasikuda, ledger: B, subject: 'Pasikuda beach',
    alt: 'White sand and calm turquoise water at Pasikuda, with a yellow kayak on the shore.',
    creator: 'Charuka Herath', sourceUrl: 'https://images.unsplash.com/photo-1596967829313-0fe1918d3358', ...UNSPLASH,
  },
  {
    id: 'keerimalai', src: keerimalai, ledger: B, subject: 'Keerimalai springs, Jaffna',
    alt: 'People bathe in a stone-walled spring pool of green water at Keerimalai.',
    creator: 'dulaj cooray', sourceUrl: 'https://images.unsplash.com/photo-1786539206691-08b5d8614f80', ...UNSPLASH,
  },
  {
    id: 'jaffna-fort', src: jaffnaFort, ledger: B, subject: 'Jaffna Fort',
    alt: 'A tall stone fort wall with an arched gateway beside a still moat at Jaffna Fort.',
    creator: 'Rehman Abubakr', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Jaffna_Fort_(1).jpg',
    ...COMMONS('CC BY-SA 4.0', 'https://creativecommons.org/licenses/by-sa/4.0/'),
    note: 'Share-alike applies to adapted material; shown with credit and licence link.',
  },
  {
    id: 'unawatuna', src: unawatuna, ledger: B, subject: 'Unawatuna coast',
    alt: 'Waves rolling onto a beach lined with coconut palms at Unawatuna under a pink evening sky.',
    creator: 'Atlantic Ambience', sourceUrl: 'https://images.pexels.com/photos/11398739/pexels-photo-11398739.jpeg', ...PEXELS,
  },
  {
    id: 'weligama', src: weligama, ledger: B, subject: 'Weligama beach',
    alt: 'A surfer carrying a board walks along a wet beach at sunset in Weligama.',
    creator: 'Lucas Klein', sourceUrl: 'https://images.pexels.com/photos/34714740/pexels-photo-34714740.jpeg', ...PEXELS,
  },
  {
    id: 'hikkaduwa', src: hikkaduwa, ledger: B, subject: 'South-coast stilt fisherman',
    alt: 'A fisherman perched on a wooden stilt in the surf, with more stilts standing in the water.',
    creator: 'Aditya Siva', sourceUrl: 'https://images.unsplash.com/photo-1465924655546-6c184df810a9', ...UNSPLASH,
  },
  {
    id: 'tangalle', src: tangalle, ledger: B, subject: 'Tangalle coastline',
    alt: 'Aerial view of surf breaking on dark rocks and a wooded headland at Tangalle.',
    creator: 'Malinda Bandara', sourceUrl: 'https://images.pexels.com/photos/16508228/pexels-photo-16508228.jpeg', ...PEXELS,
  },
  {
    id: 'sinharaja', src: sinharaja, ledger: B, subject: 'Forest edge near Sinharaja',
    alt: 'Dense green forest rising above a slope of tea bushes, with a tree in red flower.',
    creator: 'Dan Lundberg',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:20160128_Sri_Lanka_4132_Sinharaja_Forest_Preserve_sRGB_(25674474901).jpg',
    ...COMMONS('CC BY-SA 2.0', 'https://creativecommons.org/licenses/by-sa/2.0/'),
    note: 'Share-alike applies to adapted material; shown with credit and licence link.',
  },
];

const byId = new Map(images.map((image) => [image.id, image]));

export function getPackageImage(id: string): PackageImage {
  const image = byId.get(id);
  if (!image) {
    throw new Error(`[packages] Unknown image id "${id}". Add it to src/data/packages/images.ts with a ledger entry.`);
  }
  return image;
}

export const allPackageImages = images;
