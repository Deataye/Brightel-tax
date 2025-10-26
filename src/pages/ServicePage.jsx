import React from "react";
import { useParams, Link } from "react-router-dom";
import { getServiceBySlug, services } from "../data/services";

export default function ServicePage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-2xl font-semibold text-[#1a4480]">Service not found</h1>
        <p className="mt-2 text-slate-600">
          The page you’re looking for doesn’t exist.{" "}
          <Link to="/" className="text-[#005ea2] hover:underline">Go back home</Link>.
        </p>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div>
      {/* HERO */}
      <section className="bg-[#f5f6f7] border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-full bg-[#fdb81e] text-[#1a4480] grid place-items-center">
              <Icon className="text-xl" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#1a4480]/70">{service.tag}</p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-[#1a4480]">{service.title}</h1>
              <p className="mt-2 text-slate-700 max-w-2xl">{service.summary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold text-[#1a4480]">Overview</h2>
            <p className="mt-2 text-slate-700">{service.longDescription}</p>

            <h3 className="mt-6 text-base font-semibold text-[#1a4480]">What’s included</h3>
            <ul className="mt-2 space-y-2">
              {service.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                  <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[#fdb81e]" />
                  {b}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-base font-semibold text-[#1a4480]">FAQs</h3>
            <div className="mt-2 divide-y divide-slate-200 border rounded-lg">
              {service.faqs.map((f, i) => (
                <details key={i} className="p-4">
                  <summary className="cursor-pointer font-medium text-slate-900">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-slate-700">{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* RIGHT sidebar */}
          <aside className="lg:col-span-1">
            <div className="rounded-xl border border-slate-200 p-5 sticky top-24">
              <h4 className="font-semibold text-[#1a4480]">Talk to us</h4>
              <p className="mt-2 text-sm text-slate-600">
                Get scope and pricing tailored to your stack and timelines.
              </p>
              <button className="mt-4 w-full rounded-lg bg-[#fdb81e] text-[#1a4480] px-4 py-2 font-medium hover:brightness-95">
                {service.ctaText}
              </button>

              <div className="mt-6">
                <h5 className="text-sm font-semibold text-slate-900">Explore other services</h5>
                <ul className="mt-2 space-y-2">
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={`/services/${s.slug}`}
                          className="text-sm text-[#005ea2] hover:underline"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
