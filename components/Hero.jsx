import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-[72px] sm:pt-[78px] lg:pt-[90px]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-[1440px] grid-cols-1 items-center px-5 sm:min-h-[calc(100vh-78px)] sm:px-6 lg:min-h-[calc(100vh-90px)] lg:grid-cols-2 lg:px-12">

        {/* LEFT CONTENT */}
        <div className="relative z-20 pt-10 sm:pt-12 lg:max-w-[680px] lg:pt-0 lg:pl-4">

          {/* LIVE GIVEAWAY BADGE */}
          <div className="hero-badge mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-[#176bc5]/60 bg-[#0b1c31]/80 px-2.5 py-2 backdrop-blur-md sm:mb-8 sm:gap-3 sm:px-3">

            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-[#16885b]/40 bg-[#0a4934]/60 px-2 py-1 text-[8px] font-bold tracking-wider text-[#4ce6a4] sm:gap-2 sm:px-3 sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ce6a4] shadow-[0_0_8px_#4ce6a4] sm:h-2 sm:w-2" />
              LIVE
            </span>

            <span className="text-[11px] sm:text-sm">
              
            </span>

            <span className="whitespace-nowrap text-[10px] font-semibold text-[#e6eaf0] sm:text-sm">
              giveaways live now
            </span>

            {/* GIVEAWAY PAGE - MOBILE + DESKTOP */}
            <Link
              href="/giveaway"
              className="shrink-0 whitespace-nowrap text-[9px] font-semibold text-[#3895ff] transition-colors duration-300 hover:text-[#67adff] sm:text-[13px]"
            >
              See Details →
            </Link>

          </div>

          {/* HEADING */}
          <h1 className="hero-heading text-[43px] font-semibold leading-[1.03] tracking-[-1.5px] text-[#f5c84c] sm:text-[58px] sm:tracking-[-2px] lg:text-[72px]">
            Welcome To
            <br />
            Trading Sides
          </h1>

          {/* DESCRIPTION */}
          <p className="hero-description mt-5 max-w-[590px] text-[15px] leading-7 text-[#9ca4b2] sm:mt-6 sm:text-[18px]">
            Where precision meets performance in the digital frontier of
            trading
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">

            {/* JOIN US -> SERVICES */}
            <Link
              href="#services"
              className="rounded-full bg-[#f5c84c] px-7 py-[12px] text-[13px] font-semibold text-[#111318] shadow-[0_8px_30px_rgba(245,200,76,0.18)] transition duration-300 hover:bg-[#ffd662] hover:shadow-[0_0_30px_rgba(245,200,76,0.25)] sm:px-9 sm:py-[14px] sm:text-[15px]"
            >
              Join Us
            </Link>

            {/* LEARN MORE -> SERVICES */}
            <Link
              href="#services"
              className="rounded-full border border-white/[0.08] bg-[#17191e]/80 px-7 py-[12px] text-[13px] font-semibold text-white backdrop-blur-md transition duration-300 hover:border-[#f5c84c]/30 hover:bg-[#202329] sm:px-9 sm:py-[14px] sm:text-[15px]"
            >
              Learn More
            </Link>

          </div>
        </div>

        {/* RIGHT / HERO IMAGE */}
        <div className="relative mt-4 h-[360px] w-full sm:mt-6 sm:h-[470px] lg:mt-0 lg:h-full lg:min-h-[620px]">

          {/* GOLD GLOW */}
          <div className="hero-glow absolute bottom-[5%] left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#ffba32]/[0.05] blur-[70px] sm:h-[360px] sm:w-[360px] lg:bottom-[7%] lg:h-[450px] lg:w-[450px] lg:bg-[#ffba32]/[0.035] lg:blur-[90px]" />

          {/* IMAGE POSITION */}
          <div className="absolute bottom-0 left-1/2 h-full w-full -translate-x-1/2 lg:h-[95%]">

            {/* IMAGE ANIMATION ONLY */}
            <div className="hero-person-image relative h-full w-full">
              <Image
                src="/image/hero-person.png"
                alt="Trading Sides"
                fill
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                className="object-contain object-bottom"
              />
            </div>

          </div>
        </div>

      </div>

      {/* DESKTOP SCROLL INDICATOR */}
      <div className="hero-scroll absolute bottom-5 left-1/2 hidden -translate-x-1/2 lg:flex">
        <div className="flex h-[36px] w-[23px] justify-center rounded-full border-2 border-[#f5c84c] pt-[6px]">
          <span className="scroll-dot h-[7px] w-[2px] rounded-full bg-[#f5c84c]" />
        </div>
      </div>

    </section>
  );
}