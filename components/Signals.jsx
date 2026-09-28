import Link from "next/link";

const services = [
  {
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
    button: "Open Journal",
    link: "/#contact",
    featured: true,
  },

  {
    title: "VIP SIGNALS",
    subtitle: (
      <>
        Exclusive trading signals with
        <br />
        High accuracy
      </>
    ),
    features: [
      "Real-time market alerts",
      "Entry & exit points",
      "Risk management",
      "24/7 support",
    ],
    button: "Get Access",
    link: "/#contact",
    featured: false,
  },

  {
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
        <br />
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
    button: "Get Access",
    link: "/#contact",
    featured: false,
  },

  {
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
        <br />
        community
      </>
    ),
    features: [
      "Historical backtesting",
      "Multiple timeframes",
      "Custom indicators",
      "Performance metrics",
    ],
    button: "Get Access",
    link: "/#contact",
    featured: false,
  },
];

export default function Signal() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-[40px] font-bold tracking-[-1px] text-[#f5c84c] md:text-[46px]">
            Your Arsenal
          </h2>

          <p className="mt-3 text-[16px] text-[#9da6b5] md:text-[18px]">
            Choose your path to trading mastery with our Free services
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative flex min-h-[520px] flex-col rounded-[12px] border bg-[#1b1d22]/95 px-8 py-9 transition-[border-color,box-shadow] duration-300 ${
                service.featured
                  ? "border-[#7046a7] hover:border-[#925cff] hover:shadow-[0_0_35px_rgba(139,80,255,0.18)]"
                  : "border-[#806621] hover:border-[#d4a72e] hover:shadow-[0_0_35px_rgba(245,190,55,0.18)]"
              }`}
            >

              {/* Early Access */}
              {service.featured && (
                <div className="absolute -top-[11px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#754bb2] bg-[#30204d] px-4 py-[4px] text-[9px] font-bold text-[#b99aff]">
                  ★ EARLY ACCESS
                </div>
              )}

              {/* Title */}
              <h3
                className={`text-center text-[22px] font-bold leading-[1.35] ${
                  service.featured
                    ? "text-white"
                    : "text-[#ffd054]"
                }`}
              >
                {service.title}
              </h3>

              {/* Subtitle */}
              <div className="mt-6 min-h-[52px] text-center text-[14px] leading-6 text-[#9da6b5]">
                {service.subtitle}
              </div>

              {/* Features */}
              <div className="mt-5 space-y-4">
                {service.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-[7px] h-[7px] w-[7px] shrink-0 rounded-full bg-[#a68b3e]" />

                    <p className="text-[13px] leading-[1.45] text-[#e4e5e7]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Push Button Bottom */}
              <div className="flex-1" />

              {/* Divider */}
              <div className="mb-6 mt-7 h-px w-full bg-white/[0.08]" />

              {/* Button */}
              <Link
                href={service.link}
                className={`block w-full rounded-[10px] py-[13px] text-center text-[13px] font-semibold transition-all duration-300 ${
                  service.featured
                    ? "bg-gradient-to-r from-[#8d50ff] to-[#7d36eb] text-white hover:brightness-110 hover:shadow-[0_0_25px_rgba(139,80,255,0.25)]"
                    : "bg-[#ffd054] text-[#111318] hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,190,55,0.20)]"
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