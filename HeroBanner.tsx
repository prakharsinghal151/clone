import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-amazon-blue to-amazon-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Our Store
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Discover millions of products with great deals and fast shipping. Shop now and save big!
            </p>
            <button className="btn-primary text-lg px-8 py-3">
              Shop Now
            </button>
          </div>

          {/* Right Image */}
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500&h=400&fit=crop"
              alt="Shopping"
              className="rounded-lg shadow-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x400';
              }}
            />
          </div>
        </div>

        {/* Promotional Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { title: 'Free Shipping', icon: '🚚' },
            { title: 'Easy Returns', icon: '↩️' },
            { title: 'Best Prices', icon: '💰' },
            { title: '24/7 Support', icon: '📞' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-opacity-20 transition-all cursor-pointer"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-semibold text-sm">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
