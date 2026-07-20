export interface Charity {
  slug: string;
  name: string;
  badge: string;
  priority: string;
  whyItFits: string;
  supportAreas: string[];
  url: string;
}

export interface CoffeeProduct {
  id: string;
  name: string;
  slug: string;
  rating: number;
  volume: string;
  price: number;
  image: string;
  badge?: string;
  category: string;
  description: string;
  branch?: string;
  roast?: string;
  tastingNotes?: string[];
  intensity?: string;
  bestFor?: string;
}

export interface RoastLevel {
  id: string;
  name: string;
  image: string;
  description: string;
  intensity: number; // 1-5
  notes: string[];
  bestBrew: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface CartItem {
  product: CoffeeProduct;
  quantity: number;
  milkType: string;
  sweetness: string;
}
