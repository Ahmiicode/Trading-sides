"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-[90px] max-w-[1440px] items-center justify-between px-6 lg:px-12">

        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-3">
          <div className="relative h-[42px] w-[42px]">
            <Image
              src="/image/logo.png"
              alt="Trading Sides"
              fill
              priority
              className="object-contain"
            />
          </div>

          <span className="text-[18px] font-semibold text-[#f4c44e]">
            Trading Sides
          </span>
        </Link>

        {/* Center Menu */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-[#7c642e]/60 bg-[#111318]/80 p-[5px] backdrop-blur-xl lg:flex">

          <Link
            href="/#home"
            className="rounded-full px-5 py-[9px] text-[13px] font-medium text-[#b5bac4] transition duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/#services"
            className="rounded-full px-5 py-[9px] text-[13px] font-medium text-[#b5bac4] transition duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Services
          </Link>

          <Link
            href="/#platforms"
            className="rounded-full px-5 py-[9px] text-[13px] font-medium text-[#b5bac4] transition duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Platforms
          </Link>

          <Link
            href="/#social"
            className="rounded-full px-5 py-[9px] text-[13px] font-medium text-[#b5bac4] transition duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Social
          </Link>

          <Link
            href="/#giveaway"
            className="rounded-full px-5 py-[9px] text-[13px] font-medium text-[#b5bac4] transition duration-300 hover:bg-white/[0.04] hover:text-white"
          >
            Giveaway
          </Link>

        </nav>

        {/* Contact */}
        <div className="flex items-center">
          <Link
            href="/#contact"
            className="rounded-full bg-[#f4c44e] px-7 py-[12px] text-[13px] font-semibold text-[#101114] shadow-[0_5px_25px_rgba(244,196,78,0.15)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffd363] hover:shadow-[0_0_28px_rgba(244,196,78,0.28)]"
          >
            Contact
          </Link>
        </div>

      </div>
    </header>
  );
}