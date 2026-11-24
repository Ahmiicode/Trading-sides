"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Platforms", href: "/platforms" },
  { name: "Social", href: "/social" },
  { name: "Giveaway", href: "/giveaway" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const openChat = () => {
    closeMenu();
    window.dispatchEvent(new Event("open-chatbot"));
  };

  return (
    <header className="fixed left-0 top-0 z-[1000] w-full border-b border-white/10 bg-[#101114]/95 backdrop-blur-xl">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LOGO IMAGE + SINGLE GOLDEN BRAND NAME */}
       <Link
  href="/"
  onClick={closeMenu}
  className="flex shrink-0 items-center gap-2.5"
>
  <Image
    src="/image/logo.png"
    alt="Trading Sides Logo"
    width={60}
    height={60}
    className="h-14 w-14 shrink-0 rounded-md object-contain"
  />

  <span className="flex items-center self-center text-[18px] font-semibold leading-none tracking-tight text-[#f4c44e] sm:text-[20px]">
    Trading Sides
  </span>
</Link>

        {/* DESKTOP NAVIGATION LINKS INSIDE ROUND BOX */}
        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-[#18191d]/90 px-3 py-1.5 shadow-inner lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-1.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-[#f4c44e]/10 hover:text-[#f4c44e]"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE BUTTONS */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* DESKTOP CONTACT */}
          <Link
            href="/contact"
            onClick={closeMenu}
            className="hidden rounded-full bg-[#f4c44e] px-6 py-3 text-[13px] font-semibold text-[#101114] transition-all duration-300 hover:bg-[#ffd363] lg:inline-flex"
          >
            Contact
          </Link>

          {/* LIVE CHAT - MOBILE + DESKTOP */}
          <button
            type="button"
            onClick={openChat}
            className="inline-flex items-center gap-2 rounded-full border border-[#f4c44e]/40 bg-[#f4c44e]/10 px-4 py-2.5 text-xs font-semibold text-[#f4c44e] transition-all duration-300 hover:border-[#f4c44e] hover:bg-[#f4c44e]/20 sm:px-5 sm:py-3 sm:text-[13px]"
          >
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
            Live Chat
          </button>

          {/* MOBILE HAMBURGER */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:border-[#f4c44e]/50 hover:text-[#f4c44e] lg:hidden"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#101114] px-5 pb-6 pt-4 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="border-b border-white/5 py-4 text-sm font-medium text-gray-300 transition-colors hover:text-[#f4c44e]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f4c44e] px-6 py-3 text-sm font-semibold text-[#101114] transition-colors hover:bg-[#ffd363]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}