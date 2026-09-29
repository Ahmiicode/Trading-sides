import Link from "next/link";

const traderWavesLink = "https://traderwaves.com/?code=D9AA93E4";

const features = [
  {
    icon: "↻",
    title: "Auto-Sync",
    description:
      "Connect your trading account and automatically sync your trades into your journal.",
  },
  {
    icon: "AI",
    title: "AI Coach",
    description:
      "Review your trading data and discover useful insights about your performance.",
  },
  {
    icon: "◎",
    title: "Behavioral Scoring",
    description:
      "Understand patterns in your trading behavior and improve your decision-making process.",
  },
  {
    icon: "▶",
    title: "Trade Replay",
    description:
      "Review previous trades and analyze your trading decisions with greater clarity.",
  },
  {
    icon: "✦",
    title: "AI Summaries",
    description:
      "Turn your trading activity into useful summaries that make reviewing performance easier.",
  },
  {
    icon: "⌁",
    title: "Analytics",
    description:
      "Analyze your trading performance using detailed statistics, filters, and reports.",
  },
  {
    icon: "▣",
    title: "Trading Calendar",
    description:
      "Track your trading activity and performance through an organized calendar view.",
  },
  {
    icon: "↗",
    title: "Share Cards",
    description:
      "Create clean trading performance cards that can be shared with your community.",
  },
  {
    icon: "♙",
    title: "Performance Tracking",
    description:
      "Review your trading history and identify patterns that can help improve consistency.",
  },
];

const steps = [
  {
    number: "1",
    title: "Sign Up Free",
    description:
      "Create your TraderWaves account using our link.",
  },
  {
    number: "2",
    title: "Connect Broker",
    description:
      "Connect your supported broker or start recording your trades.",
  },
  {
    number: "3",
    title: "Analyze",
    description:
      "Review your journal, analytics, and trading performance.",
  },
];

