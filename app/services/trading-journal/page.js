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
    description: "Create your TraderWaves account using our link.",
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
      <section className="relative px-5 pb-10 pt-[125px] sm:px-6 sm:pb-14 sm:pt-[145px] lg:px-12 lg:pb-16 lg:pt-[165px]">
        <div className="mx-auto max-w-[1000px] text-center">
          {/* TITLE */}
          <h1 className="text-[38px] font-extrabold leading-[1.05] tracking-[-1.5px] text-[#985cff] sm:text-[52px] lg:text-[64px]">
            TradingJournal
          </h1>

          {/* LABEL */}
          <p className="mt-3 text-[12px] font-semibold text-[#9b63ff] sm:text-[14px]">
            The AI-Powered Trading Journal
          </p>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-[700px] text-[13px] leading-6 text-[#9ca4b2] sm:text-[15px] sm:leading-7">
            Track, analyze, and improve your trading with a powerful trading
            journal. Connect your account, review your trades, and understand
            your performance.
          </p>

          {/* CTA */}
          <div className="mt-5 sm:mt-7">
            <a
              href={traderWavesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[56px] items-center justify-center rounded-[9px] bg-gradient-to-r from-[#9254ff] to-[#7b36e8] px-11 py-4 text-[15px] font-bold text-white shadow-[0_8px_30px_rgba(139,80,255,0.22)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(139,80,255,0.35)] sm:min-h-[50px] sm:px-10 sm:py-3.5 sm:text-[14px]"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>

      {/* EVERYTHING YOU NEED */}
      <section className="relative px-5 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-[27px] font-bold tracking-[-0.8px] text-white sm:text-[34px]">
              Everything You Need
            </h2>

            <p className="mx-auto mt-3 max-w-[550px] text-[12px] leading-6 text-[#858d9a] sm:text-[14px]">
              A complete trading journal built for serious traders.
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex min-h-[175px] flex-col rounded-[10px] border border-[#7546a7]/35 bg-[#0d0b14]/75 p-2.5 transition-[border-color,box-shadow] duration-300 hover:border-[#925cff]/65 hover:shadow-[0_0_25px_rgba(139,80,255,0.10)] sm:min-h-[205px] sm:p-6"
              >
                <div className="mb-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-[7px] bg-[#8c50ff]/15 text-[9px] font-bold text-[#a878ff] sm:mb-4 sm:h-8 sm:w-8 sm:text-[11px]">
                  {feature.icon}
                </div>

                <h3 className="text-[9px] font-bold text-white sm:text-[14px]">
                  {feature.title}
                </h3>

                <p className="mt-1.5 text-[7px] leading-4 text-[#9299a6] sm:mt-2 sm:text-[12px] sm:leading-5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative px-5 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[950px]">
          <div className="mb-10 text-center sm:mb-16">
            <h2 className="text-[27px] font-bold tracking-[-0.8px] text-white sm:text-[34px]">
              How It Works
            </h2>

            <p className="mx-auto mt-3 max-w-[520px] text-[12px] leading-6 text-[#858d9a] sm:text-[14px]">
              Start your trading journal in three simple steps.
            </p>
          </div>

          <div className="relative grid grid-cols-3 gap-2 sm:grid-cols-3 sm:gap-6">
            <div className="absolute left-[16%] right-[16%] top-5 h-px bg-gradient-to-r from-transparent via-[#925cff]/40 to-transparent" />

            {steps.map((step) => (
              <div
                key={step.number}
                className="relative z-10 text-center"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#a267ff] to-[#7431dc] text-[12px] font-bold text-white shadow-[0_0_20px_rgba(139,80,255,0.25)]">
                  {step.number}
                </div>

                <h3 className="mt-4 text-[9px] font-bold text-white sm:mt-5 sm:text-[14px]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-1 max-w-[220px] text-[7px] leading-4 text-[#8d95a2] sm:mt-2 sm:text-[12px] sm:leading-5">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

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

      {/* PRICING */}
      <section className="relative px-5 pb-8 pt-8 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <div className="mb-9 text-center sm:mb-12">
            <h2 className="text-[27px] font-bold tracking-[-0.8px] text-white sm:text-[34px]">
              Pricing
            </h2>

            <p className="mx-auto mt-3 max-w-[520px] text-[12px] leading-6 text-[#858d9a] sm:text-[14px]">
              Start exploring TraderWaves and choose the option that works for
              you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5">
            {/* GET STARTED FREE */}
            <div className="flex min-h-[190px] flex-col rounded-[12px] border border-[#7546a7]/50 bg-[#0d0b14]/80 p-3 text-center shadow-[0_0_25px_rgba(139,80,255,0.06)] transition-all duration-300 hover:border-[#925cff]/80 hover:shadow-[0_0_30px_rgba(139,80,255,0.15)] sm:min-h-[230px] sm:p-7">
              <h3 className="text-[16px] font-bold text-white sm:text-[20px]">
                Get Started Free
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-[#9299a6] sm:mt-3 sm:text-[13px]">
                Start your trading journal and explore the tools available on
                TraderWaves.
              </p>

              <div className="mt-auto pt-4 sm:pt-6">
                <a
                  href={traderWavesLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[50px] w-full items-center justify-center rounded-[8px] bg-gradient-to-r from-[#9254ff] to-[#7b36e8] px-4 py-3 text-[11px] font-bold text-white shadow-[0_8px_25px_rgba(139,80,255,0.18)] transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_25px_rgba(139,80,255,0.30)] sm:min-h-[46px] sm:px-6 sm:text-[13px]"
                >
                  Get Started Free
                </a>
              </div>
            </div>

            {/* COMING SOON */}
            <div className="flex min-h-[190px] flex-col rounded-[12px] border border-white/[0.08] bg-[#111318]/80 p-3 text-center sm:min-h-[230px] sm:p-7">
              <h3 className="text-[16px] font-bold text-white sm:text-[20px]">
                Coming Soon
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-[#9299a6] sm:mt-3 sm:text-[13px]">
                More plans and advanced options will be available soon.
              </p>

              <div className="mt-auto pt-4 sm:pt-6">
                <button
                  type="button"
                  disabled
                  className="inline-flex min-h-[50px] w-full cursor-not-allowed items-center justify-center rounded-[8px] border border-white/[0.08] bg-[#1b1d22] px-4 py-3 text-[11px] font-bold text-[#777e8a] sm:min-h-[46px] sm:px-6 sm:text-[13px]"
                >
                  Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-5 pb-16 pt-6 sm:px-6 sm:pb-28 sm:pt-12 lg:px-12 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-[850px] text-center">
          <div className="mx-auto mb-7 h-px w-[70%] bg-gradient-to-r from-transparent via-[#925cff]/35 to-transparent sm:mb-10" />

          <h2 className="text-[27px] font-bold tracking-[-0.8px] text-white sm:text-[36px]">
            Start Your Trading Journal
          </h2>

          <p className="mx-auto mt-4 max-w-[550px] text-[12px] leading-6 text-[#8f97a4] sm:text-[14px]">
            Build a better trading review process and understand your
            performance with TraderWaves.
          </p>

          <div className="mt-6 sm:mt-7">
            <a
              href={traderWavesLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center rounded-[8px] bg-gradient-to-r from-[#9254ff] to-[#7b36e8] px-10 py-3.5 text-[14px] font-bold text-white shadow-[0_8px_30px_rgba(139,80,255,0.20)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(139,80,255,0.35)] sm:min-h-[48px] sm:px-9 sm:text-[14px]"
            >
              Get Started Free
            </a>
          </div>

          <Link
            href="/#services"
            className="mt-5 inline-flex text-[11px] text-[#747d8a] transition-colors duration-300 hover:text-white sm:mt-6 sm:text-[12px]"
          >
            ← Back to Services
          </Link>
        </div>
      </section>
    </main>
  );
}