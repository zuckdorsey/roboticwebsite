import Image from 'next/image';

interface HeroIllustrationProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export function HeroIllustration({ 
  src = '/hero-2.png', 
  alt = 'Robotics Illustration',
  width = 1640,
  height = 1640,
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
      sizes="(max-width: 768px) 85vw, (max-width: 1024px) 55vw, 50vw"
      />
    </div>
  );
}