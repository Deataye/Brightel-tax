import React, { useMemo } from "react";

/**
 * Brightel Orbit – large icon version (titles removed)
 * - Larger icons
 * - Two orbit rings
 * - Smooth upright rotation
 */

const orbitItems = [
  { color: "#005ea2", path: "M4 5a2 2 0 012-2h10a2 2 0 012 2v14a1 1 0 01-1 1H6a2 2 0 01-2-2V5zm3 3h8m-8 3h8m-8 3h5", ring: "inner", dur: 10 },
  { color: "#1a4480", path: "M3 7h18v10H3V7zm5 5a3 3 0 106 0 3 3 0 00-6 0z", ring: "outer", dur: 12 },
  { color: "#0b4778", path: "M9 12l2 2 4-4M8 3h6l4 4v12a2 2 0 01-2 2H8a2 2 0 01-2-2V5a2 2 0 012-2z", ring: "inner", dur: 11 },
  { color: "#005ea2", path: "M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z", ring: "outer", dur: 13 },
  { color: "#1a4480", path: "M3 17l6-6 4 4 7-7M13 7h8v8", ring: "inner", dur: 12 },
  { color: "#0b4778", path: "M3 15a4 4 0 014-4 5 5 0 119.6 1H18a3 3 0 110 6H7a4 4 0 01-4-3z", ring: "outer", dur: 14 },
];

export default function OrbitBrightel() {
  const stars = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        w: Math.random() * 2 + 1,
        h: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        o: Math.random() * 0.5 + 0.15,
        d: Math.random() * 6 + 3,
      })),
    []
  );

  return (
    <section
      className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[620px] flex items-center justify-center overflow-hidden"
      style={{ background: "#F5F6F7" }}
    >
      {/* soft tint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "#F5F6F7",
        }}
      />

      {/* stars */}
      <div className="absolute inset-0">
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute bg-white rounded-full"
            style={{
              width: `${s.w}px`,
              height: `${s.h}px`,
              top: `${s.top}%`,
              left: `${s.left}%`,
              opacity: s.o,
              animation: `pulse ${s.d}s cubic-bezier(0.4,0,0.6,1) infinite`,
            }}
          />
        ))}
      </div>

      {/* orbit */}
      <div className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
        {/* 2 rings */}
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div className="rounded-full border border-[#c5d4e6] w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[380px] lg:h-[380px]" />
          <div className="absolute rounded-full border border-[#e0e8f3] w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px]" />
        </div>

        {/* nucleus */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#005ea2] blur-2xl opacity-30" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#005ea2] to-[#1a4480] shadow-2xl grid place-items-center text-white">
              <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* orbiting icons (no titles) */}
        {orbitItems.map((it, i) => {
          const angle = (360 / orbitItems.length) * i;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                transformOrigin: "center",
              }}
            >
              <div className="orbit-rotator" style={{ ["--dur"]: `${it.dur}s` }}>
                <div className="orbit-body" data-ring={it.ring}>
                  <div className="counter grid place-items-center">
                    <div
                      className="rounded-full grid place-items-center shadow-xl"
                      style={{
                        width: "4rem",
                        height: "4rem",
                        background: it.color,
                      }}
                    >
                      <svg
                        className="w-10 h-10 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={it.path} />
                      </svg>
                    </div>
                    {/* removed label */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:.8} 50%{opacity:.3} }
        @keyframes spin360 { to { transform: rotate(360deg); } }
        @keyframes spinCounter { to { transform: rotate(-360deg); } }

        .orbit-rotator {
          animation: spin360 var(--dur) linear infinite;
          transform-origin: center;
        }
        .counter {
          animation: spinCounter var(--dur) linear infinite;
          transform-origin: center;
        }

        .orbit-body { transform: translateX(var(--r)); }

        /* aligned to rings with extra spacing */
        .orbit-body[data-ring="inner"] { --r: 120px; }
        .orbit-body[data-ring="outer"] { --r: 180px; }

        @media (min-width: 640px) {
          .orbit-body[data-ring="inner"] { --r: 150px; }
          .orbit-body[data-ring="outer"] { --r: 220px; }
        }
        @media (min-width: 1024px) {
          .orbit-body[data-ring="inner"] { --r: 180px; }
          .orbit-body[data-ring="outer"] { --r: 260px; }
        }
      `}</style>
    </section>
  );
}
