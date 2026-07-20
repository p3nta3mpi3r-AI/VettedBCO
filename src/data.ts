import { CoffeeProduct, RoastLevel, Review, Charity } from "./types";

export const coffeeProducts: CoffeeProduct[] = [
  {
    id: "army-ranger-roast",
    name: "Army Ranger Roast",
    slug: "army-ranger-roast",
    rating: 4.9,
    volume: "12 oz (340g)",
    price: 16.50,
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&auto=format&fit=crop",
    category: "Dark Roast",
    description: "Smoky, heavy, and reliable as a standard issue rifle. Roasted to perfection.",
    branch: "Army",
    roast: "Dark Roast",
    tastingNotes: ["Dark Cocoa", "Molasses", "Subtle Hickory Smoke"],
    intensity: "Medium-Dark (Intensity: 4/5)",
    bestFor: "Early call times and rigorous training exercises"
  },
  {
    id: "navy-midwatch-blend",
    name: "Navy Midwatch Blend",
    slug: "navy-midwatch-blend",
    rating: 4.8,
    volume: "12 oz (340g)",
    price: 16.50,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=400&auto=format&fit=crop",
    category: "Medium-Dark Roast",
    description: "Bold but smooth daily drinker designed for long night watches on rough seas.",
    branch: "Navy",
    roast: "Medium-Dark Roast",
    tastingNotes: ["Toasted Hazelnut", "Black Tea", "Caramelized Sugar"],
    intensity: "Medium-Dark (Intensity: 3.5/5)",
    bestFor: "Overnight shifts and prolonged focus"
  },
  {
    id: "air-force-altitude-roast",
    name: "Air Force Altitude Roast",
    slug: "air-force-altitude-roast",
    rating: 4.7,
    volume: "12 oz (340g)",
    price: 16.50,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=400&auto=format&fit=crop",
    category: "Medium Roast",
    description: "Balanced body, clean finish, and enough lift for all-day drinkability and high altitudes.",
    branch: "Air Force",
    roast: "Medium Roast",
    tastingNotes: ["Red Berries", "Milk Chocolate", "Jasmine Tea"],
    intensity: "Medium Roast (Intensity: 3/5)",
    bestFor: "Precision thinking and continuous operations"
  },
  {
    id: "marine-frontline-dark",
    name: "Marine Frontline Dark",
    slug: "marine-frontline-dark",
    rating: 5.0,
    volume: "12 oz (340g)",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=400&auto=format&fit=crop",
    category: "Double Dark Roast",
    description: "Smokiest and heaviest in the lineup for people who want full-force dark roast energy.",
    branch: "Marines",
    roast: "Double Dark Roast",
    tastingNotes: ["Charred Cedar", "Bittersweet Chocolate", "Bold Hickory"],
    intensity: "Double Dark (Intensity: 5/5)",
    bestFor: "Immediate deployment action and high-intensity grit"
  }
];


export const charities: Charity[] = [
  {
    slug: "semper-fi-fund",
    name: "Semper Fi & America's Fund",
    badge: "Semper Fi Fund",
    priority: "Wounded Veteran Recovery",
    whyItFits: "Provides direct financial assistance and lifetime support to wounded, injured, and ill service members.",
    supportAreas: [
      "Direct financial assistance grants",
      "Adaptive housing, technology, and modified vehicles",
      "Transition programs and lifetime family support"
    ],
    url: "https://thefund.org/"
  },
  {
    slug: "fisher-house",
    name: "Fisher House Foundation",
    badge: "Fisher House",
    priority: "Military Family Comfort",
    whyItFits: "Builds comfort homes where military and veteran families can stay free of charge while a loved one is in treatment.",
    supportAreas: [
      "Free premium lodging near major military medical centers",
      "Scholarships for military children and spouses",
      "Hero Miles flight & hotel room donation programs"
    ],
    url: "https://fisherhouse.org/"
  },
  {
    slug: "gary-sinise-foundation",
    name: "Gary Sinise Foundation",
    badge: "Gary Sinise",
    priority: "Broad Hero Support",
    whyItFits: "Serves defenders, veterans, first responders, their families, and those in need through unique healing programs.",
    supportAreas: [
      "Specially adapted smart homes for severely wounded heroes",
      "Mental health treatment support and therapeutic retreats",
      "Emergency relief and essential equipment for first responders"
    ],
    url: "https://www.garysinisefoundation.org/"
  }
];

