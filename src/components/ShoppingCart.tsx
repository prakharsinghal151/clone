import React from "react";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

interface ShoppingCartProps {
  items: CartItem[];
  isOpen: boolean;
  onClose: () => void;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
  onCheckout: () => void; // ✅ NEW
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  items,
  isOpen,
  onClose,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
}) => {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col">
        {/* Header */}
        <div className="bg-amazon-dark text-white p-4 flex justify-between">
          <h2 className="text-lg font-bold">Shopping Cart</h2>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 && (
            <p className="text-center text-gray-500 mt-20">
              Your cart is empty
            </p>
          )}

          {items.map((item) => (
            <div key={item.product.id} className="flex gap-3 border-b pb-3">
              <img
                src={item.product.image}
                className="w-16 h-16 object-contain"
              />

              <div className="flex-1">
                <p className="text-sm font-medium line-clamp-2">
                  {item.product.name}
                </p>

                <p className="text-yellow-600 font-semibold">
                  ${item.product.price.toFixed(2)}
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() =>
                      onUpdateQuantity(
                        item.product.id,
                        item.quantity - 1
                      )
                    }
                  >
                    <Minus size={14} />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      onUpdateQuantity(
                        item.product.id,
                        item.quantity + 1
                      )
                    }
                  >
                    <Plus size={14} />
                  </button>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="ml-auto text-red-500"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-4 space-y-3">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full bg-yellow-400 py-3 font-semibold rounded"
            >
              Proceed to Checkout
            </button>

            <button
              onClick={onClose}
              className="w-full border py-2 rounded"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};
