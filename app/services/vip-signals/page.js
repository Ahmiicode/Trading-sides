
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const xmLink = "https://affs.click/GDCPF";

const benefits = [
  {
    icon: "⚡",
    title: "High-Accuracy Signals",
    description:
      "Premium trading signals with clear entry, stop loss, and take profit levels.",
  },
  {
    icon: "♧",
    title: "Real-Time Alerts",
    description:
      "Receive trading setups and important market updates when opportunities appear.",
  },
  {
    icon: "◢",
    title: "Complete Analysis",
    description:
      "Every signal includes market analysis and important trading information.",
  },
  {
    icon: "◎",
    title: "Risk Management",
    description:
      "Trade with structured risk-management guidance and a disciplined approach.",
  },
];

const included = [
  "Entry, Stop Loss & Take Profit Levels",
  "Multiple Timeframe Coverage",
  "24/7 Priority Support",
  "Real-Time Market Updates",
  "Risk Management Guidance",
];

const faqs = [
  {
    question: "How do I access the VIP channel?",
    answer:
      "Create your XM trading account using the partner link on this page. After completing the required account steps, contact Trading Sides for VIP access.",
  },
  {
    question: "What markets are covered?",
    answer:
      "VIP trading updates can cover selected market opportunities shared by Trading Sides. The exact instruments may vary depending on current market conditions.",
  },
  {
    question: "Is there a profit guarantee?",
    answer:
      "No. Trading involves risk and no trading signal or strategy can guarantee profits. Always review each setup and manage your risk according to your own trading plan.",
  },
];

