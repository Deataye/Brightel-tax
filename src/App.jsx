import React from "react";
import OrbitBrightel from "./Components/OrbitBrightel";
import { FaCalculator, FaUsersCog, FaCloud, FaHandshake, FaRegChartBar, FaFileInvoiceDollar } from "react-icons/fa";


// Generic image placeholder – swap for your <img/> or Next.js <Image/>
const ImageSlot = ({ label = "IMAGE", className = "", ratio = "[--ar:56.25%]" }) => (
  <div
    className={`relative w-full overflow-hidden bg-[#f5f6f7] rounded-xl ${className}`}
    style={{ "--ar": "56.25%" }}
  >
    <div className={`pt-[var(--ar)]`}></div>
    <div className="absolute inset-0 grid place-items-center text-xs uppercase tracking-widest text-[#5c5c5c]">
      {label}
    </div>
  </div>
);

const Icon = ({ className = "" }) => (
  <div className={`h-10 w-10 rounded-full bg-[#fdb81e] text-[#1a4480] grid place-items-center font-bold ${className}`}>
    ★
  </div>
);

const StatDot = () => <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#fdb81e] align-middle" />;

export default function ScaleAccountingLanding() {
  return (
    <div className="font-sans text-slate-800">
      {/* Top utility bar */}
      <div className="w-full bg-[#1a4480] text-white text-[11px]">
        <div className="mx-auto max-w-7xl px-4 py-2 flex items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            {/* Removed address/locations */}
            <span className="hidden sm:inline opacity-90">info@brighteltax.com</span>
          </div>
          <div className="flex items-center gap-2">
            {/* Removed Client Login */}
            <button className="rounded-md bg-[#fdb81e] px-3 py-1.5 text-[#1a4480] font-medium hover:brightness-95">
              (XXX) XXX-XXXX
            </button>
          </div>
        </div>
      </div>

      {/* Header / Nav */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-[#005ea2]/20">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-6 justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-36 rounded bg-[#1a4480] grid place-items-center text-white text-[11px]">
              BRIGHTEL TAX SERVICES
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-[#005ea2]" href="#services">Services</a>
            <a className="hover:text-[#005ea2]" href="#who">Who We Are</a>
            <a className="hover:text-[#005ea2]" href="#industries">Industries</a>
            <a className="hover:text-[#005ea2]" href="#dates">Key Dates</a>
            <a className="hover:text-[#005ea2]" href="#resources">IRS Resources</a>
            <a className="hover:text-[#005ea2]" href="#contact">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden sm:inline rounded-lg border border-[#005ea2] text-[#005ea2] px-3 py-2 text-sm hover:bg-[#d9e8f6]">
              Book Your Consultation
            </button>
            {/* Removed: Get a Quote button */}
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-[#f5f6f7]">
        <div className="mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-10 items-center py-14">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-[#005ea2]">Brightel Tax Services – Business Accounting Experts</p>
            <h1 className="mt-2 text-3xl/tight sm:text-4xl md:text-5xl font-semibold">
              Smart Accounting. Real Compliance. <span className="text-[#005ea2]">Scalable Growth.</span>
            </h1>
            <p className="mt-4 text-slate-700 max-w-xl">
              We provide comprehensive Accounting, Bookkeeping, Payroll, and Tax Compliance for businesses—helping you stay audit-ready,
              compliant, and confident in every financial decision.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-lg bg-[#005ea2] hover:bg-[#0b4778] px-4 py-2.5 text-white">Schedule a Call</button>
              <button className="rounded-lg border border-[#005ea2] text-[#005ea2] hover:bg-[#d9e8f6] px-4 py-2.5">
                Download Key Dates Calendar
              </button>
            </div>
          </div>
          <div>
            <OrbitBrightel />
          </div>
        </div>

        {/* 3 quick highlights */}
        <div className="mx-auto max-w-7xl px-4 pb-10 grid sm:grid-cols-3 gap-4">
          {[
            { t: "Business-Only Focus", d: "We serve companies, not individuals—precision books, on-time filings, audit-ready data." },
            { t: "Local + Federal Expertise", d: "Northern VA, DC, MD know-how with multi-state and DCAA compliance." },
            { t: "Cloud-Based Systems", d: "Real-time access, automated reporting, secure document sharing." },
          ].map((c, i) => (
            <div key={i} className="rounded-xl bg-white p-5 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3"><Icon /><h3 className="font-semibold">{c.t}</h3></div>
              <p className="mt-3 text-sm text-slate-600">{c.d}</p>
              <div className="mt-4 text-xs text-slate-500 flex items-center gap-2"><StatDot /> <span>Learn More</span></div>
            </div>
          ))}
        </div>
      </section>

{/* WHO WE ARE */}
<section id="who" className="relative bg-white">
  <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-10 items-stretch">
    
    {/* LEFT — Text */}
    <div className="flex flex-col justify-center h-full">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#1a4480] max-w-2xl">Who We Are</h2>

      <p className="mt-4 text-slate-700 leading-relaxed">
        At Brightel Tax Services, we’re more than tax preparers — we’re your financial partners. Our team helps small and mid-sized
        companies gain control of their finances through accurate reporting, proactive compliance, and scalable accounting systems.
        Whether you’re a retail franchise, medical office, convenience store, or government contractor, we ensure your books are precise,
        your filings are on time, and your financials reflect the real health of your business.
      </p>

      <p className="mt-4 text-slate-700 leading-relaxed">
        Our approach is built on consistency and transparency. We utilize cutting-edge accounting technology to simplify processes,
        reduce manual errors, and provide you with clear, real-time financial visibility. Every client receives personalized attention,
        timely communication, and a dedicated accounting professional focused on your business growth.
      </p>

      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-200 p-4 bg-[#f9fafb]">
          <p className="text-sm font-semibold text-[#1a4480]">Coverage</p>
          <p className="mt-2 text-sm text-slate-600">
            Serving clients locally and nationwide with remote capability, ensuring seamless communication and compliance across all regions.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 p-4 bg-[#f9fafb]">
          <p className="text-sm font-semibold text-[#1a4480]">Outcomes</p>
          <p className="mt-2 text-sm text-slate-600">
            Clean books, timely filings, and decision-ready financials—month after month, backed by experienced professionals who care about your success.
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT — Image */}
    <div className="flex justify-center items-center h-full">
      <img
        src="/about.png"
        alt="Brightel Tax Services team – who we are"
        className="w-full h-full rounded-xl object-cover shadow-md"
        style={{ minHeight: "420px", maxHeight: "580px", objectPosition: "center" }}
      />
    </div>
  </div>
</section>




      {/* CORE SERVICES */}
     {/* CORE SERVICES */}
<section id="services" className="bg-[#f5f6f7]">
  <div className="mx-auto max-w-7xl px-4 py-12">
    <h3 className="text-lg font-semibold text-[#1a4480]">Our Core Services</h3>

    <div className="mt-6 grid md:grid-cols-2 gap-6">
      {[
        {
          icon: <FaCalculator className="text-[#1a4480] text-3xl" />,
          t: "Accounting & Bookkeeping",
          d: "Day-to-day bookkeeping, GL maintenance, AP/AR, sales & inventory tracking, sales tax filing, bank/CC recs, financial statements, cash-flow & profitability reporting, month-end & year-end close."
        },
        {
          icon: <FaFileInvoiceDollar className="text-[#1a4480] text-3xl" />,
          t: "Payroll Accounting & Reporting",
          d: "Payroll processing for all employee types; federal and state payroll tax filings (941, 940, W-2, W-3, SUTA); withholdings, benefits, year-end payroll reports."
        },
        {
          icon: <FaRegChartBar className="text-[#1a4480] text-3xl" />,
          t: "Government Contract Accounting (DCAA-Compliant)",
          d: "Compliant bookkeeping, indirect rate calculations (fringe/overhead/G&A), timekeeping & labor allocation, incurred cost submissions, forward pricing, audit readiness."
        },
        {
          icon: <FaCloud className="text-[#1a4480] text-3xl" />,
          t: "Systems & Cloud Accounting",
          d: "QuickBooks Desktop/Online, Deltek Costpoint & GCS Premier, Sage, Xero. Real-time access, automation, secure sharing, scalable setups."
        },
        {
          icon: <FaHandshake className="text-[#1a4480] text-3xl" />,
          t: "Business Accounting & Advisory",
          d: "System setup & process optimization, budgeting & forecasting, cash-flow management, expense analysis, bank-readiness, and annual filings & tax prep for LLCs, Corporations (C & S), Partnerships, Nonprofits, and Sole Proprietors."
        },
        {
          icon: <FaUsersCog className="text-[#1a4480] text-3xl" />,
          t: "Transparent Pricing & Dedicated Accountants",
          d: "Clear fees, proactive communication, and a dedicated team focused on compliance and growth."
        },
      ].map((card, i) => (
        <div
          key={i}
          className="rounded-xl bg-white p-6 shadow-sm border border-slate-200 flex items-start gap-4 hover:shadow-md transition"
        >
          <div className="flex-shrink-0">{card.icon}</div>
          <div>
            <h4 className="font-semibold text-[#1a4480]">{card.t}</h4>
            <p className="mt-1 text-sm text-slate-600">{card.d}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* WIDE CTA */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="relative overflow-hidden rounded-2xl">
            <img src="/Cta.png" alt="" />
            <div className="absolute inset-0 bg-[#1a4480]/10"></div>
            <div className="absolute inset-0 p-6 sm:p-10 md:p-14 flex items-center">
              <div className="text-white max-w-xl">
                <p className="text-xl font-semibold uppercase tracking-widest text-[#fdb81e]">Compliance without chaos</p>
                <h3 className="mt-2 text-2xl sm:text-4xl font-semibold">Put your accounting, payroll, and filings in expert hands.</h3>
                <button className="mt-4 rounded-lg bg-[#fdb81e] px-4 py-2.5 text-[#1a4480] font-medium hover:brightness-95">
                  Book Your Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <h3 className="text-lg font-semibold">Industries We Serve</h3>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Restaurants & Franchise Owners",
              "Medical & Dental Offices",
              "Convenience Stores & Gas Stations",
              "Retail & E-Commerce",
              "Professional & Service Firms",
              "Construction & Trade Businesses",
              "Government Contractors",
              "Nonprofits",
              "Technology & Startups",
            ].map((name, i) => (
              <div key={i} className="rounded-xl border border-slate-200 p-5 bg-white">
                <h4 className="font-medium">{name}</h4>
                <p className="mt-2 text-sm text-slate-600">Specialized bookkeeping, compliance, and reporting tailored to your model.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* KEY DATES / COUNTDOWN */}
<section id="dates" className="bg-[#f5f6f7]">
  <div className="mx-auto max-w-7xl px-4 py-12">
    <div className="grid lg:grid-cols-2 gap-20 items-stretch">
      
      {/* LEFT — Table Section */}
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

      {/* RIGHT — Image Section */}
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
                  <Icon />
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

      {/* CONTACT / CTA */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid md:grid-cols-[1fr_.8fr] gap-6 items-center">
            <div className="rounded-xl bg-white border border-slate-200 p-6">
              <h4 className="font-semibold">Service Areas</h4>
              <p className="text-sm text-slate-700 mt-2">
                
                Remote clients nationwide
              </p>

              <div className="mt-6 rounded-lg bg-[#1a4480] text-white p-5">
                <p className="text-sm">Let’s Simplify Your Accounting</p>
                <p className="text-sm mt-1">Call: (XXX) XXX-XXXX • Email: info@brighteltax.com</p>
                <button className="mt-3 rounded-md bg-[#fdb81e] text-[#1a4480] px-3 py-2 text-sm font-medium hover:brightness-95">
                  Schedule Your  Consultation
                </button>
              </div>
            </div>
            <div>
              <img src="/Contact.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a4480] text-neutral-100">
        <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
          <div>
            <div className="h-9 w-36 rounded bg-white/10 grid place-items-center text-[11px]">BRIGHTEL TAX SERVICES</div>
            <p className="mt-4 text-sm text-white/80 max-w-xs">
              Smart Accounting. Real Compliance. Scalable Growth.
            </p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Navigation</h5>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><a href="#services">Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#dates">Key Dates</a></li>
              <li><a href="#resources">IRS Resources</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Contact</h5>
            {/* Removed address line */}
            <p className="mt-2 text-sm">Email: info@brighteltax.com</p>
            <p className="text-sm">Phone: (XXX) XXX-XXXX</p>
          </div>
          <div>
            <h5 className="text-sm font-semibold text-white">Call to Action</h5>
            <button className="mt-4 rounded-lg bg-[#fdb81e] px-3 py-2 text-[#1a4480] text-sm font-medium hover:brightness-95">
              Book Your Consultation
            </button>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/80 flex items-center justify-between">
            <span>© {new Date().getFullYear()} Brightel Tax Services | Smart Accounting. Real Compliance. Scalable Growth.</span>
            <span>Privacy • Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
