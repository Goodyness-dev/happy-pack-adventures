import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import VisualProofMarquee from './components/home/VisualProofMarquee';
import ProofSection from './components/home/ProofSection';
import WhatWeTakeCareOf from './components/home/WhatWeTakeCareOf';
import MomentsExplorer from './components/home/MomentsExplorer';
import CoverageSection from './components/home/CoverageSection';
import RealWeddingsSection from './components/home/RealWeddingsSection';
import MeetHandlerSection from './components/home/MeetHandlerSection';
import BookingStepsSection from './components/home/BookingStepsSection';
import FaqSection from './components/home/FaqSection';
import ClosingCtaSection from './components/home/ClosingCtaSection';
import Footer from './components/layout/Footer';
import InquiryModal from './components/inquiry/InquiryModal';
import ProposalView from './components/proposal/ProposalView';
import ClientPortalView from './components/client/ClientPortalView';
import AdminLayout from './components/admin/AdminLayout';
import AdminLogin from './components/admin/AdminLogin';
import { authApi, getStoredToken } from './services/api';
import { BUSINESS_INFO } from './data/businessData';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' | 'proposal' | 'portal' | 'admin'
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryScope, setInquiryScope] = useState(null);
  const [selectedMoments, setSelectedMoments] = useState(['portraits', 'ceremony']);

  // Admin Auth State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  // Initialize Lenis Kinetic Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const token = getStoredToken();
    if (token) {
      authApi.verify()
        .then((res) => {
          if (res.authenticated) {
            setIsAdminAuthenticated(true);
            setAdminUser(res.user);
          }
        })
        .catch(() => setIsAdminAuthenticated(false));
    }
  }, []);

  // Browser hash routing synchronization
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('admin')) {
        setCurrentPage('admin');
      } else if (hash.includes('proposal')) {
        setCurrentPage('proposal');
      } else if (hash.includes('portal') || hash.includes('client')) {
        setCurrentPage('portal');
      } else {
        setCurrentPage('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page === 'admin') window.location.hash = '#/admin';
    else if (page === 'proposal') window.location.hash = '#/proposal';
    else if (page === 'portal') window.location.hash = '#/portal';
    else {
      if (window.location.hash) {
        window.history.pushState(null, '', window.location.pathname);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenInquiry = (scope = null) => {
    setInquiryScope(scope);
    setInquiryOpen(true);
  };

  const handleCloseInquiry = () => {
    setInquiryOpen(false);
  };

  const handleToggleMoment = (momentId) => {
    setSelectedMoments((prev) =>
      prev.includes(momentId) ? prev.filter((id) => id !== momentId) : [...prev, momentId]
    );
  };

  // Subpage: Interactive Proposal Review
  if (currentPage === 'proposal') {
    return <ProposalView onBackToSite={() => handleNavigate('home')} />;
  }

  // Subpage: Couple Booking Portal
  if (currentPage === 'portal') {
    return <ClientPortalView onBackToSite={() => handleNavigate('home')} />;
  }

  // Subpage: Owner Admin Dashboard
  if (currentPage === 'admin') {
    return isAdminAuthenticated ? (
      <AdminLayout
        user={adminUser}
        onLogout={() => {
          setIsAdminAuthenticated(false);
          setAdminUser(null);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    ) : (
      <AdminLogin
        onLoginSuccess={(user) => {
          setIsAdminAuthenticated(true);
          setAdminUser(user);
        }}
        onBackToSite={() => handleNavigate('home')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#FAFAF6] text-[#26322D] flex flex-col font-sans selection:bg-[#345744]/15 selection:text-[#1e3428]">
      {/* Stationery Wedding Navbar */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Wedding Album Editorial Flow */}
      <main className="flex-grow">
        <Hero onOpenInquiry={handleOpenInquiry} />
        
        {/* Dynamic Infinite Photo Ribbon Marquee */}
        <VisualProofMarquee onOpenInquiry={handleOpenInquiry} />

        <ProofSection />
        <WhatWeTakeCareOf onOpenInquiry={handleOpenInquiry} />
        <MomentsExplorer
          selectedMoments={selectedMoments}
          onToggleMoment={handleToggleMoment}
          onOpenInquiry={handleOpenInquiry}
        />
        <CoverageSection onOpenInquiry={handleOpenInquiry} />
        <RealWeddingsSection onOpenInquiry={handleOpenInquiry} />
        <MeetHandlerSection onOpenInquiry={handleOpenInquiry} />
        <BookingStepsSection onOpenInquiry={handleOpenInquiry} />
        <FaqSection onOpenInquiry={handleOpenInquiry} />
        <ClosingCtaSection onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onNavigate={handleNavigate}
      />

      {/* 3-Step Qualification & Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={handleCloseInquiry}
        initialScope={inquiryScope}
        selectedMoments={selectedMoments}
        onToggleMoment={handleToggleMoment}
      />

      {/* Mobile Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-[#FAFAF6]/95 backdrop-blur-md border-t border-[#D8DED5] p-2.5 flex items-center gap-2 shadow-lg">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex-1 py-3 px-3 rounded-full bg-[#F0F2EC] text-[#26322D] border border-[#D8DED5] font-semibold text-xs flex items-center justify-center space-x-1.5 active:scale-95 transition"
        >
          <span>Call Melissa</span>
        </a>
        <button
          onClick={() => handleOpenInquiry()}
          className="flex-1 py-3 px-3 rounded-full bg-[#345744] hover:bg-[#294737] text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-sm active:scale-95 transition"
        >
          <span>Check Your Date</span>
        </button>
      </div>
    </div>
  );
}
