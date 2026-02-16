import React from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onCartClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Navigation */}
      <div className="bg-[#131921] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

          {/* Logo */}
          <div className="flex items-center cursor-pointer select-none">
            <span className="text-2xl font-bold text-yellow-400">A</span>
            <span className="text-xl font-semibold tracking-wide">
              mazon
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl">
            <div className="flex w-full shadow-sm rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-4 py-2 text-black focus:outline-none"
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 px-5 flex items-center justify-center transition-colors">
                <Search size={20} className="text-black" />
              </button>
            </div>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <div className="cursor-pointer hover:text-yellow-400 transition-colors leading-tight">
              <div>Hello, Sign in</div>
              <div className="font-semibold">Account & Lists</div>
            </div>

            <div className="cursor-pointer hover:text-yellow-400 transition-colors leading-tight">
              <div>Returns</div>
              <div className="font-semibold">& Orders</div>
            </div>

            <button
              onClick={onCartClick}
              className="relative flex items-center hover:text-yellow-400 transition-colors"
            >
              <ShoppingCart size={28} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Category Bar */}
      <div className="bg-[#232f3e] text-white text-sm px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto">
          {[
            "All",
            "Electronics",
            "Sports & Outdoors",
            "Home & Kitchen",
            "Travel",
            "Deals",
          ].map((item) => (
            <span
              key={item}
              className="whitespace-nowrap hover:text-yellow-400 cursor-pointer transition-colors"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#131921] text-white border-t border-gray-700 px-4 py-4 space-y-4">
          
          {/* Mobile Search */}
          <div className="flex rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 text-black text-sm focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 px-3 flex items-center justify-center">
              <Search size={18} className="text-black" />
            </button>
          </div>

          {/* Mobile Links */}
          <div className="space-y-3 text-sm">
            <div className="hover:text-yellow-400 cursor-pointer transition-colors">
              Account & Lists
            </div>
            <div className="hover:text-yellow-400 cursor-pointer transition-colors">
              Returns & Orders
            </div>
            <button
              onClick={onCartClick}
              className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
            >
              <ShoppingCart size={20} />
              Cart ({cartCount})
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
