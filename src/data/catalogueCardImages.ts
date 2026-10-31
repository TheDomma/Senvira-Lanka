import type { ImageMetadata } from 'astro';

import mihintaleImg from '../assets/images/destinations/mihintale.jpg';
import ritigalaImg from '../assets/images/destinations/ritigala.jpg';
import minneriyaImg from '../assets/images/destinations/minneriya.jpg';
import kaudullaImg from '../assets/images/destinations/kaudulla.jpg';
import pidurangalaImg from '../assets/images/destinations/pidurangala-rock.jpg';
import dambadeniyaImg from '../assets/images/destinations/dambadeniya.jpg';
import yapahuwaImg from '../assets/images/destinations/Yapahuwa.jpg';
import avukanaImg from '../assets/images/destinations/avukana.jpg';
import kalaWewaImg from '../assets/images/destinations/kala-wewa.jpg';
import somawathiyaImg from '../assets/images/destinations/Somawathiya National Park.jpg';
import maduruOyaImg from '../assets/images/destinations/Maduru Oya National Park.jpg';
import ruwanwelisayaImg from '../assets/images/destinations/anuradhapura.jpg';
import jetavanaramayaImg from '../assets/images/destinations/Jetavanaramaya.jpg';
import abhayagiriImg from '../assets/images/destinations/Abhayagiri.jpg';
import isurumuniyaImg from '../assets/images/destinations/Isurumuniya.jpg';
import galViharaImg from '../assets/images/destinations/Gal Vihara.jpg';
import vatadageImg from '../assets/images/destinations/Vatadage.jpg';
import rankothVeheraImg from '../assets/images/destinations/Rathna Deepaya.jpg';
import medirigiriyaImg from '../assets/images/destinations/Medirigiriya Vatadage.jpg';
import negomboImg from '../assets/images/destinations/negombo.jpg';

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
 */
export const catalogueCardImages: Record<string, CatalogueCardImageData> = {
  mihintale: {
    src: mihintaleImg,
    alt: 'Frangipani stairway and sacred stupas of Mihintale peak',
    credit: 'Dimath Dayananda / Pexels',
    objectPosition: 'center 22%',
  },
  'ritigala-strict-nature-reserve': {
    src: ritigalaImg,
    alt: 'Ancient stone ruins and meditation pathways of Ritigala',
    credit: 'Gurth Bramall / Unsplash',
    objectPosition: 'center 46%',
  },
  'minneriya-national-park': {
    src: minneriyaImg,
    alt: 'Wild elephant congregation grazing at Minneriya National Park',
    credit: 'Inguaribile Viaggiatore / Pexels',
    objectPosition: 'center 52%',
  },
  'kaudulla-national-park': {
    src: kaudullaImg,
    alt: 'Elephants by the reservoir in Kaudulla National Park',
    credit: 'Taif Rahaman / Unsplash',
    objectPosition: 'center 48%',
  },
  'pidurangala-rock': {
    src: pidurangalaImg,
    alt: 'Panoramic view of Sigiriya Rock from the summit of Pidurangala',
    credit: 'Aravindhan Sathiyanathan / Pexels',
    objectPosition: 'center 32%',
  },
  dambadeniya: {
    src: dambadeniyaImg,
    alt: 'Granite citadel outcrop of Dambadeniya',
    credit: 'K. P. D. Madhuka / Unsplash',
    objectPosition: 'center 35%',
  },
  'yapahuwa-rock-fortress': {
    src: yapahuwaImg,
    alt: 'Monumental ornamental stone stairway of Yapahuwa Rock Fortress',
    credit: 'Samiru Sandeepa / Pexels',
    objectPosition: 'center 45%',
  },
  'avukana-buddha-statue': {
    src: avukanaImg,
    alt: 'Monumental 5th-century rock-cut standing Buddha at Avukana',
    credit: 'Thilina Alagiyawanna / Pexels',
    objectPosition: 'center 20%',
  },
  'kala-wewa': {
    src: kalaWewaImg,
    alt: 'Ancient Kala Wewa reservoir and irrigation spill gates',
    credit: 'Sri Lanka Mirror',
    objectPosition: 'center 50%',
  },
  'somawathiya-national-park': {
    src: somawathiyaImg,
    alt: 'Marshland and floodplain delta of Somawathiya National Park',
    credit: 'National Parks Organization',
    objectPosition: 'center 50%',
  },
  'maduru-oya-national-park': {
    src: maduruOyaImg,
    alt: 'Dry-zone wilderness and lake at Maduru Oya National Park',
    credit: 'Samiru Sandeepa / Pexels',
    objectPosition: 'center 40%',
  },
  ruwanwelisaya: {
    src: ruwanwelisayaImg,
    alt: 'Iconic white bubble-domed Ruwanwelisaya Stupa',
    credit: 'Roshan Kumara / Pexels',
    objectPosition: 'center 35%',
  },
  jetavanaramaya: {
    src: jetavanaramayaImg,
    alt: 'Ancient red-brick Jetavanaramaya Stupa in Anuradhapura',
    credit: 'Madew Rajawasan / Pexels',
    objectPosition: 'center 40%',
  },
  'abhayagiri-monastery': {
    src: abhayagiriImg,
    alt: 'Wooded archaeological grounds of Abhayagiri Monastery',
    credit: 'Kalpa Chathuranga / Pexels',
    objectPosition: 'center 50%',
  },
  'isurumuniya-temple': {
    src: isurumuniyaImg,
    alt: 'Lotus pool and rock cliff temple of Isurumuniya',
    credit: 'Yashi EL / Unsplash',
    objectPosition: 'center 35%',
  },
  'gal-vihara': {
    src: galViharaImg,
    alt: 'Colossal granite rock-cut Buddha statues at Gal Vihara',
    credit: 'Rajitha Fernando / Pexels',
    objectPosition: 'center 45%',
  },
  'polonnaruwa-vatadage': {
    src: vatadageImg,
    alt: 'Concentric circular stone shrine of the Polonnaruwa Vatadage',
    credit: 'Datingjungle / Unsplash',
    objectPosition: 'center 45%',
  },
  'rankoth-vehera': {
    src: rankothVeheraImg,
    alt: 'Monumental red-brick Rankoth Vehera Stupa in Polonnaruwa',
    credit: 'Rathna Deepaya / Unsplash',
    objectPosition: 'center 45%',
  },
  'medirigiriya-vatadage': {
    src: medirigiriyaImg,
    alt: 'Slender octagonal pillars of Medirigiriya Vatadage circular relic house',
    credit: 'Ravi Rajapaksha / Pexels',
    objectPosition: 'center 45%',
  },
  negombo: {
    src: negomboImg,
    alt: 'Traditional outrigger fishing boats along Negombo beach and lagoon',
    credit: 'Amod S Pallemulla / Pexels',
    objectPosition: 'center 50%',
  },
};
