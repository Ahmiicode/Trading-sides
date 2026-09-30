"use client";

import Link from "next/link";
import { useState } from "react";

const TelegramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] fill-current"
  >
    <path d="M21.8 3.2 18.6 20c-.2 1.2-.9 1.5-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.4-.1-.6-.6-.2L6.2 13.8l-4.8-1.5c-1-.3-1-1 .2-1.5L20.4 3c.9-.3 1.7.2 1.4.2Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] fill-current"
  >
    <path d="M12 2a9.7 9.7 0 0 0-8.4 14.6L2 22l5.6-1.5A9.8 9.8 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-3.3.9.9-3.2-.2-.3A8 8 0 1 1 12 19.7Zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-1.4-.7-2.4-1.3-3.3-2.9-.2-.3.2-.3.7-1.1.1-.2 0-.4 0-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7 1-.1 1.4-.7 1.6-1.3.2-.6.2-1.1.1-1.3-.1-.2-.2-.2-.4-.3Z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] fill-current"
  >
    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[17px] w-[17px] fill-none stroke-current"
    strokeWidth="1.8"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle
      cx="17.5"
      cy="6.5"
      r="1"
      className="fill-current stroke-none"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] fill-none stroke-current"
    strokeWidth="1.8"
  >
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] fill-none stroke-current"
    strokeWidth="1.8"
  >
    <path d="M5 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4c0 1.1-.9 2-2 2C9.7 21 3 14.3 3 6c0-1.1.9-2 2-2Z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-[18px] w-[18px] fill-none stroke-current"
    strokeWidth="1.8"
  >
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const CloseIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

const socialLinks = [
  {
    name: "Telegram",
    href: "https://t.me/Tradingsidesofficial",
    Icon: TelegramIcon,
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb8mpn16LwHixN2tza0L",
    Icon: WhatsAppIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/@tradingsides?si=O0Io1nwB_ie02jED",
    Icon: YoutubeIcon,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/tradingsides?stkn=ZTJ6dHhvODdoZjJq",
    Icon: InstagramIcon,
  },
];

const privacySections = [
  {
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          We may collect information about you in a variety of ways. The
          information we may collect on the Site includes:
        </p>

        <p className="mt-4 font-semibold text-white">
          a. Personal Data:
        </p>

        <p className="mt-2">
          When you register for an account, we collect personally identifiable
          information, such as your name, email address, and a password. This
          information is necessary to create and manage your user account.
        </p>

        <p className="mt-4 font-semibold text-white">
          b. User Interaction Data:
        </p>

        <p className="mt-2">
          If you are logged into your account, we may track your interactions
          with our products and services. For example, we record which
          courses, products, or affiliate links you click on. This helps us
          understand what content is most valuable to our users. This data
          includes your User ID, the item you clicked, and a timestamp.
        </p>

        <p className="mt-4 font-semibold text-white">
          c. Derivative Data:
        </p>

        <p className="mt-2">
          Information our servers automatically collect when you access the
          Site, such as your IP address, browser type, operating system, access
          times, and the pages you have viewed directly before and after
          accessing the Site.
        </p>
      </>
    ),
  },
  {
    title: "2. How We Use Your Information",
    content: (
      <>
        <p>
          Having accurate information about you permits us to provide you with
          a smooth, efficient, and customized experience. Specifically, we may
          use information collected about you to:
        </p>

        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Create and manage your account.</li>
          <li>Process payments and verify transactions for product access.</li>
          <li>
            Grant access to the Trading SidesView Indicator on your specified
            TradingView account.
          </li>
          <li>
            Analyze user activity to improve our website and product offerings.
          </li>
          <li>
            Send you administrative emails, such as account verification,
            purchase confirmations, and support responses.
          </li>
          <li>
            Respond to your customer service requests and support needs.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Disclosure of Your Information",
    content: (
      <>
        <p>
          We do not share your personal information with third parties except
          in the following situations:
        </p>

        <p className="mt-4 font-semibold text-white">
          By Law or to Protect Rights:
        </p>

        <p className="mt-2">
          If we believe the release of information about you is necessary to
          respond to legal process, to investigate or remedy potential
          violations of our policies, or to protect the rights, property, and
          safety of others.
        </p>

        <p className="mt-4 font-semibold text-white">
          Third-Party Service Providers:
        </p>

        <p className="mt-2">
          We may share your information with third parties that perform
          services for us or on our behalf, including payment processing (e.g.,
          payment gateways) and data analysis (e.g., Supabase).
        </p>
      </>
    ),
  },
  {
    title: "4. Data Security",
    content: (
      <p>
        We use administrative, technical, and physical security measures to
        help protect your personal information. We store your data on secure
        servers provided by Supabase. While we have taken reasonable steps to
        secure the personal information you provide to us, please be aware
        that despite our efforts, no security measures are perfect or
        impenetrable.
      </p>
    ),
  },
  {
    title: "5. Contact Us",
    content: (
      <p>
        If you have questions or comments about this Privacy Policy, please
        contact us at:
        <br />
        <br />
        <span className="font-semibold text-white">
          Trading Sides
        </span>
        <br />
        Email: support@tradingsides.com
      </p>
    ),
  },
];

