import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20  text-[#D4AF37] px-6">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl font-bold text-accent mb-6">Who We Are</h2>
        <p className="text-lg leading-relaxed mb-4">
          At <span className="text-accent font-semibold">Brightel Tax Services</span>, we’re more than tax preparers — we’re your financial partners. 
          Our team of business accountants helps small and mid-sized companies gain control of their finances 
          through accurate reporting, proactive compliance, and scalable accounting systems.
        </p>
        <p className="text-lg leading-relaxed">
          Whether you’re a retail franchise, medical office, convenience store, or government contractor, 
          we ensure your books are precise, your filings are on time, and your financials reflect the real 
          health of your business.
        </p>
      </div>
    </section>
  );
};

export default About;
