import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../../data/businessData';

export default function Navbar({ onOpenInquiry, currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { label: 'Services & Scopes', href: '#services', page: 'home' },
    { label: 'Real Weddings', href: '#weddings', page: 'home' },
    { label: 'Interactive Planner', href: '#moments-planner', page: 'home' },
    { label: 'About Melissa', href: '#about', page: 'home' },
    { label: 'FAQs', href: '#faqs', page: 'home' }
  ];

  const handleLinkClick = (link) => {
    setMobileMenuOpen(false);
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const el = document.querySelector(link.href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(link.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAFAF6]/95 backdrop-blur-md border-b border-[#D8DED5] py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark - Stationery Aesthetic */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="group flex flex-col focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#26322D] group-hover:text-[#345744] transition-colors">
              Happy Pack Adventures
            </span>
            <span className="text-[11px] uppercase tracking-widest text-[#59645E] -mt-0.5 font-sans font-medium">
              Wedding Dog Chaperone � Central Alabama
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className="text-sm font-medium text-[#26322D] hover:text-[#345744] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#345744] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Discreet Portal Links */}
            <button
              onClick={() => onNavigate('portal')}
              className="text-xs font-semibold text-[#59645E] hover:text-[#26322D] px-2.5 py-1.5 transition-colors"
              title="Client Booking Portal"
            >
              Client Portal
            </button>
            <button
              onClick={() => onNavigate('admin')}
              className="text-xs font-semibold text-[#59645E] hover:text-[#26322D] px-2.5 py-1.5 transition-colors"
              title="Owner Dashboard"
            >
              Owner Admin
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenInquiry()}
              className="btn-accent text-sm !py-2.5 !px-5"
            >
              <span>Check Your Date</span>
              <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center space-x-2">
            <button
              onClick={() => onOpenInquiry()}
              className="btn-accent !py-2 !px-3.5 text-xs"
            >
              Check Date
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#26322D] hover:bg-[#F0F2EC] border border-[#D8DED5]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[65px] bg-[#FAFAF6] border-b border-[#D8DED5] px-6 py-6 shadow-xl space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link);
                }}
                className="text-base font-serif text-[#26322D] hover:text-[#345744] py-1 border-b border-[#D8DED5]/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="btn-accent w-full justify-center"
            >
              Check Your Wedding Date
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1 text-center">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('portal');
                }}
                className="text-xs py-2 px-3 rounded-lg border border-[#D8DED5] text-[#59645E]"
              >
                Client Portal
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('admin');
                }}
                className="text-xs py-2 px-3 rounded-lg border border-[#D8DED5] text-[#59645E]"
              >
                Owner Sign-In
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
