import React, { memo } from 'react';

interface HeartProps {
  size: number;
  startPosition: number;
  duration: number;
  delay: number;
}

// Utiliser memo pour éviter les re-renders inutiles
export const Heart: React.FC<HeartProps> = memo(({ size, startPosition, duration, delay }) => {
  const style = {
    left: `${startPosition}%`,
    fontSize: `${size}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    opacity: 0.4,
    filter: 'blur(0.5px)',
    transform: 'translateZ(0)',
    willChange: 'transform',
  };

  return (
    <div
      className="fixed text-red-500"
      style={style}
    >
      <div className="animate-float">❤️</div>
    </div>
  );
});