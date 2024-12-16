import React from 'react';
import { GameState } from '../types/game';
import { GameControls } from './GameControls';

interface ScoreBoardProps {
  gameState: GameState;
  onPause: () => void;
  onReturnToMenu: () => void;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ 
  gameState, 
  onPause,
  onReturnToMenu 
}) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-lg shadow-md p-4 min-w-[200px]">
        <h2 className="font-medium text-gray-800">Joueur 1</h2>
        <p className="text-2xl font-bold" style={{ color: gameState.snake1.color }}>
          {gameState.snake1.score}
        </p>
      </div>

      {gameState.mode === 'multi' && gameState.snake2 && (
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="font-medium text-gray-800">Joueur 2</h2>
          <p className="text-2xl font-bold" style={{ color: gameState.snake2.color }}>
            {gameState.snake2.score}
          </p>
        </div>
      )}

      <div className="mt-4">
        <GameControls 
          isPaused={gameState.isPaused}
          onPause={onPause}
          onReturnToMenu={onReturnToMenu}
        />
      </div>
    </div>
  );
};