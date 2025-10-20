import React, { useState, useEffect, useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Accounting & Bookkeeping",
    desc: "End-to-end bookkeeping and accounting solutions to keep your business audit-ready and growth-focused.",
  },
  {
    title: "Payroll Accounting & Reporting",
    desc: "Accurate, compliant, and stress-free payroll for your entire team — including tax filings and year-end reports.",
  },
  {
    title: "Government Contract Accounting",
    desc: "DCAA-compliant accounting systems and cost structures for government contractors to meet audit standards.",
  },
  {
    title: "Systems & Cloud Accounting",
    desc: "Modern, secure, and cloud-based accounting systems with real-time collaboration and automated reporting.",
  },
  {
    title: "Business Accounting & Advisory",
    desc: "Financial clarity and resilience through system setup, budgeting, forecasting, and tax preparation.",
  },
];

const Services = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const cardsRef = useRef([]);
  const leftBtnRef = useRef(null);
  const rightBtnRef = useRef(null);

  // Hover scale animation on buttons
  useEffect(() => {
    const animateHover = (el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(el, { scale: 1.2, duration: 0.3, ease: "power2.out" });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(el, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    };
    if (leftBtnRef.current && rightBtnRef.current) {
      animateHover(leftBtnRef.current);
      animateHover(rightBtnRef.current);
    }

    // Scroll-triggered fade-in for cards
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentNode,
          start: "top 80%",
        },
      }
    );
  }, [startIndex, cardsPerView]);

  // Adjust visible cards by screen size
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 1024) setCardsPerView(2);
      else setCardsPerView(3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  // Reset start index if out of bounds
  useEffect(() => {
    if (startIndex > services.length - cardsPerView) setStartIndex(0);
  }, [cardsPerView]);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      if (startIndex < services.length - cardsPerView)
        setStartIndex((prev) => prev + 1);
      else setStartIndex(0);
    }, 5000);
    return () => clearInterval(interval);
  }, [cardsPerView, startIndex]);

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev > 0 ? prev - 1 : services.length - cardsPerView
    );
  };
  const handleNext = () => {
    setStartIndex((prev) =>
      prev < services.length - cardsPerView ? prev + 1 : 0
    );
  };

  const totalSlides = services.length - cardsPerView + 1;

  return (
    <section id="services" className="py-20 bg-[#005D1F] px-6 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-2">
            Our Core Services
          </h2>
          <p className="text-[#C0C0C0] text-sm md:text-base max-w-2xl mx-auto">
            Expert accounting and advisory services crafted to help your
            business stay compliant, audit-ready, and growth-focused.
          </p>
        </div>

        {/* Arrows */}
        <button
          ref={leftBtnRef}
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#D4AF37] text-[#005D1F] hover:bg-[#C0C0C0] transition rounded-full"
          aria-label="Previous slide"
        >
          <HiOutlineChevronLeft className="w-6 h-6" />
        </button>
        <button
          ref={rightBtnRef}
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#D4AF37] text-[#005D1F] hover:bg-[#C0C0C0] transition rounded-full"
          aria-label="Next slide"
        >
          <HiOutlineChevronRight className="w-6 h-6" />
        </button>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(startIndex * 100) / cardsPerView}%)`,
            }}
          >
            {services
              .slice(startIndex, startIndex + cardsPerView)
              .map((service, index) => (
                <div
                  key={index}
                  className="p-4"
                  style={{ flex: `0 0 ${100 / cardsPerView}%` }}
                  ref={(el) => (cardsRef.current[index] = el)}
                >
                  <div className="bg-[#005D1F] border border-[#D4AF37] p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all h-full text-white">
                    <h3 className="text-xl font-semibold text-[#D4AF37] mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#C0C0C0]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === startIndex ? "w-6 bg-[#D4AF37]" : "w-2 bg-[#C0C0C0]"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
