import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="relative bg-gray-100 overflow-hidden group">
        <img
          src={product.image}
          alt={product.name}
          className="product-image group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=Product+Image';
          }}
        />
        {discount > 0 && (
          <div className="absolute top-2 right-2 bg-amazon-orange text-black font-bold px-2 py-1 rounded text-sm">
            -{discount}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="text-white font-bold">Out of Stock</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col h-full">
        {/* Category */}
        <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 hover:text-amazon-blue cursor-pointer">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({product.reviews})</span>
        </div>

        {/* Price */}
        <div className="mb-3 flex-grow">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-amazon-orange">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`btn-primary w-full flex items-center justify-center gap-2 ${
            !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <ShoppingCart size={16} />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
};
