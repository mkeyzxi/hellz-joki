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
    icon: '/ranks/warior.webp',
  },
  {
    rank: 'Elite',
    type: 'romawi',
    divisions: ['III', 'II', 'I'],
    starsPerDivision: 4,
    price: 5000,
    icon: '/ranks/elite.webp',
  },
  {
    rank: 'Master',
    type: 'romawi',
    divisions: ['IV', 'III', 'II', 'I'],
    starsPerDivision: 4,
    price: 5000,
    icon: '/ranks/master.webp',
  },
  {
    rank: 'Grandmaster',
    type: 'romawi',
    divisions: ['V', 'IV', 'III', 'II', 'I'],
    starsPerDivision: 5,
    price: 5000,
    icon: '/ranks/grandMaster.webp',
  },
  {
    rank: 'Epic',
    type: 'romawi',
    divisions: ['V', 'IV', 'III', 'II', 'I'],
    starsPerDivision: 5,
    price: 7000,
    icon: '/ranks/epic.webp',
  },
  {
    rank: 'Legend',
    type: 'romawi',
    divisions: ['V', 'IV', 'III', 'II', 'I'],
    starsPerDivision: 5,
    price: 8000,
    icon: '/ranks/legens.webp',
  },
  {
    rank: 'Mythic',
    type: 'numeric',
    minStars: 0,
    maxStars: 24,
    price: 12000,
    icon: '/ranks/mythic.webp',
  },
  {
    rank: 'Mythical Honor',
    type: 'numeric',
    minStars: 25,
    maxStars: 49,
    price: 17000,
    icon: '/ranks/honor.webp',
  },
  {
    rank: 'Mythical Glory',
    type: 'numeric',
    minStars: 50,
    maxStars: 99,
    price: 25000,
    icon: '/ranks/glory.webp',
  },
  {
    rank: 'Mythical Immortal',
    type: 'numeric',
    minStars: 100,
    maxStars: 9999, // practically unlimited
    price: 30000,
    icon: '/ranks/immortal.webp',
  },
];
