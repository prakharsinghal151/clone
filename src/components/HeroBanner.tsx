import React from "react";

export const HeroBanner: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#146EB4] to-[#131921] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
            Shop Smarter, Live Better
          </h1>

          <p className="text-lg text-gray-200 mb-7 max-w-lg">
            Discover top deals on electronics, home essentials, fashion, and more.
            Enjoy fast delivery, secure payments, and trusted quality.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-md shadow-md transition-all">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=420&fit=crop"
            alt="Shopping"
            className="rounded-xl shadow-2xl"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/600x420";
            }}
          />
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { title: "Free Shipping", icon: "🚚" },
            { title: "Easy Returns", icon: "↩️" },
            { title: "Best Prices", icon: "💰" },
            { title: "24/7 Support", icon: "📞" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-5 text-center hover:bg-white/20 transition-all shadow-sm"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="font-semibold text-sm tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
