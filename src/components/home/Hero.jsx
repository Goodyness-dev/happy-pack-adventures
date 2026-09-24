import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';

gsap.registerPlugin(ScrollTrigger);

export default function Hero({ onOpenInquiry }) {
  const heroRef = useRef(null);
  const bgImageRef = useRef(null);
  const textContentRef = useRef(null);
  const cardsRef = useRef(null);

  // Dynamic animated counter state
  const [stats, setStats] = useState({
    weddings: 0,
    rating: 0,
    ontime: 0
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Background Image Parallax Scrubbing
      if (bgImageRef.current) {
        gsap.to(bgImageRef.current, {
          yPercent: 20,
          scale: 1.12,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5
          }
        });
      }

      // 2. Staggered Headline & Subtitle Reveal
      gsap.fromTo(
        '.hero-anim-item',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.16,
          ease: 'power3.out',
          clearProps: 'transform'
        }
      );

      // 3. Floating Proof Cards Entry Animation
      gsap.fromTo(
        '.hero-float-card',
        { y: 60, opacity: 0, scale: 0.94 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          delay: 0.35,
          stagger: 0.22,
          ease: 'power3.out',
          clearProps: 'transform'
        }
      );

      // 4. GSAP KPI Counter Roll-Up Ticker
      const counterTarget = { weddings: 0, rating: 0, ontime: 0 };
      gsap.to(counterTarget, {
        weddings: 85,
        rating: 5.0,
        ontime: 100,
        duration: 2.2,
        delay: 0.5,
        ease: 'power2.out',
        onUpdate: () => {
          setStats({
            weddings: Math.round(counterTarget.weddings),
            rating: Number(counterTarget.rating).toFixed(1),
            ontime: Math.round(counterTarget.ontime)
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] lg:min-h-[96vh] flex items-center pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden"
    >
      {/* ------------------------------------------------------------- */}
      {/* 1. CINEMATIC FULL-BLEED BACKGROUND HERO IMAGE WITH PARALLAX     */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        <img
          ref={bgImageRef}
          src={imageManifest.heroBgCinematic.src}
          alt={imageManifest.heroBgCinematic.alt}
          className="w-full h-[125%] -top-[12%] object-cover object-center scale-105 filter brightness-90 will-change-transform"
          fetchPriority="high"
        />

        {/* Multi-layered Cinematic Scrim & Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF6] via-transparent to-black/50" />
      </div>

      {/* ------------------------------------------------------------- */}
      {/* 2. MAIN HERO CONTENT CONTAINER                                 */}
      {/* ------------------------------------------------------------- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: High-Impact Editorial Copy (7 Cols) */}
          <div ref={textContentRef} className="lg:col-span-7 text-left space-y-6">
            
            {/* Live Season Badge */}
            <div className="hero-anim-item inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white shadow-lg">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold tracking-wider uppercase">
                Now Booking 2026 &amp; 2027 Celebrations — Central Alabama
              </span>
            </div>

            {/* Main Editorial Headline: Strict 2-3 Line Width */}
            <h1 className="hero-anim-item font-serif text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.06] text-white font-normal tracking-tight drop-shadow-md max-w-4xl">
              Your wedding day. <br />
              <span className="italic font-normal text-emerald-300">Their place</span> beside you.
            </h1>

            {/* Supporting Copy */}
            <p className="hero-anim-item text-base sm:text-lg lg:text-xl text-stone-200 leading-relaxed max-w-2xl font-sans font-light drop-shadow">
              Thoughtful wedding-day dog care, photo assistance, and safe climate-controlled transit—so your family and wedding party stay fully present while every detail of your pup’s day is handled.
            </p>

            {/* Interactive CTAs */}
            <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={() => onOpenInquiry()}
                className="btn-accent text-base !py-4 !px-8 shadow-glow-accent group transition-transform active:scale-95"
              >
                <span>Check Your Wedding Date</span>
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection('weddings')}
                className="btn-hero-glass text-base flex items-center justify-center gap-2 transition-transform active:scale-95"
              >
                <span>See Real Weddings</span>
                <svg className="w-4 h-4 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Quick KPI Stat Bar with GSAP Dynamic Counters */}
            <div className="hero-anim-item pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 sm:gap-10 text-white">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  {stats.weddings}+
                </span>
                <span className="text-[11px] uppercase tracking-wider text-stone-300 block">
                  Weddings Chaperoned
                </span>
              </div>
              <div className="w-[1px] h-9 bg-white/20" />
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-emerald-300 block flex items-center gap-1">
                  <span>{stats.rating}</span>
                  <span className="text-amber-400 text-lg">★</span>
                </span>
                <span className="text-[11px] uppercase tracking-wider text-stone-300 block">
                  Verified Bride Reviews
                </span>
              </div>
              <div className="w-[1px] h-9 bg-white/20" />
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">
                  {stats.ontime}%
                </span>
                <span className="text-[11px] uppercase tracking-wider text-stone-300 block">
                  On-Time &amp; Safe Return
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Floating Live Proof Cards (5 Cols) */}
          <div ref={cardsRef} className="lg:col-span-5 relative space-y-4">
            
            {/* Primary Featured Card: Real Photo with Tuxedo Bandana */}
            <div className="hero-float-card bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/40 shadow-2xl space-y-3 max-w-md ml-auto hover:shadow-emerald-950/20 transition-all duration-500 group">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/11]">
                <img
                  src={imageManifest.realWeddings.cooper.src}
                  alt={imageManifest.realWeddings.cooper.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                  loading="eager"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md text-[11px] font-semibold">
                  Historic Alabama Estate
                </div>
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-emerald-700 text-white text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  <span>Aisle Escort Completed</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-1">
                <div>
                  <h4 className="font-serif text-lg text-[#26322D] font-medium">
                    Cooper with Savannah &amp; Tyler
                  </h4>
                  <p className="text-xs text-[#59645E]">
                    Golden Retriever — Ceremony Companion
                  </p>
                </div>
                <div className="flex text-amber-500 text-xs gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Secondary Floating Testimonial Pill */}
            <div className="hero-float-card bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-xl max-w-sm mr-auto sm:ml-4 flex items-center gap-3.5 hover:bg-white transition-colors duration-300">
              <img
                src={imageManifest.realWeddings.buster.src}
                alt="Happy pup in white rose garland"
                className="w-14 h-14 rounded-xl object-cover border border-[#D8DED5] flex-shrink-0"
              />
              <div className="min-w-0">
                <p className="text-xs italic text-[#26322D] line-clamp-2 leading-snug">
                  “Melissa was the single best vendor decision we made. Our dog was calm, loved, and happy!”
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#345744] mt-1">
                  — Kaitlyn B. — Hoover Country Club
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
