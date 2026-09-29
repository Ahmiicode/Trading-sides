import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const services = {
  "trading-journal": {
    badge: "AI POWERED",
    title: "Trading Journal",
    subtitle: "Turn every trade into a learning opportunity",
    description:
      "Track your trades, understand your behavior, analyze your performance and improve your trading decisions with a powerful AI-assisted trading journal.",

    accent: "purple",

    stats: [
      { value: "50+", label: "Performance Metrics" },
      { value: "AI", label: "Trading Insights" },
      { value: "MT5", label: "Auto Sync" },
      { value: "24/7", label: "Trade Tracking" },
    ],

    benefits: [
      {
        icon: "◎",
        title: "Automatic Trade Sync",
        description:
          "Automatically sync your trading activity from supported MT5 brokers.",
      },
      {
        icon: "✦",
        title: "AI Coaching",
        description:
          "Understand trading behavior with AI-powered scoring and actionable insights.",
      },
      {
        icon: "↗",
        title: "Advanced Analytics",
        description:
          "Analyze your performance with detailed trading metrics and statistics.",
      },
      {
        icon: "◫",
        title: "Trade Replay",
        description:
          "Review previous trades with visual chart-based trade replay.",
      },
    ],

    included: [
      "Auto-sync trades from MT5 brokers",
      "AI behavioral scoring & coaching",
      "50+ performance metrics",
      "Trade replay with chart visualization",
      "Daily and weekly AI summaries",
      "Equity curves & drawdown analysis",
      "Custom strategies & playbooks",
      "Social media share cards",
    ],

    faq: [
      {
        question: "What is the Trading Journal?",
        answer:
          "It is a trading performance journal designed to help you record, review and analyze your trading activity.",
      },
      {
        question: "Can I sync my trades?",
        answer:
          "The journal is designed to support automatic trade syncing from supported MT5 brokers.",
      },
      {
        question: "What does the AI analysis provide?",
        answer:
          "AI-assisted analysis can help surface behavioral patterns, performance insights and areas for improvement.",
      },
    ],

    cta: "Get Trading Journal Access",
  },

  "vip-signals": {
    badge: "PREMIUM SERVICE",
    title: "VIP Signals",
    subtitle: "Premium trading signals and real-time market insights",
    description:
      "Get structured trading signals with entry, exit and risk-management information designed to help you follow market opportunities with greater clarity.",

    accent: "gold",

    stats: [
      { value: "LIVE", label: "Market Alerts" },
      { value: "24/7", label: "Support" },
      { value: "TP", label: "Target Levels" },
      { value: "SL", label: "Risk Control" },
    ],

    benefits: [
      {
        icon: "⚡",
        title: "Real-Time Alerts",
        description:
          "Receive trading alerts when new market opportunities and setups are shared.",
      },
      {
        icon: "◎",
        title: "Clear Entry Points",
        description:
          "Signals include structured entry information for easier execution.",
      },
      {
        icon: "↗",
        title: "Target Levels",
        description:
          "Follow clearly presented take-profit targets with each applicable setup.",
      },
      {
        icon: "♙",
        title: "Risk Management",
        description:
          "Signals include risk-management information such as stop-loss levels.",
      },
    ],

    included: [
      "Real-time market alerts",
      "Entry points",
      "Stop-loss levels",
      "Take-profit targets",
      "Risk management guidance",
      "Market updates",
      "Trading setup information",
      "24/7 support",
    ],

    faq: [
      {
        question: "How do I get VIP Signals access?",
        answer:
          "Open your XM account through our partner link and then use the contact option at the end of this page to continue the access process.",
      },
      {
        question: "What information is included in a signal?",
        answer:
          "Depending on the setup, a signal can include entry information, stop-loss levels, take-profit targets and related market information.",
      },
      {
        question: "Which broker is supported?",
        answer:
          "The partner broker shown on this page is XM.",
      },
    ],

    cta: "Join VIP Signals",
  },

  "master-trader-course": {
    badge: "TRADING EDUCATION",
    title: "Master Trader Course",
    subtitle: "Build your trading knowledge from basics to advanced concepts",
    description:
      "A structured trading education path covering market fundamentals, psychology, options, strategies and advanced trading concepts.",

    accent: "gold",

    stats: [
      { value: "6", label: "Core Modules" },
      { value: "SMC", label: "Advanced Concepts" },
      { value: "FTC", label: "Strategy Module" },
      { value: "IBZ", label: "Trading Setup" },
    ],

    benefits: [
      {
        icon: "◫",
        title: "Structured Learning",
        description:
          "Follow a clear learning path instead of jumping between disconnected trading topics.",
      },
      {
        icon: "◎",
        title: "Market Fundamentals",
        description:
          "Understand core market concepts before progressing to advanced strategies.",
      },
      {
        icon: "✦",
        title: "Trading Psychology",
        description:
          "Learn how discipline, planning and psychology affect trading decisions.",
      },
      {
        icon: "↗",
        title: "Advanced Strategies",
        description:
          "Progress into advanced setups, strategy frameworks and market concepts.",
      },
    ],

    included: [
      "Basics of Stock Market",
      "Market Psychology & Setup",
      "Ultimate Options Trading",
      "IBZ 3.0",
      "FTC Strategy",
      "SMC Course",
      "Trading setup education",
      "Strategy-focused learning",
    ],

    faq: [
      {
        question: "Who is the course for?",
        answer:
          "The course is structured for traders who want to build their knowledge from fundamental concepts toward more advanced trading material.",
      },
      {
        question: "What topics are included?",
        answer:
          "Topics include market basics, psychology, options trading, IBZ 3.0, FTC Strategy and SMC.",
      },
      {
        question: "How do I get course access?",
        answer:
          "Review the course details and use the access button at the bottom of this page to contact the team.",
      },
    ],

    cta: "Get Course Access",
  },

  "trading-indicator": {
    badge: "TRADING TOOL",
    title: "Trading Indicator",
    subtitle: "Technical tools designed to support your market analysis",
    description:
      "Access trading indicator tools built to support technical analysis, multiple timeframes, historical testing and performance evaluation.",

    accent: "gold",

    stats: [
      { value: "MTF", label: "Timeframes" },
      { value: "TEST", label: "Backtesting" },
      { value: "DATA", label: "Metrics" },
      { value: "LIVE", label: "Analysis" },
    ],

    benefits: [
      {
        icon: "⌁",
        title: "Multiple Timeframes",
        description:
          "Analyze market conditions across different trading timeframes.",
      },
      {
        icon: "↗",
        title: "Historical Backtesting",
        description:
          "Review how trading concepts and setups behaved across historical market data.",
      },
      {
        icon: "◎",
        title: "Custom Indicators",
        description:
          "Use purpose-built indicator tools to support technical market analysis.",
      },
      {
        icon: "◫",
        title: "Performance Metrics",
        description:
          "Review useful metrics to better understand indicator performance.",
      },
    ],

    included: [
      "Historical backtesting",
      "Multiple timeframe analysis",
      "Custom indicators",
      "Performance metrics",
      "Technical analysis tools",
      "Trading setup support",
      "Market visualization",
      "Strategy analysis",
    ],

    faq: [
      {
        question: "What does the indicator do?",
        answer:
          "The indicator is designed to support technical analysis and help traders review market conditions and setups.",
      },
      {
        question: "Can it be used on multiple timeframes?",
        answer:
          "Multiple timeframe analysis is one of the features included in the indicator service.",
      },
      {
        question: "How do I get access?",
        answer:
          "Use the final access button at the bottom of this page to contact the team.",
      },
    ],

    cta: "Get Indicator Access",
  },
};

