import React from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Footer({ onOpenInquiry, onNavigate }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAF6] border-t border-[#D8DED5] pt-16 pb-12 text-[#26322D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#D8DED5]">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#26322D] block">
              Happy Pack Adventures
            </span>
            <p className="text-xs uppercase tracking-widest text-[#59645E] font-medium font-sans">
              Wedding Day Dog Chaperone & Concierge Pet Care
            </p>
            <p className="text-sm text-[#59645E] leading-relaxed max-w-sm">
              Providing couples across Birmingham, Hoover, and Central Alabama with licensed, pet CPR-certified wedding day pet coordination and safe transit.
            </p>
            <p className="text-xs text-[#345744] font-semibold">
              {BUSINESS_INFO.bookingPolicy}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#345744]">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-[#59645E]">
              <li><a href="#services" className="hover:text-[#26322D] transition-colors">Photo Companion</a></li>
              <li><a href="#services" className="hover:text-[#26322D] transition-colors">Ceremony Companion</a></li>
              <li><a href="#services" className="hover:text-[#26322D] transition-colors">Extended Wedding Care</a></li>
              <li><a href="#moments-planner" className="hover:text-[#26322D] transition-colors">Interactive Planner</a></li>
            </ul>
          </div>

          {/* Real Weddings & About */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#345744]">
              Stories & Trust
            </h4>
            <ul className="space-y-2 text-sm text-[#59645E]">
              <li><a href="#weddings" className="hover:text-[#26322D] transition-colors">Real Wedding Stories</a></li>
              <li><a href="#about" className="hover:text-[#26322D] transition-colors">Meet Melissa Floyd</a></li>
              <li><a href="#how-it-works" className="hover:text-[#26322D] transition-colors">How Booking Works</a></li>
              <li><a href="#faqs" className="hover:text-[#26322D] transition-colors">Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Direct Contact & Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#345744]">
              Client Access
            </h4>
            <ul className="space-y-2 text-sm text-[#59645E]">
              <li>
                <button onClick={() => onNavigate('portal')} className="hover:text-[#26322D] text-left transition-colors">
                  Client Booking Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('proposal')} className="hover:text-[#26322D] text-left transition-colors">
                  Sample Proposal Demo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('admin')} className="hover:text-[#26322D] text-left transition-colors">
                  Owner Admin Sign-In
                </button>
              </li>
              <li className="pt-2">
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#26322D] hover:text-[#345744] block">
                  {BUSINESS_INFO.phone}
                </a>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-xs text-[#59645E] hover:underline block mt-0.5">
                  {BUSINESS_INFO.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#59645E]">
          <p>� {currentYear} Happy Pack Adventures LLC. All rights reserved.</p>
          <p className="italic">Serving Birmingham, Hoover, Pelham, Mountain Brook & Central Alabama.</p>
        </div>

      </div>
    </footer>
  );
}
