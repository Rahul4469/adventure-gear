// src/lib/data.ts

import { Product, Feature } from './types';

//  PRODUCTS DATA 
//  images: /public/images/ 

export const products: Product[] = [
  {
    id: 1,
    name: 'TITAN X3',
    tagline: 'Rugged headphones for extreme conditions',
    price: 249,
    category: 'Audio',
    specs: {
      battery: '50hr',
      waterproof: 'IP68',
      temperature: '-30°C',
    },
    imageUrl: '/images/titan-x3.png',
    accentColor: '#2D5016', // Forest green
    features: [
      'Hightened surrounding sounds',
      'Built in AI voice chat',
      'Emergency beacon',
    ],
    inStock: true,
  },
  {
    id: 2,
    name: 'PATHFINDER PRO',
    tagline: 'GPS navigator for the backcountry',
    price: 399,
    category: 'Navigation',
    specs: {
      battery: '200hr standby',
      waterproof: 'IP67',
      range: 'Global satellite',
    },
    imageUrl: '/images/pathfinder.png',
    accentColor: '#8B4513', // Saddle brown
    features: [
      'Topo maps offline',
      'SOS messaging',
      'Weather alerts',
    ],
    inStock: true,
  },
  {
    id: 3,
    name: 'SOLAR VAULT 20K',
    tagline: 'High-capacity solar charging system',
    price: 179,
    category: 'Power',
    specs: {
      capacity: '20,000mAh',
      waterproof: 'IP65',
      temperature: '-20°C',
    },
    imageUrl: '/images/solar-vault.png',
    accentColor: '#D2691E', // Ember/orange
    features: [
      'Triple solar panels',
      'Fast charge 45W',
      'LED status ring',
    ],
    inStock: true,
  },
  {
    id: 4,
    name: 'STORM SPEAKER',
    tagline: '360° audio for base camp',
    price: 149,
    category: 'Audio',
    specs: {
      battery: '40hr',
      waterproof: 'IP67 - Floats',
      temperature: '-25°C',
    },
    imageUrl: '/images/storm-speaker.png',
    accentColor: '#4A5D23', // Olive
    features: [
      'Pair multiple units',
      'Built-in carabiner',
      'Emergency siren',
    ],
    inStock: true,
  },
  {
    id: 5,
    name: 'BASECAMP RADIO',
    tagline: 'Long-range communication device',
    price: 299,
    category: 'Communication',
    specs: {
      range: '50mi',
      battery: '72hr',
      waterproof: 'IP68',
    },
    imageUrl: '/images/basecamp-radio.png',
    accentColor: '#654321', // Dark brown
    features: [
      'NOAA weather alerts',
      'SOS beacon',
      'Group channels',
    ],
    inStock: true,
  },
  {
    id: 6,
    name: 'POWERCORE MULTI',
    tagline: 'Multi-tool power bank with lighting',
    price: 129,
    category: 'Power',
    specs: {
      capacity: '15,000mAh',
      waterproof: 'IP66',
      temperature: '-15°C',
    },
    imageUrl: '/images/powercore.png',
    accentColor: '#3D3D3D', // Charcoal
    features: [
      'LED flood light',
      'Emergency strobe',
      'USB-C 65W output',
    ],
    inStock: true,
  },
];

//  FEATURES/SPECS DATA 

export const features: Feature[] = [
  {
    icon: 'MIL-STD-810H',
    title: 'Military-grade',
    description: 'Military-grade durability testing',
  },
  {
    icon: 'IP68 RATED',
    title: 'IP68 RATED',
    description: 'Submersible to 3 meters',
  },
  {
    icon: '-30°C TESTED',
    title: '-30°C TESTED',
    description: 'Extreme cold performance',
  },
  {
    icon: 'RAPID CHARGE',
    title: 'RAPID CHARGE',
    description: '0-80% in 45 minutes',
  },
  {
    icon: 'EXTENDED LIFE',
    title: 'EXTENDED LIFE',
    description: 'Industry-leading battery',
  },
  {
    icon: 'GLOBAL SAT',
    title: 'GLOBAL SAT',
    description: 'Worldwide satellite coverage',
  },
];

//  EXPEDITION DATA 

export const expeditions = [
  {
    id: 1,
    name: 'Arctic Circle Traverse',
    location: 'Svalbard, Norway',
    coordinates: "78°55'N 11°56'E",
    year: 2024,
    imageUrl: '/images/expedition-arctic.jpg',
  },
  {
    id: 2,
    name: 'Patagonia Summit',
    location: 'Torres del Paine, Chile',
    coordinates: "51°00'S 73°00'W",
    year: 2024,
    imageUrl: '/images/expedition-patagonia.jpg',
  },
  {
    id: 3,
    name: 'Sahara Crossing',
    location: 'Morocco to Niger',
    coordinates: "23°00'N 10°00'E",
    year: 2023,
    imageUrl: '/images/expedition-sahara.jpg',
  },
];

//  TESTIMONIALS 

export const testimonials = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Alpine Guide',
    quote: 'The TITAN X3 survived a 200-meter fall in the Himalayas. Still works perfectly.',
    imageUrl: '/images/testimonial-1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Okonkwo',
    role: 'Expedition Leader',
    quote: 'PATHFINDER PRO got us out of a whiteout in Antarctica. Lifesaving gear.',
    imageUrl: '/images/testimonial-2.jpg',
  },
];