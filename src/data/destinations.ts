export interface Destination {
  id: string;
  name: string;
  tag: string;
  description: string;
  image: string;
  tourCount?: number;
}

export const destinations: Destination[] = [
  {
    id: 'oslob',
    name: 'Oslob',
    tag: 'Whale Shark Haven',
    description: 'World-famous coastal sanctuary for gentle whale sharks and the ethereal misty curtain of Tumalog Falls.',
    image: '/images/destinations/oslob.jpg',
    tourCount: 2
  },
  {
    id: 'badian',
    name: 'Badian & Kawasan',
    tag: 'Canyoneering & Waterfalls',
    description: 'Iconic turquoise river gorges, thrilling cliff jumps, and the multi-tier cascades of Kawasan Falls.',
    image: '/images/destinations/badian.jpg',
    tourCount: 2
  },
  {
    id: 'moalboal',
    name: 'Moalboal',
    tag: 'Marine Safari',
    description: 'Millions of swirling sardines just meters from the shore, wild sea turtles, and vibrant coral walls at Pescador Island.',
    image: '/images/destinations/moalboal.jpg',
    tourCount: 1
  },
  {
    id: 'bohol',
    name: 'Bohol Island',
    tag: 'Natural Wonders',
    description: 'Over 1,200 conical Chocolate Hills, wide-eyed Philippine tarsiers, and relaxing Loboc River floating restaurant cruises.',
    image: '/images/destinations/bohol.jpg',
    tourCount: 2
  },
  {
    id: 'bantayan',
    name: 'Bantayan Island',
    tag: 'Tropical Beaches',
    description: 'Powder-white sandbars, crystalline azure waters, cliff jumps at Virgin Island, and authentic laid-back island living.',
    image: '/images/destinations/bantayan.jpg',
    tourCount: 1
  }
]
