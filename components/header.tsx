"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="w-full bg-[#f8e9c9] px-8 py-4 flex items-center justify-between">

        <Image src="/fini_s_logo-preview.png" alt="" width={70} height={70} />

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col justify-center items-center gap-2"
        >
          {menuOpen ? (
            <>
              <span className="block w-10 h-1 bg-black rotate-45 translate-y-1 transition-all"></span>
              <span className="block w-10 h-1 bg-black -rotate-45 -translate-y-1 transition-all"></span>
            </>
          ) : (
            <>
              <span className="block w-10 h-1 bg-black"></span>
              <span className="block w-10 h-1 bg-black"></span>
              <span className="block w-10 h-1 bg-black"></span>
            </>
          )}
        </button>

      </header>

      {menuOpen && (
        <nav className="bg-[#f8e9c9] px-8 py-6">
          <ul className="flex flex-col gap-6 text-center font-semibold text-lg text-black absolute top-17 left-0 w-full bg-[#f8e9c9] z-10">
           <Link href="/">Home</Link>
           <Link href="/menu">Menu</Link>
           <Link href="/">About Us</Link>
           <Link href="/">Contact</Link>
           <Link href="/cart">Cart</Link>
          </ul>
        </nav>
      )}
    </div>
  );
}