import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Register all icons
library.add(fas, fab);

const Footer = () => {
  return (
    <footer className="bg-[#005D1F] text-[#C0C0C0] font-sans">
      <div className="container mx-auto px-6 py-12">
        <hr className="border-[#D4AF37] mb-8" />

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Contact Info */}
          <div className="space-y-4">
            {[
              { icon: "phone-alt", title: "Call Us", text: "(XXX) XXX-XXXX" },
              { icon: "envelope", title: "Email", text: "info@brighteltax.com" },
              { icon: "map-marker-alt", title: "Address", text: "Northern Virginia" },
              { icon: "calendar", title: "Schedule Consultation", text: "" },
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4">
                <div className="text-[#D4AF37] text-2xl">
                  <FontAwesomeIcon icon={["fas", item.icon]} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  {item.text && <p className="text-[#C0C0C0]">{item.text}</p>}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "home" },
                { label: "About", to: "about" },
                { label: "Services", to: "services" },
                { label: "Resources", to: "resources" },
                { label: "Contact", to: "contact" },
              ].map(({ label, to }, i) => (
                <li key={i}>
                  <a
                    href={`/#${to}`}
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-xl mb-4">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Accounting & Bookkeeping",
                "Payroll Accounting & Reporting",
                "Government Contract Accounting",
                "Systems & Cloud Accounting",
                "Business Accounting & Advisory",
              ].map((service, i) => (
                <li key={i}>
                  <a
                    href="/#services"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-xl mb-4">About Brightel Tax</h3>
            <p className="text-sm leading-relaxed text-[#C0C0C0]">
              Brightel Tax Services provides comprehensive accounting, bookkeeping,
              payroll, and tax compliance solutions designed exclusively for
              businesses. We help companies maintain accurate records, stay compliant,
              and make confident financial decisions across Northern Virginia,
              Washington D.C., Maryland, and beyond.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4AF37] py-6 bg-[#00481A]">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>
            © 2025{" "}
            <span className="text-[#D4AF37] font-semibold">
              Brightel Tax Services
            </span>{" "}
            | Smart Accounting. Real Compliance. Scalable Growth.
          </p>

          {/* Social Media + Scroll Up */}
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Social Icons */}
            <div className="flex space-x-3">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map(
                (icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 rounded-full border border-[#C0C0C0] flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#005D1F] hover:border-[#D4AF37] transition-colors"
                  >
                    <FontAwesomeIcon icon={["fab", icon]} />
                  </a>
                )
              )}
            </div>

            {/* Back to Top */}
            <a
              href="#home"
              className="bg-[#D4AF37] w-9 h-9 rounded-full flex items-center justify-center ml-4 hover:bg-[#C0C0C0] transition"
              title="Back to Top"
            >
              <FontAwesomeIcon icon={["fas", "arrow-up"]} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
