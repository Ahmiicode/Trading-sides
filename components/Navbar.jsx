"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Platforms", href: "/#platforms" },
    { name: "Social", href: "/#social" },
    { name: "Giveaway", href: "/#giveaway" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* NAVBAR BACKGROUND */}
      <div className="border-b border-white/[0.04] bg-[#090b0f]/75 backdrop-blur-xl lg:border-none lg:bg-transparent lg:backdrop-blur-none">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:h-[78px] sm:px-6 lg:h-[90px] lg:px-12">

          {/* LOGO */}
          <Link
            href="/#home"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="relative h-[38px] w-[38px] shrink-0 sm:h-[42px] sm:w-[42px]">
              <Image
                src="/image/logo.png"
                alt="Trading Sides"
                fill
                priority
                sizes="42px"
                className="object-contain"
              />
            </div>

            <span className="truncate text-[15px] font-semibold text-[#f4c44e] sm:text-[18px]">
              Trading Sides
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-full border border-[#7c642e]/60 bg-[#111318]/80 p-[5px] shadow-[0_8px_30px_rgba(0,0,0,0.20)] backdrop-blur-xl lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-full px-5 py-[9px] text-[13px] font-medium text-[#b5bac4] transition duration-300 hover:bg-white/[0.04] hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">

            {/* CONTACT */}
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="rounded-full bg-[#f4c44e] px-4 py-[10px] text-[12px] font-semibold text-[#101114] shadow-[0_5px_25px_rgba(244,196,78,0.15)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffd363] hover:shadow-[0_0_28px_rgba(244,196,78,0.28)] sm:px-6 sm:py-[11px] sm:text-[13px] lg:px-7 lg:py-[12px]"
            >
              Contact
            </Link>

            {/* MOBILE HAMBURGER */}
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#7c642e]/60 bg-[#111318]/90 transition-[border-color,box-shadow] duration-300 hover:border-[#f4c44e]/70 hover:shadow-[0_0_20px_rgba(244,196,78,0.12)] lg:hidden"
            >
              <div className="relative h-[16px] w-[19px]">
                <span
                  className={`absolute left-0 top-0 h-[1.5px] w-full rounded-full bg-[#f4c44e] transition-all duration-300 ${
                    menuOpen
                      ? "top-[7px] rotate-45"
                      : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-[7px] h-[1.5px] w-full rounded-full bg-[#f4c44e] transition-all duration-300 ${
                    menuOpen
                      ? "scale-x-0 opacity-0"
                      : ""
                  }`}
                />

                <span
                  className={`absolute bottom-0 left-0 h-[1.5px] w-full rounded-full bg-[#f4c44e] transition-all duration-300 ${
                    menuOpen
                      ? "bottom-[7px] -rotate-45"
                      : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden px-4 transition-all duration-500 ease-out sm:px-6 lg:hidden ${
          menuOpen
            ? "max-h-[430px] translate-y-0 opacity-100"
            : "pointer-events-none max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <div className="mx-auto mt-3 max-w-[600px] rounded-[20px] border border-[#7c642e]/50 bg-[#0d0f13]/95 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl">

          {/* MOBILE LINKS */}
          <nav className="flex flex-col">
            {navLinks.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`group flex items-center justify-between rounded-[14px] px-4 py-[14px] text-[14px] font-medium text-[#b5bac4] transition duration-300 hover:bg-white/[0.04] hover:text-white ${
                  index !== navLinks.length - 1
                    ? "border-b border-white/[0.035]"
                    : ""
                }`}
              >
                <span>{item.name}</span>

                <span className="text-[16px] text-[#6f747d] transition duration-300 group-hover:translate-x-1 group-hover:text-[#f4c44e]">
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* BOTTOM CONTACT */}
          <div className="mt-2 border-t border-white/[0.05] p-2">
            <Link
              href="/#contact"
              onClick={closeMenu}
              className="block w-full rounded-[13px] bg-[#f4c44e] py-[13px] text-center text-[13px] font-semibold text-[#101114] shadow-[0_6px_25px_rgba(244,196,78,0.14)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffd363] hover:shadow-[0_0_25px_rgba(244,196,78,0.22)]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}