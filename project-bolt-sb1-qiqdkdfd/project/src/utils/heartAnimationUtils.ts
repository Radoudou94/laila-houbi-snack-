import { HeartAnimation } from '../types/hearts';

export const generateHeartAnimation = (): HeartAnimation['animation'] => {
  const duration = Math.random() * 10 + 15; // 15-25s pour un mouvement plus lent
  const delay = Math.random() * -15; // Délai négatif pour démarrage décalé
  const randomX = Math.random() * 200 - 100; // Mouvement horizontal aléatoire (-100px à +100px)

  return {
    animation: 'floatingHeart ease-in-out infinite',
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
    transform: 'translateZ(0)',
    willChange: 'transform, opacity'
  };
};