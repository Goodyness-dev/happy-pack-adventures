import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';
import ImageFrame from '../common/ImageFrame';

export default function Hero({ onOpenInquiry }) {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden bg-[#FAFAF6]">
      {/* Subtle architectural background divider */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#F0F2EC]/60 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Wedding Stationery Copy (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF0EB] text-[#345744] text-xs font-semibold tracking-wider uppercase mb-5 w-fit border border-[#D8DED5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#345744]"></span>
              <span>Wedding Dog Chaperone � {BUSINESS_INFO.city}, AL</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] text-[#26322D] font-normal tracking-tight mb-5">
              Your day. <br />
              <span className="italic font-normal text-[#345744]">Their place</span> beside you.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#59645E] leading-relaxed mb-7 max-w-xl font-sans">
              Thoughtful wedding-day dog care, ceremony coordination, and climate-controlled transport�so your family stays present while we look after your best friend.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <button
                onClick={() => onOpenInquiry()}
                className="btn-accent group text-base"
              >
                <span>Check Your Wedding Date</span>
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection('weddings')}
                className="btn-secondary text-base"
              >
                <span>See Real Weddings</span>
              </button>
            </div>

            {/* Reassurance & Verification Anchor */}
            <div className="pt-5 border-t border-[#D8DED5] flex items-center gap-4 text-xs text-[#59645E]">
              <div className="flex -space-x-1.5">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-6 h-6 rounded-full bg-[#345744]/15 border-2 border-white flex items-center justify-center text-[10px] text-[#345744] font-bold">
                    ?
                  </div>
                ))}
              </div>
              <div>
                <span className="font-semibold text-[#26322D]">100% Focused on Pet Safety</span>
                <p className="text-[11px] text-[#59645E]">Licensed � Pet First Aid & CPR � Fully Insured</p>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Wedding Album Photograph (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Decorative paper offset border */}
              <div className="absolute -inset-3 rounded-3xl bg-[#F0F2EC] -rotate-1 hidden sm:block border border-[#D8DED5]/80 pointer-events-none" />

              <div className="relative">
                <ImageFrame
                  src={imageManifest.heroDesktop.src}
                  alt={imageManifest.heroDesktop.alt}
                  aspectRatio="aspect-[4/3] sm:aspect-[16/11]"
                  rounded="rounded-2xl sm:rounded-3xl"
                  title={imageManifest.heroDesktop.placeholderTitle}
                  subtitle={imageManifest.heroDesktop.placeholderSubtitle}
                  badge="Featured Alabama Wedding"
                  className="shadow-wedding-raised"
                />

                {/* Floating Tactile Quote Card */}
                <div className="hidden sm:flex absolute -bottom-6 -left-6 max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#D8DED5] shadow-wedding-card items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#345744]/10 text-[#345744] flex-shrink-0 flex items-center justify-center font-serif text-lg font-bold">
                    �
                  </div>
                  <div>
                    <p className="text-xs italic text-[#26322D] leading-snug">
                      �Cooper walked the aisle perfectly and was safely tucked in bed before reception dinner.�
                    </p>
                    <p className="text-[11px] font-semibold text-[#345744] mt-1.5">
                      � Savannah & Tyler M. (Birmingham)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
