import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#131921] text-white mt-12">
      {/* Back to top */}
      <div className="bg-[#232F3E]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-full py-3 text-sm font-medium hover:bg-[#37475A] transition"
        >
          Back to top
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold text-base mb-4">Get to Know Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#FF9900]">About Us</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Careers</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Press Releases</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Blog</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-base mb-4">Connect with Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#FF9900]">Facebook</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Twitter</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Instagram</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">LinkedIn</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-base mb-4">Make Money with Us</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#FF9900]">Sell on Store</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Affiliate Program</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Advertise Products</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Become a Vendor</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-base mb-4">Help & Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#FF9900]">Your Account</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Returns Centre</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#FF9900]">Help</a></li>
          </ul>
        </div>
      </div>

      {/* Social icons */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-lg font-bold text-[#FF9900]">
            A<span className="text-white">mazon</span>
          </div>

          <div className="flex gap-6 text-gray-300">
            <a href="#" className="hover:text-[#FF9900]"><Facebook size={22} /></a>
            <a href="#" className="hover:text-[#FF9900]"><Twitter size={22} /></a>
            <a href="#" className="hover:text-[#FF9900]"><Instagram size={22} /></a>
            <a href="#" className="hover:text-[#FF9900]"><Linkedin size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center text-xs text-gray-400 py-5">
        <p>© 2026 Amazon UI Clone. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-[#FF9900]">Privacy Policy</a>
          <a href="#" className="hover:text-[#FF9900]">Terms</a>
          <a href="#" className="hover:text-[#FF9900]">Cookies</a>
        </div>
      </div>
    </footer>
  );
};
