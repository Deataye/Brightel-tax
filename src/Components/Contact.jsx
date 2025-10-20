import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#005D1F] text-primary px-6">
      <div className="container mx-auto text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-accent mb-6">
          Let’s Simplify Your Accounting
        </h2>
        <p className="text-lg mb-8">
          Put your accounting, payroll, and compliance in expert hands — so you can focus on running your business.
        </p>

        <div className="space-y-2 mb-6">
          <p>📞 Call: (XXX) XXX-XXXX</p>
          <p>📧 Email: info@brighteltax.com</p>
          <p>📍 Northern Virginia | Washington D.C. | Maryland</p>
        </div>

        <a
          href="#"
          className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition"
        >
          Schedule Free Consultation
        </a>
      </div>
    </section>
  );
};

export default Contact;
