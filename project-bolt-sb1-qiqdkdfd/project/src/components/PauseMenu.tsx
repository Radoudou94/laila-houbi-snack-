import React from 'react';

interface PauseMenuProps {
  onResume: () => void;
  onReturnToMenu: () => void;
}

export const PauseMenu: React.FC<PauseMenuProps> = ({ onResume, onReturnToMenu }) => {
  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Jeu en pause</h2>
        <div className="space-y-2">
          <button
            onClick={onResume}
            className="w-full px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
          >
            Reprendre
          </button>
          <button
            onClick={onReturnToMenu}
            className="w-full px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Retour au menu
          </button>
        </div>
      </div>
    </div>
  );
};