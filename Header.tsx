import React from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-amazon-dark text-white sticky top-0 z-50 shadow-lg">
      {/* Top Navigation */}
      <div className="bg-amazon-dark px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-amazon-orange">
              A
            </div>
            <span className="text-xl font-semibold">mazon</span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
              />
              <button className="bg-amazon-orange hover:bg-yellow-500 px-4 py-2 rounded-r-md transition-colors">
                <Search size={20} className="text-black" />
              </button>
            </div>
          </div>

          {/* Right Menu */}
          <div className="hidden md:flex items-center gap-6">
            <div className="hover:text-amazon-orange cursor-pointer transition-colors">
              <div className="text-sm">Hello, Sign in</div>
              <div className="font-bold">Account & Lists</div>
            </div>
            <div className="hover:text-amazon-orange cursor-pointer transition-colors">
              <div className="text-sm">Returns</div>
              <div className="font-bold">& Orders</div>
            </div>
            <button
              onClick={onCartClick}
              className="relative hover:text-amazon-orange transition-colors"
            >
              <ShoppingCart size={28} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amazon-orange text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Category Bar */}
      <div className="bg-amazon-dark border-t border-gray-600 px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto text-sm">
          <span className="whitespace-nowrap hover:text-amazon-orange cursor-pointer">All</span>
          <span className="whitespace-nowrap hover:text-amazon-orange cursor-pointer">Electronics</span>
          <span className="whitespace-nowrap hover:text-amazon-orange cursor-pointer">Sports & Outdoors</span>
          <span className="whitespace-nowrap hover:text-amazon-orange cursor-pointer">Home & Kitchen</span>
          <span className="whitespace-nowrap hover:text-amazon-orange cursor-pointer">Books</span>
          <span className="whitespace-nowrap hover:text-amazon-orange cursor-pointer">Deals</span>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-amazon-dark border-t border-gray-600 px-4 py-4 space-y-4">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-3 py-2 rounded text-black text-sm"
            />
            <button className="bg-amazon-orange hover:bg-yellow-500 px-3 py-2 rounded">
              <Search size={18} className="text-black" />
            </button>
          </div>
          <div className="space-y-2">
            <div className="hover:text-amazon-orange cursor-pointer">Account & Lists</div>
            <div className="hover:text-amazon-orange cursor-pointer">Returns & Orders</div>
            <button
              onClick={onCartClick}
              className="w-full text-left hover:text-amazon-orange transition-colors flex items-center gap-2"
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
