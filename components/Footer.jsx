import Link from "next/link";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current" strokeWidth="1.8">
    <path d="M20 11.5a8 8 0 0 1-11.8 7L4 19.5l1.1-4A8 8 0 1 1 20 11.5Z" />
    <path d="M9 8.5c.4 2.3 2.2 4.1 4.5 4.8" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current" strokeWidth="1.8">
    <rect x="3" y="6" width="18" height="12" rx="4" />
    <path d="m10 9 5 3-5 3Z" />
  </svg>
);

const XIcon = () => (
  <span className="text-[15px] font-medium leading-none">𝕏</span>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current" strokeWidth="1.8">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-none stroke-current" strokeWidth="1.8">
    <rect x="4" y="9" width="4" height="11" />
    <path d="M6 4.5v.01" strokeWidth="3" strokeLinecap="round" />
    <path d="M12 20V9h4v1.8c.8-1.2 2-2 3.7-2 2.5 0 3.3 1.7 3.3 4.4V20h-4v-6c0-1.4-.4-2.3-1.6-2.3-1.4 0-1.8 1-1.8 2.7V20Z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="1.8">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="1.8">
    <path d="M5 4h4l2 5-2.5 1.5a15 15 0 0 0 5 5L15 13l5 2v4c0 1.1-.9 2-2 2C9.7 21 3 14.3 3 6c0-1.1.9-2 2-2Z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-none stroke-current" strokeWidth="1.8">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/923030703449",
    Icon: WhatsAppIcon,
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    Icon: YoutubeIcon,
  },
  {
    name: "X",
    href: "https://x.com/",
    Icon: XIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    Icon: LinkedinIcon,
  },
];

export default function Footer() {
  return (
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
                className="flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-[#8a6a1d]/70 bg-[#0b0d11]/70 text-white transition-[border-color,box-shadow] duration-300 hover:border-[#f4c44e] hover:shadow-[0_0_22px_rgba(244,196,78,0.16)]"
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

                <span>+92 303 0703449</span>
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
            <Link
              href="/privacy-policy"
              className="transition-colors duration-300 hover:text-[#f4c44e]"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors duration-300 hover:text-[#f4c44e]"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}