import { useMemo } from 'react';
import { generateHeartAnimation } from '../utils/heartAnimationUtils';
import { HeartAnimation } from '../types/hearts';

export const useHeartAnimation = (groupId: number): HeartAnimation => {
  return useMemo(() => {
    const size = Math.random() * 25 + 15; // Taille entre 15 et 40px
    
    return {
      size,
      position: {
        x: Math.random() * 100, // Position horizontale aléatoire initiale
        y: 0, // Commence en haut de l'écran
      },
      animation: generateHeartAnimation()
    };
  }, [groupId]);
};