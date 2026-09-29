import Link from "next/link";

const modules = [
  {
    number: "01",
    title: "Basics of Stock Market",
    description:
      "Build a strong foundation by understanding markets, price movement, trading terminology, and the core concepts every trader should know.",
  },
  {
    number: "02",
    title: "Market Psychology & Setup",
    description:
      "Learn how trading psychology, discipline, patience, and structured trade setups play an important role in the trading process.",
  },
  {
    number: "03",
    title: "Ultimate Options Trading",
    description:
      "Understand the core concepts of options trading, market setups, risk awareness, and structured trade planning.",
  },
  {
    number: "04",
    title: "IBZ 3.0",
    description:
      "Explore the IBZ 3.0 trading framework with structured concepts designed to help you understand potential market opportunities.",
  },
  {
    number: "05",
    title: "FTC Strategy",
    description:
      "Learn the FTC Strategy and understand how its rules can be applied while reviewing potential trading setups.",
  },
  {
    number: "06",
    title: "SMC Course",
    description:
      "Study Smart Money Concepts and learn how traders analyze market structure, liquidity, and institutional price behavior.",
  },
];

const benefits = [
  {
    icon: "◈",
    title: "Structured Learning",
    description:
      "Follow organized modules instead of jumping between random trading information.",
  },
  {
    icon: "◎",
    title: "Beginner Friendly",
    description:
      "Start with foundational concepts before progressing toward more advanced material.",
  },
  {
    icon: "↗",
    title: "Trading Setups",
    description:
      "Understand how different concepts can be used when reviewing potential market setups.",
  },
  {
    icon: "◆",
    title: "Advanced Concepts",
    description:
      "Progress into strategies, psychology, options, IBZ, FTC, and Smart Money Concepts.",
  },
];

const learningPoints = [
  "Stock Market Fundamentals",
  "Trading Psychology",
  "Market Structure",
  "Trade Setup Analysis",
  "Options Trading Concepts",
  "IBZ 3.0",
  "FTC Strategy",
  "Smart Money Concepts",
];

const learningPath = [
  {
    number: "1",
    title: "Learn",
    description:
      "Start with market fundamentals and understand the core trading concepts.",
  },
  {
    number: "2",
    title: "Understand",
    description:
      "Study psychology, setups, strategies, and advanced market concepts.",
  },
  {
    number: "3",
    title: "Apply",
    description:
      "Use what you learn to develop your own structured approach to market analysis.",
  },
];

