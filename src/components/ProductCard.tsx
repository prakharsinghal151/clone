import React, { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
}) => {
  const [imgError, setImgError] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) *
          100
      )
    : 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col overflow-hidden group hover:-translate-y-1">
      
      {/* Image Section */}
      <div className="relative bg-gray-50 flex items-center justify-center h-56 p-6">
        <img
          src={
            !imgError && product.image
              ? product.image
              : "https://via.placeholder.com/300x300?text=Product"
          }
          alt={product.name}
          className="h-full object-contain transition-transform duration-300 group-hover:scale-105"
          onError={() => setImgError(true)}
        />

        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs text-gray-500 uppercase tracking-wide mb-1">
          {product.category}
        </span>

        <h3 className="text-sm font-medium text-gray-800 leading-tight line-clamp-2 mb-2 hover:text-yellow-600 cursor-pointer">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < Math.round(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            ({product.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>

            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-md transition-all duration-200 flex items-center justify-center gap-2 shadow-sm hover:shadow ${
            !product.inStock ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <ShoppingCart size={16} />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};
