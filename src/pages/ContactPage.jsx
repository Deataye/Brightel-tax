import React, { useState, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";
import {
  FaPhoneAlt, FaEnvelope, FaClock, FaCalendarAlt, FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", subject: "", message: "", botfield: ""
  });

  // Refs for GSAP + EmailJS
  const pageRef = useRef(null);
  const headerRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);     // GSAP reveal for the form container
  const formElRef = useRef(null);   // actual <form> element for emailjs.sendForm

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(pageRef.current, { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: 0.5, ease: "power2.out" });
      if (headerRef.current) {
        gsap.fromTo(headerRef.current, { autoAlpha: 0, y: -20 }, { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.1 });
      }
      [leftRef.current, formRef.current].forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
            delay: i * 0.15,
          }
        );
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple honeypot
    if (form.botfield) return;

    setSubmitting(true);
    try {
      // Map your state fields to the template variables you created in EmailJS
      // Using sendForm so EmailJS can read inputs by their "name" attributes
      const result = await emailjs.sendForm(
        "service_hvyinqd",
        "template_kl2xmxk",
        formElRef.current,
        { publicKey: " GYWjhkznaehrSoZsB" }
      );

      if (result?.status !== 200) throw new Error("EmailJS failed");

      alert("Thanks! We’ll be in touch shortly.");
      setForm({ name: "", email: "", phone: "", company: "", subject: "", message: "", botfield: "" });
      // optional: formElRef.current.reset();
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main ref={pageRef} className="bg-white">
      {/* Header */}
      <section ref={headerRef} className="bg-[#f5f6f7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-3xl sm:text-4xl font-semibold text-[#1a4480]">Contact Us</h1>
          <p className="mt-2 text-slate-600 max-w-2xl">
            Have questions about accounting, payroll, taxes, or compliance? Send us a message or grab a time that works for you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="relative">
        <div className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-2 gap-8 items-start">
          {/* Left card */}
          <aside ref={leftRef} className="order-2 lg:order-1">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[#1a4480]">Schedule & Timings</h2>
              <div className="mt-5 space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <FaClock className="mt-1 text-[#fdb81e]" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <ul className="mt-1 text-sm">
                      <li>Mon–Fri: 9:00 AM – 6:00 PM</li>
                      <li>Sat: 10:00 AM – 2:00 PM</li>
                      <li>Sun: Closed</li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCalendarAlt className="mt-1 text-[#fdb81e]" />
                  <div>
                    <p className="font-medium">Schedule a Call</p>
                    <p className="mt-1 text-sm">
                      Prefer to talk? Pick a time that works for you and we’ll confirm the appointment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaPhoneAlt className="mt-1 text-[#fdb81e]" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm mt-1">(571) 390-3088</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaEnvelope className="mt-1 text-[#fdb81e]" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm mt-1">inquiry@brighteltaxservices.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 text-[#fdb81e]" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm mt-1">Remote Clients Nationwide</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Right: Form */}
          <section ref={formRef} className="order-1 lg:order-2">
            <form
              ref={formElRef}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-[#1a4480]">Send Us a Message</h2>
              <p className="mt-1 text-sm text-slate-600">
                Tell us a bit about your needs and we’ll get back within one business day.
              </p>

              {/* Honeypot */}
              <input
                type="text"
                name="botfield"
                value={form.botfield}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <div className="col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name*</label>
                  <input
                    id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005ea2]"
                    placeholder="Jane Doe" autoComplete="name"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email*</label>
                  <input
                    id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005ea2]"
                    placeholder="you@company.com" autoComplete="email"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700">Phone</label>
                  <input
                    id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005ea2]"
                    placeholder="(555) 555-5555" autoComplete="tel"
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company</label>
                  <input
                    id="company" name="company" type="text" value={form.company} onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005ea2]"
                    placeholder="Company LLC" autoComplete="organization"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700">Subject</label>
                  <input
                    id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005ea2]"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message*</label>
                  <textarea
                    id="message" name="message" required rows={6} value={form.message} onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#005ea2]"
                    placeholder="Tell us about your accounting or compliance needs…"
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center rounded-lg bg-[#005ea2] px-5 py-2.5 text-white text-sm font-medium hover:bg-[#0b4778] disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </button>
                <p className="text-xs text-slate-500">We’ll never share your information.</p>
              </div>
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}
