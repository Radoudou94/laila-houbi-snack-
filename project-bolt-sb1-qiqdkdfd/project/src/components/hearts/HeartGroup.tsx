import React, { useEffect, useRef } from 'react';
import { HeartSymbol } from './HeartSymbol';
import { useHeartAnimation } from '../../hooks/useHeartAnimation';

interface HeartGroupProps {
  groupId: number;
}

export const HeartGroup: React.FC<HeartGroupProps> = ({ groupId }) => {
  const { size, position, animation } = useHeartAnimation(groupId);
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heartRef.current) {
      const randomX = (Math.random() * 200 - 100) + 'px';
      heartRef.current.style.setProperty('--random-x', randomX);
    }
  }, []);

  return (
    <div
      ref={heartRef}
      className="absolute"
      style={{
        left: `${position.x}%`,
        fontSize: `${size}px`,
        ...animation
      }}
    >
      <HeartSymbol count={Math.floor(size / 8)} />
    </div>
  );
};