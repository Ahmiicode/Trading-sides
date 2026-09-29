import Link from "next/link";

const serviceNames = {
  "trading-journal": "Trading Journal",
  "vip-signals": "VIP Signals",
  "master-trader-course": "Master Trader Course",
  "trading-indicator": "Trading Indicator",
};

const otherServices = [
  {
    id: "trading-journal",
    title: "Trading Journal",
    icon: "◫",
    description:
      "AI-powered trading journal with trade tracking, analytics and behavioral insights.",
    featured: true,
  },
  {
    id: "vip-signals",
    title: "VIP Signals",
    icon: "⚡",
    description:
      "Premium trading signals with real-time alerts, entry points, targets and risk management.",
    featured: false,
  },
  {
    id: "master-trader-course",
    title: "Master Trader Course",
    icon: "◎",
    description:
      "Structured trading education covering market basics, psychology and advanced strategies.",
    featured: false,
  },
  {
    id: "trading-indicator",
    title: "Trading Indicator",
    icon: "↗",
    description:
      "Trading indicator tools with multiple timeframes, backtesting and performance analysis.",
    featured: false,
  },
];

export default async function ContactPage({ searchParams }) {
  const params = await searchParams;

  const selectedService = params?.service || "";

  const serviceName =
    serviceNames[selectedService] || "Trading Service";

  return (
    <main className="min-h-screen text-white">

      {/* ==================================================
          CONTACT FORM - FIRST SECTION
      ================================================== */}
      <section className="relative overflow-hidden px-4 pb-20 pt-[105px] sm:px-6 sm:pb-24 sm:pt-[125px] lg:px-12 lg:pb-28 lg:pt-[135px]">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute left-1/2 top-[35%] h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5c84c]/[0.04] blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[900px]">

          {/* BACK */}
          <Link
            href={
              selectedService
                ? `/services/${selectedService}`
                : "/#services"
            }
            className="inline-flex items-center gap-2 text-[11px] font-medium text-[#8f97a5] transition-colors duration-300 hover:text-[#f5c84c] sm:text-[13px]"
          >
            <span>←</span>
            Back
          </Link>

          {/* HEADING */}
          <div className="mb-7 mt-7 text-center sm:mb-10 sm:mt-9">

            <span className="inline-flex rounded-full border border-[#806621] bg-[#292313]/80 px-3 py-[6px] text-[8px] font-bold uppercase tracking-[1.7px] text-[#f5c84c] sm:px-4 sm:py-[7px] sm:text-[9px] sm:tracking-[2px]">
              Contact Us
            </span>

            <h1 className="mt-4 text-[31px] font-bold leading-[1.1] tracking-[-1px] text-[#f5c84c] sm:mt-5 sm:text-[44px] lg:text-[50px]">
              Send Us a Message
            </h1>

            <p className="mx-auto mt-3 max-w-[580px] text-[11px] leading-5 text-[#9da6b5] sm:mt-4 sm:text-[14px] sm:leading-6">
              Fill in your details below and our team will get back to you.
            </p>

          </div>

          {/* FORM CARD */}
          <div className="rounded-[14px] border border-[#806621] bg-[#14171d]/95 p-4 shadow-[0_0_45px_rgba(245,190,55,0.06)] sm:rounded-[18px] sm:p-8 lg:p-10">

            {/* SELECTED SERVICE */}
            {selectedService && (
              <div className="mb-6 flex items-center justify-between gap-3 rounded-[10px] border border-[#806621]/70 bg-[#201d13] px-4 py-3 sm:mb-8 sm:rounded-[12px] sm:px-5 sm:py-4">

                <div>
                  <p className="text-[7px] font-bold uppercase tracking-[1.3px] text-[#8f97a5] sm:text-[9px] sm:tracking-[1.5px]">
                    You&apos;re interested in
                  </p>

                  <p className="mt-1 text-[12px] font-bold text-[#f5c84c] sm:mt-2 sm:text-[15px]">
                    {serviceName}
                  </p>
                </div>

                <div className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full border border-[#806621] bg-[#292313] text-[13px] text-[#f5c84c] sm:h-[38px] sm:w-[38px] sm:text-[16px]">
                  ✓
                </div>

              </div>
            )}

            <form className="space-y-4 sm:space-y-5">

              {/* NAME + EMAIL */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[10px] font-medium text-[#c7cbd2] sm:text-[11px]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="h-[45px] w-full rounded-[8px] border border-white/[0.10] bg-[#0d1015] px-4 text-[12px] text-white outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-[#555d69] focus:border-[#c99c2e] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)] sm:h-[48px] sm:rounded-[9px] sm:text-[13px]"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-medium text-[#c7cbd2] sm:text-[11px]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="h-[45px] w-full rounded-[8px] border border-white/[0.10] bg-[#0d1015] px-4 text-[12px] text-white outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-[#555d69] focus:border-[#c99c2e] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)] sm:h-[48px] sm:rounded-[9px] sm:text-[13px]"
                  />
                </div>

              </div>

              {/* PHONE + SERVICE */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[10px] font-medium text-[#c7cbd2] sm:text-[11px]"
                  >
                    Phone / WhatsApp
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+92 300 0000000"
                    className="h-[45px] w-full rounded-[8px] border border-white/[0.10] bg-[#0d1015] px-4 text-[12px] text-white outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-[#555d69] focus:border-[#c99c2e] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)] sm:h-[48px] sm:rounded-[9px] sm:text-[13px]"
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[10px] font-medium text-[#c7cbd2] sm:text-[11px]"
                  >
                    Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue={selectedService}
                    className="h-[45px] w-full rounded-[8px] border border-white/[0.10] bg-[#0d1015] px-4 text-[12px] text-white outline-none transition-[border-color,box-shadow] duration-300 focus:border-[#c99c2e] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)] sm:h-[48px] sm:rounded-[9px] sm:text-[13px]"
                  >
                    <option value="">
                      Select a service
                    </option>

                    <option value="trading-journal">
                      Trading Journal
                    </option>

                    <option value="vip-signals">
                      VIP Signals
                    </option>

                    <option value="master-trader-course">
                      Master Trader Course
                    </option>

                    <option value="trading-indicator">
                      Trading Indicator
                    </option>
                  </select>
                </div>

              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[10px] font-medium text-[#c7cbd2] sm:text-[11px]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us how we can help..."
                  className="w-full resize-none rounded-[8px] border border-white/[0.10] bg-[#0d1015] px-4 py-3 text-[12px] leading-6 text-white outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-[#555d69] focus:border-[#c99c2e] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)] sm:rounded-[9px] sm:py-4 sm:text-[13px]"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="w-full rounded-[9px] bg-gradient-to-r from-[#f5c33e] to-[#ffd778] py-[12px] text-[11px] font-bold text-[#111318] shadow-[0_8px_25px_rgba(245,190,55,0.12)] transition-[filter,box-shadow] duration-300 hover:brightness-110 hover:shadow-[0_0_30px_rgba(245,190,55,0.25)] sm:py-[14px] sm:text-[13px]"
              >
                Send Message
              </button>

            </form>

            <p className="mt-3 text-center text-[8px] leading-5 text-[#666e7b] sm:mt-4 sm:text-[10px]">
              By submitting this form, you agree to be contacted regarding
              your selected service.
            </p>

          </div>
        </div>
      </section>

      {/* ==================================================
          GET IN TOUCH
      ================================================== */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto max-w-[1100px]">

          <div className="text-center">
            <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#f5c84c]">
              Get In Touch
            </span>

            <h2 className="mt-3 text-[27px] font-bold text-white sm:text-[36px]">
              We&apos;re Here To Help
            </h2>

            <p className="mx-auto mt-3 max-w-[580px] text-[11px] leading-6 text-[#9da6b5] sm:mt-4 sm:text-[14px]">
              Have questions about our trading services? Our team is here to
              help you with the next steps.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-5">

            {/* SUPPORT */}
            <div className="flex items-center gap-4 rounded-[13px] border border-[#806621]/70 bg-[#14171d]/95 p-4 shadow-[0_0_25px_rgba(245,190,55,0.04)] sm:p-6">

              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] border border-[#806621] bg-[#292313] text-[#f5c84c]">
                ◉
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[1.3px] text-[#777f8d] sm:text-[10px]">
                  Support
                </p>

                <p className="mt-1 text-[12px] font-semibold text-white sm:text-[14px]">
                  Online Support
                </p>
              </div>

            </div>

            {/* RESPONSE */}
            <div className="flex items-center gap-4 rounded-[13px] border border-[#806621]/70 bg-[#14171d]/95 p-4 shadow-[0_0_25px_rgba(245,190,55,0.04)] sm:p-6">

              <div className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-[10px] border border-[#806621] bg-[#292313] text-[#f5c84c]">
                ↗
              </div>

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[1.3px] text-[#777f8d] sm:text-[10px]">
                  Response
                </p>

                <p className="mt-1 text-[11px] font-semibold leading-5 text-white sm:text-[13px]">
                  We&apos;ll get back to you as soon as possible
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          OTHER SERVICES
      ================================================== */}
      <section className="px-4 pb-24 sm:px-6 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-[1300px]">

          {/* HEADING */}
          <div className="text-center">

            <span className="text-[9px] font-bold uppercase tracking-[2px] text-[#f5c84c] sm:text-[10px]">
              Explore More
            </span>

            <h2 className="mt-3 text-[28px] font-bold tracking-[-1px] text-[#f5c84c] sm:text-[38px] lg:text-[44px]">
              Our Other Services
            </h2>

            <p className="mx-auto mt-3 max-w-[620px] text-[11px] leading-6 text-[#9da6b5] sm:mt-4 sm:text-[15px]">
              Explore our trading tools, education and premium services.
            </p>

          </div>

          {/* SERVICE CARDS */}
          <div className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">

            {otherServices.map((service) => (
              <div
                key={service.id}
                className={`flex h-full flex-col rounded-[14px] border bg-[#14171d]/95 p-5 transition-[border-color,box-shadow] duration-300 sm:p-6 ${
                  service.featured
                    ? "border-[#7046a7] shadow-[0_0_25px_rgba(139,80,255,0.06)] hover:border-[#925cff] hover:shadow-[0_0_35px_rgba(139,80,255,0.18)]"
                    : "border-[#806621] shadow-[0_0_25px_rgba(245,190,55,0.05)] hover:border-[#d4a72e] hover:shadow-[0_0_35px_rgba(245,190,55,0.16)]"
                }`}
              >

                {/* ICON */}
                <div
                  className={`flex h-[42px] w-[42px] items-center justify-center rounded-[10px] border text-[18px] ${
                    service.featured
                      ? "border-[#7046a7] bg-[#2a1c40] text-[#a978ff]"
                      : "border-[#806621] bg-[#292313] text-[#f5c84c]"
                  }`}
                >
                  {service.icon}
                </div>

                {/* TITLE */}
                <h3
                  className={`mt-5 text-[18px] font-bold ${
                    service.featured
                      ? "text-[#b990ff]"
                      : "text-[#f5c84c]"
                  }`}
                >
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-3 text-[12px] leading-6 text-[#929aa7]">
                  {service.description}
                </p>

                <div className="flex-1" />

                {/* VIEW DETAILS */}
                <Link
                  href={`/services/${service.id}`}
                  className={`mt-6 block w-full rounded-[9px] py-[11px] text-center text-[12px] font-semibold transition-[background-color,box-shadow,filter] duration-300 ${
                    service.featured
                      ? "bg-gradient-to-r from-[#8d50ff] to-[#7134db] text-white hover:brightness-110 hover:shadow-[0_0_25px_rgba(139,80,255,0.28)]"
                      : "bg-[#ffd054] text-[#111318] hover:bg-[#ffda70] hover:shadow-[0_0_25px_rgba(245,190,55,0.25)]"
                  }`}
                >
                  View Details
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}