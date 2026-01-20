// Product types
export interface ProductSpecs {
  battery?: string;
  waterproof?: string;
  temperature?: string;
  range?: string;
  capacity?: string;
}

export interface Product {
  id: number;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  specs: ProductSpecs;
  imageUrl: string;
  accentColor: string;
  features?: string[];
  inStock: boolean;
}

export type ProductCategory =
  | "Audio"
  | "Navigation"
  | "Power"
  | "Communication"
  | "Lighting";

// FEATURE TYPES

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// NAVIGATION TYPES

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// CART TYPES

export interface CartItem {
  productId: number;
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}
