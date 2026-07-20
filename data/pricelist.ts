export type RankType = 'romawi' | 'numeric';

export interface RankConfig {
  rank: string;
  type: RankType;
  divisions?: string[];
  starsPerDivision?: number;
  minStars?: number;
  maxStars?: number; // Optional max bound for numeric ranks, Infinity if none
  price: number; // Price per star
  icon: string;
}

export const pricelist: RankConfig[] = [
  {
    rank: 'Warrior',
    type: 'romawi',
    divisions: ['III', 'II', 'I'],
    starsPerDivision: 3,
    price: 4000,
    icon: '/logo.png',
  },
  {
    rank: 'Grandmaster',
    type: 'romawi',
    divisions: ['V', 'IV', 'III', 'II', 'I'],
    starsPerDivision: 5,
    price: 5000,
    icon: '/logo.png',
  },
  {
    rank: 'Epic',
    type: 'romawi',
    divisions: ['V', 'IV', 'III', 'II', 'I'],
    starsPerDivision: 5,
    price: 7000,
    icon: '/logo.png',
  },
  {
    rank: 'Legend',
    type: 'romawi',
    divisions: ['V', 'IV', 'III', 'II', 'I'],
    starsPerDivision: 5,
    price: 8000,
    icon: '/logo.png',
  },
  {
    rank: 'Mythic',
    type: 'numeric',
    minStars: 0,
    maxStars: 24,
    price: 12000,
    icon: '/logo.png',
  },
  {
    rank: 'Mythical Honor',
    type: 'numeric',
    minStars: 25,
    maxStars: 49,
    price: 17000,
    icon: '/logo.png',
  },
  {
    rank: 'Mythical Glory',
    type: 'numeric',
    minStars: 50,
    maxStars: 99,
    price: 25000,
    icon: '/logo.png',
  },
  {
    rank: 'Mythical Immortal',
    type: 'numeric',
    minStars: 100,
    maxStars: 9999, // practically unlimited
    price: 30000,
    icon: '/logo.png',
  },
];
