import React, { useState, useRef, useEffect } from 'react';

/**
 * Editorial ImageFrame with robust, non-blocking image loading.
 * Renders the image immediately with graceful CSS fade-in, avoiding
 * blocking placeholder canvases that obscure cached or loaded media.
 */
export default function ImageFrame({
  src,
  alt = 'Happy Pack Adventures Wedding Photography',
  aspectRatio = 'aspect-[4/3]',
  className = '',
  title = 'Wedding Dog Chaperone',
  subtitle = 'Authentic celebration moment',
  rounded = 'rounded-2xl',
  badge = null,
  priority = false
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  // If image is already cached or complete upon mount, mark loaded immediately
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${rounded} bg-[#EEF1EB] border border-[#D8DED5] ${className} group`}
    >
      {/* Subtle neutral background shimmer while image decodes */}
      <div
        className="absolute inset-0 bg-[#E8EDE5] pointer-events-none"
        style={{
          opacity: isLoaded ? 0 : 0.6,
          transition: 'opacity 0.4s ease-out'
        }}
      />

      {!hasError && src ? (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          } group-hover:scale-105`}
        />
      ) : null}

      {/* Only show fallback if src is completely missing or failed with error */}
      {(!src || hasError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#FAFAF6] via-[#F4F6F1] to-[#EAEFE7] select-none">
          <div className="w-12 h-12 mb-3 rounded-full bg-[#345744]/10 text-[#345744] flex items-center justify-center border border-[#345744]/20">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <span className="font-serif text-base md:text-lg font-medium text-[#26322D] leading-tight max-w-[90%]">
            {title}
          </span>
          {subtitle && (
            <span className="text-xs text-[#59645E] mt-1 font-sans tracking-wide uppercase max-w-[85%]">
              {subtitle}
            </span>
          )}
        </div>
      )}

      {/* Optional Editorial Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/95 text-[#26322D] backdrop-blur-md shadow-sm border border-[#D8DED5]">
            {badge}
          </span>
        </div>
      )}
    </div>
  );
}
