import { Product, Brand, Category, Size, Gender } from '../types';

const brands: Brand[] = [
  'Nike', 'Adidas', 'Zara', 'H&M', 'Gucci', 'Puma', 
  "Levi's", 'Tommy Hilfiger', 'Calvin Klein', 'Ralph Lauren', 'Uniqlo', 'Gap'
];

const categories: Category[] = [
  'T-Shirts', 'Hoodies', 'Jeans', 'Jackets', 'Dresses', 
  'Pants', 'Shorts', 'Sweaters', 'Activewear', 'Accessories'
];

const sizes: Size[] = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'];

const genders: Gender[] = ['Men', 'Women', 'Unisex', 'Kids'];

const colors = [
  'Black', 'White', 'Navy Blue', 'Gray', 'Red', 'Blue', 
  'Green', 'Yellow', 'Pink', 'Purple', 'Brown', 'Beige', 
  'Olive', 'Maroon', 'Teal', 'Orange'
];

const materials = [
  '100% Cotton',
  '60% Cotton, 40% Polyester',
  '80% Polyester, 20% Spandex',
  'Premium Denim',
  'Organic Cotton',
  '100% Wool',
  'Synthetic Blend',
  'French Terry',
  'Fleece',
  'Nylon',
  'Leather',
  'Suede'
];

const careInstructions = [
  'Machine wash cold, tumble dry low',
  'Hand wash only, lay flat to dry',
  'Dry clean only',
  'Machine wash warm, hang to dry',
  'Cold wash, do not bleach',
];

const origins = [
  'China',
  'Bangladesh',
  'Vietnam',
  'Turkey',
  'India',
  'USA',
  'Italy',
  'Portugal',
  'Thailand',
  'Mexico'
];

function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomElements<T>(array: T[], min: number, max: number): T[] {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function getRandomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateProductName(brand: Brand, category: Category, gender: Gender): string {
  const adjectives = [
    'Premium', 'Classic', 'Modern', 'Vintage', 'Sport', 'Casual', 
    'Professional', 'Luxury', 'Essential', 'Comfort', 'Performance', 
    'Signature', 'Elite', 'Urban', 'Street'
  ];
  
  const styles = [
    'Fit', 'Style', 'Collection', 'Edition', 'Series', 'Line', 'Design'
  ];
  
  const adj = getRandomElement(adjectives);
  const style = getRandomElement(styles);
  
  return `${brand} ${adj} ${category} - ${gender} ${style}`;
}

function generateDescription(brand: Brand, category: Category, material: string): string {
  const descriptions = [
    `Experience unmatched quality with these ${category.toLowerCase()} from ${brand}. Crafted from ${material.toLowerCase()}, these pieces are perfect for wholesale buyers looking for premium stock clothing.`,
    `Stock up on these exceptional ${category.toLowerCase()} by ${brand}. Made with ${material.toLowerCase()}, ideal for retailers seeking high-quality bulk inventory.`,
    `Premium ${category.toLowerCase()} from ${brand}, manufactured with ${material.toLowerCase()}. Perfect for wholesale purchasing with competitive bulk pricing available.`,
    `Add these ${brand} ${category.toLowerCase()} to your inventory. Featuring ${material.toLowerCase()} construction, these items are must-haves for your clothing stock.`,
    `Wholesale ${category.toLowerCase()} by ${brand}. Quality ${material.toLowerCase()} materials ensure customer satisfaction. Bulk orders available with attractive discounts.`
  ];
  
  return getRandomElement(descriptions);
}

function generateImageUrls(category: Category, count: number): string[] {
  // Using placeholder images - in production, these would be real product images
  const categoryMap: Record<string, string> = {
    'T-Shirts': 'tshirt',
    'Hoodies': 'hoodie',
    'Jeans': 'jeans',
    'Jackets': 'jacket',
    'Dresses': 'dress',
    'Pants': 'pants',
    'Shorts': 'shorts',
    'Sweaters': 'sweater',
    'Activewear': 'activewear',
    'Accessories': 'accessories'
  };
  
  const categoryKey = categoryMap[category] || 'clothing';
  const images: string[] = [];
  
  for (let i = 1; i <= count; i++) {
    images.push(`https://images.unsplash.com/photo-${1500000000000 + getRandomInt(0, 200000000)}?w=800&h=1000&fit=crop&q=80`);
  }
  
  return images;
}

function generateWholesaleDiscounts() {
  return [
    { quantity: 50, discountPercent: 5 },
    { quantity: 100, discountPercent: 10 },
    { quantity: 250, discountPercent: 15 },
    { quantity: 500, discountPercent: 20 },
    { quantity: 1000, discountPercent: 25 },
  ];
}

function generateTags(brand: Brand, category: Category, gender: Gender): string[] {
  const baseTags = [brand, category, gender, 'Wholesale', 'Bulk Order', 'Stock Clothing'];
  const additionalTags = ['Premium Quality', 'Fast Shipping', 'Trending', 'Best Seller', 'New Arrival'];
  
  return [...baseTags, ...getRandomElements(additionalTags, 1, 3)];
}

export function generateProducts(count: number = 50): Product[] {
  const products: Product[] = [];
  
  for (let i = 1; i <= count; i++) {
    const brand = getRandomElement(brands);
    const category = getRandomElement(categories);
    const gender = getRandomElement(genders);
    const material = getRandomElement(materials);
    const price = getRandomInt(15, 200);
    const hasDiscount = Math.random() > 0.6;
    const originalPrice = hasDiscount ? price + getRandomInt(10, 50) : undefined;
    
    const product: Product = {
      id: `PROD-${String(i).padStart(4, '0')}`,
      name: generateProductName(brand, category, gender),
      description: generateDescription(brand, category, material),
      brand,
      category,
      price,
      originalPrice,
      stockQuantity: getRandomInt(500, 5000),
      minOrderQuantity: getRandomInt(20, 100),
      sizes: getRandomElements(sizes, 4, 7),
      colors: getRandomElements(colors, 3, 6),
      gender,
      images: generateImageUrls(category, getRandomInt(3, 5)),
      featured: Math.random() > 0.8,
      tags: generateTags(brand, category, gender),
      specifications: {
        material,
        care: getRandomElement(careInstructions),
        origin: getRandomElement(origins),
        weight: `${getRandomInt(200, 800)}g`,
      },
      wholesaleDiscount: generateWholesaleDiscounts(),
      rating: Math.random() > 0.3 ? parseFloat((3.5 + Math.random() * 1.5).toFixed(1)) : undefined,
      reviewCount: Math.random() > 0.3 ? getRandomInt(10, 500) : undefined,
      createdAt: new Date(Date.now() - getRandomInt(0, 90) * 24 * 60 * 60 * 1000),
    };
    
    products.push(product);
  }
  
  // Sort by creation date (newest first)
  return products.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

// Generate and export products
export const products = generateProducts(60);

// Export organized data
export const productsByCategory = categories.reduce((acc, category) => {
  acc[category] = products.filter(p => p.category === category);
  return acc;
}, {} as Record<Category, Product[]>);

export const productsByBrand = brands.reduce((acc, brand) => {
  acc[brand] = products.filter(p => p.brand === brand);
  return acc;
}, {} as Record<Brand, Product[]>);

export const featuredProducts = products.filter(p => p.featured);
export const newArrivals = products.slice(0, 12);
export const bestSellers = products
  .filter(p => p.rating && p.rating >= 4.5)
  .sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
  .slice(0, 12);
