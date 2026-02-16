import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-amazon-dark text-white">
      {/* Back to Top */}
      <div className="bg-amazon-dark border-b border-gray-600 py-4">
        <button className="w-full text-center hover:bg-gray-800 py-2 transition-colors">
          Back to top
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Get to Know Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-amazon-orange transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Press Releases</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Make Money with Us</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Sell on Amazon</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Become an Affiliate</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Advertise Your Products</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Become a Vendor</a></li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-bold text-lg mb-4">Help & Settings</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Your Account</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Returns Centre</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-amazon-orange transition-colors">Help</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="max-w-7xl mx-auto border-t border-gray-600 pt-8 flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-amazon-orange transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="hover:text-amazon-orange transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="hover:text-amazon-orange transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="hover:text-amazon-orange transition-colors">
            <Linkedin size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-amazon-dark border-t border-gray-600 px-4 py-6">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-400">
          <p className="mb-2">© 2024 Amazon Clone. All rights reserved.</p>
          <p>
            <a href="#" className="hover:text-amazon-orange transition-colors">Privacy Policy</a>
            {' | '}
            <a href="#" className="hover:text-amazon-orange transition-colors">Terms of Service</a>
            {' | '}
            <a href="#" className="hover:text-amazon-orange transition-colors">Cookie Preferences</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
