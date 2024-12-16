import React, { useMemo } from 'react';
import { Heart } from './Heart';

export const FloatingHearts: React.FC = () => {
  // Utiliser useMemo pour que la configuration des cœurs ne soit générée qu'une seule fois
  const hearts = useMemo(() => Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 15 + 10,
    startPosition: Math.random() * 100,
    duration: Math.random() * 20 + 40,
    delay: Math.random() * -40,
  })), []); // Tableau de dépendances vide = exécuté une seule fois

  return (
    <div className="fixed inset-0 pointer-events-none opacity-60">
      {hearts.map((heart) => (
        <Heart key={heart.id} {...heart} />
      ))}
    </div>
  );
};