const termsSections = [
  {
    title: "1. Accounts",
    content: (
      <p>
        When you create an account with us, you guarantee that you are above
        the age of 18, and that the information you provide us is accurate,
        complete, and current at all times. You are responsible for maintaining
        the confidentiality of your account and password.
      </p>
    ),
  },
  {
    title: "2. Digital Products and Payments",
    content: (
      <>
        <p>
          We offer digital products, including but not limited to the "Trading
          Sides View Indicator".
        </p>

        <p className="mt-4 font-semibold text-white">
          a. Payment:
        </p>

        <p className="mt-2">
          You agree to pay all fees for purchases you make on the Site. All
          payments shall be in Indian Rupees (PKR) or Cryptocurrency (USDT) as
          specified on the payment page.
        </p>

        <p className="mt-4 font-semibold text-white">
          b. Verification and Access:
        </p>

        <p className="mt-2">
          Access to the Traders ParadiseView Indicator is granted manually
          after we successfully verify your payment. You are required to
          provide an accurate TradingView ID and a valid Transaction ID (ID#
          Ref ID or Crypto TxID). We aim to grant access within 24-48 business
          hours of successful verification. Providing incorrect information
          will result in delays or denial of access.
        </p>
      </>
    ),
  },
  {
    title: "3. Refund Policy",
    content: (
      <p>
        All sales of digital products, including the Traders ParadiseView
        Indicator, are final and non-refundable.
        <br />
        <br />
        Due to the digital nature of our products and the instant access
        provided upon verification, we have a strict no refund policy. By
        making a purchase, you acknowledge and agree that you will not be
        entitled to a refund for any reason.
      </p>
    ),
  },
  {
    title: "4. Intellectual Property",
    content: (
      <p>
        The Service and its original content, features, and functionality are
        and will remain the exclusive property of Trading Sides. The Trading
        Sides View Indicator, our courses, and all associated materials are
        protected by copyright and other intellectual property laws. You may not
        distribute, modify, transmit, reuse, download, repost, copy, or use
        said materials, whether in whole or in part, for commercial purposes or
        for personal gain, without express advance written permission from us.
      </p>
    ),
  },
  {
    title: "5. High-Risk Investment & Educational Purpose Disclaimer",
    content: (
      <>
        <p className="font-semibold text-white">
          a. Educational Purpose Only:
        </p>

        <p className="mt-2">
          All content, products, services, and communications provided by
          Trading Sides are for educational and informational purposes only. We
          are not registered as a securities broker dealer or an investment
          adviser. No information provided should be construed as investment,
          financial, tax, or legal advice. We do not provide personalized
          recommendations or views as to whether a trading approach is suited
          to the financial needs of a specific individual.
        </p>

        <p className="mt-4 font-semibold text-white">
          b. No Buy/Sell Advice & No Promised Returns:
        </p>

        <p className="mt-2">
          The information provided is not, and should not be regarded as, a
          recommendation to buy or sell any security or financial instrument.
          We do not promise, guarantee, or imply any returns, profits, or
          success from your trading activities. You are solely responsible for
          all trading and investment decisions you make.
        </p>

        <p className="mt-4 font-semibold text-white">
          c. Inherent Risks of Trading:
        </p>

        <p className="mt-2">
          Trading in financial markets involves substantial risk and is not
          suitable for every investor. An investor could potentially lose all
          or more than their initial investment. Risk capital is money that can
          be lost without jeopardizing one's financial security or lifestyle.
          You should only trade with money you can afford to lose. Past
          performance is not indicative of future results.
        </p>
      </>
    ),
  },
  {
    title: "6. Limitation of Liability",
    content: (
      <p>
        In no event shall Trading Sides, nor its directors, employees, partners,
        or agents, be liable for any indirect, incidental, special,
        consequential or punitive damages, including without limitation, loss
        of profits, data, use, goodwill, or other intangible losses, resulting
        from your access to or use of or inability to access or use the
        Service, based on the information provided.
      </p>
    ),
  },
  {
    title: "7. Payments",
    content: (
      <p>
        The payment for our digital products can be made via ID# or
        Cryptocurrency (USDT). By making a payment, you agree to provide
        accurate information for verification purposes. We are not responsible
        for any delays or issues arising from incorrect payment details
        provided by you. The payment gateway and processing services are
        provided by third-party providers, and your use of these services is
        subject to their respective terms and conditions. We are not liable for
        any issues arising from the payment processing by these third-party
        providers.
      </p>
    ),
  },
  {
    title: "8. Changes to Terms",
    content: (
      <p>
        We reserve the right, at our sole discretion, to modify or replace
        these Terms at any time.
      </p>
    ),
  },
  {
    title: "9. Contact Us",
    content: (
      <p>
        If you have any questions about these Terms, please contact us at{" "}
        <span className="text-white">
          support@tradingsides.com
        </span>
      </p>
    ),
  },
];

