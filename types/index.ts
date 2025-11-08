export type Category = 
  | 'T-Shirts'
  | 'Hoodies'
  | 'Jeans'
  | 'Jackets'
  | 'Dresses'
  | 'Pants'
  | 'Shorts'
  | 'Sweaters'
  | 'Activewear'
  | 'Accessories';

export type Brand = 
  | 'Nike'
  | 'Adidas'
  | 'Zara'
  | 'H&M'
  | 'Gucci'
  | 'Puma'
  | 'Levi\'s'
  | 'Tommy Hilfiger'
  | 'Calvin Klein'
  | 'Ralph Lauren'
  | 'Uniqlo'
  | 'Gap';

export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
export type Color = string;
export type Gender = 'Men' | 'Women' | 'Unisex' | 'Kids';

export interface Product {
  id: string;
  name: string;
  description: string;
  brand: Brand;
  category: Category;
  price: number;
  originalPrice?: number;
  stockQuantity: number;
  minOrderQuantity: number;
  sizes: Size[];
  colors: Color[];
  gender: Gender;
  images: string[];
  featured: boolean;
  tags: string[];
  specifications: {
    material: string;
    care: string;
    origin: string;
    weight?: string;
  };
  wholesaleDiscount?: {
    quantity: number;
    discountPercent: number;
  }[];
  rating?: number;
  reviewCount?: number;
  createdAt: Date;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: Size;
  selectedColor: Color;
}

export interface WholesaleInquiry {
  productId: string;
  quantity: number;
  companyName: string;
  email: string;
  phone: string;
  message?: string;
}
