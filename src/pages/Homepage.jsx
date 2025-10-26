// ScaleAccountingLanding.jsx
import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import HighlightsSection from "../components/HighlightsSection"
import Services from "../components/Services";

// Icons
import {
  FaUtensils, FaStethoscope, FaGasPump, FaShoppingCart, FaBriefcase,
  FaHardHat, FaLandmark, FaHandsHelping, FaLaptopCode
} from "react-icons/fa";


export default function ScaleAccountingLanding() {
  
  // Text-only blog posts
  const posts = [
    {
      id: 1,
      title: "S-Corp vs. LLC: Which Structure Lowers Your Tax Burden?",
      date: "Jan 10, 2026",
      tag: "Entity Strategy",
      excerpt:
        "Choosing the right entity structure can reduce self-employment taxes and optimize owner compensation. Here’s how to think about S-Corp elections in 2026.",
      href: "#",
    },
    {
      id: 2,
      title: "2026 Payroll Checklist: W-2, 1099-NEC, and State Filings",
      date: "Jan 05, 2026",
      tag: "Payroll",
      excerpt:
        "Deadlines, forms, and common pitfalls for employers—what you need in one simple checklist to stay compliant and avoid penalties.",
      href: "#",
    },
    {
      id: 3,
      title: "Cloud Accounting Stack: Our Favorite 5 Automations",
      date: "Dec 18, 2025",
      tag: "Systems",
      excerpt:
        "From automated bill pay to bank rules and receipt capture—these tools save hours each month and keep your books audit-ready.",
      href: "#",
    },
    {
      id: 4,
      title: "DCAA Basics for New GovCon Firms",
      date: "Dec 02, 2025",
      tag: "GovCon",
      excerpt:
        "Timekeeping, indirect rates, and incurred cost submissions—what contracting officers expect and how to prepare from day one.",
      href: "#",
    },
  ];

  return (
    <div className="text-slate-800">
      {/* Top utility bar */}
      

      {/* HERO */}
      <section
        className="relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center py-20">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#fdb81e] font-medium">
              Brightel Tax Services – Business Accounting Experts
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold text-white drop-shadow-md">
              Smart Accounting. Real Compliance.{" "}
              <span className="text-[#fdb81e]">Scalable Growth.</span>
            </h2>
            <p className="mt-4 text-slate-100 max-w-xl drop-shadow">
              We provide comprehensive Accounting, Bookkeeping, Payroll, and Tax
              Compliance for businesses—helping you stay audit-ready, compliant, and
              confident in every financial decision.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {/* Schedule a Call → /contact */}
              <RouterLink
                to="/contact"
                className="rounded-lg bg-[#005ea2] hover:bg-[#0b4778] px-4 py-2.5 text-white"
              >
                Schedule a Call
              </RouterLink>

              {/* Keep as file download (or change to RouterLink if you want it to go to /contact too) */}
              <a
                href="/Key-Dates.pdf"
                className="rounded-lg border border-[#fdb81e] text-[#fdb81e] hover:bg-[#fdb81e]/10 px-4 py-2.5"
              >
                Download Key Dates Calendar
              </a>
            </div>
          </div>
        </div>

        {/* Highlights under hero */}
        <div className="relative z-10">
          <HighlightsSection />
        </div>
      </section>

      {/* WHO WE ARE */}
      <section id="who" className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#1a4480]">
              Who We Are
            </h3>
            <p className="mt-4 text-slate-700 leading-relaxed">
              At Brightel Tax Services, we’re more than tax preparers — we’re your financial
              partners. Our team helps small and mid-sized companies gain control of their
              finances through accurate reporting, proactive compliance, and scalable accounting
              systems.
            </p>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Whether you’re a retail franchise, medical office, convenience store, or government
              contractor, we ensure your books are precise, your filings are on time, and your
              financials reflect the real health of your business.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/about.png"
              alt="Brightel Tax Services team – who we are"
              className="w-full h-[420px] rounded-xl object-cover shadow-md"
              style={{ objectPosition: "center" }}
            />
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section id="services" className="bg-[#f5f6f7]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h3 className="text-xl font-semibold text-[#1a4480]">Our Core Services</h3>
          <Services />
        </div>
      </section>

      {/* WIDE CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="/Cta.png"
              alt="Brightel CTA"
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-[#000000]/50" />
            <div className="absolute inset-0 p-4 sm:p-8 md:p-10 flex items-center">
              <div className="text-white max-w-lg">
                <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-[#fdb81e]">
                  Compliance without chaos
                </p>
                <h3 className="mt-2 text-xl sm:text-2xl font-semibold leading-snug">
                  Put your accounting, payroll, and filings in expert hands.
                </h3>
                {/* Book Your Consultation → /contact */}
                <RouterLink
                  to="/contact"
                  className="mt-4 inline-block rounded-lg bg-[#fdb81e] px-4 py-2 text-[#1a4480] font-medium hover:brightness-95"
                >
                  Book Your Consultation
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h3 className="text-lg font-semibold text-[#1a4480]">Industries We Serve</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Restaurants & Franchise Owners", icon: <FaUtensils className="text-[#fdb81e] text-2xl" /> },
              { name: "Medical & Dental Offices", icon: <FaStethoscope className="text-[#fdb81e] text-2xl" /> },
              { name: "Convenience Stores & Gas Stations", icon: <FaGasPump className="text-[#fdb81e] text-2xl" /> },
              { name: "Retail & E-Commerce", icon: <FaShoppingCart className="text-[#fdb81e] text-2xl" /> },
              { name: "Professional & Service Firms", icon: <FaBriefcase className="text-[#fdb81e] text-2xl" /> },
              { name: "Construction & Trade Businesses", icon: <FaHardHat className="text-[#fdb81e] text-2xl" /> },
              { name: "Government Contractors", icon: <FaLandmark className="text-[#fdb81e] text-2xl" /> },
              { name: "Nonprofits", icon: <FaHandsHelping className="text-[#fdb81e] text-2xl" /> },
              { name: "Technology & Startups", icon: <FaLaptopCode className="text-[#fdb81e] text-2xl" /> },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 rounded-xl border border-slate-200 p-5 bg-white hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 mt-1">{item.icon}</div>
                <div>
                  <h4 className="font-medium text-[#1a4480]">{item.name}</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    Specialized bookkeeping, compliance, and reporting tailored to your model.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY DATES / COUNTDOWN */}
      <section id="dates" className="bg-[#f5f6f7]">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            {/* LEFT — Table */}
            <div>
              <h3 className="text-lg font-semibold text-[#1a4480]">Tax Year Countdown & Key Filing Dates</h3>
              <div className="mt-3 rounded-lg bg-white border border-slate-200 p-4">
                <p className="text-sm">
                  <span className="font-semibold">Current Countdown:</span> 72 Days Left to File Corporate Returns (March 15, 2026)
                </p>
                <p className="text-sm mt-1">Schedule your tax review today to avoid last-minute penalties.</p>
              </div>

              <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
                <table className="min-w-full bg-white text-sm">
                  <thead>
                    <tr className="bg-[#d9e8f6] text-left">
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Deadline</th>
                      <th className="px-4 py-2">Applies To</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Jan 15", "Q4 Estimated Tax Payment", "All Businesses"],
                      ["Jan 31", "W-2 & 1099 Forms Due to Employees/Contractors", "Employers"],
                      ["Mar 15", "S-Corp & Partnership Returns (1120-S, 1065)", "S Corps, Partnerships"],
                      ["Apr 15", "C-Corp Returns & Q1 Estimated Taxes", "C Corporations"],
                      ["Jun 15", "Q2 Estimated Taxes", "All Businesses"],
                      ["Sep 15", "Q3 Estimated Taxes", "All Businesses"],
                      ["Dec 31", "Year-End Payroll, 401(k), and Expense Adjustments", "All Employers"],
                    ].map((r, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-4 py-2">{r[0]}</td>
                        <td className="px-4 py-2">{r[1]}</td>
                        <td className="px-4 py-2">{r[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* RIGHT — Image */}
            <div className="flex justify-center items-stretch">
              <img
                src="/table.png"
                alt="Tax filing deadlines illustration"
                className="w-full h-full rounded-xl shadow-md object-cover"
                style={{ minHeight: "100%", maxHeight: "600px" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* IRS RESOURCES */}
      <section id="resources" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h3 className="text-lg font-semibold">IRS Resources & Quick Links</h3>
          <p className="text-sm text-slate-700 mt-1">Save time — access commonly used IRS business forms directly from our site.</p>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              ["Form 941","Employer’s Quarterly Federal Tax Return","https://www.irs.gov/pub/irs-pdf/f941.pdf"],
              ["Form 940","Employer’s Annual Federal Unemployment (FUTA) Tax Return","https://www.irs.gov/pub/irs-pdf/f940.pdf"],
              ["Form W-2","Wage and Tax Statement","https://www.irs.gov/pub/irs-pdf/fw2.pdf"],
              ["Form W-3","Transmittal of Wage and Tax Statements","https://www.irs.gov/pub/irs-pdf/fw3.pdf"],
              ["Form 1099-NEC","Nonemployee Compensation","https://www.irs.gov/pub/irs-pdf/f1099nec.pdf"],
              ["Form 1065","U.S. Return of Partnership Income","https://www.irs.gov/pub/irs-pdf/f1065.pdf"],
              ["Form 1120-S","U.S. Income Tax Return for an S Corporation","https://www.irs.gov/pub/irs-pdf/f1120s.pdf"],
              ["Form 1120","U.S. Corporation Income Tax Return","https://www.irs.gov/pub/irs-pdf/f1120.pdf"],
              ["Form SS-4","Application for Employer Identification Number (EIN)","https://www.irs.gov/pub/irs-pdf/fss4.pdf"],
              ["Form 8829","Expenses for Business Use of Your Home","https://www.irs.gov/pub/irs-pdf/f8829.pdf"],
            ].map((row,i)=>(
              <a
                key={i}
                href={row[2]}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-slate-200 p-4 hover:bg-[#d9e8f6]/40 transition"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#fdb81e] text-[#1a4480] grid place-items-center font-bold">★</div>
                  <div>
                    <p className="font-medium">{row[0]}</p>
                    <p className="text-sm text-slate-600">{row[1]}</p>
                    <span className="text-xs text-[#005ea2]">Open PDF on IRS.gov →</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA (in-page content) */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid md:grid-cols-[1fr_.8fr] gap-6 items-center">
            <div className="rounded-xl bg-white border border-slate-200 p-6">
              <h4 className="font-semibold">Service Areas</h4>
              <p className="text-sm text-slate-700 mt-2">Remote clients nationwide</p>

              <div className="mt-6 rounded-lg bg-[#1a4480] text-white p-5">
                <p className="text-sm">Let’s Simplify Your Accounting</p>
                <p className="text-sm mt-1">Call: (XXX) XXX-XXXX • Email: info@brighteltax.com</p>
                {/* Schedule Your Consultation → /contact */}
                <RouterLink
                  to="/contact"
                  className="mt-3 inline-block rounded-md bg-[#fdb81e] text-[#1a4480] px-3 py-2 text-sm font-medium hover:brightness-95"
                >
                  Schedule Your Consultation
                </RouterLink>
              </div>
            </div>
            <div>
              <img src="/Contact.png" alt="Contact" className="w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* BLOGS — text-only cards (no images) */}
      <section id="blogs" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-[#1a4480]">From the Blog</h3>
              <p className="text-sm text-slate-600 mt-1">
                Practical guidance on tax, payroll, cloud systems, and compliance.
              </p>
            </div>
            <a href="#" className="hidden sm:inline text-sm text-[#005ea2] hover:underline">
              View all posts →
            </a>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {posts.map((p) => (
              <article
                key={p.id}
                className="group rounded-xl border border-slate-200 bg-white hover:shadow-md transition-shadow"
              >
                <div className="p-4 border-b border-slate-100 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#d9e8f6] text-[#0b4778] grid place-items-center text-sm font-semibold">
                    {p.tag.slice(0, 1)}
                  </div>
                  <div className="ml-auto text-[11px] text-slate-500">{p.date}</div>
                </div>

                <div className="p-4">
                  <span className="inline-flex items-center rounded-full bg-[#f6f9fc] text-[#0b4778] px-2 py-0.5 text-[11px] font-medium">
                    {p.tag}
                  </span>
                  <h4 className="mt-2 font-semibold text-slate-900 group-hover:text-[#005ea2]">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.excerpt}</p>
                  <a
                    href={p.href}
                    className="mt-3 inline-flex items-center text-sm text-[#005ea2] hover:underline"
                  >
                    Read more →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="sm:hidden mt-6">
            <a href="#" className="block text-sm text-center text-[#005ea2] hover:underline">
              View all posts →
            </a>
          </div>
        </div>
      </section>

    
    </div>
  );
}