export default function VIPSignalsPage() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* HERO */}
      <section className="relative px-4 pb-10 pt-[115px] sm:px-6 sm:pb-14 sm:pt-[140px] lg:px-12 lg:pt-[155px]">
        <div className="mx-auto max-w-[850px] text-center">

          {/* BADGE */}
          <div className="mb-3 inline-flex rounded-full border border-[#f5c84c]/35 bg-[#f5c84c]/[0.06] px-3 py-1 text-[8px] font-bold uppercase tracking-[1px] text-[#f5c84c] sm:text-[9px]">
            Premium Service
          </div>

          {/* TITLE */}
          <h1 className="text-[32px] font-bold tracking-[-1px] text-[#f5c84c] sm:text-[45px] lg:text-[52px]">
            Join VIP Signals
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-[600px] text-[11px] leading-5 text-[#9da6b5] sm:text-[14px] sm:leading-7">
            Get premium trading signals with clear market setups,
            structured analysis, and trading updates from Trading Sides.
          </p>

        </div>
      </section>

      {/* ACCESS VIP */}
      <section className="relative px-4 pb-14 sm:px-6 sm:pb-20 lg:px-12">
        <div className="mx-auto w-full max-w-[720px] rounded-[12px] border border-[#f5c84c]/55 bg-[#12151a]/90 p-4 shadow-[0_0_30px_rgba(245,200,76,0.05)] sm:p-8">

          {/* HEADING */}
          <div className="text-center">
            <h2 className="text-[17px] font-bold text-[#f5c84c] sm:text-[22px]">
              Get Access to VIP Channel
            </h2>

            <p className="mx-auto mt-2 max-w-[500px] text-[9px] leading-5 text-[#858e9c] sm:text-[12px]">
              Follow the steps below to unlock your VIP access.
            </p>
          </div>

          {/* STEPS */}
          <div className="mt-7 grid grid-cols-3 gap-2 text-center sm:gap-5">

            {/* STEP 1 */}
            <div className="min-w-0">
              <span className="text-[8px] font-bold text-[#f5c84c] sm:text-[10px]">
                Step 1
              </span>

              <h3 className="mt-2 text-[9px] font-semibold leading-4 text-white sm:text-[12px]">
                Open XM Account
              </h3>

              <p className="mt-1 text-[7px] leading-[1.5] text-[#818a97] sm:text-[10px] sm:leading-4">
                Create your account using our official XM partner link.
              </p>
            </div>

            {/* STEP 2 */}
            <div className="min-w-0">
              <span className="text-[8px] font-bold text-[#f5c84c] sm:text-[10px]">
                Step 2
              </span>

              <h3 className="mt-2 text-[9px] font-semibold leading-4 text-white sm:text-[12px]">
                Complete Account
              </h3>

              <p className="mt-1 text-[7px] leading-[1.5] text-[#818a97] sm:text-[10px] sm:leading-4">
                Complete the required registration and verification.
              </p>
            </div>

            {/* STEP 3 */}
            <div className="min-w-0">
              <span className="text-[8px] font-bold text-[#f5c84c] sm:text-[10px]">
                Step 3
              </span>

              <h3 className="mt-2 text-[9px] font-semibold leading-4 text-white sm:text-[12px]">
                Get VIP Access
              </h3>

              <p className="mt-1 text-[7px] leading-[1.5] text-[#818a97] sm:text-[10px] sm:leading-4">
                Contact Trading Sides after completing the steps.
              </p>
            </div>

          </div>

          {/* XM IMAGE - ONLY XM */}
          <div className="mt-7 text-center">

            <p className="mb-3 text-[8px] uppercase tracking-[1.2px] text-[#777f8c] sm:text-[9px]">
              Official Partner
            </p>

            <a
              href={xmLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto flex w-full max-w-[250px] items-center justify-center rounded-[10px] border border-[#806621] bg-[#0d1015]/90 px-5 py-5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#f5c84c] hover:bg-[#17191e] hover:shadow-[0_0_28px_rgba(245,200,76,0.18)] sm:max-w-[280px] sm:px-6 sm:py-6"
            >
              <div className="relative h-[80px] w-[190px] sm:h-[90px] sm:w-[220px]">
                <Image
                  src="/image/xm.png"
                  alt="XM"
                  fill
                  priority
                  sizes="(max-width: 639px) 190px, 220px"
                  className="object-contain"
                />
              </div>
            </a>

          </div>

          {/* CONTACT BUTTON */}
          <div className="mt-7 text-center">
            <Link
              href="/contact?service=vip-signals"
              className="inline-flex rounded-[7px] bg-[#f5c84c] px-7 py-3 text-[10px] font-bold text-[#111318] shadow-[0_5px_20px_rgba(245,200,76,0.18)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,200,76,0.25)] sm:px-9 sm:text-[12px]"
            >
              Get VIP Access
            </Link>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE VIP */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[1100px]">

          <div className="mb-9 text-center sm:mb-10">
            <h2 className="text-[25px] font-bold text-[#f5c84c] sm:text-[34px]">
              Why Choose VIP Signals?
            </h2>

            <p className="mx-auto mt-2 max-w-[550px] text-[10px] leading-5 text-[#89929f] sm:text-[13px]">
              Everything you need to access trading setups and market updates.
            </p>
          </div>

          {/* BENEFIT CARDS */}
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="min-w-0 rounded-[10px] border border-[#806621] bg-[#14171c]/90 p-3.5 text-center transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#d4a72e] hover:bg-[#181b20] hover:shadow-[0_0_25px_rgba(245,190,55,0.12)] sm:p-6"
              >
                <div className="mx-auto flex h-8 w-8 items-center justify-center text-[16px] text-[#f5c84c] sm:h-9 sm:w-9 sm:text-[19px]">
                  {benefit.icon}
                </div>

                <h3 className="mt-2 break-words text-[10px] font-bold leading-[1.4] text-white sm:mt-3 sm:text-[13px]">
                  {benefit.title}
                </h3>

                <p className="mt-2 break-words text-[8px] leading-[1.55] text-[#8d95a2] sm:text-[11px] sm:leading-5">
                  {benefit.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="relative px-4 py-14 sm:px-6 sm:py-20 lg:px-12">
        <div className="mx-auto grid max-w-[900px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">

          {/* LEFT */}
          <div>
            <h2 className="text-[26px] font-bold text-[#f5c84c] sm:text-[34px]">
              What&apos;s Included?
            </h2>

            <p className="mt-3 text-[10px] leading-5 text-[#89929f] sm:text-[12px]">
              Everything you need for better-informed trading decisions.
            </p>

            <div className="mt-6 space-y-3">

              {included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[2px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#22c978]/50 bg-[#22c978]/10 text-[8px] text-[#36dc8c]">
                    ✓
                  </span>

                  <p className="text-[10px] font-medium leading-5 text-[#e6e8eb] sm:text-[12px]">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* VIP CARD */}
          <div className="mx-auto w-full max-w-[310px] rounded-[12px] border border-[#f5c84c]/55 bg-[#12151a] p-5 text-center shadow-[0_0_30px_rgba(245,200,76,0.05)] transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#f5c84c] hover:bg-[#16191e] hover:shadow-[0_0_28px_rgba(245,200,76,0.13)] sm:max-w-[340px] sm:p-6">

            <span className="inline-flex rounded-full border border-[#f5c84c]/35 bg-[#f5c84c]/[0.07] px-3 py-1 text-[7px] font-bold uppercase tracking-[1px] text-[#f5c84c] sm:text-[8px]">
              Premium Access
            </span>

            <h3 className="mt-4 text-[17px] font-bold text-white sm:mt-5 sm:text-[19px]">
              VIP Trading Signals
            </h3>

            <p className="mt-2 text-[9px] leading-5 text-[#858e9c] sm:text-[10px]">
              Market setups and premium trading updates
            </p>

            <div className="my-5 h-px w-full bg-white/[0.07] sm:my-6" />

            {/* XM LOGO */}
            <div className="relative mx-auto h-[70px] w-[160px] sm:h-[75px] sm:w-[180px]">
              <Image
                src="/image/xm.png"
                alt="XM"
                fill
                sizes="(max-width: 639px) 160px, 180px"
                className="object-contain"
              />
            </div>

            <p className="mt-3 text-[9px] text-[#89929f]">
              Available through XM
            </p>

            <Link
              href="/contact?service=vip-signals"
              className="mt-5 block w-full rounded-[7px] bg-[#f5c84c] py-3 text-[10px] font-bold text-[#111318] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_22px_rgba(245,200,76,0.22)] sm:mt-6 sm:text-[11px]"
            >
              Join VIP Now
            </Link>

            <p className="mt-3 text-[7px] text-[#6f7783] sm:text-[8px]">
              Account requirements may apply.
            </p>

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
            Ready to Elevate Your Trading?
          </h2>

          <p className="mx-auto mt-4 max-w-[500px] text-[10px] leading-5 text-[#929aa7] sm:text-[13px] sm:leading-6">
            Join the Trading Sides VIP community and get access to
            premium trading signals and market updates.
          </p>

          {/* CONTACT PAGE */}
          <Link
            href="/contact?service=vip-signals"
            className="mt-7 inline-flex rounded-[7px] bg-[#f5c84c] px-8 py-3 text-[10px] font-bold text-[#111318] shadow-[0_5px_20px_rgba(245,200,76,0.16)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,200,76,0.25)] sm:text-[12px]"
          >
            Join VIP Signals Now
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

