import React from "react";

const Resources = () => {
  const deadlines = [
    { date: "Jan 15", event: "Q4 Estimated Tax Payment – All Businesses" },
    { date: "Jan 31", event: "W-2 & 1099 Forms Due – Employers" },
    { date: "Mar 15", event: "S-Corp & Partnership Returns (1120-S, 1065)" },
    { date: "Apr 15", event: "C-Corp Returns & Q1 Estimated Taxes" },
    { date: "Jun 15", event: "Q2 Estimated Taxes" },
    { date: "Sep 15", event: "Q3 Estimated Taxes" },
    { date: "Dec 31", event: "Year-End Payroll, 401(k), and Expense Adjustments" },
  ];

  const forms = [
    { name: "Form 941", link: "https://www.irs.gov/pub/irs-pdf/f941.pdf" },
    { name: "Form 940", link: "https://www.irs.gov/pub/irs-pdf/f940.pdf" },
    { name: "Form W-2", link: "https://www.irs.gov/pub/irs-pdf/fw2.pdf" },
    { name: "Form 1099-NEC", link: "https://www.irs.gov/pub/irs-pdf/f1099nec.pdf" },
    { name: "Form 1120", link: "https://www.irs.gov/pub/irs-pdf/f1120.pdf" },
  ];

  return (
    <section id="resources" className="py-20 bg-primary text-[#D4AF37] px-6">
      <div className="container mx-auto text-center max-w-5xl">
        <h2 className="text-4xl font-bold text-accent mb-8">Key Filing Dates & IRS Resources</h2>

        <h3 className="text-2xl font-semibold mb-4 text-accent">Tax Year Countdown</h3>
        <ul className="mb-10 space-y-2">
          {deadlines.map((d) => (
            <li key={d.date} className="border-b border-accent pb-2">
              <span className="font-semibold text-accent">{d.date}:</span> {d.event}
            </li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-4 text-accent">IRS Quick Links</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {forms.map((f) => (
            <a
              key={f.name}
              href={f.link}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-primary py-3 rounded-lg hover:bg-accent hover:text-primary transition"
            >
              {f.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
