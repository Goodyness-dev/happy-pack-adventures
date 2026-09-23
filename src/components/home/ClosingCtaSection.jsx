import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';
import { imageManifest } from '../../data/imageManifest';
import ImageFrame from '../common/ImageFrame';

export default function ClosingCtaSection({ onOpenInquiry }) {
  return (
    <section className="py-20 sm:py-32 bg-[#F0F2EC]/60 border-t border-[#D8DED5] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Subtle decorative floral still-life frame */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white shadow-md">
          <ImageFrame
            src={imageManifest.closingStillLife.src}
            alt={imageManifest.closingStillLife.alt}
            aspectRatio="aspect-square"
            rounded="rounded-full"
            title="Florals"
            subtitle=""
          />
        </div>

        <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
          // Reserve Your Date
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-[#26322D] mt-3 mb-5 tracking-tight">
          Make room for your favorite guest.
        </h2>

        <p className="text-base sm:text-lg text-[#59645E] max-w-xl mx-auto mb-8 font-sans leading-relaxed">
          Dates fill quickly during peak Alabama wedding seasons (Spring & Fall). Send us your date and venue to check Melissa�s availability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <button
            onClick={() => onOpenInquiry()}
            className="btn-accent text-base !py-3.5 !px-8 w-full sm:w-auto"
          >
            <span>Check Your Wedding Date</span>
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="btn-secondary text-base !py-3.5 !px-6 w-full sm:w-auto"
          >
            <span>Call {BUSINESS_INFO.phone}</span>
          </a>
        </div>

        <p className="text-xs text-[#59645E]">
          {BUSINESS_INFO.serviceArea} � Licensed, CPR Certified & Fully Insured
        </p>

      </div>
    </section>
  );
}
