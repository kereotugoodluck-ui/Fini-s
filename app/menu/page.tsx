"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Main Dishes data using local image paths from your laptop
const MAIN_DISHES = [
  { id: 1, name: "Vegetable Soup", desc: "Fresh green vegetable soup with rich spices and seasoning.", price: 5000, img: "/images/vegetable soup (Edikaikang).jpg" },

  { id: 2, name: "Afang Soup", desc: "Traditional Efik soup made with shredded afang leaves and waterleaves.", price: 5000, img: "/images/afang.jpg" },

  { id: 3, name: "Jollof Rice", desc: "Smoky party jollof rice served with chicken or turkey.", price: 8000, img: "/images/jollof rice.png" },

  { id: 4, name: "BitterLeaf Soup", desc: "Authentic bitterleaf soup prepared with assorted meats and palm oil.", price: 5000, img: "/images/Bitter leaf soup.jpg" },

  { id: 5, name: "Banga Soup", desc: "Delicious palm nut fruit extract soup cooked with fresh fish and spices.", price: 5000, img: "/images/banga.png" },

  { id: 6, name: "Egusi Soup", desc: "Melon seed soup cooked with assorted meat and vegetables.", price: 5000, img: "/images/egusi-soup.jpg" },

  { id: 7, name: "Fried Rice", desc: "Nigerian style fried rice loaded with mixed vegetables and liver.", price: 8000, img: "/images/fried rice.jpg" },

  { id: 8, name: "Ogbono Soup", desc: "Draw seed soup cooked with rich stockfish, meat, and traditional seasoning.", price: 5000, img: "/images/Ogbono Soup.jpg" },

  { id: 9, name: "Native Soup", desc: "Traditional local oil soup loaded with seafood and traditional spices.", price: 5000, img: "/images/native soup.png" },

  { id: 10, name: "Pepper Soup", desc: "Hot and spicy broth loaded with choice of meat and aromatic herbs.", price: 6000, img: "/images/Catfish pepper soup.jpg"},
];

// Extras data using local image paths
const EXTRAS = [
  { id: 'e1', name: "Turkey", price: 6000, img: "/images/turkey.jpg" },
  { id: 'e2', name: "Goat meat", price: 2000, img: "/images/goat meat (2).jpg" },
  { id: 'e3', name: "Cow meat", price: 2000, img: "/images/cow meat.jpg" },
  { id: 'e4', name: "Coleslaw/Salad", price: 2000, img: "/images/Kitchens Diary.jpg" },
];

