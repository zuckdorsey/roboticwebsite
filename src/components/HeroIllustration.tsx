import Image from 'next/image';

interface HeroIllustrationProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function HeroIllustration({ 
  src = '/hero-1.png',
  alt = 'Robotics Illustration',
  width = 1800,
  height = 1800,
  className = '' 
}: HeroIllustrationProps = {}) {
  return (
    <div className={`relative w-full aspect-square flex items-center justify-center my-4 ${className}`}>
      <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-full object-contain"
      priority
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 70vw, 60vw"
      />
    </div>
  );
}