"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const xmLink = "https://affs.click/GDCPF";

const included = [
  "Indicator Access",
  "Setup Guide & Tutorials",
  "VIP Trading Support",
  "Regular Market Updates",
  "Time Frame Guidance",
];

const indicatorImages = [
  "/image/indicator-image-11.png",
  "/image/indicator-image-12.png",
  "/image/indicator-image-13.png",
];

const steps = [
  {
    number: "1",
    title: "Open XM Account",
    description:
      "Create your account using our official XM partner link.",
  },
  {
    number: "2",
    title: "Complete Account",
    description:
      "Complete the required registration and verification.",
  },
  {
    number: "3",
    title: "Request Indicator",
    description:
      "Contact Trading Sides after completing the required steps.",
  },
];

const faqs = [
  {
    question: "Is this indicator beginner-friendly?",
    answer:
      "The indicator is designed to be straightforward to use. Setup guidance and supporting information are provided to help traders understand how to use it.",
  },
  {
    question: "What platform does this work on?",
    answer:
      "Platform compatibility and setup instructions are provided when you receive access to the indicator.",
  },
  {
    question: "What markets can I use this on?",
    answer:
      "The indicator can be used as a technical analysis tool when reviewing supported markets and trading setups.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Current access details and requirements are provided through Trading Sides when you request indicator access.",
  },
];

