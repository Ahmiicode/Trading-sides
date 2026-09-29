"use client";

import Link from "next/link";

const giveaways = [
  {
    id: "xm",
    title: "XM Giveaway",
    prize: "XM Trading Giveaway",
    entries: "Open",
  },
  {
    id: "master-course",
    title: "Master Trader Course Giveaway",
    prize: "Master Trader Course Access",
    entries: "Open",
  },
];

export default function Giveaway() {
  return (
    <section
      id="giveaway"
      className="relative px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1050px]">

        {/* HEADING */}
        <div className="mb-10 text-center sm:mb-12">
          <h2 className="text-[34px] font-bold tracking-[-1px] text-[#f5c84c] sm:text-[42px] lg:text-[46px]">
            Giveaway
          </h2>

          <p className="mx-auto mt-3 max-w-[700px] text-[14px] leading-6 text-[#9da6b5] sm:mt-4 sm:text-[17px]">
            We celebrate milestones with our community. Enter for a chance to
            win.
          </p>
        </div>

        {/* GIVEAWAY CARDS */}
        <div className="space-y-5 sm:space-y-6">
          {giveaways.map((giveaway) => (
            <div
              key={giveaway.id}
              className="relative overflow-hidden rounded-[15px] border border-[#8a6a1d] bg-[#1a1e25]/95 px-5 py-6 shadow-[0_15px_40px_rgba(0,0,0,0.16)] transition-[border-color,box-shadow] duration-300 hover:border-[#d4a72e] hover:shadow-[0_0_35px_rgba(245,190,55,0.12)] sm:px-7 sm:py-7 lg:px-11 lg:py-10"
            >

              {/* ================= MOBILE ================= */}
              <div className="flex flex-col sm:hidden">

                {/* TOP */}
                <div className="flex items-start gap-4">

                  {/* ICON */}
                  <div className="relative flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[14px] border border-[#806621] bg-[#29271f]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[31px] w-[31px] fill-none stroke-[#f5c84c]"
                      strokeWidth="1.8"
                    >
                      <path d="M20 12v9H4v-9" />
                      <path d="M2 7h20v5H2z" />
                      <path d="M12 7v14" />
                      <path d="M12 7H7.5A2.5 2.5 0 1 1 10 4.5C10 7 12 7 12 7Z" />
                      <path d="M12 7h4.5A2.5 2.5 0 1 0 14 4.5C14 7 12 7 12 7Z" />
                    </svg>

                    <span className="absolute -right-[3px] -top-[3px] flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#12161b]">
                      <span className="h-[9px] w-[9px] rounded-full bg-[#3ee58d] shadow-[0_0_8px_rgba(62,229,141,0.8)]" />
                    </span>
                  </div>

                  {/* TITLE */}
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[19px] font-bold leading-[1.3] text-[#ffd054]">
                      {giveaway.title}
                    </h3>

                    <span className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#177348] bg-[#0d3526]/70 px-2.5 py-[4px] text-[8px] font-bold uppercase tracking-[0.7px] text-[#42df8c]">
                      <span className="h-[5px] w-[5px] rounded-full bg-[#42df8c]" />
                      Live Now
                    </span>
                  </div>

                </div>

                {/* DETAILS */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] font-semibold text-[#e3e5e8]">
                    <span className="text-[#f5c84c]">
                      ♕
                    </span>

                    {giveaway.prize}
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-[#8f97a5]">
                    <span>
                      ♙
                    </span>

                    {giveaway.entries} entries
                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  href={`/giveaway?type=${giveaway.id}`}
                  className="mt-6 flex w-full items-center justify-center gap-3 rounded-[11px] bg-gradient-to-r from-[#f5c33e] to-[#ffd778] py-[13px] text-[12px] font-bold text-[#111318] shadow-[0_8px_25px_rgba(245,190,55,0.12)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_28px_rgba(245,190,55,0.24)]"
                >
                  View Details

                  <span className="text-[17px]">
                    ›
                  </span>
                </Link>

              </div>

              {/* ================= DESKTOP ================= */}
              <div className="hidden items-center gap-7 sm:flex">

                {/* ICON */}
                <div className="relative flex h-[86px] w-[86px] shrink-0 items-center justify-center rounded-[17px] border border-[#806621] bg-[#29271f] lg:h-[90px] lg:w-[90px]">

                  <svg
                    viewBox="0 0 24 24"
                    className="h-[38px] w-[38px] fill-none stroke-[#f5c84c]"
                    strokeWidth="1.8"
                  >
                    <path d="M20 12v9H4v-9" />
                    <path d="M2 7h20v5H2z" />
                    <path d="M12 7v14" />
                    <path d="M12 7H7.5A2.5 2.5 0 1 1 10 4.5C10 7 12 7 12 7Z" />
                    <path d="M12 7h4.5A2.5 2.5 0 1 0 14 4.5C14 7 12 7 12 7Z" />
                  </svg>

                  <span className="absolute -right-[3px] -top-[3px] flex h-[17px] w-[17px] items-center justify-center rounded-full bg-[#15191f]">
                    <span className="h-[10px] w-[10px] rounded-full bg-[#3ee58d] shadow-[0_0_8px_rgba(62,229,141,0.8)]" />
                  </span>

                </div>

                {/* CENTER */}
                <div className="min-w-0 flex-1">

                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-[25px] font-bold leading-tight text-[#ffd054] lg:text-[29px]">
                      {giveaway.title}
                    </h3>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#177348] bg-[#0d3526]/70 px-3 py-[5px] text-[9px] font-bold uppercase tracking-[0.7px] text-[#42df8c]">
                      <span className="h-[6px] w-[6px] rounded-full bg-[#42df8c]" />

                      Live Now
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">

                    <div className="flex items-center gap-2 text-[12px] font-semibold text-[#e4e6e9] lg:text-[13px]">
                      <span className="text-[#f5c84c]">
                        ♕
                      </span>

                      {giveaway.prize}
                    </div>

                    <span className="hidden text-[#4d535e] md:inline">
                      •
                    </span>

                    <div className="flex items-center gap-2 text-[12px] text-[#8f97a5] lg:text-[13px]">
                      <span>
                        ♙
                      </span>

                      {giveaway.entries} entries
                    </div>

                  </div>
                </div>

                {/* BUTTON */}
                <Link
                  href={`/giveaway?type=${giveaway.id}`}
                  className="flex min-w-[165px] shrink-0 items-center justify-center gap-5 rounded-[12px] bg-gradient-to-r from-[#f5c33e] to-[#ffd778] px-7 py-[14px] text-[12px] font-bold text-[#111318] shadow-[0_8px_28px_rgba(245,190,55,0.14)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(245,190,55,0.25)] lg:text-[13px]"
                >
                  View Details

                  <span className="text-[18px]">
                    ›
                  </span>
                </Link>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}