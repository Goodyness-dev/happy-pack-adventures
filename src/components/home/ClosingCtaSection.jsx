import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_INFO } from '../../data/businessData';

gsap.registerPlugin(ScrollTrigger);

export default function ClosingCtaSection({ onOpenInquiry }) {
  const ctaRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cta-anim-elem',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            once: true
          }
        }
      );
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ctaRef} className="py-20 sm:py-32 bg-[#F0F2EC]/60 border-t border-[#D8DED5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Trio of authentic wedding circle photo avatars */}
        <div className="cta-anim-elem flex items-center justify-center -space-x-3 mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg bg-[#E8EDE5]">
            <img
              src="/images/real-wedding-04.jpg"
              alt="Melissa with golden retriever in tuxedo bandana"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-[#345744] shadow-xl z-10 bg-[#E8EDE5]">
            <img
              src="/images/ceremony-flower-collar-dog.jpg"
              alt="Pup in white rose collar on ceremony lawn"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-white shadow-lg bg-[#E8EDE5]">
            <img
              src="/images/real-wedding-15.jpg"
              alt="Melissa smiling with golden retriever"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <span className="cta-anim-elem text-xs font-semibold uppercase tracking-widest text-[#345744] block">
          // Reserve Your Date
        </span>

        <h2 className="cta-anim-elem font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#26322D] mt-3 mb-5 tracking-tight">
          Make room for your favorite guest.
        </h2>

        <p className="cta-anim-elem text-base sm:text-lg text-[#59645E] max-w-xl mx-auto mb-8 font-sans leading-relaxed">
          Dates fill quickly during peak Alabama wedding seasons (Spring &amp; Fall). Send us your date and venue to check Melissa’s availability.
        </p>

        <div className="cta-anim-elem flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => onOpenInquiry()}
            className="btn-accent text-base !py-3.5 !px-8 w-full sm:w-auto active:scale-95 transition-transform"
          >
            <span>Check Your Wedding Date</span>
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="btn-secondary text-base !py-3.5 !px-6 w-full sm:w-auto active:scale-95 transition-transform"
          >
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <p className="cta-anim-elem text-xs text-[#59645E]">
          {BUSINESS_INFO.serviceArea} &bull; Licensed, CPR Certified &amp; Fully Insured
        </p>
      </div>
    </section>
  );
}