export default function TradingIndicatorPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* HERO */}
      <section className="relative px-4 pb-10 pt-[115px] sm:px-6 sm:pb-14 sm:pt-[140px] lg:px-12 lg:pt-[155px]">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="mb-3 inline-flex rounded-full border border-[#f5c84c]/35 bg-[#f5c84c]/[0.06] px-3 py-1 text-[8px] font-bold uppercase tracking-[1px] text-[#f5c84c] sm:text-[9px]">
            Trading Indicator
          </div>

          <h1 className="text-[32px] font-bold leading-[1.1] tracking-[-1px] text-[#f5c84c] sm:text-[44px] lg:text-[52px]">
            Gain Your Unfair Advantage
          </h1>

          <p className="mx-auto mt-4 max-w-[620px] text-[11px] leading-5 text-[#9da6b5] sm:text-[14px] sm:leading-7">
            The Trading Sides Indicator gives you the tools to analyze
            the market and trade with greater confidence.
          </p>
        </div>
      </section>

      {/* GET FREE ACCESS */}
      <section className="relative px-4 pb-14 sm:px-6 sm:pb-20 lg:px-12">
        <div className="mx-auto w-full max-w-[720px] rounded-[12px] border border-[#f5c84c]/55 bg-[#12151a]/90 p-4 shadow-[0_0_30px_rgba(245,200,76,0.05)] sm:p-8">
          <div className="text-center">
            <h2 className="text-[17px] font-bold text-[#f5c84c] sm:text-[22px]">
              Get FREE Access to Indicator
            </h2>

            <p className="mx-auto mt-2 max-w-[540px] text-[9px] leading-5 text-[#858e9c] sm:text-[12px]">
              Open an account through our XM partner link and follow
              the required steps to request indicator access.
            </p>
          </div>

          {/* 3 STEPS */}
          <div className="relative mt-7 grid grid-cols-3 gap-2 text-center sm:gap-5">
            <div className="absolute left-[16%] right-[16%] top-[17px] h-px bg-gradient-to-r from-transparent via-[#f5c84c]/30 to-transparent" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative z-10 min-w-0"
              >
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#f5c84c]/40 bg-[#15181d] text-[9px] font-bold text-[#f5c84c] shadow-[0_0_16px_rgba(245,200,76,0.08)] sm:h-10 sm:w-10 sm:text-[10px]">
                  {step.number}
                </div>

                <h3 className="mt-3 break-words text-[9px] font-semibold leading-[1.4] text-white sm:text-[12px]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-1 max-w-[180px] break-words text-[7px] leading-[1.5] text-[#818a97] sm:text-[10px] sm:leading-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* XM */}
          <div className="mt-8 text-center">
            <p className="mb-3 text-[8px] uppercase tracking-[1.2px] text-[#777f8c] sm:text-[9px]">
              Official Partner
            </p>

            <a
              href={xmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto block w-full"
            >
              <div className="relative mx-auto h-[150px] w-full max-w-[420px] sm:h-[180px] sm:max-w-[520px]">
                <Image
                  src="/image/xm.png"
                  alt="XM"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 520px"
                  className="object-contain"
                />
              </div>
            </a>
          </div>

          {/* CONTACT */}
          <div className="mt-7 text-center">
            <Link
              href="/contact?service=trading-indicator"
              className="inline-flex rounded-[7px] bg-[#f5c84c] px-7 py-3 text-[10px] font-bold text-[#111318] shadow-[0_5px_20px_rgba(245,200,76,0.18)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,200,76,0.25)] sm:px-9 sm:text-[12px]"
            >
              Get Free Access
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[720px] rounded-[12px] border border-[#f5c84c]/55 bg-[#12151a]/90 p-4 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#f5c84c]/75 hover:bg-[#15181d] hover:shadow-[0_0_28px_rgba(245,200,76,0.08)] sm:p-8">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* LEFT */}
            <div>
              <h2 className="text-[22px] font-bold text-white sm:text-[26px]">
                What&apos;s Included?
              </h2>

              <p className="mt-2 text-[10px] leading-5 text-[#89929f] sm:text-[11px]">
                Your complete toolkit for smarter market analysis.
              </p>

              <div className="mt-5 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">
                {included.map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-center gap-2 rounded-[8px] border border-white/[0.06] bg-[#0d1015]/70 px-2.5 py-2.5 transition-[border-color,background-color] duration-300 hover:border-[#f5c84c]/30 hover:bg-[#15181d] sm:px-3 sm:py-3"
                  >
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#22c978]/50 bg-[#22c978]/10 text-[7px] text-[#36dc8c]">
                      ✓
                    </span>

                    <p className="min-w-0 break-words text-[8px] font-medium leading-[1.4] text-[#e6e8eb] sm:text-[10px]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-center md:border-l md:border-white/[0.07] md:pl-10">
              <a
                href={xmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto block w-full"
              >
                <div className="relative mx-auto h-[120px] w-full max-w-[300px] sm:h-[145px] sm:max-w-[360px]">
                  <Image
                    src="/image/xm.png"
                    alt="XM"
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-contain"
                  />
                </div>
              </a>

              <p className="mt-4 text-[17px] font-bold text-[#f5c84c] sm:text-[20px]">
                Trading Sides Indicator
              </p>

              <p className="mx-auto mt-3 max-w-[230px] text-[9px] leading-5 text-[#858e9c] sm:text-[11px]">
                Trade with additional technical analysis and market insights.
              </p>

              <Link
                href="/contact?service=trading-indicator"
                className="mt-5 inline-flex w-full max-w-[190px] items-center justify-center rounded-[7px] bg-[#f5c84c] py-3 text-[10px] font-bold text-[#111318] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_22px_rgba(245,200,76,0.22)] sm:mt-6 sm:max-w-[210px] sm:text-[11px]"
              >
                Get Indicator
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEE IT IN ACTION */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1050px]">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-[26px] font-bold text-[#f5c84c] sm:text-[34px]">
              See It In Action
            </h2>

            <p className="mx-auto mt-3 max-w-[500px] text-[10px] leading-5 text-[#89929f] sm:text-[13px]">
              Works seamlessly across multiple markets and setups.
            </p>
          </div>

          {/* 3 IMAGES
              MOBILE = 1 IMAGE PER ROW
              DESKTOP = 2 IMAGES PER ROW
              FULL IMAGE = NO CROP */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
  {indicatorImages.map((image, index) => (
    <div
      key={image}
      className="relative flex min-h-[220px] min-w-0 items-center justify-center overflow-hidden rounded-[8px] border border-white/[0.07] bg-[#050609] transition-[border-color,box-shadow] duration-300 hover:border-[#f5c84c]/45 hover:shadow-[0_0_24px_rgba(245,200,76,0.08)] sm:min-h-[280px]"
    >
      <Image
        src={image}
        alt={`Trading Sides Indicator Example ${index + 1}`}
        width={1200}
        height={800}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="h-auto max-h-full w-full object-contain"
      />
    </div>
  ))}
</div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[720px]">
          <h2 className="mb-7 text-center text-[25px] font-bold text-[#f5c84c] sm:mb-8 sm:text-[32px]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-[8px] border bg-[#14171c]/90 transition-[border-color,background-color,box-shadow] duration-300 ${
                    isOpen
                      ? "border-[#f5c84c]/70 bg-[#181b20] shadow-[0_0_18px_rgba(245,200,76,0.08)]"
                      : "border-[#806621] hover:border-[#d4a72e] hover:bg-[#181b20]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
                  >
                    <span className="text-[10px] font-semibold text-white sm:text-[12px]">
                      {faq.question}
                    </span>

                    <span
                      className={`shrink-0 text-[15px] text-[#f5c84c] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-white/[0.05] px-4 py-4 text-[9px] leading-5 text-[#929aa7] sm:px-5 sm:text-[11px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 pb-24 pt-14 text-center sm:px-6 sm:pb-32 sm:pt-20 lg:px-12">
        <div className="mx-auto max-w-[700px]">
          <div className="mx-auto mb-9 h-px w-[70%] bg-gradient-to-r from-transparent via-[#f5c84c]/40 to-transparent" />

          <h2 className="text-[27px] font-bold leading-tight text-[#f5c84c] sm:text-[38px]">
            Ready to Upgrade Your Analysis?
          </h2>

          <p className="mx-auto mt-4 max-w-[520px] text-[10px] leading-5 text-[#929aa7] sm:text-[13px] sm:leading-6">
            Get access to the Trading Sides Indicator and add another
            technical analysis tool to your trading process.
          </p>

          <Link
            href="/contact?service=trading-indicator"
            className="mt-7 inline-flex rounded-[7px] bg-[#f5c84c] px-8 py-3 text-[10px] font-bold text-[#111318] shadow-[0_5px_20px_rgba(245,200,76,0.16)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,200,76,0.25)] sm:text-[12px]"
          >
            Get Free Access
          </Link>

          <div>
            <Link
              href="/#services"
              className="mt-6 inline-flex text-[10px] text-[#727b88] transition-colors duration-300 hover:text-white sm:text-[11px]"
            >
              ← Back to Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}