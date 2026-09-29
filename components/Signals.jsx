import Link from "next/link";

const services = [
  {
    id: "trading-journal",
    title: (
      <>
        TRADIN<span className="text-[#9b63ff]">JOURNAL</span>
      </>
    ),
    subtitle: "AI-Powered Trading Journal",
    features: [
      "Auto-sync trades from MT5 brokers",
      "AI behavioral scoring & coaching",
      "50+ performance metrics & analytics",
      "Trade replay with chart visualization",
      "Daily/weekly AI summaries",
      "Equity curves & drawdown analysis",
      "Custom strategies & playbooks",
      "Share cards for social media",
    ],
    button: "View Details",
    featured: true,
  },

  {
    id: "vip-signals",
    title: "VIP SIGNALS",
    subtitle: (
      <>
        Exclusive trading signals with
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        High accuracy
      </>
    ),
    features: [
      "Real-time market alerts",
      "Entry & exit points",
      "Risk management",
      "24/7 support",
    ],
    button: "View Details",
    featured: false,
  },

  {
    id: "master-trader-course",
    title: (
      <>
        MASTER TRADER
        <br />
        COURSE
      </>
    ),
    subtitle: (
      <>
        Complete trading education
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        from market experts
      </>
    ),
    features: [
      "Basic of Stock Market",
      "Market Psychology & Setup",
      "Ultimate Options Trading",
      "IBZ 3.0",
      "FTC STRATEGY",
      "SMC COURSE",
    ],
    button: "View Details",
    featured: false,
  },

  {
    id: "trading-indicator",
    title: (
      <>
        TRADERS PARADISE
        <br />
        INDICATOR
      </>
    ),
    subtitle: (
      <>
        Join elite traders in our exclusive
        <br className="hidden sm:block" />
        <span className="sm:hidden"> </span>
        community
      </>
    ),
    features: [
      "Historical backtesting",
      "Multiple timeframes",
      "Custom indicators",
      "Performance metrics",
    ],
    button: "View Details",
    featured: false,
  },
];

export default function Signal() {
  return (
    <section id="services" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">

        {/* HEADING */}
        <div className="mb-10 text-center sm:mb-14 lg:mb-16">
          <h2 className="text-[32px] font-bold tracking-[-1px] text-[#f5c84c] sm:text-[38px] md:text-[46px]">
            Your Arsenal
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-[14px] leading-6 text-[#9da6b5] sm:text-[16px] md:text-[18px]">
            Choose your path to trading mastery with our Free services
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.id}
              tabIndex={0}
              className={`relative flex w-full flex-col rounded-[12px] border bg-[#1b1d22]/95 px-5 py-6 outline-none transition-[border-color,box-shadow] duration-300 sm:px-6 sm:py-7 xl:px-8 xl:py-8 ${
                service.featured
                  ? "border-[#7046a7] shadow-[0_0_20px_rgba(139,80,255,0.08)] hover:border-[#925cff] hover:shadow-[0_0_35px_rgba(139,80,255,0.22)] focus:border-[#925cff] focus:shadow-[0_0_35px_rgba(139,80,255,0.22)]"
                  : "border-[#806621] shadow-[0_0_20px_rgba(245,190,55,0.06)] hover:border-[#d4a72e] hover:shadow-[0_0_35px_rgba(245,190,55,0.20)] focus:border-[#d4a72e] focus:shadow-[0_0_35px_rgba(245,190,55,0.20)]"
              }`}
            >
              {/* EARLY ACCESS */}
              {service.featured && (
                <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#754bb2] bg-[#30204d] px-3 py-[3px] text-[8px] font-bold text-[#b99aff] sm:-top-[11px] sm:px-4 sm:py-[4px] sm:text-[9px]">
                  ★ EARLY ACCESS
                </div>
              )}

              {/* TITLE */}
              <h3
                className={`text-center text-[19px] font-bold leading-[1.3] sm:text-[21px] xl:text-[22px] ${
                  service.featured ? "text-white" : "text-[#ffd054]"
                }`}
              >
                {service.title}
              </h3>

              {/* SUBTITLE */}
              <div className="mt-4 text-center text-[13px] leading-5 text-[#9da6b5] sm:mt-5 sm:text-[14px] sm:leading-6 xl:mt-6">
                {service.subtitle}
              </div>

              {/* FEATURES */}
              <div className="mt-5 space-y-3 sm:space-y-3.5 xl:space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-2.5 sm:gap-3"
                  >
                    <span className="mt-[6px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#a68b3e] sm:mt-[7px] sm:h-[7px] sm:w-[7px]" />

                    <p className="text-[12px] leading-[1.5] text-[#e4e5e7] sm:text-[13px]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* DIVIDER */}
              <div className="mb-4 mt-5 h-px w-full bg-white/[0.08] sm:mb-5 sm:mt-6" />

              {/* DETAIL PAGE BUTTON */}
              <Link
                href={`/services/${service.id}`}
                className={`block w-full rounded-[9px] py-[11px] text-center text-[12px] font-semibold transition-[background-color,box-shadow,filter] duration-300 sm:rounded-[10px] sm:py-[12px] sm:text-[13px] ${
                  service.featured
                    ? "bg-gradient-to-r from-[#8d50ff] to-[#7d36eb] text-white shadow-[0_5px_18px_rgba(139,80,255,0.12)] hover:brightness-110 hover:shadow-[0_0_25px_rgba(139,80,255,0.30)]"
                    : "bg-[#ffd054] text-[#111318] shadow-[0_5px_18px_rgba(245,190,55,0.10)] hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,190,55,0.25)]"
                }`}
              >
                {service.button}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}