export default function MasterTraderCoursePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">

      {/* HERO */}
      <section className="relative px-4 pb-14 pt-[120px] sm:px-6 sm:pb-20 sm:pt-[145px] lg:px-12 lg:pb-24 lg:pt-[160px]">
        <div className="mx-auto max-w-[900px] text-center">

          <div className="mb-4 inline-flex rounded-full border border-[#f5c84c]/35 bg-[#f5c84c]/[0.06] px-4 py-1.5 text-[8px] font-bold uppercase tracking-[1.5px] text-[#f5c84c] sm:text-[9px]">
            Trading Education
          </div>

          <h1 className="text-[36px] font-bold leading-[1.08] tracking-[-1.5px] text-white sm:text-[52px] lg:text-[62px]">
            Master Trader
            <br />
            <span className="text-[#f5c84c]">
              Course
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-[650px] text-[12px] leading-6 text-[#9da6b5] sm:text-[15px] sm:leading-7">
            Build your trading knowledge from the fundamentals to advanced
            concepts with structured Trading Sides educational content.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">

            <a
              href="#course-modules"
              className="rounded-full bg-[#f5c84c] px-6 py-3 text-[11px] font-bold text-[#111318] shadow-[0_8px_25px_rgba(245,200,76,0.15)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,200,76,0.25)] sm:px-9 sm:py-[14px] sm:text-[13px]"
            >
              Explore Course
            </a>

            <Link
              href="/contact?service=master-trader-course"
              className="rounded-full border border-white/[0.10] bg-[#15181d]/80 px-6 py-3 text-[11px] font-semibold text-white transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#f5c84c]/40 hover:bg-[#1c2026] hover:shadow-[0_0_20px_rgba(245,200,76,0.08)] sm:px-9 sm:py-[14px] sm:text-[13px]"
            >
              Get Access
            </Link>

          </div>

        </div>
      </section>

      {/* WHY THIS COURSE */}
      <section className="relative px-3 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-[1100px]">

          <div className="mb-8 text-center sm:mb-12">
            <h2 className="text-[25px] font-bold text-[#f5c84c] sm:text-[35px]">
              Why Master Trader Course?
            </h2>

            <p className="mx-auto mt-3 max-w-[550px] text-[10px] leading-5 text-[#89929f] sm:text-[14px] sm:leading-6">
              A structured learning path designed to take you from trading
              fundamentals toward advanced concepts.
            </p>
          </div>

          {/* 2 CARDS PER ROW ON MOBILE */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">

            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="min-w-0 rounded-[10px] border border-[#806621] bg-[#14171c]/90 p-3.5 text-center transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#d4a72e] hover:bg-[#181b20] hover:shadow-[0_0_25px_rgba(245,190,55,0.11)] sm:rounded-[11px] sm:p-6"
              >
                <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-[7px] bg-[#f5c84c]/[0.08] text-[15px] text-[#f5c84c] sm:h-10 sm:w-10 sm:rounded-[9px] sm:text-[18px]">
                  {benefit.icon}
                </div>

                <h3 className="mt-3 break-words text-[10px] font-bold leading-[1.4] text-white sm:mt-4 sm:text-[13px]">
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

      {/* COURSE MODULES */}
      <section
        id="course-modules"
        className="relative scroll-mt-[100px] px-3 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mx-auto max-w-[1000px]">

          <div className="mb-8 text-center sm:mb-14">

            <p className="mb-2 text-[8px] font-semibold uppercase tracking-[2px] text-[#f5c84c] sm:text-[10px]">
              Course Curriculum
            </p>

            <h2 className="text-[26px] font-bold text-white sm:text-[36px]">
              What You&apos;ll Learn
            </h2>

            <p className="mx-auto mt-3 max-w-[560px] text-[10px] leading-5 text-[#89929f] sm:text-[14px] sm:leading-6">
              Six learning modules covering foundational and advanced
              trading topics.
            </p>

          </div>

          {/* 2 MODULE CARDS PER ROW ON MOBILE */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-4">

            {modules.map((module) => (
              <div
                key={module.number}
                className="group min-w-0 rounded-[10px] border border-white/[0.08] bg-[#12151a]/90 p-3 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#f5c84c]/50 hover:bg-[#171a1f] hover:shadow-[0_0_25px_rgba(245,200,76,0.08)] sm:rounded-[12px] sm:p-6"
              >

                <div className="flex flex-col items-start sm:flex-row sm:gap-4">

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[7px] border border-[#f5c84c]/30 bg-[#f5c84c]/[0.07] text-[9px] font-bold text-[#f5c84c] sm:h-11 sm:w-11 sm:rounded-[10px] sm:text-[12px]">
                    {module.number}
                  </div>

                  <div className="min-w-0">

                    <h3 className="mt-3 break-words text-[10px] font-bold leading-[1.4] text-white sm:mt-0 sm:text-[15px]">
                      {module.title}
                    </h3>

                    <p className="mt-2 break-words text-[8px] leading-[1.55] text-[#8d95a2] sm:text-[12px] sm:leading-6">
                      {module.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="relative px-3 py-14 sm:px-6 sm:py-20 lg:px-12">
        <div className="mx-auto max-w-[900px] rounded-[12px] border border-[#f5c84c]/40 bg-[#12151a]/90 p-4 transition-[border-color,box-shadow] duration-300 hover:border-[#f5c84c]/60 hover:shadow-[0_0_30px_rgba(245,200,76,0.07)] sm:rounded-[14px] sm:p-8 lg:p-10">

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-14">

            {/* LEFT */}
            <div>

              <p className="text-[8px] font-semibold uppercase tracking-[2px] text-[#f5c84c] sm:text-[9px]">
                Complete Education
              </p>

              <h2 className="mt-3 text-[25px] font-bold leading-tight text-white sm:text-[32px]">
                Build Your Trading
                <br />
                Knowledge
              </h2>

              <p className="mt-4 text-[10px] leading-5 text-[#8d95a2] sm:text-[12px] sm:leading-6">
                Learn the concepts behind trading setups and develop a
                more structured understanding of market analysis.
              </p>

              <Link
                href="/contact?service=master-trader-course"
                className="mt-6 inline-flex rounded-[7px] bg-[#f5c84c] px-6 py-3 text-[10px] font-bold text-[#111318] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_22px_rgba(245,200,76,0.22)] sm:px-7 sm:text-[11px]"
              >
                Get Course Access
              </Link>

            </div>

            {/* RIGHT - 2 PER ROW MOBILE */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">

              {learningPoints.map((point) => (
                <div
                  key={point}
                  className="flex min-w-0 items-center gap-2 rounded-[8px] border border-white/[0.06] bg-[#0d1015]/80 px-2.5 py-2.5 transition-[border-color,background-color,box-shadow] duration-300 hover:border-[#f5c84c]/30 hover:bg-[#15181d] hover:shadow-[0_0_15px_rgba(245,200,76,0.05)] sm:gap-3 sm:px-4 sm:py-3"
                >
                  <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#31cf82]/40 bg-[#31cf82]/10 text-[7px] text-[#40df91] sm:h-5 sm:w-5 sm:text-[9px]">
                    ✓
                  </span>

                  <span className="min-w-0 break-words text-[8px] font-medium leading-[1.4] text-[#e2e5e9] sm:text-[11px]">
                    {point}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* LEARNING PATH */}
      <section className="relative px-3 py-14 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[900px]">

          <div className="mb-9 text-center sm:mb-12">

            <h2 className="text-[25px] font-bold text-[#f5c84c] sm:text-[34px]">
              Your Learning Path
            </h2>

            <p className="mx-auto mt-3 max-w-[500px] text-[10px] leading-5 text-[#89929f] sm:text-[13px]">
              Progress from the basics toward more advanced trading concepts.
            </p>

          </div>

          {/* 3 STEPS IN ONE ROW ON MOBILE */}
          <div className="relative grid grid-cols-3 gap-2 sm:gap-5">

            {/* CONNECTING LINE */}
            <div className="absolute left-[16%] right-[16%] top-[18px] h-px bg-gradient-to-r from-transparent via-[#f5c84c]/45 to-transparent sm:top-[22px]" />

            {learningPath.map((step) => (
              <div
                key={step.number}
                className="relative z-10 min-w-0 text-center"
              >

                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-[#f5c84c] text-[10px] font-bold text-[#111318] shadow-[0_0_20px_rgba(245,200,76,0.15)] sm:h-11 sm:w-11 sm:text-[12px]">
                  {step.number}
                </div>

                <h3 className="mt-3 break-words text-[10px] font-bold leading-[1.4] text-white sm:mt-4 sm:text-[13px]">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-[210px] break-words text-[8px] leading-[1.5] text-[#8d95a2] sm:text-[11px] sm:leading-5">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative px-4 pb-24 pt-14 text-center sm:px-6 sm:pb-32 sm:pt-20 lg:px-12">
        <div className="mx-auto max-w-[720px]">

          <div className="mx-auto mb-9 h-px w-[70%] bg-gradient-to-r from-transparent via-[#f5c84c]/40 to-transparent sm:mb-10" />

          <p className="text-[8px] font-semibold uppercase tracking-[2px] text-[#f5c84c] sm:text-[9px]">
            Start Learning
          </p>

          <h2 className="mt-3 text-[27px] font-bold leading-tight text-white sm:text-[38px]">
            Take Your Trading Knowledge
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            To The Next Level
          </h2>

          <p className="mx-auto mt-4 max-w-[540px] text-[10px] leading-5 text-[#929aa7] sm:text-[13px] sm:leading-6">
            Explore the Master Trader Course and build a stronger
            understanding of trading from fundamentals to advanced concepts.
          </p>

          <Link
            href="/contact?service=master-trader-course"
            className="mt-7 inline-flex rounded-[7px] bg-[#f5c84c] px-8 py-3 text-[10px] font-bold text-[#111318] shadow-[0_5px_20px_rgba(245,200,76,0.16)] transition-[background-color,box-shadow] duration-300 hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,200,76,0.25)] sm:px-9 sm:text-[12px]"
          >
            Get Course Access
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