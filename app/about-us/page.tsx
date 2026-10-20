"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AboutUsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#F8F3E6] py-12 px-4 flex justify-center items-center">
     
      <div className="bg-[#F8F3E6] rounded-3xl p-6 md:p-10 max-w-2xl w-full shadow-lg flex flex-col space-y-8">

        <div className="flex items-center gap-2">
          <span className="italic font-serif text-[#D3732B] text-lg tracking-wider">
            ABOUT US
          </span>
          <div className="h-[1px] w-12 bg-[#D3732B]"></div>
        </div>

        <h1 className="text-3xl md:text-4xl font-extrabold text-black leading-tight font-serif">
          A Taste Of Home, <br />
          A Touch Of Love.
        </h1>

        <div className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed font-medium">
          <p>
            Every Meal We Serve Tells A Story — A Story Of Our Rich Heritage, The
            Warmth Of Home, And The Beautiful Flavours That Make Nigerian Food
            Special. From Our Delicious Jollof Rice To Our Traditional Soups And
            Swallows, Every Dish Is Prepared With Care To Give You An Authentic
            Taste Of Home.
          </p>

          <p>
            At Fini's Kitchen, We Believe That Good Food Does More Than Satisfy
            Hunger; It Brings People Together, Creates Lasting Memories, And
            Turns Ordinary Moments Into Special Ones. Whether You're Sharing A Meal
            With Family, Catching Up With Friends, Or Simply Treating Yourself,
            We're Here To Make Every Bite Worth Remembering.
          </p>

          <p>
            Our Commitment Is Simple: Fresh Ingredients, Rich Flavours, Quality
            Service, And A Welcoming Experience That Makes You Feel At Home. We
            Take Pride In Preserving The Taste Of Our Traditions While Bringing
            Something Special To Every Plate.
          </p>
        </div>

        <div className="border-l-4 border-[#E2762B] bg-white/60 p-5 rounded-r-2xl shadow-sm italic text-gray-700 text-base">
          "Fini's Kitchen — A Taste Of Home, A Touch Of Love, And A Flavour You’ll
          Always Remember."
        </div>

        <div className="pt-4 flex justify-between items-center">
          <button
            onClick={() => router.back()}
            className="text-sm font-bold text-[#E2762B] hover:underline"
          >
            ← Back
          </button>

          <button
            onClick={() => router.push("/menu")}
            className="bg-[#E2762B] hover:bg-[#c9621b] text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <span>Explore Menu</span>
            <span>→</span>
          </button>
        </div>

      </div>
    </div>
  );
}