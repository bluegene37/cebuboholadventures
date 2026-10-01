export interface PricingTier {
  pax: string;
  pricePerPax: number;
}

export interface ItineraryItem {
  time: string;
  activity: string;
  notes?: string;
}

export interface TourPackage {
  id: string;
  slug: string;
  title: string;
  category: 'cebu' | 'bohol' | 'combo' | 'island-hopping';
  badge?: 'Best Seller' | 'Adventure' | 'Popular' | 'Relaxing';
  tagline: string;
  duration: string;
  pickupLocation: string;
  priceFrom: number;
  pricingTiers: PricingTier[];
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryItem[];
  images: {
    hero: string;
    gallery: string[];
  };
  featured: boolean;
}

export const tourPackages: TourPackage[] = [
  {
    id: 'oslob-whale-shark-tumalog-falls',
    slug: 'oslob-whale-shark-tumalog-falls',
    title: 'Oslob Whale Shark Swimming & Tumalog Falls',
    category: 'cebu',
    badge: 'Popular',
    tagline: 'Encounter gentle ocean giants up-close and marvel at the cascading misty curtain of Tumalog Falls.',
    duration: '10 - 12 Hours',
    pickupLocation: 'Cebu City, Mandaue, Lapu-Lapu / Mactan Hotels or Airport',
    priceFrom: 2450,
    pricingTiers: [
      { pax: '2 persons', pricePerPax: 3850 },
      { pax: '3-4 persons', pricePerPax: 3100 },
      { pax: '5-7 persons', pricePerPax: 2650 },
      { pax: '8-10+ persons', pricePerPax: 2450 }
    ],
    highlights: [
      'Close-up snorkeling encounter with majestic whale sharks (gentle giants)',
      'Visit the enchanting misty veil of Tumalog Falls',
      'Scenic coastal drive along Southern Cebu countryside',
      'Historical photo stop at Spanish-era Cuartel ruins and heritage church'
    ],
    inclusions: [
      'Private air-conditioned transportation with dedicated driver-guide',
      'Whale Shark swimming & snorkeling boat fees with local boatmen',
      'Snorkeling gear, life jacket, and mandatory safety orientation',
      'Tumalog Falls entrance fee and local motorbike transfer',
      'Fuel, toll fees, and municipal tourism eco-environmental fees',
      'Complimentary bottled water'
    ],
    exclusions: [
      'Meals and personal snacks (driver can recommend authentic local eateries)',
      'Underwater camera rental (GoPro available on-site for PHP 550)',
      'Foreign guest environmental surcharge (PHP 500 per person mandated by Oslob LGU)',
      'Gratuities / tips for local boatmen and driver'
    ],
    itinerary: [
      { time: '04:00 AM', activity: 'Hotel Pick-up', notes: 'Private pickup from Cebu City or Mactan Resort; travel south along coastal highway.' },
      { time: '06:30 AM', activity: 'Arrival in Oslob & Breakfast Stop', notes: 'Quick breakfast stop at local seaside bakery/diner; queue registration.' },
      { time: '07:30 AM', activity: 'Whale Shark Safety Briefing & Swimming', notes: '30-minute magical swimming encounter with gentle whale sharks.' },
      { time: '09:00 AM', activity: 'Tumalog Falls Exploration', notes: 'Scenic motorcycle ride down to the misty turquoise falls; refreshing swim.' },
      { time: '11:30 AM', activity: 'Lunch at Local Seaside Restaurant', notes: 'Enjoy fresh Cebu lechon and grilled seafood (at own expense).' },
      { time: '01:00 PM', activity: 'Oslob Heritage Park & Cuartel Ruins', notes: 'Photo stop by the historical Spanish-era coral stone barracks and church.' },
      { time: '02:00 PM', activity: 'Departure back to Cebu City', notes: 'Relaxing air-conditioned trip back.' },
      { time: '05:30 PM', activity: 'Hotel Drop-off', notes: 'Estimated arrival at your hotel.' }
    ],
    images: {
      hero: '/images/tours/whale-shark.jpg',
      gallery: [
        '/images/tours/whale-shark.jpg',
        '/images/tours/tumalog-falls.jpg'
      ]
    },
    featured: false
  },
  {
    id: 'kawasan-falls-canyoneering',
    slug: 'kawasan-falls-canyoneering',
    title: 'Kawasan Falls Canyoneering Adventure',
    category: 'cebu',
    badge: 'Adventure',
    tagline: 'Leap into crystal-clear turquoise waters and hike through majestic limestone river gorges in Badian.',
    duration: '10 - 12 Hours',
    pickupLocation: 'Cebu City, Mandaue, Lapu-Lapu / Mactan Hotels or Airport',
    priceFrom: 2600,
    pricingTiers: [
      { pax: '2 persons', pricePerPax: 4100 },
      { pax: '3-4 persons', pricePerPax: 3350 },
      { pax: '5-7 persons', pricePerPax: 2850 },
      { pax: '8-10+ persons', pricePerPax: 2600 }
    ],
    highlights: [
      'Thrilling cliff jumps ranging from 2 meters to 12 meters (optional jumps available)',
      'Natural water slides, rock scrambling, and canyon floating down Badian river',
      'Swimming in the breathtaking turquoise pools of Kawasan Falls',
      'Hearty local buffet lunch included at base camp after the trek'
    ],
    inclusions: [
      'Private air-conditioned transportation (Roundtrip Cebu City/Mactan - Badian)',
      'Professional DOT-accredited canyoneering guide (1 guide per 3-4 guests)',
      'Complete safety gear: impact-tested helmet, high-grade life vest, and canyon trek shoes',
      'Zipline ride to river entry point (or scenic mountain hike)',
      'Sumptuous hot recovery buffet lunch at finish line',
      'All government, barangay, and tourism environmental fees',
      'Complimentary bottled water'
    ],
    exclusions: [
      'Dry bag and waterproof phone case (available for rent/purchase on site)',
      'Action camera rental (GoPro hire available with guide)',
      'Gratuities / tips for canyon guides and driver'
    ],
    itinerary: [
      { time: '05:00 AM', activity: 'Hotel Pick-up in Cebu City / Mactan', notes: 'Travel scenic mountain and coastal roads heading toward southwestern Cebu.' },
      { time: '08:00 AM', activity: 'Arrival in Badian & Base Camp Briefing', notes: 'Fitting of safety vest, helmet, safety orientation, and gear check.' },
      { time: '08:45 AM', activity: 'Zipline Flight to Canyon Entry', notes: 'Scenic 1km zipline glide over treetops directly into the gorge start point.' },
      { time: '09:15 AM', activity: 'Canyon Descent & River Trekking', notes: 'Cliff jumps (3m to 10m), turquoise river swimming, natural rock slides.' },
      { time: '01:00 PM', activity: 'Arrival at Kawasan Falls Level 1', notes: 'Relax and swim under the world-famous turquoise waterfall cascade.' },
      { time: '01:45 PM', activity: 'Full Recovery Buffet Lunch', notes: 'Enjoy traditional Filipino barbecue, grilled pork, chicken, rice, and fresh fruit.' },
      { time: '03:00 PM', activity: 'Departure back to Cebu City', notes: 'Comfortable van transfer with rest stop.' },
      { time: '06:30 PM', activity: 'Drop-off at Hotel', notes: 'Safe return to hotel or airport.' }
    ],
    images: {
      hero: '/images/tours/kawasan-falls.jpg',
      gallery: [
        '/images/tours/kawasan-falls.jpg'
      ]
    },
    featured: false
  },
  {
    id: 'oslob-whale-shark-kawasan-canyoneering',
    slug: 'oslob-whale-shark-kawasan-canyoneering',
    title: 'Oslob Whale Shark & Kawasan Canyoneering Combo',
    category: 'combo',
    badge: 'Best Seller',
    tagline: 'The ultimate #1 full-day adventure combining giant whale sharks, Tumalog Falls, and adrenaline-pumping canyoneering.',
    duration: '14 - 16 Hours',
    pickupLocation: 'Cebu City, Mandaue, Lapu-Lapu / Mactan Hotels or Airport',
    priceFrom: 3700,
    pricingTiers: [
      { pax: '2 persons', pricePerPax: 5400 },
      { pax: '3-4 persons', pricePerPax: 4400 },
      { pax: '5-7 persons', pricePerPax: 3950 },
      { pax: '8-10+ persons', pricePerPax: 3700 }
    ],
    highlights: [
      'Snorkel alongside gentle whale sharks in Oslob in the early morning',
      'Visit the fairytale mist of Tumalog Falls',
      'Full Badian Canyoneering adventure with cliff jumps and natural waterslides',
      'Complimentary hot recovery lunch buffet at Badian basecamp',
      'Experience South Cebu’s two biggest attractions in one seamless day'
    ],
    inclusions: [
      'Exclusive private roundtrip van transportation with driver & fuel',
      'Whale shark watching ticket, boat ride, gear, and life vest',
      'Tumalog Falls entry pass and motorbike transfer',
      'Full Canyoneering package: certified guides, safety helmet, life jacket',
      'Zipline pass at Badian canyoneering',
      'Full Filipino buffet lunch after canyoneering',
      'All government conservation and municipal tourism fees',
      'Complimentary bottled water and cold towels'
    ],
    exclusions: [
      'Breakfast (stopover provided)',
      'Foreign national Oslob environmental fee (+PHP 500/pax)',
      'GoPro camera rental',
      'Driver and guide tips'
    ],
    itinerary: [
      { time: '03:30 AM', activity: 'Early Pick-up from Hotel', notes: 'Private air-conditioned van pickup to beat southern highway traffic.' },
      { time: '06:00 AM', activity: 'Arrival in Oslob & Breakfast Stop', notes: 'Light morning refreshments while queue numbers are secured.' },
      { time: '07:00 AM', activity: 'Whale Shark Snorkeling Encounter', notes: '30-minute exhilarating swim alongside gentle whale sharks.' },
      { time: '08:30 AM', activity: 'Tumalog Falls Visit', notes: 'Cool down in the natural pool and capture postcard photographs.' },
      { time: '10:00 AM', activity: 'Transfer across South Ridge to Badian', notes: 'Scenic 1.5-hour mountain-and-coast transition drive.' },
      { time: '11:30 AM', activity: 'Canyoneering Safety Gear & Zipline', notes: 'Orientation, equipment fitting, and zipline flight into the canyon.' },
      { time: '12:00 PM', activity: 'Downstream Canyoneering Adventure', notes: 'Jumping, sliding, and swimming down river rapids to Kawasan Falls.' },
      { time: '03:30 PM', activity: 'Hearty Recovery Lunch', notes: 'Warm Filipino lunch buffet served at Badian basecamp.' },
      { time: '04:30 PM', activity: 'Journey back to Metro Cebu', notes: 'Relax and nap in the comfortable air-conditioned van.' },
      { time: '07:30 PM', activity: 'Arrival & Hotel Drop-off', notes: 'Drop-off at your hotel or Cebu airport.' }
    ],
    images: {
      hero: '/images/tours/whale-shark.jpg',
      gallery: [
        '/images/tours/whale-shark.jpg',
        '/images/tours/kawasan-falls.jpg',
        '/images/tours/tumalog-falls.jpg'
      ]
    },
    featured: true
  },
  {
    id: 'moalboal-sardine-run-turtle-snorkeling',
    slug: 'moalboal-sardine-run-turtle-snorkeling',
    title: 'Moalboal Sardine Run & Sea Turtle Snorkeling',
    category: 'island-hopping',
    badge: 'Popular',
    tagline: 'Witness millions of glittering sardines swirling along the coral reef drop-off and swim with wild sea turtles at Panagsama Beach.',
    duration: '9 - 11 Hours',
    pickupLocation: 'Cebu City, Mandaue, Lapu-Lapu / Mactan Hotels or Airport',
    priceFrom: 2350,
    pricingTiers: [
      { pax: '2 persons', pricePerPax: 3750 },
      { pax: '3-4 persons', pricePerPax: 2950 },
      { pax: '5-7 persons', pricePerPax: 2550 },
      { pax: '8-10+ persons', pricePerPax: 2350 }
    ],
    highlights: [
      'Spectacular million-sardine ball vortex just meters off Panagsama shoreline',
      'Snorkel alongside resident green sea turtles grazing on sea grass',
      'Explore Pescador Island vibrant marine sanctuary and coral gardens',
      'Dolphin watching opportunistically in Tañon Strait (weather permitting)'
    ],
    inclusions: [
      'Private roundtrip air-conditioned van transfer',
      'Private chartered motorized outrigger boat for island hopping',
      'Licensed local snorkel guide and boat crew',
      'Snorkeling mask, snorkel pipe, and flotation life vest',
      'Pescador Island marine park conservation fee',
      'Municipal tourism and environmental fees',
      'Complimentary bottled water'
    ],
    exclusions: [
      'Lunch and personal beverages at Panagsama beachfront cafes',
      'Fins rental (available at dive shops for PHP 150)',
      'Underwater camera rental',
      'Gratuities / tips'
    ],
    itinerary: [
      { time: '05:30 AM', activity: 'Hotel Pick-up in Cebu / Mactan', notes: 'Convenient early pickup to ensure calm morning seas.' },
      { time: '08:30 AM', activity: 'Arrival at Panagsama Beach, Moalboal', notes: 'Briefing by dive master and boarding of private outrigger boat.' },
      { time: '09:00 AM', activity: 'Pescador Island Marine Sanctuary', notes: 'Snorkel deep drop-offs teeming with colorful reef fish and sponges.' },
      { time: '10:30 AM', activity: 'Panagsama Sardine Run Ball', notes: 'Immerse yourself within the swirling bait ball of millions of sardines.' },
      { time: '11:45 AM', activity: 'Turtles Sanctuary Snorkeling', notes: 'Spot graceful wild sea turtles in their natural habitat.' },
      { time: '12:45 PM', activity: 'Seaside Lunch at Beachfront Cafe', notes: 'Dine overlooking Tañon Strait with views of Negros Island.' },
      { time: '02:00 PM', activity: 'Departure back to Cebu City', notes: 'Scenic drive north through Carcar with optional pasalubong stop.' },
      { time: '05:00 PM', activity: 'Hotel Drop-off', notes: 'Return to hotel or airport.' }
    ],
    images: {
      hero: '/images/tours/moalboal-snorkeling.jpg',
      gallery: [
        '/images/tours/moalboal-snorkeling.jpg'
      ]
    },
    featured: false
  },
  {
    id: 'bohol-countryside-tour',
    slug: 'bohol-countryside-tour',
    title: 'Bohol Countryside Tour',
    category: 'bohol',
    badge: 'Popular',
    tagline: 'Experience the iconic Chocolate Hills, Philippine Tarsier Sanctuary, and a relaxing Loboc River buffet cruise.',
    duration: '8 - 10 Hours (Day Tour)',
    pickupLocation: 'Tagbilaran Seaport, Panglao Resort, or Cebu City Hotel (via Fastcraft)',
    priceFrom: 2450,
    pricingTiers: [
      { pax: '2 persons', pricePerPax: 4250 },
      { pax: '3-4 persons', pricePerPax: 3200 },
      { pax: '5-7 persons', pricePerPax: 2750 },
      { pax: '8-10+ persons', pricePerPax: 2450 }
    ],
    highlights: [
      'Panoramic view of over 1,200 conical limestone Chocolate Hills in Carmen',
      'Encounter the world’s smallest primates at the Philippine Tarsier Sanctuary',
      'Floating restaurant buffet lunch with live acoustic music cruising down Loboc River',
      'Walk under the emerald canopy of the Bilar Man-Made Mahogany Forest',
      'Visit the historic Baclayon Coral Stone Church and Blood Compact Shrine'
    ],
    inclusions: [
      'Exclusive private air-conditioned van with professional local driver-guide',
      'All entrance passes (Chocolate Hills, Tarsier Sanctuary, Butterfly Garden)',
      'Loboc River Floating Restaurant Cruise with full Filipino buffet lunch',
      'Blood Compact Monument (Sandugo) and Baclayon Church stops',
      'Driver meals, parking fees, and local municipal toll fees',
      'Complimentary cold bottled water'
    ],
    exclusions: [
      'Roundtrip OceanJet Fastcraft ferry tickets Cebu-Tagbilaran-Cebu (can be pre-booked on request)',
      'Personal souvenir purchases (calamay, peanut kisses)',
      'ATV rental at Chocolate Hills base (optional PHP 1,000/hr)',
      'Driver and cruise crew gratuities'
    ],
    itinerary: [
      { time: '08:00 AM', activity: 'Meet & Greet at Tagbilaran Port or Panglao Resort', notes: 'Private van waiting with driver holding guest name sign.' },
      { time: '08:30 AM', activity: 'Blood Compact Shrine & Baclayon Church', notes: 'Explore Spanish colonial history and 16th-century stone architecture.' },
      { time: '10:00 AM', activity: 'Corella Tarsier Sanctuary', notes: 'Quiet walk through the jungle sanctuary to view tiny nocturnal tarsiers.' },
      { time: '11:15 AM', activity: 'Bilar Man-Made Mahogany Forest', notes: 'Iconic photo stop along the shaded 2-kilometer canopy highway.' },
      { time: '12:00 PM', activity: 'Loboc River Cruise & Buffet Lunch', notes: 'Cruising through lush tropical scenery while enjoying Filipino dishes and cultural dance.' },
      { time: '01:45 PM', activity: 'Chocolate Hills Viewing Complex in Carmen', notes: 'Climb 214 steps to the observatory deck for 360-degree vistas.' },
      { time: '03:15 PM', activity: 'Butterfly Habitat & Souvenir Shopping', notes: 'Interactive butterfly garden and authentic Bohol delicacy shops.' },
      { time: '04:30 PM', activity: 'Transfer to Tagbilaran Port or Panglao Resort', notes: 'Arrive in time for evening ferry or hotel check-in.' }
    ],
    images: {
      hero: '/images/tours/chocolate-hills.jpg',
      gallery: [
        '/images/tours/chocolate-hills.jpg',
        '/images/tours/tarsier.jpg'
      ]
    },
    featured: true
  },
  {
    id: '3d2n-cebu-bohol-twin-island-tour',
    slug: '3d2n-cebu-bohol-twin-island-tour',
    title: '3D2N Cebu & Bohol Twin Island Grand Vacation',
    category: 'combo',
    badge: 'Best Seller',
    tagline: 'The supreme multi-day island adventure: Whale sharks, Kawasan canyoneering, and the wonders of Bohol.',
    duration: '3 Days / 2 Nights',
    pickupLocation: 'Mactan-Cebu International Airport (CEB) or Cebu City Hotel',
    priceFrom: 7950,
    pricingTiers: [
      { pax: '2 persons', pricePerPax: 12900 },
      { pax: '3-4 persons', pricePerPax: 9800 },
      { pax: '5-7 persons', pricePerPax: 8600 },
      { pax: '8-10+ persons', pricePerPax: 7950 }
    ],
    highlights: [
      'Day 1: Oslob Whale Shark swim, Tumalog Falls & Kawasan Canyoneering',
      'Day 2: Fastcraft to Bohol, Chocolate Hills, Loboc River Cruise & Tarsiers',
      'Day 3: Panglao Island beach morning & Cebu City historical heritage landmarks',
      'Seamless transfers between islands including fast ferry bookings'
    ],
    inclusions: [
      '3 full days of dedicated private air-conditioned vehicle transfers',
      'OceanJet Fastcraft tourist class roundtrip ferry tickets (Cebu - Bohol - Cebu)',
      'All tour activity tickets: Whale Shark snorkeling, Tumalog Falls, Kawasan Canyoneering',
      'Canyoneering safety equipment, guide, and hot recovery lunch',
      'Loboc River floating restaurant buffet lunch',
      'All Bohol countryside entrance fees (Chocolate Hills, Tarsiers, Baclayon)',
      'Port terminal luggage handling fees and environmental taxes',
      '24/7 dedicated travel concierge coordinator'
    ],
    exclusions: [
      'Hotel accommodations in Cebu / Panglao (can be bundled upon request)',
      'Dinners and personal incidental expenses',
      'Foreign guest environmental surcharge for whale sharks (+PHP 500)',
      'Driver and tour guide tips'
    ],
    itinerary: [
      { time: 'Day 1 - 04:00 AM', activity: 'South Cebu High Adrenaline Adventure', notes: 'Hotel pickup, Oslob Whale Shark snorkeling, Tumalog Falls, and full Badian Canyoneering with lunch. Return to Cebu City hotel by 7 PM.' },
      { time: 'Day 2 - 07:00 AM', activity: 'Ferry Crossing & Bohol Countryside Tour', notes: 'Transfer to Cebu Pier 1, OceanJet ferry to Tagbilaran. Full day tour: Blood Compact, Tarsier Sanctuary, Loboc River Buffet Cruise, Bilar Forest, and Chocolate Hills. Drop-off at Panglao hotel.' },
      { time: 'Day 3 - 09:00 AM', activity: 'Panglao Coastal Highlights & Return to Cebu', notes: 'Relaxed morning at Alona Beach, visit Hinagdanan Cave, afternoon fastcraft back to Cebu City. Tour Magellan’s Cross and Fort San Pedro before airport transfer.' }
    ],
    images: {
      hero: '/images/tours/chocolate-hills.jpg',
      gallery: [
        '/images/tours/chocolate-hills.jpg',
        '/images/tours/whale-shark.jpg',
        '/images/tours/kawasan-falls.jpg',
        '/images/tours/tarsier.jpg'
      ]
    },
    featured: true
  },
  {
    id: 'simala-shrine-carcar-heritage-tour',
    slug: 'simala-shrine-carcar-heritage-tour',
    title: 'Simala Shrine & Carcar Heritage Tour',
    category: 'cebu',
    badge: 'Relaxing',
    tagline: 'A tranquil spiritual and cultural pilgrimage to the miraculous castle-like Monastery of the Holy Eucharist in Sibonga and colonial Carcar City.',
    duration: '6 - 8 Hours',
    pickupLocation: 'Cebu City, Mandaue, Lapu-Lapu / Mactan Hotels or Airport',
    priceFrom: 1650,
    pricingTiers: [
      { pax: '2 persons', pricePerPax: 2750 },
      { pax: '3-4 persons', pricePerPax: 2150 },
      { pax: '5-7 persons', pricePerPax: 1850 },
      { pax: '8-10+ persons', pricePerPax: 1650 }
    ],
    highlights: [
      'Visit the awe-inspiring castle-like Monastery of the Holy Eucharist (Simala Shrine)',
      'Light petition candles and view the hall of answered prayers and crutches',
      'Taste authentic Carcar Special Lechon, crispy Chicharon, and ampao',
      'Admire Spanish-colonial heritage houses and the century-old Carcar Church'
    ],
    inclusions: [
      'Private air-conditioned vehicle with fuel and professional driver',
      'Simala Shrine entrance and parking access',
      'Carcar Heritage Plaza and Rotunda cultural walking tour',
      'Stop at famous Carcar public market for lechon tasting & chicharon shopping',
      'Toll fees and fuel',
      'Bottled mineral water'
    ],
    exclusions: [
      'Meals and personal pasalubong purchases',
      'Petition candles and donation items at the shrine',
      'Driver gratuities'
    ],
    itinerary: [
      { time: '08:00 AM', activity: 'Pick-up from Hotel in Metro Cebu', notes: 'Relaxing morning drive south through Talisay and Naga.' },
      { time: '10:00 AM', activity: 'Arrival at Simala Shrine, Sibonga', notes: 'Reflect and explore the magnificent castle architecture, climb prayer ramp, and visit prayer altar (modest dress code required).' },
      { time: '12:30 PM', activity: 'Carcar Heritage City & Famous Lechon Lunch', notes: 'Savor world-renowned roasted suckling pig (lechon) and freshly made hot chicharon.' },
      { time: '02:00 PM', activity: 'St. Catherine of Alexandria Church & Heritage Mansions', notes: 'Photowalk among preserved Spanish and American era colonial villas and shoe expo.' },
      { time: '03:00 PM', activity: 'Scenic Drive back to Cebu City', notes: 'Comfortable afternoon return trip.' },
      { time: '04:30 PM', activity: 'Hotel Drop-off', notes: 'Safe drop-off at your hotel or Cebu airport.' }
    ],
    images: {
      hero: '/images/tours/simala-shrine.jpg',
      gallery: [
        '/images/tours/simala-shrine.jpg'
      ]
    },
    featured: false
  },
  {
    id: 'bantayan-island-tropical-escape',
    slug: 'bantayan-island-tropical-escape',
    title: 'Bantayan Island Tropical Escape',
    category: 'island-hopping',
    badge: 'Relaxing',
    tagline: 'Unwind on powdery white sand beaches, azure lagoons, and laid-back island vibes in northern Cebu.',
    duration: '2 Days / 1 Night',
    pickupLocation: 'Cebu City, Mandaue, or Lapu-Lapu Hotel / Airport',
    priceFrom: 3900,
    pricingTiers: [
      { pax: '2 persons', pricePerPax: 6200 },
      { pax: '3-4 persons', pricePerPax: 4800 },
      { pax: '5-7 persons', pricePerPax: 4200 },
      { pax: '8-10+ persons', pricePerPax: 3900 }
    ],
    highlights: [
      'Kota Beach sandbar with crystal-clear turquoise waters and gentle tides',
      'Virgin Island day excursion with cliff jumping and coral reef snorkeling',
      'Explore Ogtong Cave freshwater subterranean pool',
      'Visit the historic Sts. Peter and Paul Parish Church built from coral stone in 1863',
      'Mangrove eco-park boardwalk walk at Omagieca Obo-ob'
    ],
    inclusions: [
      'Private roundtrip van transport Cebu City to Hagnaya Port',
      'Public RoRo ferry tickets Hagnaya - Santa Fe, Bantayan',
      'Private island transport (tricycle or air-conditioned multicab)',
      'Virgin Island motorized boat charter and snorkeling fees',
      'Entrance passes: Kota Beach, Ogtong Cave, and Obo-ob Mangrove Eco-Park',
      'Municipal eco-tourism and environmental entrance fees'
    ],
    exclusions: [
      'Overnight hotel accommodation (recommended in Santa Fe beachfront)',
      'Personal meals, drinks, and evening nightlife expenses',
      'Snorkel gear rental for Virgin Island',
      'Gratuities / tips'
    ],
    itinerary: [
      { time: '04:30 AM', activity: 'Hotel Departure from Cebu City', notes: 'Morning drive through scenic Northern Cebu countryside towards Hagnaya Port.' },
      { time: '07:30 AM', activity: 'RoRo Ferry Crossing to Bantayan Island', notes: 'Relaxing 1-hour sea crossing to Santa Fe Port.' },
      { time: '09:00 AM', activity: 'Island Land Highlights Tour', notes: 'Explore Omagieca Mangrove boardwalk, Ogtong Cave, and historic 19th-century church.' },
      { time: '11:30 AM', activity: 'Seafood Lunch at Santa Fe Beachfront', notes: 'Freshly grilled fish, calamari, scallops, and fresh young coconut juice.' },
      { time: '01:00 PM', activity: 'Virgin Island Boat Charter & Snorkeling', notes: 'Swim in crystal turquoise waters, relax on powder-soft sandbars, and optional cliff jump.' },
      { time: '03:30 PM', activity: 'Sunset Stroll at Kota Beach Sandbar', notes: 'Iconic wide sand spit made famous by Philippine romantic films.' },
      { time: '05:00 PM', activity: 'Check-in at Beachfront Resort / Ferry Return', notes: 'Settle in for an island sunset dinner or depart on evening RoRo.' }
    ],
    images: {
      hero: '/images/tours/bantayan-island.jpg',
      gallery: [
        '/images/tours/bantayan-island.jpg'
      ]
    },
    featured: false
  }
]
