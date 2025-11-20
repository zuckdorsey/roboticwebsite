import React from 'react';

interface HeroIllustrationProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function HeroIllustration({ width = '100%', height = '100%', className = '' }: HeroIllustrationProps) {
  return (
    <div className={`w-full h-full flex items-center justify-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
        // Menambahkan style overflow visible agar bayangan tidak terpotong saat menyentuh tepi
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Soft shadow filter */}
          <filter id="softShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
            <feOffset dx="0" dy="8" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.1" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Peach Shape (MAXIMIZED SIZE)
          - Circle Center Reference: (90, 90)
          - Outer Bounds: Diperbesar maksimal ke 800 (menyentuh tepi kanan dan bawah viewBox)
        */}
        <path
          d="M 180 90 L 750 90 A 50 50 0 0 1 800 140 L 800 750 A 50 50 0 0 1 750 800 L 140 800 A 50 50 0 0 1 90 750 L 90 180 A 90 90 0 0 0 180 90 Z"
          fill="#FDD7BB"
          filter="url(#softShadow)"
        />

        {/* Light grey circle nested in the cutout (Posisi tetap, diperbesar agar pas) */}
        <circle
          cx="90"
          cy="90"
          r="85"
          fill="#D8DADD"
        />
      </svg>
    </div>
  );
}