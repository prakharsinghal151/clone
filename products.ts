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
    image: "/products/1-headphones.png",
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation",
    inStock: true
  },
  {
    id: 2,
    name: "Stainless Steel Water Bottle",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.7,
    reviews: 1856,
    image: "/products/2-water-bottle.png",
    category: "Sports & Outdoors",
    description: "Keeps drinks cold for 24 hours or hot for 12 hours",
    inStock: true
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 199.99,
    originalPrice: 299.99,
    rating: 4.3,
    reviews: 892,
    image: "/products/3-office-chair.png",
    category: "Furniture",
    description: "Comfortable chair with lumbar support for long work hours",
    inStock: true
  },
  {
    id: 4,
    name: "Mechanical Gaming Keyboard",
    price: 89.99,
    originalPrice: 149.99,
    rating: 4.6,
    reviews: 3421,
    image: "/products/4-gaming-keyboard.png",
    category: "Electronics",
    description: "RGB backlit mechanical keyboard with Cherry MX switches",
    inStock: true
  },
  {
    id: 5,
    name: "Portable Phone Charger",
    price: 34.99,
    originalPrice: 49.99,
    rating: 4.4,
    reviews: 5123,
    image: "/products/5-power-bank.png",
    category: "Electronics",
    description: "20000mAh power bank with fast charging support",
    inStock: true
  },
  {
    id: 6,
    name: "Yoga Mat Premium",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.8,
    reviews: 1234,
    image: "/products/6-yoga-mat.png",
    category: "Sports & Outdoors",
    description: "Non-slip yoga mat with carrying strap",
    inStock: true
  },
  {
    id: 7,
    name: "Smart Watch Pro",
    price: 249.99,
    originalPrice: 399.99,
    rating: 4.5,
    reviews: 2876,
    image: "/products/7-smartwatch.png",
    category: "Electronics",
    description: "Advanced fitness tracking and health monitoring",
    inStock: true
  },
  {
    id: 8,
    name: "Stainless Steel Cookware Set",
    price: 129.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 1543,
    image: "/products/8-cookware-set.png",
    category: "Home & Kitchen",
    description: "12-piece cookware set with non-stick coating",
    inStock: true
  },
  {
    id: 9,
    name: "LED Desk Lamp",
    price: 44.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 987,
    image: "/products/9-desk-lamp.png",
    category: "Home & Kitchen",
    description: "Adjustable LED lamp with USB charging port",
    inStock: true
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.4,
    reviews: 2134,
    image: "/products/10-wireless-mouse.png",
    category: "Electronics",
    description: "Precision wireless mouse with long battery life",
    inStock: true
  },
  {
    id: 11,
    name: "Backpack Travel Pro",
    price: 59.99,
    originalPrice: 99.99,
    rating: 4.5,
    reviews: 1678,
    image: "/products/11-backpack.png",
    category: "Travel",
    description: "Durable travel backpack with multiple compartments",
    inStock: true
  },
  {
    id: 12,
    name: "Bluetooth Speaker",
    price: 54.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 3456,
    image: "/products/12-bluetooth-speaker.png",
    category: "Electronics",
    description: "Waterproof portable speaker with 360° sound",
    inStock: true
  }
];
