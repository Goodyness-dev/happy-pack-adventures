import React from 'react';
import { imageManifest } from '../../data/imageManifest';

export default function VisualProofMarquee({ onOpenInquiry }) {
  const imagesRow1 = [
    { src: '/images/real-wedding-porch.jpg', title: 'Historic Venue Steps with Best Dog', venue: 'Alabama Wedding Venue' },
    { src: '/images/melissa-real-puppies.jpg', title: 'Melissa & The Rescue Pups', venue: 'Happy Pack HQ' },
    { src: '/images/sunset-golden-walk.jpg', title: 'Golden Hour Decompression Walk', venue: 'Sunset Meadow Trail' },
    { src: '/images/wedding-cooper.jpg', title: 'Cooper in Rose Garden', venue: 'Botanical Gardens' },
    { src: '/images/gallery-ring-bearer.jpg', title: 'Ring Bearer Velvet Pouch', venue: 'The Donnelly House' },
  ];

  const imagesRow2 = [
    { src: '/images/bride-pup-hug.jpg', title: 'Bridal Suite First Look Cuddles', venue: 'Private Estate' },
    { src: '/images/groom-bestfriend.jpg', title: 'Groomsmen & Best Friend in Bowtie', venue: 'Country Club Terrace' },
    { src: '/images/melissa-adventure.jpg', title: 'Melissa on Adventure Duty', venue: 'Central Alabama' },
    { src: '/images/moment-ceremony.jpg', title: 'Rose Petal Recessional', venue: 'Rose Garden Aisle' },
    { src: '/images/wedding-luna-bear.jpg', title: 'Luna & Bear Double Doodles', venue: 'Historic Manor' },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#FAFAF6] overflow-hidden border-b border-[#D8DED5] relative">
      
      {/* Section Subheader */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#345744] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#345744] animate-pulse" />
            Live Wedding Album Stream
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#26322D] font-normal mt-1">
            Every smile, tail wag, and picture-perfect moment.
          </h2>
        </div>

        <button
          onClick={() => onOpenInquiry()}
          className="text-xs font-bold text-[#345744] hover:text-[#294737] flex items-center gap-1.5 transition-colors group"
        >
          <span>Check Your Date For These Moments</span>
          <span className="transition-transform group-hover:translate-x-1">?</span>
        </button>
      </div>

      {/* Infinite Moving Marquee Container */}
      <div className="space-y-4 marquee-container">
        
        {/* ROW 1: Leftward Infinite Drift */}
        <div className="flex w-[200%] sm:w-[150%] animate-marquee gap-4 sm:gap-6">
          {[...imagesRow1, ...imagesRow1, ...imagesRow1].map((item, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-64 sm:w-80 aspect-[16/11] rounded-2xl overflow-hidden border border-[#D8DED5] shadow-wedding-card group cursor-pointer"
              onClick={() => onOpenInquiry()}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 block">
                  {item.venue}
                </span>
                <span className="font-serif text-sm sm:text-base font-medium text-white block truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Rightward Infinite Drift */}
        <div className="flex w-[200%] sm:w-[150%] animate-marquee-reverse gap-4 sm:gap-6">
          {[...imagesRow2, ...imagesRow2, ...imagesRow2].map((item, idx) => (
            <div
              key={idx}
              className="relative flex-shrink-0 w-64 sm:w-80 aspect-[16/11] rounded-2xl overflow-hidden border border-[#D8DED5] shadow-wedding-card group cursor-pointer"
              onClick={() => onOpenInquiry()}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-emerald-300 block">
                  {item.venue}
                </span>
                <span className="font-serif text-sm sm:text-base font-medium text-white block truncate">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}
