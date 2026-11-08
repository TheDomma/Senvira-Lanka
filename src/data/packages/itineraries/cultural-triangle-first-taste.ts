import type { TravelPackage } from '../types';
import { dest, exp, fee, opt, range } from '../dsl';

export const culturalTriangleFirstTaste: TravelPackage = {
  slug: 'cultural-triangle-first-taste',
  briefNo: 1,
  status: 'launch',
  title: 'Cultural Triangle, First Taste',
  promise: 'Four days around Dambulla and Sigiriya, kept to one region so the time goes on the places, not the road.',
  days: 4,
  nights: 3,
  band: 'under-week',
  route: ['Sigiriya–Habarana area'],
  routeNote: 'Airport → Sigiriya–Habarana area → Dambulla → Sigiriya → airport',
  audience: 'Stopover visitors and first-timers who want heritage in a short window',
  themes: ['heritage'],
  primaryTheme: 'heritage',
  pace: 'Balanced',
  effort: {
    level: 'Moderate',
    note: 'Long stair climbs at Sigiriya and Dambulla, in dry-zone heat. Start early and pace the day.',
  },
  season: {
    fit: 'Year-round concept',
    caveat: 'Heat and rain can make the climbs harder. Early starts help in every month.',
  },
  budget: { budget: range(250, 450), comfort: range(450, 850), premium: range(1000, 1900, true) },
  heroImage: { id: 'sigiriya' },
  cardImage: 'sigiriya',
  overview: [
    'A compact heritage break for a short stay. You base yourself once, in the Sigiriya–Habarana area, and spend two days on two of the island’s best-known ancient sites.',
    'We keep it regional on purpose. Adding Kandy or the coast to four days would turn it into a drive, so those are left for a longer route.',
  ],
  itinerary: [
    {
      days: [1, 1],
      title: 'Arrive and transfer to the Cultural Triangle',
      base: 'Sigiriya–Habarana area',
      summary:
        'You are met on arrival and taken by private vehicle to the Sigiriya–Habarana area. The rest of the day is for resting after the flight.',
      plan: [
        'Airport meeting arranged in advance.',
        'Road transfer to the Sigiriya–Habarana area. The duration is confirmed in your quote.',
        'Evening at leisure. No sightseeing is planned.',
      ],
      effort: 'Light. A long travel day after a flight.',
      moves: true,
      items: [opt('First night near the airport (Negombo) instead', 'Recommended for late arrivals. It shifts the sequence and is quoted separately.')],
      stops: [dest('sigiriya'), dest('negombo')],
      image: { id: 'negombo', caption: 'Negombo, the usual airport-side stop. Used only if your flight lands late.' },
      mapStop: 'sigiriya',
    },
    {
      days: [2, 2],
      title: 'Dambulla cave temples and a slow afternoon',
      base: 'Sigiriya–Habarana area',
      summary:
        'Dambulla’s rock-cut cave sanctuaries hold painted ceilings and rows of seated and reclining Buddha statues. The afternoon is left open.',
      plan: [
        'Climb to the Dambulla cave temple complex and visit the caves.',
        'A local village experience can be added in the afternoon, but only with a provider we have verified.',
        'Dress to cover shoulders and knees. Shoes are removed at the temple.',
      ],
      effort: 'Moderate. A stair climb to the caves, in the heat of the day if started late.',
      items: [
        fee('Dambulla cave temple admission'),
        opt('Village experience', 'Offered only once a provider is verified.'),
      ],
      stops: [dest('dambulla'), exp('dambulla-cave-temple-ancient-mural-art'), exp('habarana-tank-bund-farmer-walk-and-garden-meal')],
      image: { id: 'dambulla' },
      mapStop: 'dambulla',
    },
    {
      days: [3, 3],
      title: 'Sigiriya at first light',
      base: 'Sigiriya–Habarana area',
      summary:
        'An early start for Sigiriya Rock, before the heat builds. Pidurangala, the neighbouring rock with a view back towards Sigiriya, is an alternative for stronger walkers.',
      plan: [
        'Early climb of Sigiriya Rock and the gardens at its base.',
        'Pidurangala can be chosen instead, depending on interest and fitness.',
        'The afternoon is kept relaxed before the departure transfer.',
      ],
      effort: 'Moderate to demanding. Long, steep staircases with little shade.',
      items: [
        fee('Sigiriya admission'),
        opt('Pidurangala instead of Sigiriya', 'A scramble over rock near the top. Not suited to everyone.'),
        opt('Licensed site guide', 'Guide category confirmed in your quote.'),
      ],
      stops: [dest('sigiriya'), exp('sigiriya-rock-climb'), dest('pidurangala-rock'), exp('pidurangala-rock-climb')],
      image: { id: 'sigiriya' },
      mapStop: 'sigiriya',
    },
    {
      days: [4, 4],
      title: 'Transfer to the airport',
      summary:
        'Breakfast, then a private transfer to the airport. The time you leave depends on your flight.',
      plan: [
        'Road transfer to the airport. The duration is confirmed in your quote.',
        'For an early flight, or a departure that needs a long drive, we would add a night near the airport rather than rush the morning.',
      ],
      effort: 'Light. A long road day.',
      moves: true,
      items: [opt('Extra night near the airport', 'Recommended for early or Colombo-based departures.')],
      stops: [],
      mapStop: 'negombo',
    },
  ],
  seasonalAlternatives: [
    {
      title: 'Prefer Polonnaruwa to Dambulla',
      when: 'If a full ruined-city day appeals more than cave temples.',
      text: 'Swap the Dambulla day for Polonnaruwa. It is better as a full day than as an add-on, so it can need a fifth day.',
      impact: 'May add a day, and changes the cost.',
    },
    {
      title: 'Early or Colombo-based departure',
      when: 'Any month.',
      text: 'Add a night near the airport so the last day is not a long drive before a flight.',
      impact: 'Adds one night.',
    },
  ],
  practical: {
    lodging: 'One base for all three nights, in the Sigiriya–Habarana area. Named properties and the lodging grade are confirmed in your quote.',
    transport: 'Private vehicle with driver for the transfers shown. Vehicle class is confirmed in your quote.',
    guide: 'The driver is not a licensed site guide. A licensed guide for Dambulla or Sigiriya is an optional extra, with the guide category stated in your quote.',
    access: 'Both main sites involve long staircases and uneven ground, with limited shade. They are unsuitable for anyone who cannot manage sustained stairs.',
    familyNote: 'Possible with older children who can climb. For younger children, see the Family Island Sampler.',
  },
  extraCosts: [],
  faq: [
    {
      q: 'Can I add Kandy or the coast?',
      a: 'Not on four days. It would turn the trip into driving. A longer route such as the Classic Island Journey is a better fit.',
    },
    {
      q: 'Is it suitable if I have limited mobility?',
      a: 'Sigiriya and Dambulla both involve many steps. We can talk through what is realistic, or build a day around less strenuous sites.',
    },
  ],
  confirmBeforeSelling: [
    'Road transfer times: airport to the Sigiriya–Habarana area, and back.',
    'Named lodging base, room basis and meal plan in the Sigiriya–Habarana area.',
    'Licensed site guide availability and guide category.',
    'Current admission fees and who purchases them.',
    'Any village experience provider, with licensing and safety status.',
  ],
};