export default function TradingJournalPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* HERO */}
      <section className="relative px-5 pb-14 pt-[120px] sm:px-6 sm:pb-20 sm:pt-[145px] lg:px-12 lg:pb-24 lg:pt-[165px]">
        <div className="mx-auto max-w-[1000px] text-center">

          {/* TITLE */}
          <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-[-1.5px] text-white sm:text-[52px] lg:text-[64px]">
            Tradi
            <span className="text-[#985cff]">
              ngJournal
            </span>
          </h1>

          {/* SMALL LABEL */}
          <p className="mt-3 text-[12px] font-semibold text-[#9b63ff] sm:text-[14px]">
            The AI-Powered Trading Journal
          </p>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-[700px] text-[13px] leading-6 text-[#9ca4b2] sm:text-[15px] sm:leading-7">
            Track, analyze, and improve your trading with a powerful
            trading journal. Connect your account, review your trades,
            and understand your performance.
          </p>

          {/* CTA */}
          <div className="mt-7">
            <a
              href={traderWavesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[7px] bg-gradient-to-r from-[#9254ff] to-[#7b36e8] px-7 py-3 text-[12px] font-bold text-white shadow-[0_8px_30px_rgba(139,80,255,0.22)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(139,80,255,0.35)] sm:px-8 sm:py-[13px] sm:text-[13px]"
            >
              Get Started Free
            </a>
          </div>

        </div>
      </section>

      {/* EVERYTHING YOU NEED */}
      <section className="relative px-2 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1100px]">

          {/* HEADING */}
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-[27px] font-bold tracking-[-0.8px] text-white sm:text-[34px]">
              Everything You Need
            </h2>

            <p className="mx-auto mt-3 max-w-[550px] text-[12px] leading-6 text-[#858d9a] sm:text-[14px]">
              A complete trading journal built for serious traders.
            </p>
          </div>

          {/* FEATURE CARDS - 3 PER ROW ON MOBILE */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4">

            {features.map((feature) => (
              <div
                key={feature.title}
                className="min-w-0 rounded-[9px] border border-[#7546a7]/35 bg-[#0d0b14]/75 p-3 transition-[border-color,box-shadow] duration-300 hover:border-[#925cff]/65 hover:shadow-[0_0_25px_rgba(139,80,255,0.10)] sm:rounded-[10px] sm:p-6"
              >

                {/* ICON */}
                <div className="mb-3 flex h-7 w-7 items-center justify-center rounded-[7px] bg-[#8c50ff]/15 text-[9px] font-bold text-[#a878ff] sm:mb-4 sm:h-8 sm:w-8 sm:text-[11px]">
                  {feature.icon}
                </div>

                {/* TITLE */}
                <h3 className="break-words text-[10px] font-bold leading-[1.35] text-white sm:text-[14px]">
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-2 break-words text-[8px] leading-[1.55] text-[#9299a6] sm:text-[12px] sm:leading-5">
                  {feature.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative px-2 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[950px]">

          {/* HEADING */}
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="text-[27px] font-bold tracking-[-0.8px] text-white sm:text-[34px]">
              How It Works
            </h2>

            <p className="mx-auto mt-3 max-w-[520px] text-[12px] leading-6 text-[#858d9a] sm:text-[14px]">
              Start your trading journal in three simple steps.
            </p>
          </div>

          {/* 3 STEPS IN ONE ROW */}
          <div className="relative grid grid-cols-3 gap-2 sm:gap-6">

            {/* CONNECTING LINE */}
            <div className="absolute left-[16%] right-[16%] top-5 h-px bg-gradient-to-r from-transparent via-[#925cff]/40 to-transparent" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative z-10 min-w-0 text-center"
              >

                {/* NUMBER */}
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#a267ff] to-[#7431dc] text-[12px] font-bold text-white shadow-[0_0_20px_rgba(139,80,255,0.25)]">
                  {step.number}
                </div>

                {/* TITLE */}
                <h3 className="mt-4 text-[10px] font-bold leading-4 text-white sm:mt-5 sm:text-[14px]">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mx-auto mt-2 max-w-[220px] text-[8px] leading-[1.5] text-[#8d95a2] sm:text-[12px] sm:leading-5">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

          {/* HOW IT WORKS CTA */}
          <div className="mt-10 text-center sm:mt-12">
            <a
              href={traderWavesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#a66dff] transition-colors duration-300 hover:text-[#c19aff] sm:text-[13px]"
            >
              Start on TraderWaves
              <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-5 pb-24 pt-14 sm:px-6 sm:pb-28 sm:pt-16 lg:px-12 lg:pb-32 lg:pt-20">
        <div className="mx-auto max-w-[850px] text-center">

          {/* TOP LINE */}
          <div className="mx-auto mb-10 h-px w-[70%] bg-gradient-to-r from-transparent via-[#925cff]/35 to-transparent" />

          {/* TITLE */}
          <h2 className="text-[27px] font-bold tracking-[-0.8px] text-white sm:text-[36px]">
            Start Your Trading Journal
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-[550px] text-[12px] leading-6 text-[#8f97a4] sm:text-[14px]">
            Build a better trading review process and understand your
            performance with TraderWaves.
          </p>

          {/* BUTTON */}
          <div className="mt-7">
            <a
              href={traderWavesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[7px] bg-gradient-to-r from-[#9254ff] to-[#7b36e8] px-8 py-3 text-[12px] font-bold text-white shadow-[0_8px_30px_rgba(139,80,255,0.20)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(139,80,255,0.35)] sm:px-9 sm:py-[13px] sm:text-[13px]"
            >
              Get Started Free
            </a>
          </div>

          {/* BACK */}
          <Link
            href="/#services"
            className="mt-6 inline-flex text-[11px] text-[#747d8a] transition-colors duration-300 hover:text-white sm:text-[12px]"
          >
            ← Back to Services
          </Link>

        </div>
      </section>

    </main>
  );
}