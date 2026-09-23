import React from 'react';
import { SERVICES, ADD_ONS } from '../../data/servicesData';

export default function CoverageSection({ onOpenInquiry }) {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF6]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
            // Tailored Coverage Options
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
            A care plan around your celebration.
          </h2>
          <p className="text-base sm:text-lg text-[#59645E] mt-3 font-sans leading-relaxed">
            Every wedding is distinct. Choose the coverage level that matches your timeline, and we will tailor every detail to your venue and dog's routine.
          </p>
        </div>

        {/* 3 Coverage Cards - Distinct Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`card-thick p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 relative ${
                service.popular
                  ? 'border-2 border-[#345744] bg-[#FEFEFB] shadow-wedding-raised ring-1 ring-[#345744]/20'
                  : 'border border-[#D8DED5] bg-[#FEFEFB] hover:border-[#7C897F]'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3.5 left-8">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#345744] text-white shadow-sm">
                    Most Requested Scope
                  </span>
                </div>
              )}

              <div>
                {/* Title & Duration */}
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#26322D]">
                    {service.title}
                  </h3>
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#F0F2EC] text-[#345744] text-xs font-semibold mb-4">
                  {service.duration} Coverage
                </div>

                <p className="text-xs italic text-[#59645E] mb-5">
                  {service.tagline}
                </p>

                <p className="text-sm text-[#26322D] mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Inclusions List */}
                <div className="space-y-3 pt-4 border-t border-[#D8DED5]">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#345744]">
                    What�s Included:
                  </p>
                  <ul className="space-y-2.5">
                    {service.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#59645E]">
                        <svg className="w-4 h-4 text-[#345744] flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button & Deposit Note */}
              <div className="pt-8 mt-8 border-t border-[#D8DED5]">
                <div className="flex items-center justify-between mb-3 text-xs text-[#59645E]">
                  <span>Typical Investment</span>
                  <span className="font-semibold text-[#26322D]">{service.typicalRange}</span>
                </div>

                <button
                  onClick={() => onOpenInquiry(service.id)}
                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                    service.popular
                      ? 'bg-[#345744] text-white hover:bg-[#294737] shadow-sm'
                      : 'bg-[#F0F2EC] text-[#26322D] hover:bg-[#345744] hover:text-white border border-[#D8DED5]'
                  }`}
                >
                  <span>Request A Tailored Quote</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="text-[11px] text-center text-[#59645E] mt-2.5">
                  ${service.depositAmount} Date-Lock Deposit upon agreement
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Transparent Quote Notice */}
        <div className="card-thick p-6 sm:p-8 bg-[#F0F2EC]/60 border border-[#D8DED5] max-w-4xl mx-auto text-center">
          <h4 className="font-serif text-xl text-[#26322D] font-medium mb-2">
            How Our Transparent Pricing Works
          </h4>
          <p className="text-xs sm:text-sm text-[#59645E] leading-relaxed max-w-2xl mx-auto">
            We never believe in rigid flat pricing or surprise fees. Your tailored proposal reflects your exact venue mileage, celebration hours, and dog count. Once reviewed and approved by you, your date is locked with a single booking deposit.
          </p>
        </div>

      </div>
    </section>
  );
}
