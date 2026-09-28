"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Abhi frontend only
    // Baad mein yahan email submission connect kar denge
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="relative flex min-h-screen items-center py-24"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-12">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-[38px] font-bold tracking-[-1px] text-[#f5c84c] md:text-[46px]">
            Get In Touch
          </h2>

          <p className="mx-auto mt-3 max-w-[600px] text-[15px] leading-7 text-[#9da6b5] md:text-[17px]">
            Have a question or want access to our trading services?
            Send us a message and our team will get back to you.
          </p>
        </div>

        {/* Form Card */}
        <div className="mx-auto max-w-[820px]">
          <div className="rounded-[14px] border border-[#8a6a1d]/70 bg-[#101216]/90 p-6 shadow-[0_15px_50px_rgba(0,0,0,0.25)] backdrop-blur-md sm:p-8 lg:p-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[13px] font-medium text-[#d9dce2]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-[9px] border border-white/[0.08] bg-[#181a20]/90 px-4 py-[13px] text-[14px] text-white outline-none transition duration-300 placeholder:text-[#686f7c] focus:border-[#d6aa3c] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[13px] font-medium text-[#d9dce2]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-[9px] border border-white/[0.08] bg-[#181a20]/90 px-4 py-[13px] text-[14px] text-white outline-none transition duration-300 placeholder:text-[#686f7c] focus:border-[#d6aa3c] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)]"
                  />
                </div>

              </div>

              {/* Phone + Service */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-[13px] font-medium text-[#d9dce2]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 890"
                    className="w-full rounded-[9px] border border-white/[0.08] bg-[#181a20]/90 px-4 py-[13px] text-[14px] text-white outline-none transition duration-300 placeholder:text-[#686f7c] focus:border-[#d6aa3c] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)]"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[13px] font-medium text-[#d9dce2]"
                  >
                    Interested In
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="w-full cursor-pointer rounded-[9px] border border-white/[0.08] bg-[#181a20]/90 px-4 py-[13px] text-[14px] text-[#d9dce2] outline-none transition duration-300 focus:border-[#d6aa3c]"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#181a20]"
                    >
                      Select a service
                    </option>

                    <option
                      value="VIP Signals"
                      className="bg-[#181a20]"
                    >
                      VIP Signals
                    </option>

                    <option
                      value="Master Trader Course"
                      className="bg-[#181a20]"
                    >
                      Master Trader Course
                    </option>

                    <option
                      value="Traders Paradise Indicator"
                      className="bg-[#181a20]"
                    >
                      Traders Paradise Indicator
                    </option>

                    <option
                      value="Trading Journal"
                      className="bg-[#181a20]"
                    >
                      Trading Journal
                    </option>

                    <option
                      value="Other"
                      className="bg-[#181a20]"
                    >
                      Other
                    </option>
                  </select>
                </div>

              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-[13px] font-medium text-[#d9dce2]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-[9px] border border-white/[0.08] bg-[#181a20]/90 px-4 py-[13px] text-[14px] leading-6 text-white outline-none transition duration-300 placeholder:text-[#686f7c] focus:border-[#d6aa3c] focus:shadow-[0_0_20px_rgba(245,190,55,0.08)]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full rounded-[9px] bg-gradient-to-r from-[#f6c83e] to-[#ffcc7a] py-[14px] text-[14px] font-bold text-[#151515] shadow-[0_7px_25px_rgba(245,190,55,0.14)] transition duration-300 hover:brightness-110 hover:shadow-[0_8px_30px_rgba(245,190,55,0.25)]"
              >
                Send Message
              </button>

              {/* Success */}
              {submitted && (
                <div className="rounded-[8px] border border-[#3ac98b]/30 bg-[#10261d] px-4 py-3 text-center text-[13px] text-[#58e3a7]">
                  Message submitted successfully!
                </div>
              )}

            </form>
          </div>
        </div>

      </div>
    </section>
  );
}