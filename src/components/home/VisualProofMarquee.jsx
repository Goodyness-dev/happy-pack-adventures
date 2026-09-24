import React from 'react';

export default function VisualProofMarquee({ onOpenInquiry }) {
  const imagesRow1 = [
    { src: '/images/real-wedding-04.jpg', title: 'Estate Lawn Tuxedo Companion', venue: 'Historic Alabama Estate' },
    { src: '/images/real-wedding-13.jpg', title: 'Aisle White Rose Flower Garland', venue: 'Ceremony Lawn' },
    { src: '/images/real-wedding-15.jpg', title: 'First Look Paw Handover', venue: 'Courtyard Terrace' },
    { src: '/images/real-wedding-01.jpg', title: 'Pre-Ceremony Shaded Walk', venue: 'Botanical Gardens' },
    { src: '/images/real-wedding-03.jpg', title: 'Couple & Best Friend Golden Hour', venue: 'Sunset Meadow' },
    { src: '/images/real-wedding-05.jpg', title: 'Outdoor Patio Decompression', venue: 'The Donnelly House' },
    { src: '/images/real-wedding-07.jpg', title: 'Gentle Hydration & Walk', venue: 'Shades Valley' },
    { src: '/images/real-wedding-09.jpg', title: 'Cocktail Hour Greeting Companion', venue: 'Private Manor' },
    { src: '/images/real-wedding-11.jpg', title: 'Ring Bearer Collar Coordination', venue: 'Hoover Country Club' },
    { src: '/images/real-wedding-17.jpg', title: 'Aisle Lawn Preparation', venue: 'Oak Mountain Lawn' },
  ];

  const imagesRow2 = [
    { src: '/images/real-wedding-02.jpg', title: 'Morning Bridal Suite Snuggles', venue: 'Bridal Suite' },
    { src: '/images/real-wedding-06.jpg', title: 'Post-Vow Lawn Recessional', venue: 'Terrace Garden' },
    { src: '/images/real-wedding-08.jpg', title: 'Peaceful Venue Cooldown Break', venue: 'Rose Garden Pergola' },
    { src: '/images/real-wedding-10.jpg', title: 'Formal Tuxedo Bandana Styling', venue: 'Country Club Lawn' },
    { src: '/images/real-wedding-12.jpg', title: 'Gentle Calming & Brushing', venue: 'Venue Pavilion' },
    { src: '/images/real-wedding-14.jpg', title: 'Sunset Couple Portrait Escort', venue: 'Mountain Brook Manor' },
    { src: '/images/real-wedding-16.jpg', title: 'Relaxed Ceremony Supervision', venue: 'Historic Chapel Grounds' },
    { src: '/images/real-wedding-18.jpg', title: 'Estate Pathway Evening Stroll', venue: 'Evening Grounds' },
    { src: '/images/real-wedding-20.jpg', title: 'Chauffeured Transit Return', venue: 'Happy Pack Chaperone' },
    { src: '/images/real-wedding-21.jpg', title: 'Grand Estate Sunset Portrait', venue: 'Central Alabama Estate' },
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
          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Infinite Moving Marquee Container */}
      <div className="space-y-4 marquee-container">
        {/* ROW 1: Leftward Infinite Drift */}
        <div className="flex w-[200%] sm:w-[150%] animate-marquee gap-4 sm:gap-6 hover:[animation-play-state:paused]">
          {[...imagesRow1, ...imagesRow1].map((item, idx) => (
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
        <div className="flex w-[200%] sm:w-[150%] animate-marquee-reverse gap-4 sm:gap-6 hover:[animation-play-state:paused]">
          {[...imagesRow2, ...imagesRow2].map((item, idx) => (
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
