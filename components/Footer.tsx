import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand — logo on surface card */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ lineHeight: 0 }}
              >
                <Image
                  src="/logo.png"
                  alt="Barge Bros"
                  width={160}
                  height={160}
                  className="h-28 w-28 object-contain"
                />
              </div>
            </Link>
            <p className="text-[#F5F3EE]/50 text-base leading-relaxed max-w-xs">
              Keeping Okanagan lakefront properties clean, safe, and ready — so you can spend your time on the water, not maintaining it.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="label-text text-[#FFCE00] mb-5">Navigation</p>
            <ul className="flex flex-row flex-wrap gap-x-6 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#F5F3EE]/60 hover:text-[#F5F3EE] transition-colors text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="label-text text-[#FFCE00] mb-5">Get in Touch</p>
            <ul className="flex flex-row flex-wrap gap-x-6 gap-y-3">
              <li>
                <a
                  href="tel:7788059888"
                  className="flex items-center gap-2 bg-[#FFCE00] text-[#0D0D0D] px-4 py-2 rounded-full font-semibold text-base hover:bg-yellow-300 hover:scale-[1.03] transition-all duration-200"
                >
                  <Phone size={13} />
                  778-805-9888
                </a>
              </li>
              <li>
                <a
                  href="mailto:bargebros@gmail.com"
                  className="flex items-center gap-2 text-[#F5F3EE]/60 hover:text-[#F5F3EE] transition-colors text-base"
                >
                  <Mail size={13} />
                  bargebros@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-[#F5F3EE]/60 text-base">
                  <MapPin size={13} />
                  The Okanagan, BC
                </span>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/barge_bros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#F5F3EE]/60 hover:text-[#FFCE00] transition-colors text-base"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                  </svg>
                  @barge_bros
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61573260419190"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#F5F3EE]/60 hover:text-[#FFCE00] transition-colors text-base"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                  Barge Bros
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#888888] text-sm">
            © {new Date().getFullYear()} Barge Bros. All rights reserved.
          </p>
          <p className="text-[#888888] text-sm">
            Okanagan, BC · bargebros.ca
          </p>
        </div>
      </div>
    </footer>
  );
}
