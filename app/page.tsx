"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const FOOD_IMAGES = [
  "/images/jollof.jpg",
  "/images/egusi.jpg",
  "/images/vegetable-soup.jpg",
  "/images/native.jpg",
  "/images/fried-rice.jpg",
  "/images/banga-soup.jpg",
  "/images/afang.jpg",
];

const DISHES = [
  {
    id: 1,
    name: "Egusi Soup",
    desc: "Melon seed soup with goat meat and fresh spinach.",
    price: "₦ 4,000",
    img: "/images/egusi soup.png",
  },
  {
    id: 2,
    name: "Jollof Rice",
    desc: "Smoky jollof rice served with grilled chicken.",
    price: "₦ 4,000",
    img: "/images/jollof rice.png",
  },
  {
    id: 3,
    name: "Banga Soup",
    desc: "Banga Soup cooked with fresh palm fruites.",
    price: "₦ 5,000",
    img: "/images/banga.png",
  },
  {
    id: 4,
    name: "Native Soup",
    desc: "Well garnished Native Soup.",
    price: "₦ 4,200",
    img: "/images/native soup.png",
  },
];

export default function Page() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % FOOD_IMAGES.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center flex-col bg-[#f8e9c9] p-4 space-y-12">
      
      <section>
        <div className="bg-[#f8e9c9] rounded-3xl p-8 max-w-sm w-full shadow-[10px_10px_10px_10px_rgba(0,0,0,0.1)] flex flex-col justify-between relative overflow-hidden">
          <div className="grid grid-cols-12 gap-2 items-center">
            <div className="col-span-7 flex flex-col items-start space-y-3">
              <p className="text-[#D3732B] font-semibold text-lg flex items-center gap-1">
                <span>&gt;</span> Welcome To <span>&lt;</span>
              </p>

              <div className="leading-tight">
                <h1 className="text-3xl font-black text-black tracking-wide font-serif">
                  FINI'S
                </h1>
                <h2 className="text-3xl font-serif italic text-[#D3732B] -mt-1">
                  KITCHEN
                </h2>
              </div>

              <div className="border border-[#D3732B] rounded-2xl p-4 w-full text-[#D3732B] text-center space-y-1">
                <p className="text-xs tracking-widest">— ♡ —</p>
                <p className="font-semibold text-base leading-snug">
                  Dishes Made With Love And Filled With Rich Nigerian Flavour.
                </p>
                <p className="text-xs tracking-widest">— ♡ —</p>
              </div>
            </div>

            <div className="col-span-5 flex justify-center items-center">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={FOOD_IMAGES[currentImageIndex]}
                  alt="Nigerian Food Dish"
                  fill
                  priority
                  className="object-cover transition-all duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <button className="bg-[#E2762B] hover:bg-[#c9621b] text-white font-semibold py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-md transition-colors w-max">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.46 3.9 3.43 4.38l-.43 7.62h2l-.43-7.62C9.54 12.9 11 11.12 11 9zm7-7c-2.21 0-4 1.79-4 4v7h2v9h2V2z" />
              </svg>
              <span>View Menu</span>
            </button>
          </div>
        </div>
      </section>

      <section className="flex flex-col space-y-4 pt-4 max-w-sm w-full">
        <div className="flex items-center gap-2">
          <span className="italic font-serif text-[#D3732B] text-lg tracking-wider">
            OUR STORY
          </span>
          <div className="h-[px] w-12 bg-[#D3732B]"></div>
        </div>

        <h2 className="text-3xl font-bold text-black leading-tight">
          A Taste Of Nigeria <br />
          Made Like Home.
        </h2>

        <p className="text-gray-900 text-base leading-relaxed font-medium">
          Fini's Kitchen Is Not Just A Restaurant, It's A Place Where Tradition
          Meets Passion. We Bring The Heart Of Nigerian Cuisine To Our Community
          Through Recipes Passed Down, Quality Ingredients And A Touch Of Love In
          Every Dish.
        </p>

        <div className="grid grid-cols-3 gap-3 pt-4">
          <div className="relative h-48 rounded-[35px] overflow-hidden shadow-[10px_10px_10px_10px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/walkway.jpg"
              alt="Restaurant walkway"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 rounded-[35px] overflow-hidden shadow-[10px_10px_10px_10px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/foodline.jpg"
              alt="Food line"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-48 rounded-[35px] overflow-hidden shadow-[10px_10px_10px_10px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/ingredients.jpg"
              alt="Fresh ingredients"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button className="bg-[#E2762B] hover:bg-[#c9621b] text-white font-medium py-2.5 px-6 rounded-full flex items-center gap-2 shadow-md transition-colors">
            <span>Learn More</span>
            <span className="text-lg">➔</span>
          </button>
        </div>
      </section>

      <section className="flex flex-col space-y-6 max-w-sm w-full">
        <h2 className="text-3xl font-bold text-black">Popular Dishes</h2>

        <div className="flex flex-col space-y-6">
          {DISHES.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
            >
              <div className="relative w-full h-60">
                <Image
                  src={dish.img}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 text-center space-y-2">
                <h3 className="text-2xl font-bold text-[#D3732B]">
                  {dish.name}
                </h3>
                <p className="text-gray-700 text-base">{dish.desc}</p>
                <p className="text-xl font-bold text-[#D3732B] pt-1">
                  {dish.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-2">
            <button className="bg-white hover:bg-gray-50 text-[#D3732B] font-bold py-4 px-8 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-3 text-lg border border-[#D3732B]/20">
              <span>VIEW FULL MENU</span>
              <span className="text-xl">→</span>
            </button>
        </div>
      </section>

      <div className="w-full bg-[#E2762B] py-6 px-6 text-center shadow-inner mt-8">
        <p className="text-white text-xl font-medium">Hungry? let's fix that.</p>
        <p className="text-white text-2xl font-bold mt-1">Order your favourite meals now</p>
      </div>
    </div>
  );
}