export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category: string;
  description: string;
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 79.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviews: 2341,
    image: "https://images.unsplash.com/photo-1518441902117-1f6d5e6d5e6a?w=400",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation",
    inStock: true,
  },
  {
    id: 2,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviews: 1856,
    image: "https://images.unsplash.com/photo-1526403223954-2cde6c1a3c66?w=400",
    category: "Sports & Outdoors",
    description: "Keeps drinks cold for 24 hours or hot for 12 hours",
    inStock: true,
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.3,
    reviews: 892,
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400",
    category: "Furniture",
    description: "Comfortable chair with lumbar support for long work hours",
    inStock: true,
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviews: 3421,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
    category: "Electronics",
    description: "RGB backlit mechanical keyboard",
    inStock: true,
  },
  {
    id: 5,
    name: "Portable Phone Charger",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.4,
    reviews: 5123,
    image: "https://images.unsplash.com/photo-1580910051074-3eb694886505?w=400",
    category: "Electronics",
    description: "20000mAh power bank with fast charging support",
    inStock: true,
  },
  {
    id: 6,
    name: "Yoga Mat Premium",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 1234,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=400",
    category: "Sports & Outdoors",
    description: "Non-slip yoga mat with carrying strap",
    inStock: true,
  }
];