export const faqs = [
  {
    question: "How does the 30% give-back donation work?",
    answer: "We automatically donate 30% of every sale's revenue directly to our vetted veteran and first responder charity partners. This isn't net-profit-based; it's a solid commitment on every bag sold."
  },
  {
    question: "Can I choose which charity my order supports?",
    answer: "Yes! At checkout or in your account/cart, you can select which of our partner foundations (Fisher House, Semper Fi Fund, or Gary Sinise Foundation) you'd like your specific purchase's 30% donation routed to."
  },
  {
    question: "Where is Vetted Brew coffee roasted?",
    answer: "All our beans are sourced via direct-trade partners and roasted in-house in small batches in Coconut Creek, Florida."
  },
  {
    question: "Do you offer military and first responder discounts?",
    answer: "Yes! Active duty military, veterans, police, fire, and medical responders get a permanent 15% discount when verifying through our account/checkout flow."
  }
];

export const internalGuides = [
  {
    title: "Shop by Branch",
    description: "Choose the roast inspired by your branch of service or target flavor profile.",
    href: "#our-coffee"
  },
  {
    title: "Charity Partners",
    description: "Read about our 3 vetted foundations and see how your purchase creates real-world impact.",
    href: "#charity-factor"
  },
  {
    title: "Our Mission Story",
    description: "Why we donate 30% and how our veteran-founded roastery builds duty-grade grit.",
    href: "#roasting"
  }
];

export const roastLevels: RoastLevel[] = [
  {
    id: "medium-roast",
    name: "MEDIUM ROAST",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=600&auto=format&fit=crop",
    description: "Our Medium Roast preserves complex origin notes with balanced body, clean finish, and high-altitude lift.",
    intensity: 3,
    notes: ["Red Berries", "Milk Chocolate", "Jasmine Tea"],
    bestBrew: "Aeropress & Drip Brewer"
  },
  {
    id: "medium-dark-roast",
    name: "MEDIUM-DARK ROAST",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    description: "A bold but smooth roast developed for continuous energy and prolonged focus during overnight shifts.",
    intensity: 4,
    notes: ["Toasted Hazelnut", "Black Tea", "Caramelized Sugar"],
    bestBrew: "French Press & Moka Pot"
  },
  {
    id: "dark-roast",
    name: "DARK ROAST",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=600&auto=format&fit=crop",
    description: "Deep, powerful, and smoky. Roasted to the edge of caramelization to yield standard-issue morning fuel.",
    intensity: 5,
    notes: ["Dark Cocoa", "Molasses", "Subtle Hickory Smoke"],
    bestBrew: "French Press & Espresso Machine"
  }
];

export const customerReviews: Review[] = [
  {
    id: "review-1",
    name: "SGT. RYAN DAVIS",
    role: "Active Duty Army Ranger",
    quote: "Perfect roast level, absolute grit in a cup. Keeps my unit awake through long tactical movements and early patrols.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "review-2",
    name: "KAREN MITCHELL",
    role: "Marine Spouse",
    quote: "The 30% give-back isn't just marketing. Fisher House saved my family thousands during hospital visits. Love Vetted Brew.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
    rating: 5
  },
  {
    id: "review-3",
    name: "CHIEF PETTY OFFICER ELI WARD",
    role: "Coast Guard / Navy Veteran",
    quote: "The Navy Midwatch has zero bitterness. It's my go-to for early patrol shifts. Exceptional rich flavor profile.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    rating: 5
  }
];

export const tickerItems = [
  "Army Ranger Roast",
  "Navy Midwatch Blend",
  "Air Force Altitude Roast",
  "Marine Frontline Dark",
  "30% Give-Back Mission",
  "Veteran & First Responder Coffee"
];

export const tickerItemsSecondary = [
  "BREWED WITH GRIT & PATRIOTIC PURPOSE ✦",
  "30% REVENUE DONATED DIRECTLY",
  "ROASTED IN THE USA ✦",
  "DUTY-GRADE RELIABLE FLAVOR ✦",

];