function getAccent(service) {
  if (service.accent === "purple") {
    return {
      text: "text-[#a978ff]",
      border: "border-[#7046a7]",
      badge:
        "border-[#7046a7] bg-[#2a1c40] text-[#b990ff]",
      button:
        "bg-gradient-to-r from-[#8d50ff] to-[#7134db] text-white hover:brightness-110 hover:shadow-[0_0_35px_rgba(139,80,255,0.30)]",
      dot: "bg-[#9b63ff]",
      glow:
        "shadow-[0_0_40px_rgba(139,80,255,0.10)] hover:shadow-[0_0_40px_rgba(139,80,255,0.18)]",
    };
  }

  return {
    text: "text-[#f5c84c]",
    border: "border-[#806621]",
    badge:
      "border-[#806621] bg-[#292313] text-[#f5c84c]",
    button:
      "bg-gradient-to-r from-[#f5c33e] to-[#ffd778] text-[#111318] hover:brightness-110 hover:shadow-[0_0_35px_rgba(245,190,55,0.28)]",
    dot: "bg-[#f5c84c]",
    glow:
      "shadow-[0_0_40px_rgba(245,190,55,0.06)] hover:shadow-[0_0_40px_rgba(245,190,55,0.14)]",
  };
}

export default async function ServicePage({ params }) {
  const { id } = await params;

  const service = services[id];

  if (!service) {
    notFound();
  }

  const accent = getAccent(service);

  return (
    <main className="min-h-screen text-white">

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:px-12">

        {/* GLOW */}
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px] ${
            service.accent === "purple"
              ? "bg-[#7d36eb]/[0.07]"
              : "bg-[#f5c84c]/[0.05]"
          }`}
        />

        <div className="relative z-10 mx-auto w-full max-w-[1300px]">

          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-[#9da6b5] transition-colors duration-300 hover:text-white"
          >
            ← Back to Services
          </Link>

          <div className="mx-auto mt-12 max-w-[950px] text-center sm:mt-16">

            <span
              className={`inline-flex rounded-full border px-4 py-[7px] text-[9px] font-bold tracking-[2px] ${accent.badge}`}
            >
              {service.badge}
            </span>

            <h1
              className={`mt-6 text-[42px] font-bold leading-[1.05] tracking-[-2px] sm:text-[58px] lg:text-[76px] ${accent.text}`}
            >
              {service.title}
            </h1>

            <h2 className="mx-auto mt-6 max-w-[850px] text-[18px] font-semibold leading-7 text-white sm:text-[22px] lg:text-[26px]">
              {service.subtitle}
            </h2>

            <p className="mx-auto mt-5 max-w-[760px] text-[14px] leading-7 text-[#9da6b5] sm:text-[16px] lg:text-[17px]">
              {service.description}
            </p>

            <a
              href="#details"
              className={`mt-9 inline-block rounded-full px-8 py-[13px] text-[13px] font-bold transition-[filter,box-shadow] duration-300 ${accent.button}`}
            >
              Explore Details
            </a>
          </div>

          {/* STATS */}
          <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-2 gap-3 sm:mt-16 sm:gap-4 lg:grid-cols-4">
            {service.stats.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-[14px] border bg-[#12151b]/90 px-4 py-6 text-center backdrop-blur-md transition-[border-color,box-shadow] duration-300 ${accent.border} ${accent.glow}`}
              >
                <div
                  className={`text-[23px] font-bold sm:text-[28px] ${accent.text}`}
                >
                  {stat.value}
                </div>

                <div className="mt-2 text-[10px] font-medium uppercase tracking-[1px] text-[#8f97a5] sm:text-[11px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIP XM SECTION ================= */}
      {id === "vip-signals" && (
        <section className="px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
          <div className="mx-auto max-w-[1200px]">

            <div className="text-center">
              <span className="rounded-full border border-[#1c78ff]/60 bg-[#10213a] px-4 py-[7px] text-[10px] font-semibold text-[#4f9cff]">
                Partner Broker
              </span>

              <h2 className="mt-6 text-[30px] font-bold text-[#f5c84c] sm:text-[38px] lg:text-[44px]">
                Start With XM
              </h2>

              <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-7 text-[#9da6b5] sm:text-[16px]">
                Open your XM account through our partner link before
                continuing with VIP access.
              </p>
            </div>

            {/* STEPS */}
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                {
                  number: "01",
                  title: "Open XM Account",
                  text: "Create your XM account through our partner link.",
                },
                {
                  number: "02",
                  title: "Complete Setup",
                  text: "Complete your account setup and required verification.",
                },
                {
                  number: "03",
                  title: "Continue to Access",
                  text: "After completing the setup, continue through this page for VIP access.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="rounded-[14px] border border-[#806621] bg-[#14171d]/95 p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#d4a72e] hover:shadow-[0_0_35px_rgba(245,190,55,0.14)] sm:p-7"
                >
                  <span className="text-[12px] font-bold text-[#f5c84c]">
                    STEP {step.number}
                  </span>

                  <h3 className="mt-4 text-[18px] font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#9da6b5]">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>

            {/* XM CARD */}
            <a
              href="https://affs.click/GDCPF"
              target="_blank"
              rel="noopener noreferrer"
              className="group mx-auto mt-10 flex max-w-[420px] items-center gap-5 rounded-[16px] border border-[#806621] bg-[#14171d]/95 p-6 transition-[border-color,box-shadow] duration-300 hover:border-[#d4a72e] hover:shadow-[0_0_40px_rgba(245,190,55,0.18)]"
            >
              <div className="relative h-[70px] w-[100px] shrink-0">
                <Image
                  src="/image/xm.png"
                  alt="XM"
                  fill
                  sizes="100px"
                  className="object-contain"
                />
              </div>

              <div className="text-left">
                <h3 className="text-[18px] font-bold text-white">
                  XM
                </h3>

                <p className="mt-1 text-[12px] text-[#9da6b5]">
                  Partner Broker
                </p>

                <p className="mt-3 text-[12px] font-semibold text-[#f5c84c]">
                  Open XM Account →
                </p>
              </div>
            </a>

          </div>
        </section>
      )}

      {/* ================= WHY CHOOSE ================= */}
      <section
        id="details"
        className="px-4 py-16 sm:px-6 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1300px]">

          <div className="text-center">
            <h2
              className={`text-[30px] font-bold tracking-[-1px] sm:text-[38px] lg:text-[44px] ${accent.text}`}
            >
              Why Choose {service.title}?
            </h2>

            <p className="mx-auto mt-4 max-w-[650px] text-[14px] leading-7 text-[#9da6b5] sm:text-[16px]">
              Everything you need in one focused trading service.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className={`rounded-[14px] border bg-[#14171d]/95 p-4 transition-[border-color,box-shadow] duration-300 sm:p-6 lg:p-7 ${accent.border} ${accent.glow}`}
              >
                <div
                  className={`text-[24px] sm:text-[28px] ${accent.text}`}
                >
                  {benefit.icon}
                </div>

                <h3 className="mt-4 text-[13px] font-bold text-white sm:text-[16px]">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-[10px] leading-5 text-[#929aa7] sm:text-[13px] sm:leading-6">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INCLUDED ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* LEFT */}
          <div>
            <span
              className={`text-[10px] font-bold uppercase tracking-[2px] ${accent.text}`}
            >
              Features
            </span>

            <h2
              className={`mt-3 text-[30px] font-bold tracking-[-1px] sm:text-[38px] lg:text-[44px] ${accent.text}`}
            >
              What&apos;s Included?
            </h2>

            <p className="mt-4 max-w-[520px] text-[14px] leading-7 text-[#9da6b5] sm:text-[16px]">
              Explore the tools, features and resources included with this
              service.
            </p>
          </div>

          {/* RIGHT */}
          <div className={`rounded-[16px] border bg-[#14171d]/95 p-5 sm:p-7 lg:p-8 ${accent.border} ${accent.glow}`}>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[10px] border border-white/[0.06] bg-white/[0.025] px-4 py-4"
                >
                  <span
                    className={`mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full ${accent.dot}`}
                  />

                  <p className="text-[12px] leading-6 text-[#e4e6e9] sm:text-[13px]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[900px]">

          <div className="text-center">
            <h2
              className={`text-[30px] font-bold sm:text-[38px] lg:text-[42px] ${accent.text}`}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {service.faq.map((faq) => (
              <details
                key={faq.question}
                className={`group rounded-[12px] border bg-[#14171d]/95 ${accent.border}`}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-[13px] font-semibold text-white sm:px-6 sm:text-[15px]">
                  {faq.question}

                  <span
                    className={`text-[20px] transition-transform duration-300 group-open:rotate-45 ${accent.text}`}
                  >
                    +
                  </span>
                </summary>

                <div className="border-t border-white/[0.06] px-5 py-5 sm:px-6">
                  <p className="text-[12px] leading-6 text-[#9da6b5] sm:text-[14px]">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-12 lg:pb-32">
        <div
          className={`mx-auto max-w-[1200px] rounded-[20px] border bg-[#14171d]/95 px-5 py-12 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20 ${accent.border} ${accent.glow}`}
        >
          <span
            className={`text-[10px] font-bold uppercase tracking-[2px] ${accent.text}`}
          >
            Get Started
          </span>

          <h2
            className={`mx-auto mt-4 max-w-[800px] text-[30px] font-bold leading-tight tracking-[-1px] sm:text-[42px] lg:text-[52px] ${accent.text}`}
          >
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[13px] leading-7 text-[#9da6b5] sm:text-[16px]">
            Continue to our contact page and send us your details to learn
            more about access to {service.title}.
          </p>

          {/* ONLY FINAL BUTTON GOES TO CONTACT */}
          <Link
            href={`/contact?service=${id}`}
            className={`mx-auto mt-8 block w-full max-w-[270px] rounded-full px-7 py-[14px] text-[13px] font-bold transition-[filter,box-shadow] duration-300 sm:text-[14px] ${accent.button}`}
          >
            {service.cta}
          </Link>
        </div>
      </section>

    </main>
  );
}