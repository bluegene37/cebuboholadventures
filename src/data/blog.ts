// Gene - Oct 1, 2026: Authentic blog posts restored from WordPress backup database (post 309 'Blog, News & Guests Corner').
export interface BlogPost {
  id: number
  title: string
  slug: string
  date: string
  category: string
  author: string
  readTime: string
  image: string
  excerpt: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1394,
    title: 'Sumilon Island - A Sanctuary Paradise of Southern Cebu',
    slug: 'sumilon-island-paradise-cebu',
    date: 'January 28, 2017',
    category: 'Island Hopping',
    author: 'Talia Salcedo',
    readTime: '4 min read',
    image: '/images/destinations/oslob.jpg',
    excerpt: 'Sumilon Island is a 24-hectare coral island off the coast of Oslob known for its shifting pristine white sandbar, crystal-clear turquoise waters, and thriving marine sanctuary.',
    content: `Sumilon Island is located off the southeastern tip of Cebu mainland in Oslob. Known as the first marine sanctuary in the Philippines created back in 1974, it boasts exceptional diving, snorkeling, and pristine beaches.\n\nThe famous sandbar changes shape and location depending on the season and ocean currents. Visitors on our Oslob + Sumilon island tour package enjoy complimentary boat transfers, lagoon kayaking, nature trekking along lighthouse trails, and snorkeling with colorful reef fish.`
  },
  {
    id: 1745,
    title: 'Tumalog Falls Tour - See the Enchanting Beauty of Tumalog Falls',
    slug: 'tumalog-falls-tour-package',
    date: 'April 4, 2017',
    category: 'Waterfalls & Nature',
    author: 'Cebu Bohol Adventure',
    readTime: '3 min read',
    image: '/images/destinations/badian.jpg',
    excerpt: 'Hidden amidst lush tropical jungle foliage in Oslob, Tumalog Falls features a soaring amphitheater cliff with cascading curtains of gentle turquoise rain mist.',
    content: `Also called the "Toslob Falls" or "Mag-ambak Falls", Tumalog is celebrated for its sheer scale and ethereal sheer drop. The delicate curtain of water splits into thousands of fine droplets as it glides over mossy limestone ledges into a pale blue shallow swimming basin.\n\nIt is an essential second stop immediately after swimming with the whale sharks in Tan-awan, Oslob.`
  },
  {
    id: 1775,
    title: 'Simala: The Monastery of the Holy Eucharist',
    slug: 'simala-monastery-holy-eucharist',
    date: 'April 15, 2017',
    category: 'Cultural & Pilgrimage',
    author: 'Talia Salcedo',
    readTime: '5 min read',
    image: '/images/destinations/moalboal.jpg',
    excerpt: 'Perched in the green hills of Sibonga, Cebu, the castle-like Monastery of the Holy Eucharist attracts thousands of devotees and travelers marveling at its architectural grandeur.',
    content: `Built by the Marian Monks of Eucharistic Adoration in 1998, the Simala Shrine looks like a European medieval castle with grand stone staircases, soaring spires, and peaceful prayer courtyards.\n\nVisitors come here to give thanks, light colored devotional candles (each representing blessings such as peace, good health, travels, and guidance), and marvel at the breathtaking scenery of southern Cebu.`
  },
  {
    id: 1923,
    title: 'Oslob - Whale Shark Watching Guide & Practical Tips',
    slug: 'oslob-whale-shark-watching',
    date: 'August 10, 2017',
    category: 'Wildlife & Marine',
    author: 'Cebu Bohol Adventure',
    readTime: '5 min read',
    image: '/images/slider/slide-3-whaleshark.jpg',
    excerpt: 'Everything you need to know about watching and snorkeling with the gentle giants (Butanding) in Tan-awan, Oslob, Cebu.',
    content: `Oslob whale shark interaction is one of the premier highlights of any Philippine vacation. Here are our top tips for a seamless experience:\n\n1. Early Morning Start: The sharks are active and fed between 6:00 AM and 11:30 AM. Our private packages pick you up from Cebu City/Mactan at 4:00 AM in air-conditioned comfort.\n2. Strictly eco-friendly: No physical touching, keep a 3-4 meter buffer, and refrain from toxic sunscreen lotions.\n3. Underwater cameras: GoPros and underwater gear are provided or can be rented on-site with assistance from local boatmen.`
  },
  {
    id: 3599,
    title: 'Cebu Bohol Adventure: A Legit Traveling Agency - Our History & Story',
    slug: 'cebu-bohol-adventure-know-your-agency-know-their-history',
    date: 'May 22, 2018',
    category: 'About Our Team',
    author: 'Gene Flores',
    readTime: '4 min read',
    image: '/images/logo-full.png',
    excerpt: 'Over 15 years of collective management experience delivering safe, dependable, and customizable private island tours across Cebu, Bohol, and neighboring regions.',
    content: `Starting as a local family-driven transport and travel service in Lapu-Lapu City, Cebu Bohol Adventure grew through word of mouth, personalized customer care, and relentless dedication to tourist safety.\n\nToday, we operate fully accredited private vans, private boat charters, and licensed DOT guides, ensuring every traveler leaves the Visayas with unforgettable memories.`
  },
  {
    id: 3769,
    title: 'Cebu Twin City Tour - The Best Historic & Cultural Itineraries',
    slug: 'cebu-twin-city-tour-the-best-itineraries',
    date: 'August 16, 2018',
    category: 'Heritage & City',
    author: 'Cebu Bohol Adventure',
    readTime: '4 min read',
    image: '/images/hero/cebu-hero.jpg',
    excerpt: 'Explore Magellan’s Cross, Basilica Minore del Santo Niño, Fort San Pedro, Temple of Leah, and Sirao Flower Garden in a single relaxing day.',
    content: `Cebu City is known as the "Queen City of the South" and the oldest Spanish settlement in the Philippines. Our Twin City Tour covers both historic downtown Cebu and the elevated mountain attractions of Busay.\n\nEnjoy panoramic views from Tops Lookout, visit the roman-inspired Temple of Leah, and take stunning photos at the Sirao Amsterdam Flower Garden.`
  }
]