export default function MenuPage() {
  const router = useRouter();
  // Cart state mapping item id -> quantity (1 to 5 plates)
  const [cart, setCart] = useState<{ [key: string]: number }>( {});

  const handleQuantityChange = (id: string, delta: number) => {
    setCart((prev) => {
      const currentQty = prev[id] || 0;
      const newQty = currentQty + delta;
      
      if (newQty <= 0) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      if (newQty > 5) return prev; // Max 5 plates limit check

      return { ...prev, [id]: newQty };
    });
  };

  const proceedToCart = () => {
    const cartItems = [
      ...MAIN_DISHES.filter(item => cart[item.id]).map(item => ({ ...item, quantity: cart[item.id] })),
      ...EXTRAS.filter(item => cart[item.id]).map(item => ({ ...item, quantity: cart[item.id] }))
    ];

    if (cartItems.length === 0) {
      alert("Please select at least one meal before proceeding.");
      return;
    }

    localStorage.setItem("finis_cart", JSON.stringify(cartItems));
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-[#F8F3E6] pb-16">
      
      {/* Header Banner Section */}
      <div className="relative w-full h-64 bg-zinc-900 overflow-hidden flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 opacity-40">
          <Image 
            src="/images/jollof.jpg" 
            alt="Menu Banner Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white font-serif">Our Menu</h1>
          <p className="text-gray-200 text-base md:text-lg">
            Authentic Nigerian flavours, freshly prepared with love. ❤️
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-10">
        
        {/* ================= MAIN DISHES GRID ================= */}
        <h2 className="text-2xl font-bold text-black mb-6 border-l-4 border-[#E2762B] pl-3">
          Main Dishes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {MAIN_DISHES.map((dish) => {
            const qty = cart[dish.id] || 0;
            return (
              <div 
                key={dish.id} 
                className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="relative w-full h-48 bg-gray-100">
                    <Image src={dish.img} alt={dish.name} fill className="object-cover" />
                  </div>
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-bold text-[#D3732B]">{dish.name}</h3>
                    <div className="text-amber-500 text-sm">★★★★★</div>
                    <p className="text-gray-600 text-xs leading-snug">{dish.desc}</p>
                    <p className="text-lg font-extrabold text-[#D3732B] pt-1">₦ {dish.price.toLocaleString()}</p>
                  </div>
                </div>

                {/* Counter & Action Controls */}
                <div className="p-4 pt-0">
                  {qty === 0 ? (
                    <button 
                      onClick={() => handleQuantityChange(dish.id, 1)}
                      className="w-full bg-[#E2762B] hover:bg-[#c9621b] text-white font-bold py-2.5 rounded-xl transition-colors text-sm shadow"
                    >
                      Order Now
                    </button>
                  ) : (
                    <div className="flex items-center justify-between bg-gray-100 rounded-xl p-1 border border-gray-200">
                      <button 
                        onClick={() => handleQuantityChange(dish.id, -1)}
                        className="w-9 h-9 bg-white rounded-lg font-bold text-gray-700 shadow flex items-center justify-center hover:bg-gray-50"
                      >
                        -
                      </button>
                      <span className="font-bold text-gray-800 text-sm">{qty} plate{qty > 1 ? 's' : ''}</span>
                      <button 
                        onClick={() => handleQuantityChange(dish.id, 1)}
                        disabled={qty >= 5}
                        className="w-9 h-9 bg-white rounded-lg font-bold text-gray-700 shadow flex items-center justify-center hover:bg-gray-50 disabled:opacity-40"
                      >
                        +
                      </button>
                    </div>
                  )}
                  {qty >= 5 && <p className="text-[10px] text-red-500 text-center mt-1">Max 5 plates limit</p>}
                </div>
              </div>
            );
          })}
        </div>


        {/* ================= EXTRAS SECTION ================= */}
        <div className="mt-16 mb-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="italic font-serif text-[#D3732B] text-xl tracking-wider">Extras</span>
            <div className="h-[1px] w-12 bg-[#D3732B]"></div>
          </div>
          <h2 className="text-3xl font-bold text-black mb-6">Complement Your Meal</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {EXTRAS.map((extra) => {
              const qty = cart[extra.id] || 0;
              return (
                <div 
                  key={extra.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
                    <div className="relative w-full h-40 bg-gray-100">
                      <Image src={extra.img} alt={extra.name} fill className="object-cover" />
                    </div>
                    <div className="p-4 space-y-1 text-center">
                      <h3 className="text-lg font-bold text-[#D3732B]">{extra.name}</h3>
                      <p className="text-lg font-extrabold text-[#D3732B]">₦ {extra.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    {qty === 0 ? (
                      <button 
                        onClick={() => handleQuantityChange(extra.id, 1)}
                        className="w-full bg-[#E2762B] hover:bg-[#c9621b] text-white font-bold py-2 rounded-xl transition-colors text-sm shadow"
                      >
                        Add Extra
                      </button>
                    ) : (
                      <div className="flex items-center justify-between bg-gray-100 rounded-xl p-1 border border-gray-200">
                        <button 
                          onClick={() => handleQuantityChange(extra.id, -1)}
                          className="w-8 h-8 bg-white rounded-lg font-bold text-gray-700 shadow flex items-center justify-center"
                        >
                          -
                        </button>
                        <span className="font-bold text-gray-800 text-xs">{qty} portion{qty > 1 ? 's' : ''}</span>
                        <button 
                          onClick={() => handleQuantityChange(extra.id, 1)}
                          disabled={qty >= 5}
                          className="w-8 h-8 bg-white rounded-lg font-bold text-gray-700 shadow flex items-center justify-center disabled:opacity-40"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floating Cart Proceed Checkout Action Bar */}
        {Object.keys(cart).length > 0 && (
          <div className="sticky bottom-6 mt-10 bg-zinc-900 text-white p-4 rounded-2xl shadow-2xl flex items-center justify-between max-w-xl mx-auto z-50">
            <div>
              <p className="text-xs text-gray-300">Selected Items in Cart</p>
              <p className="text-lg font-bold text-[#E2762B]">
                {Object.values(cart).reduce((a, b) => a + b, 0)} total portions
              </p>
            </div>
            <button 
              onClick={proceedToCart}
              className="bg-[#E2762B] hover:bg-[#c9621b] text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg text-sm flex items-center gap-2"
            >
              <span>View Cart & Checkout</span>
              <span>→</span>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}