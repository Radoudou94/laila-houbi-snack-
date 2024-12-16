import React from 'react';
import { HeartGroup } from './HeartGroup';

export const HeartField: React.FC = () => {
  // Augmente le nombre de cœurs pour plus de densité
  const heartGroups = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {heartGroups.map(id => (
        <HeartGroup key={id} groupId={id} />
      ))}
    </div>
  );
};