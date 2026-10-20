"use client";

import Image from "next/image";

export default function FooterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#EAE3D2] py-8 px-4">
  
      <footer className="w-full max-w-md bg-white text-gray-800 py-12 px-6 rounded-3xl shadow-lg flex flex-col items-center space-y-8">
       

        <div className="flex flex-col items-center space-y-2 text-center">
          <div className="relative w-24 h-16">
            <Image
              src="/fini_s_logo-preview.png" 
              alt="Fini's Kitchen Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm font-semibold tracking-wide text-gray-700">
            A taste of Nigeria. <br /> made for you
          </p>

          <div className="flex items-center space-x-4 pt-2 text-[#E2762B]">
            <span className="cursor-pointer hover:opacity-80 font-bold text-lg">🎵</span>
            <span className="cursor-pointer hover:opacity-80 font-bold text-lg">📷</span>
            <span className="cursor-pointer hover:opacity-80 font-bold text-lg">f</span>
            <span className="cursor-pointer hover:opacity-80 font-bold text-lg">💬</span>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-3 w-full">
          <div className="w-12 h-[1px] bg-gray-300 mb-1"></div>
          <h3 className="text-[#E2762B] font-bold tracking-widest text-sm">
            QUICK LINKS
          </h3>
          <ul className="flex flex-col items-center space-y-2 text-base font-medium text-gray-800">
            <li><a href="#" className="hover:text-[#E2762B] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#E2762B] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#E2762B] transition-colors">Menu</a></li>
            <li><a href="#" className="hover:text-[#E2762B] transition-colors">Order</a></li>
            <li><a href="#" className="hover:text-[#E2762B] transition-colors">Contact</a></li>
          </ul>
          <div className="w-12 h-[1px] bg-gray-300 mt-1"></div>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center max-w-sm">
          <h3 className="text-[#E2762B] font-bold tracking-widest text-sm pt-2">
            CONTACT US
          </h3>
          
          <div className="space-y-3 text-sm font-medium text-gray-800">
            <p className="flex items-start justify-center gap-2">
              <span>📍</span>
              <span>Beside Tobis hospital Akenfa 3 Yenagoa Bayelsa State</span>
            </p>

            <p className="flex items-start justify-center gap-2">
              <span>📞</span>
              <span className="text-blue-700 underline">
                08066572722, 07049047103, 09064464851
              </span>
            </p>

            <p className="flex items-center justify-center gap-2">
              <span>✉️</span>
              <span>fini'skitchen@gmail.com</span>
            </p>

            <p className="flex items-center justify-center gap-2">
              <span>⏰</span>
              <span>9:00am-10:30pm</span>
            </p>
          </div>
        </div>

      </footer>
    </div>
  );
}