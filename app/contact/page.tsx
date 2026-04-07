import { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FadeUp } from "@/components/FadeUp";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | Barge Bros — Book Dock & Lakefront Services Okanagan",
  description:
    "Get a free quote for dock cleaning, repairs, and lakefront services in the Okanagan. Call 778-805-9888 or fill out our contact form.",
};

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-[#0D0D0D] pt-36 pb-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <FadeUp>
            <p className="label-text text-[#FFCE00] mb-4">Get in Touch</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h1 className="font-heading text-[clamp(56px,7vw,88px)] text-[#F5F3EE] leading-tight max-w-2xl">
              LET&rsquo;S TALK ABOUT YOUR DOCK
            </h1>
          </FadeUp>
        </div>
      </section>

      {/* Split layout */}
      <section className="bg-[#F5F3EE] py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <FadeUp>
              <h2 className="font-semibold text-[#0D0D0D] text-2xl mb-8">Request a Free Quote</h2>
              <ContactForm />
            </FadeUp>

            {/* Info */}
            <FadeUp delay={0.15}>
              <div className="flex flex-col gap-10">
                <div>
                  <h2 className="font-semibold text-[#0D0D0D] text-2xl mb-6">Contact Info</h2>
                  <ul className="flex flex-col gap-5">
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0D0D0D] rounded-lg flex items-center justify-center shrink-0">
                        <Phone size={16} className="text-[#FFCE00]" />
                      </div>
                      <div>
                        <p className="label-text text-[#888888] mb-1">Phone</p>
                        <a href="tel:7788059888" className="text-[#0D0D0D] font-semibold text-lg hover:text-[#FFCE00] transition-colors">
                          778-805-9888
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0D0D0D] rounded-lg flex items-center justify-center shrink-0">
                        <Mail size={16} className="text-[#FFCE00]" />
                      </div>
                      <div>
                        <p className="label-text text-[#888888] mb-1">Email</p>
                        <a href="mailto:bargebros@gmail.com" className="text-[#0D0D0D] font-semibold hover:text-[#FFCE00] transition-colors">
                          bargebros@gmail.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0D0D0D] rounded-lg flex items-center justify-center shrink-0">
                        <MapPin size={16} className="text-[#FFCE00]" />
                      </div>
                      <div>
                        <p className="label-text text-[#888888] mb-1">Service Area</p>
                        <p className="text-[#0D0D0D] font-semibold">
                          Okanagan Lake
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#0D0D0D] rounded-lg flex items-center justify-center shrink-0">
                        <Clock size={16} className="text-[#FFCE00]" />
                      </div>
                      <div>
                        <p className="label-text text-[#888888] mb-1">Hours</p>
                        <p className="text-[#0D0D0D] font-semibold">Mon–Sat · 7am–6pm</p>
                        <p className="text-[#888888] text-sm mt-0.5">Spring through Fall (weather permitting)</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Direct CTA */}
                <div className="bg-[#0D0D0D] rounded-xl p-8">
                  <p className="font-heading text-[36px] text-[#FFCE00] leading-tight mb-2">
                    PREFER TO CALL?
                  </p>
                  <p className="text-[#F5F3EE]/70 text-sm mb-5">
                    Most bookings happen over the phone. Give us a call and we&rsquo;ll sort it out in five minutes.
                  </p>
                  <a
                    href="tel:7788059888"
                    className="inline-flex items-center gap-2 bg-[#FFCE00] text-[#0D0D0D] px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
                  >
                    <Phone size={16} />
                    778-805-9888
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
