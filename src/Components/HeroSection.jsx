import React, { useEffect, useState } from "react";

const HeroSection = () => {
  // Target date (example: October 15, 2025)
  const targetDate = new Date("2025-10-20T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

 useEffect(() => {
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return;
    }

    setTimeLeft({
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000),
    });
  };

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);

  return () => clearInterval(timer);
}, []);


  return (
    <section
      id="home"
      className="bg-[#111A2D] text-[#C0C0C0] flex flex-col justify-center items-center text-center h-screen px-6"
    >
      <h2 className="text-xl md:text-2xl text-[#3b82f6] font-medium text-silver mb-2">
        Filed an extension?
      </h2>

      <h1 className="text-xl md:text-3xl font-bold mb-2">
        The government may be on pause, but the{" "}
        <span className="text-[#f97316]">October 15</span> tax deadline isn’t.
      </h1>

      <p className="text-[#94a3b8] mb-10">
        File by the October 15 deadline to minimize potential fees or penalties.
      </p>

      {/* Countdown Timer */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#1B2637] text-white px-8 py-6 rounded-lg w-40 shadow-md"
          >
            <div className="text-7xl font-bold">{item.value}</div>
            <div className="text-sm font-semibold mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4">
        <a
          href="#contact"
          className="bg-[#F54A00] text-white px-6 py-3 rounded-full font-semibold hover:bg-silver transition"
        >
          Work with a tax pro
        </a>
        <a
          href="#"
          className="border border-blue-400 hover:bg-blue-900/30 text-blue-100 px-6 py-3 rounded-full font-semibold transition"
        >
          File my own taxes
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
