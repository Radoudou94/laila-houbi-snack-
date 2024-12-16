import React from 'react';
import { Pause, Play, Home } from 'lucide-react';

interface GameControlsProps {
  isPaused: boolean;
  onPause: () => void;
  onReturnToMenu: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  isPaused,
  onPause,
  onReturnToMenu,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={onPause}
        className="w-full p-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
        title={isPaused ? 'Reprendre' : 'Pause'}
      >
        {isPaused ? (
          <>
            <Play size={20} />
            <span>Reprendre</span>
          </>
        ) : (
          <>
            <Pause size={20} />
            <span>Pause</span>
          </>
        )}
      </button>
      
      <button
        onClick={onReturnToMenu}
        className="w-full p-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
        title="Retour au menu"
      >
        <Home size={20} />
        <span>Menu</span>
      </button>
    </div>
  );
};