import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_INFO } from '../../data/businessData';

gsap.registerPlugin(ScrollTrigger);

export default function ProofSection() {
  const primaryReview = BUSINESS_INFO.reviews[0];
  const proofRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.proof-fade-in',
        { y: 25, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: proofRef.current,
            start: 'top 85%',
            once: true
          }
        }
      );
    }, proofRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={proofRef} className="py-12 sm:py-16 bg-[#F0F2EC]/60 border-y border-[#D8DED5]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="proof-fade-in inline-flex items-center gap-1.5 text-amber-600 mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 fill-current text-amber-500" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-xs font-semibold text-[#26322D] ml-1.5 tracking-wide uppercase">
            5.0 Star Wedding Vendor
          </span>
        </div>

        <blockquote className="proof-fade-in font-serif text-xl sm:text-2xl md:text-3xl font-normal text-[#26322D] leading-snug tracking-tight max-w-3xl mx-auto mb-5">
          "{primaryReview.quote}"
        </blockquote>

        <div className="proof-fade-in flex flex-col sm:flex-row items-center justify-center gap-2 text-sm text-[#59645E]">
          <span className="font-semibold text-[#26322D]">{primaryReview.couple}</span>
          <span className="hidden sm:inline text-neutral-400">&bull;</span>
          <span>with {primaryReview.dog}</span>
          <span className="hidden sm:inline text-neutral-400">&bull;</span>
          <span className="italic">{primaryReview.venue}</span>
        </div>
      </div>
    </section>
  );
}
