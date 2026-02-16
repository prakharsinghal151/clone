import React, { useState } from "react";
import { Header } from "./components/Header";
import { HeroBanner } from "./components/HeroBanner";
import { ProductCard } from "./components/ProductCard";
import { ShoppingCart } from "./components/ShoppingCart";
import { Footer } from "./components/Footer";
import { Catalog } from "./components/Catalog";
import { Payment } from "./components/Payment";
import { products, Product } from "./data/products";

interface CartItem {
  product: Product;
  quantity: number;
}

type Page = "home" | "catalog" | "payment";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>("home");

  /* ---------- CART ---------- */

  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const found = prev.find((i) => i.product.id === product.id);
      return found
        ? prev.map((i) =>
            i.product.id === product.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          )
        : [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: number, qty: number) => {
    if (qty <= 0) {
      setCartItems((prev) => prev.filter((i) => i.product.id !== id));
    } else {
      setCartItems((prev) =>
        prev.map((i) =>
          i.product.id === id ? { ...i, quantity: qty } : i
        )
      );
    }
  };

  const handleRemoveItem = (id: number) => {
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));
  };

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);
  const total = cartItems.reduce(
    (s, i) => s + i.product.price * i.quantity,
    0
  );

  /* ---------- NAV ---------- */

  const TopTabs = () => (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 flex gap-4 py-3">
        {["home", "catalog", "payment"].map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page as Page)}
            className={`px-4 py-2 rounded ${
              currentPage === page
                ? "bg-yellow-400 font-semibold"
                : "border"
            }`}
          >
            {page.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />

      <TopTabs />

      {currentPage === "home" && (
        <>
          <HeroBanner />
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </>
      )}

      {currentPage === "catalog" && (
        <Catalog onAddToCart={handleAddToCart} />
      )}

      {currentPage === "payment" && (
        <Payment total={total} />
      )}

      <ShoppingCart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          setCurrentPage("payment");
        }}
      />

      <Footer />
    </div>
  );
}

export default App;
