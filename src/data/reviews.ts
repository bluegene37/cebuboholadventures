export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  tourId?: string;
  tourTitle?: string;
  avatar?: string;
}

export const reviews: Review[] = [
  {
    id: 'rev-1',
    name: 'Sarah & Mark Jenkins',
    location: 'Melbourne, Australia',
    rating: 5,
    date: 'February 2026',
    comment: 'The Oslob Whale Shark and Kawasan Canyoneering combo was easily the best day of our 2-week Philippines trip! Our driver Kuya Jun was punctual, safe, and made sure we beat the morning crowds. The canyon guides took amazing GoPro photos of us jumping. Worth every single penny!',
    tourId: 'oslob-whale-shark-kawasan-canyoneering',
    tourTitle: 'Oslob Whale Shark & Kawasan Canyoneering Combo'
  },
  {
    id: 'rev-2',
    name: 'Kenji Takahashi',
    location: 'Tokyo, Japan',
    rating: 5,
    date: 'January 2026',
    comment: 'Very professional private tour service. The van was modern, cool, and extremely clean. Seeing the Chocolate Hills and holding a tarsier ticket in Bohol was a dream come true. The buffet lunch on the Loboc River cruise was delicious with great local music.',
    tourId: 'bohol-countryside-tour',
    tourTitle: 'Bohol Countryside Tour'
  },
  {
    id: 'rev-3',
    name: 'Chloe & Antoine Dupont',
    location: 'Paris, France',
    rating: 5,
    date: 'March 2026',
    comment: 'Swimming through the sardine run in Moalboal felt like being inside a BBC nature documentary! Millions of silver fish parting around us, plus three huge sea turtles calmly eating sea grass. Top notch communication via WhatsApp before and during our tour.',
    tourId: 'moalboal-sardine-run-turtle-snorkeling',
    tourTitle: 'Moalboal Sardine Run & Sea Turtle Snorkeling'
  },
  {
    id: 'rev-4',
    name: 'Patricia Lim',
    location: 'Quezon City, Philippines',
    rating: 5,
    date: 'December 2025',
    comment: 'Booked the 3D2N Twin Island package for my family of 6. Having all van transfers, fast ferry tickets, and activity passes pre-arranged saved us so much stress. The kids had a blast canyoneering and our parents loved Simala and Bohol. Salamat kaayo!',
    tourId: '3d2n-cebu-bohol-twin-island-tour',
    tourTitle: '3D2N Cebu & Bohol Twin Island Grand Vacation'
  },
  {
    id: 'rev-5',
    name: 'David Van Der Berg',
    location: 'Amsterdam, Netherlands',
    rating: 5,
    date: 'November 2025',
    comment: 'Tumalog Falls looked like something straight out of Avatar! The misty curtain was so majestic. The early 4 AM pickup was tough, but completely worth it because we were in the first batch of boats for the whale sharks. Highly recommended team!',
    tourId: 'oslob-whale-shark-tumalog-falls',
    tourTitle: 'Oslob Whale Shark Swimming & Tumalog Falls'
  }
]