export default function Footer() {
  const [modal, setModal] = useState(null);

  const openModal = (type) => {
    setModal(type);
  };

  const closeModal = () => {
    setModal(null);
  };

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/[0.03]">
        <div className="mx-auto max-w-[1440px] px-6 pb-8 pt-14 lg:px-12 lg:pt-16">

          {/* TOP */}
          <div>
            <h2 className="text-[21px] font-bold text-[#f2f3f5] sm:text-[23px]">
              Trading Sides
            </h2>

            <p className="mt-4 max-w-[900px] text-[13px] leading-6 text-[#d5d8de] sm:text-[14px]">
              Empowering traders worldwide with cutting-edge strategies,
              professional education, and unmatched support.
            </p>

            {/* SOCIAL ICONS */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              {socialLinks.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#8a6a1d]/70 bg-[#0b0d11]/70 text-white transition-[border-color,box-shadow,color] duration-300 hover:border-[#f4c44e] hover:text-[#f4c44e] hover:shadow-[0_0_22px_rgba(244,196,78,0.16)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* MIDDLE */}
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:mt-9 lg:grid-cols-[1fr_1fr]">

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-[16px] font-bold text-[#f1f2f4]">
                Quick Links
              </h3>

              <div className="mt-5 flex flex-col items-start gap-4">
                <Link
                  href="/#services"
                  className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
                >
                  Services
                </Link>

                <Link
                  href="/#platforms"
                  className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
                >
                  Platforms
                </Link>

                <Link
                  href="/#social"
                  className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
                >
                  Social
                </Link>

                <Link
                  href="/giveaway"
                  className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
                >
                  Giveaway
                </Link>

                <Link
                  href="/contact"
                  className="text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-[16px] font-bold text-[#f1f2f4]">
                Contact
              </h3>

              <div className="mt-5 space-y-4">

                {/* EMAIL */}
                <a
                  href="mailto:support@tradingsides.com"
                  className="flex items-center gap-3 text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
                >
                  <span className="text-[#f4c44e]">
                    <MailIcon />
                  </span>

                  <span className="break-all">
                    support@tradingsides.com
                  </span>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+923030703449"
                  className="flex items-center gap-3 text-[14px] text-[#e1e3e7] transition-colors duration-300 hover:text-[#f4c44e]"
                >
                  <span className="text-[#f4c44e]">
                    <PhoneIcon />
                  </span>

                  <span>+92 303 565656</span>
                </a>

                {/* LOCATION */}
                <div className="flex items-center gap-3 text-[14px] text-[#e1e3e7]">
                  <span className="text-[#f4c44e]">
                    <LocationIcon />
                  </span>

                  <span>Pakistan</span>
                </div>

              </div>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="mt-12 h-px w-full bg-white/[0.06]" />

          {/* BOTTOM */}
          <div className="flex flex-col gap-5 pt-7 text-[12px] text-[#d3d6dc] sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Trading Sides. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-7 gap-y-3">

              {/* PRIVACY POLICY */}
              <button
                type="button"
                onClick={() => openModal("privacy")}
                className="transition-colors duration-300 hover:text-[#f4c44e]"
              >
                Privacy Policy
              </button>

              {/* TERMS */}
              <button
                type="button"
                onClick={() => openModal("terms")}
                className="transition-colors duration-300 hover:text-[#f4c44e]"
              >
                Terms of Service
              </button>

            </div>
          </div>

        </div>
      </footer>

      {/* POLICY / TERMS MODAL */}
      {modal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative flex max-h-[88vh] w-full max-w-[850px] flex-col overflow-hidden rounded-[16px] border border-[#8a6a1d]/40 bg-[#0b0d11] shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >

            {/* MODAL HEADER */}
            <div className="flex shrink-0 items-center justify-between border-b border-white/[0.07] px-5 py-5 sm:px-7">
              <h2 className="text-[19px] font-bold text-white sm:text-[23px]">
                {modal === "privacy"
                  ? "Privacy Policy"
                  : "Terms of Service"}
              </h2>

              <button
                type="button"
                onClick={closeModal}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-white/[0.08] text-[#aeb4be] transition-all duration-300 hover:border-[#f4c44e]/60 hover:text-[#f4c44e]"
              >
                <CloseIcon />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="scrollbar-gold overflow-y-auto px-5 py-6 text-[12px] leading-6 text-[#aeb4be] sm:px-7 sm:py-7 sm:text-[13px] sm:leading-7">
              {modal === "privacy" ? (
                <>
                  <p className="mb-7">
                    Welcome to Trading Sides ("we," "our," "us"). We are
                    committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you visit our website, use our services,
                    or purchase our products like the Trading SidesView
                    Indicator.
                  </p>

                  <p className="mb-7">
                    This Privacy Policy is drafted with reference to Pakistan’s
                    Personal Data Protection Bill, 2023, and applicable privacy
                    and data protection laws of Pakistan.
                  </p>

                  <div className="space-y-7">
                    {privacySections.map((section) => (
                      <section key={section.title}>
                        <h3 className="mb-2 text-[14px] font-bold text-white sm:text-[15px]">
                          {section.title}
                        </h3>

                        {section.content}
                      </section>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <p className="mb-7">
                    Please read these Terms of Service ("Terms") carefully
                    before using the Trading Sides website and services (the
                    "Service") operated by Trading Sides ("us", "we", or
                    "our").
                  </p>

                  <p className="mb-7">
                    Your access to and use of the Service is conditioned upon
                    your acceptance of and compliance with these Terms. These
                    Terms apply to all visitors, users, and others who wish to
                    access or use the Service.
                  </p>

                  <div className="space-y-7">
                    {termsSections.map((section) => (
                      <section key={section.title}>
                        <h3 className="mb-2 text-[14px] font-bold text-white sm:text-[15px]">
                          {section.title}
                        </h3>

                        {section.content}
                      </section>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* MODAL FOOTER */}
            <div className="flex shrink-0 justify-end border-t border-white/[0.07] px-5 py-4 sm:px-7">
              <button
                type="button"
                onClick={closeModal}
                className="rounded-[8px] bg-gradient-to-r from-[#b88924] to-[#f4c44e] px-6 py-2.5 text-[12px] font-bold text-black transition-all duration-300 hover:brightness-110"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}