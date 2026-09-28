import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-[90px]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-90px)] max-w-[1440px] grid-cols-1 items-center px-6 lg:grid-cols-2 lg:px-12">

        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-[680px] lg:pl-4">

          {/* LIVE GIVEAWAY BADGE */}
          <div className="hero-badge mb-8 inline-flex items-center gap-3 rounded-full border border-[#176bc5]/60 bg-[#0b1c31]/80 px-3 py-2 backdrop-blur-md">

            <span className="flex items-center gap-2 rounded-full border border-[#16885b]/40 bg-[#0a4934]/60 px-3 py-1 text-[11px] font-bold tracking-wider text-[#4ce6a4]">
              <span className="h-2 w-2 rounded-full bg-[#4ce6a4] shadow-[0_0_8px_#4ce6a4]" />
              LIVE
            </span>

            <span className="text-sm">🎁</span>

            <span className="text-[13px] font-semibold text-[#e6eaf0] sm:text-sm">
              2 giveaways live now
            </span>

            <Link
              href="#giveaway"
              className="hidden text-[13px] font-semibold text-[#3895ff] transition hover:text-[#67adff] sm:inline"
            >
              See Details →
            </Link>
          </div>

          {/* HEADING */}
          <h1 className="hero-heading text-[48px] font-semibold leading-[1.04] tracking-[-2px] text-[#f5c84c] sm:text-[60px] lg:text-[72px]">
            Welcome To
            <br />
            Trading Sides
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description mt-6 max-w-[590px] text-[16px] leading-7 text-[#9ca4b2] sm:text-[18px]">
            Where precision meets performance in the digital frontier of
            trading
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons mt-8 flex flex-wrap items-center gap-4">

            <Link
              href="/#contact"
              className="rounded-full bg-[#f5c84c] px-9 py-[14px] text-[15px] font-semibold text-[#111318] shadow-[0_8px_30px_rgba(245,200,76,0.18)] transition duration-300 hover:bg-[#ffd662] hover:shadow-[0_0_30px_rgba(245,200,76,0.25)]"
            >
              Join Us
            </Link>

            <Link
              href="#services"
              className="rounded-full border border-white/[0.08] bg-[#17191e]/80 px-9 py-[14px] text-[15px] font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#f5c84c]/30 hover:bg-[#202329]"
            >
              Learn More
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative hidden h-full min-h-[620px] lg:block">

          {/* GOLD GLOW */}
          <div className="hero-glow absolute bottom-[7%] left-1/2 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#ffba32]/[0.035] blur-[90px]" />

          {/* 
            IMPORTANT:
            Original image position bilkul same hai.
            Is div ko animate nahi kar rahe.
          */}
          <div className="absolute bottom-0 left-1/2 h-[95%] w-full -translate-x-1/2">

            {/* Sirf image ke inner wrapper par animation */}
            <div className="hero-person-image relative h-full w-full">
              <Image
                src="/image/hero-person.png"
                alt="Trading Sides"
                fill
                priority
                sizes="(max-width: 1024px) 0vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>

          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="hero-scroll absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:flex">
        <div className="flex h-[36px] w-[23px] justify-center rounded-full border-2 border-[#f5c84c] pt-[6px]">
          <span className="scroll-dot h-[7px] w-[2px] rounded-full bg-[#f5c84c]" />
        </div>
      </div>

    </section>
  );
}