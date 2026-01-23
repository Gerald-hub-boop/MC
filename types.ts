export type Category = 'All' | 'Campus Event' | 'Corporate' | 'Competition';

export interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<Category, 'All'>;
  description: string;
  image: string;
  date: string;
  likes: number;
  location?: string;
}

export interface Talent {
  id: number;
  name: string;
  position: string;
  specialization: string;
  image: string;
  quote?: string;
}

