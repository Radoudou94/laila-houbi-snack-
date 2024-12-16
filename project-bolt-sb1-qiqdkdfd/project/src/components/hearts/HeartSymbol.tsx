import React from 'react';

interface HeartSymbolProps {
  count: number;
}

export const HeartSymbol: React.FC<HeartSymbolProps> = ({ count }) => {
  const hearts = '❤️'.repeat(Math.max(1, Math.min(count, 3)));
  return <span className="opacity-70 select-none">{hearts}</span>;
};