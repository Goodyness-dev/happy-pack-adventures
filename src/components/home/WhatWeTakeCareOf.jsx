import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { imageManifest } from '../../data/imageManifest';
import ImageFrame from '../common/ImageFrame';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeTakeCareOf({ onOpenInquiry }) {
  const sectionRef = useRef(null);

  const pillars = [
    {
      number: '01',
      title: 'Safe Roundtrip Transit',
      description: 'Chauffeured pickup from your home or lodging in crash-tested safety harnesses with dual climate control, fresh water, and soothing music.',
      image: '/images/moment-return.jpg'
    },
    {
      number: '02',
      title: 'Photo & Ceremony Coordination',
      description: 'Squeakers, high-value treats, eye-contact cues, and calming aisle accompaniment so your pup nails the photos without pulling or stress.',
      image: '/images/ceremony-flower-collar-dog.jpg'
    },
    {
      number: '03',
      title: 'Comfort, Hydration & Breaks',
      description: 'Dedicated potty walks, shaded hydration breaks, coat brushing, lint-rolling, and collar adjustments so your dog stays refreshed all afternoon.',
      image: '/images/real-wedding-05.jpg'
    },
    {
      number: '04',
      title: 'Post-Celebration Bedtime Handover',
      description: 'Return home or to dog-friendly hotel, evening dinner feeding, fresh water bowl, bedtime tuck-in, and a confirmation text with photos for the newlyweds.',
      image: '/images/real-wedding-15.jpg'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            once: true
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 sm:py-28 bg-[#FAFAF6]" id="what-we-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-18">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#345744]">
            // Dedicated Wedding Day Care
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#26322D] mt-2 tracking-tight">
            You celebrate. We take care of every detail.
          </h2>
          <p className="text-base sm:text-lg text-[#59645E] mt-4 font-sans leading-relaxed">
            Your wedding day moves fast. We give you the joy of having your dog by your side without asking your parents or bridesmaids to hold leashes, pick up waste, or miss toasts.
          </p>
        </div>

        {/* 2-Column Editorial Grid: Image Left/Center, 4 Pillars Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Documentary Photo Column (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <ImageFrame
              src={imageManifest.careAction.src}
              alt={imageManifest.careAction.alt}
              aspectRatio="aspect-[4/5]"
              rounded="rounded-3xl"
              title={imageManifest.careAction.placeholderTitle}
              subtitle={imageManifest.careAction.placeholderSubtitle}
              badge="Attentive Chaperoning"
              className="shadow-wedding-card"
            />
            <p className="text-xs text-[#59645E] italic mt-3 text-center sm:text-left">
              Every detail is planned in advance: walks, hydration, attire, and safe transit.
            </p>
          </div>

          {/* Pillars List Column (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {pillars.map((pillar) => (
                <div
                  key={pillar.number}
                  className="pillar-card card-thick p-6 flex flex-col justify-between hover:border-[#7C897F] transition-all group overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-[#345744] tracking-wider px-2 py-0.5 rounded-full bg-[#345744]/10">
                        [{pillar.number}]
                      </span>
                      <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#D8DED5] flex-shrink-0">
                        <img
                          src={pillar.image}
                          alt={pillar.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#26322D] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#59645E] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* In-context reassurance button */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#F0F2EC] border border-[#D8DED5]">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#345744]">
                  Tailored To Your Venue
                </p>
                <p className="text-sm text-[#26322D] mt-0.5">
                  We coordinate directly with your venue and lead photographer.
                </p>
              </div>
              <button
                onClick={() => onOpenInquiry()}
                className="btn-accent text-xs !py-2.5 !px-4 whitespace-nowrap active:scale-95 transition-transform"
              >
                Inquire For Your Venue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
