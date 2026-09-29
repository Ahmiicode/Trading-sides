"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const giveaways = [
  {
    id: "xm",
    title: "XM Giveaway",
    shortTitle: "XM Giveaway",
    subtitle: "Join through the official Trading Sides XM partner link",
    prize: "XM Trading Giveaway",
    entries: "Open",
    winners: "Giveaway Winners",
    type: "XM",
  },
  {
    id: "master-course",
    title: "Master Trader Course Giveaway",
    shortTitle: "Master Course",
    subtitle: "Exclusive Trading Sides community giveaway",
    prize: "Master Trader Course Access",
    entries: "Open",
    winners: "Course Access",
    type: "COURSE",
  },
];

export default function GiveawayPage() {
  const [activeGiveaway, setActiveGiveaway] = useState("xm");

  const [timeLeft, setTimeLeft] = useState({
    hours: 35,
    minutes: 34,
    seconds: 58,
  });

  const [joined, setJoined] = useState(false);

  const active =
    giveaways.find((item) => item.id === activeGiveaway) || giveaways[0];

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (hours === 0 && minutes === 0 && seconds === 0) {
          return prev;
        }

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours -= 1;
            }
          }
        }

        return {
          hours,
          minutes,
          seconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (number) => {
    return String(number).padStart(2, "0");
  };

  const changeGiveaway = (id) => {
    setActiveGiveaway(id);
    setJoined(false);
  };

  return (
    <main className="min-h-screen px-3 pb-16 pt-[92px] text-white sm:px-6 sm:pb-20 sm:pt-[115px] lg:px-8 lg:pt-[120px]">
      <div className="mx-auto w-full max-w-[1440px]">

        {/* ================================================= */}
        {/* PAGE HEADING */}
        {/* ================================================= */}
        <div className="mx-auto mb-6 max-w-[700px] text-center sm:mb-9">
          <h1 className="text-[29px] font-bold tracking-[-1px] text-[#f5c84c] sm:text-[40px] lg:text-[46px]">
            Giveaway
          </h1>

          <p className="mx-auto mt-2 max-w-[600px] text-[11px] leading-5 text-[#9da6b5] sm:mt-3 sm:text-[15px] sm:leading-6">
            Choose a live giveaway below and complete the steps to enter.
          </p>
        </div>

        {/* ================================================= */}
        {/* TOP 2 GIVEAWAY CARDS */}
        {/* ================================================= */}
        <div className="mx-auto mb-6 grid w-full max-w-[900px] grid-cols-2 gap-2.5 sm:mb-10 sm:gap-4">
          {giveaways.map((giveaway) => {
            const isActive = activeGiveaway === giveaway.id;

            return (
              <button
                key={giveaway.id}
                type="button"
                onClick={() => changeGiveaway(giveaway.id)}
                className={`relative min-w-0 overflow-hidden rounded-[11px] border px-2.5 py-3 text-left transition-[border-color,background-color,box-shadow] duration-300 sm:rounded-[14px] sm:px-5 sm:py-5 ${
                  isActive
                    ? "border-[#d4a72e] bg-[#211e16] shadow-[0_0_25px_rgba(245,190,55,0.10)]"
                    : "border-white/[0.08] bg-[#13161c]/90 hover:border-[#806621]"
                }`}
              >
                {/* ACTIVE TOP LINE */}
                {isActive && (
                  <span className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#f5c84c] to-transparent" />
                )}

                {/* TOP ROW */}
                <div className="flex items-start gap-2 sm:gap-3">
                  {/* ICON */}
                  <div
                    className={`flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-[8px] border sm:h-[46px] sm:w-[46px] sm:rounded-[11px] ${
                      isActive
                        ? "border-[#806621] bg-[#292313]"
                        : "border-white/[0.08] bg-[#1a1d23]"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className={`h-[16px] w-[16px] fill-none sm:h-[22px] sm:w-[22px] ${
                        isActive
                          ? "stroke-[#f5c84c]"
                          : "stroke-[#777f8d]"
                      }`}
                      strokeWidth="1.8"
                    >
                      <path d="M20 12v9H4v-9" />
                      <path d="M2 7h20v5H2z" />
                      <path d="M12 7v14" />
                      <path d="M12 7H7.5A2.5 2.5 0 1 1 10 4.5C10 7 12 7 12 7Z" />
                      <path d="M12 7h4.5A2.5 2.5 0 1 0 14 4.5C14 7 12 7 12 7Z" />
                    </svg>
                  </div>

                  {/* TITLE */}
                  <div className="min-w-0 flex-1">
                    <h2
                      className={`text-[10px] font-bold leading-[1.25] sm:text-[15px] ${
                        isActive ? "text-[#f5c84c]" : "text-[#c6cbd3]"
                      }`}
                    >
                      <span className="sm:hidden">
                        {giveaway.shortTitle}
                      </span>

                      <span className="hidden sm:inline">
                        {giveaway.title}
                      </span>
                    </h2>

                    <div className="mt-1.5 flex items-center gap-1 sm:mt-2">
                      <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#3ee58d] shadow-[0_0_7px_rgba(62,229,141,0.7)] sm:h-[6px] sm:w-[6px]" />

                      <span className="text-[6px] font-bold uppercase tracking-[0.7px] text-[#42df8c] sm:text-[8px]">
                        Live Now
                      </span>
                    </div>
                  </div>
                </div>

                {/* BOTTOM */}
                <div className="mt-2.5 border-t border-white/[0.05] pt-2.5 sm:mt-4 sm:pt-3">
                  <p className="truncate text-[7px] text-[#777f8d] sm:text-[10px]">
                    {giveaway.prize}
                  </p>

                  <div
                    className={`mt-2 flex items-center justify-between text-[7px] font-semibold sm:text-[10px] ${
                      isActive ? "text-[#f5c84c]" : "text-[#777f8d]"
                    }`}
                  >
                    <span>
                      View Details
                    </span>

                    <span>
                      →
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ================================================= */}
        {/* MAIN DETAIL CARD */}
        {/* ================================================= */}
        <section className="relative mx-auto max-w-[1300px] overflow-hidden rounded-[13px] border border-[#806621] bg-[#090d14]/95 shadow-[0_20px_70px_rgba(0,0,0,0.25)] sm:rounded-[20px] lg:rounded-[22px]">
          {/* DESKTOP DECORATION */}
          <div className="pointer-events-none absolute -right-[120px] -top-[120px] hidden h-[480px] w-[480px] rounded-full border-[70px] border-[#f5c84c]/[0.025] sm:block" />

          <div className="grid grid-cols-1 lg:min-h-[620px] lg:grid-cols-2">

            {/* ================================================= */}
            {/* LEFT */}
            {/* ================================================= */}
            <div className="relative z-10 flex flex-col justify-center border-b border-[#806621]/30 px-4 py-6 sm:px-8 sm:py-10 lg:border-b-0 lg:border-r lg:px-14 lg:py-16">

              {/* BADGE */}
              <div className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#806621] bg-[#292313]/60 px-2.5 py-[5px] text-[7px] font-semibold uppercase tracking-[1.4px] text-[#f5c84c] sm:gap-2 sm:px-4 sm:py-[7px] sm:text-[9px] sm:tracking-[2px]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[11px] w-[11px] fill-none stroke-current sm:h-[14px] sm:w-[14px]"
                  strokeWidth="1.8"
                >
                  <path d="M20 12v9H4v-9" />
                  <path d="M2 7h20v5H2z" />
                  <path d="M12 7v14" />
                  <path d="M12 7H7.5A2.5 2.5 0 1 1 10 4.5C10 7 12 7 12 7Z" />
                  <path d="M12 7h4.5A2.5 2.5 0 1 0 14 4.5C14 7 12 7 12 7Z" />
                </svg>

                Giveaway
              </div>

              {/* TITLE */}
              <h2 className="mt-4 max-w-[580px] text-[27px] font-bold leading-[1.08] tracking-[-1px] text-[#f5c84c] sm:mt-6 sm:text-[46px] lg:text-[56px] xl:text-[62px]">
                {active.title}
              </h2>

              {/* LINE */}
              <div className="mt-3 h-[2px] w-[55px] rounded-full bg-gradient-to-r from-[#f5c84c] to-transparent sm:mt-5 sm:h-[3px] sm:w-[90px]" />

              {/* SUBTITLE */}
              <p className="mt-3 max-w-[520px] text-[10px] leading-5 text-[#9da6b5] sm:mt-5 sm:text-[14px] sm:leading-6">
                {active.subtitle}
              </p>

              {/* PRIZE */}
              <div className="mt-4 flex w-fit max-w-full items-center gap-2 rounded-[9px] border border-[#806621] bg-[#15181e]/90 px-3 py-2.5 sm:mt-7 sm:gap-3 sm:rounded-[13px] sm:px-5 sm:py-4">
                <span className="text-[15px] text-[#f5c84c] sm:text-[19px]">
                  ♕
                </span>

                <p className="text-[10px] font-bold leading-4 text-[#e9ebee] sm:text-[15px] sm:leading-5">
                  {active.prize}
                </p>
              </div>

              {/* FEATURES */}
              <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 sm:mt-7 sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
                <div className="flex items-center gap-1.5 text-[8px] text-[#b1b7c1] sm:gap-2 sm:text-[12px]">
                  <span className="text-[#f5c84c]">
                    ♕
                  </span>

                  {active.winners}
                </div>

                <div className="flex items-center gap-1.5 text-[8px] text-[#b1b7c1] sm:gap-2 sm:text-[12px]">
                  <span className="text-[#f5c84c]">
                    ⚡
                  </span>

                  Instant Entry
                </div>

                <div className="flex items-center gap-1.5 text-[8px] text-[#b1b7c1] sm:gap-2 sm:text-[12px]">
                  <span className="text-[#f5c84c]">
                    ◇
                  </span>

                  Free to Enter
                </div>
              </div>

              {/* STATUS */}
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:mt-7 sm:gap-3">
                <div className="rounded-full border border-white/[0.10] bg-[#15181e] px-3 py-[7px] text-[8px] text-[#9da6b5] sm:px-5 sm:py-[10px] sm:text-[12px]">
                  ♙{" "}
                  <span className="ml-1 font-bold text-white">
                    {active.entries}
                  </span>{" "}
                  entries
                </div>

                <div className="flex items-center gap-1.5 rounded-full border border-[#1c704c] bg-[#0b291d]/60 px-3 py-[7px] text-[8px] font-semibold text-[#4ce6a4] sm:gap-2 sm:px-5 sm:py-[10px] sm:text-[12px]">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#39d98a] shadow-[0_0_7px_rgba(57,217,138,0.6)] sm:h-[7px] sm:w-[7px]" />

                  LIVE
                </div>
              </div>

              {/* XM BUTTON */}
              {active.type === "XM" && (
                <a
                  href="https://affs.click/GDCPF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full max-w-[390px] items-center justify-center gap-2 rounded-[9px] bg-gradient-to-r from-[#f5c33e] to-[#ffd778] px-4 py-[11px] text-center text-[10px] font-bold text-[#111318] shadow-[0_8px_30px_rgba(245,190,55,0.14)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(245,190,55,0.28)] sm:mt-8 sm:rounded-[11px] sm:px-5 sm:py-[15px] sm:text-[14px]"
                >
                  Open XM Account & Enter

                  <span>
                    →
                  </span>
                </a>
              )}

              {/* COURSE BUTTON */}
              {active.type === "COURSE" && (
                <Link
                  href="/contact?service=master-trader-course"
                  className="mt-5 flex w-full max-w-[390px] items-center justify-center gap-2 rounded-[9px] bg-gradient-to-r from-[#f5c33e] to-[#ffd778] px-4 py-[11px] text-center text-[10px] font-bold text-[#111318] shadow-[0_8px_30px_rgba(245,190,55,0.14)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_35px_rgba(245,190,55,0.28)] sm:mt-8 sm:rounded-[11px] sm:px-5 sm:py-[15px] sm:text-[14px]"
                >
                  Sign Up & Enter

                  <span>
                    →
                  </span>
                </Link>
              )}
            </div>

            {/* ================================================= */}
            {/* RIGHT */}
            {/* ================================================= */}
            <div className="relative z-10 flex flex-col items-center justify-center px-4 py-6 text-center sm:px-8 sm:py-10 lg:px-12 lg:py-16">

              {/* TIMER */}
              {/* TIMER */}
<div className="relative flex h-[112px] w-[112px] items-center justify-center rounded-full sm:h-[175px] sm:w-[175px]">

  {/* OUTER DARK RING */}
  <div className="absolute inset-0 rounded-full border-[3px] border-white/[0.07] sm:border-[4px]" />

  {/* GOLD RING - INSIDE CIRCLE */}
  <div className="absolute inset-[4px] rounded-full border-[3px] border-transparent border-r-[#f5c84c] border-t-[#f5c84c] sm:inset-[5px] sm:border-[4px]" />

  {/* INNER CIRCLE */}
  <div className="absolute inset-[10px] rounded-full border border-white/[0.025] bg-[#0b0f15]/40 sm:inset-[14px]" />

  {/* TIME */}
  <div className="relative z-10 flex flex-col items-center justify-center">
    <div className="flex items-center justify-center gap-[3px] whitespace-nowrap text-[16px] font-bold leading-none tracking-[-0.3px] text-[#f3f4f6] sm:gap-1 sm:text-[27px] sm:tracking-[0.5px]">

      <span>
        {formatNumber(timeLeft.hours)}
      </span>

      <span className="text-[#737b87]">
        :
      </span>

      <span>
        {formatNumber(timeLeft.minutes)}
      </span>

      <span className="text-[#737b87]">
        :
      </span>

      <span>
        {formatNumber(timeLeft.seconds)}
      </span>

    </div>

    <p className="mt-2 text-[6px] font-semibold uppercase tracking-[1.2px] text-[#777f8d] sm:mt-3 sm:text-[8px] sm:tracking-[1.8px]">
      Remaining
    </p>
  </div>

</div>

              {/* TELEGRAM ICON */}
              <div className="mt-5 flex h-[42px] w-[42px] items-center justify-center rounded-[11px] border border-[#1689b7]/50 bg-[#0b3142]/70 sm:mt-8 sm:h-[60px] sm:w-[60px] sm:rounded-[15px]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-[20px] w-[20px] fill-none stroke-[#31b8ef] sm:h-[28px] sm:w-[28px]"
                  strokeWidth="1.8"
                >
                  <path
                    d="M21 3L3.8 9.7c-1.1.4-1.1 1 0 1.4l4.4 1.4 1.7 5.2c.2.7.1 1 .9 1 .6 0 .9-.3 1.2-.6l2.1-2 4.4 3.3c.8.4 1.4.2 1.6-.8L23 4.4C23.3 3.2 22.5 2.7 21 3Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M8.2 12.5L19.5 6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* TELEGRAM TITLE */}
              <h3 className="mt-3 text-[14px] font-bold text-white sm:mt-5 sm:text-[20px]">
                Join our Telegram to enter
              </h3>

              <p className="mt-1.5 max-w-[340px] text-[9px] leading-4 text-[#8f97a5] sm:mt-2 sm:max-w-[430px] sm:text-[13px] sm:leading-6">
                You must be in our Telegram channel to be eligible for the
                giveaway.
              </p>

              {/* TELEGRAM BUTTON */}
              <a
                href="https://t.me/Tradingsidesofficial"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setJoined(true)}
                className="mt-4 flex w-full max-w-[350px] items-center justify-center gap-2 rounded-[9px] bg-[#229ed9] px-4 py-[10px] text-[10px] font-bold text-white shadow-[0_8px_25px_rgba(34,158,217,0.15)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(34,158,217,0.28)] sm:mt-6 sm:max-w-[430px] sm:rounded-[11px] sm:px-5 sm:py-[14px] sm:text-[14px]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[16px] w-[16px] fill-none stroke-white sm:h-[20px] sm:w-[20px]"
                  strokeWidth="1.8"
                >
                  <path
                    d="M21 3L3.8 9.7c-1.1.4-1.1 1 0 1.4l4.4 1.4 1.7 5.2c.2.7.1 1 .9 1 .6 0 .9-.3 1.2-.6l2.1-2 4.4 3.3c.8.4 1.4.2 1.6-.8L23 4.4C23.3 3.2 22.5 2.7 21 3Z"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Join our Telegram Channel
              </a>

              {/* CONTINUE */}
              {joined ? (
                <Link
                  href={
                    active.type === "XM"
                      ? "/contact?service=vip-signals"
                      : "/contact?service=master-trader-course"
                  }
                  className="mt-2 flex w-full max-w-[350px] items-center justify-center rounded-[9px] border border-[#806621] bg-[#292313] px-4 py-[10px] text-[9px] font-semibold text-[#f5c84c] transition-[border-color,box-shadow] duration-300 hover:border-[#d4a72e] hover:shadow-[0_0_25px_rgba(245,190,55,0.15)] sm:mt-3 sm:max-w-[430px] sm:rounded-[11px] sm:px-5 sm:py-[13px] sm:text-[12px]"
                >
                  ✓ I&apos;ve Joined — Continue
                </Link>
              ) : (
                <button
                  type="button"
                  disabled
                  className="mt-2 w-full max-w-[350px] cursor-not-allowed rounded-[9px] border border-white/[0.07] bg-[#0c0f14] px-4 py-[10px] text-[9px] font-semibold text-[#4f5560] sm:mt-3 sm:max-w-[430px] sm:rounded-[11px] sm:px-5 sm:py-[13px] sm:text-[12px]"
                >
                  ◉ I&apos;ve Joined — Continue
                </button>
              )}

              <p className="mt-2 text-[7px] text-[#555d69] sm:mt-3 sm:text-[10px]">
                Tap &quot;Join&quot; first, then continue.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}