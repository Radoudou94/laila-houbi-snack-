import React from 'react';
import { Trophy } from 'lucide-react';
import { GameState } from '../types/game';

interface GameOverProps {
  gameState: GameState;
  onReturnToMenu: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ gameState, onReturnToMenu }) => {
  const winner = gameState.mode === 'multi' && gameState.snake2
    ? gameState.snake1.score > gameState.snake2.score
      ? 'Joueur 1'
      : gameState.snake2.score > gameState.snake1.score
        ? 'Joueur 2'
        : 'Égalité'
    : null;

  return (
    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white rounded-xl p-8 shadow-2xl w-[400px] text-center">
        <div className="mb-6">
          <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold mb-2">Game Over</h2>
          {winner && (
            <p className="text-xl text-gray-600 mb-2">
              {winner === 'Égalité' ? 'Match nul !' : `${winner} gagne !`}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Joueur 1</span>
              <span className="text-xl font-bold" style={{ color: gameState.snake1.color }}>
                {gameState.snake1.score}
              </span>
            </div>
            {gameState.mode === 'multi' && gameState.snake2 && (
              <div className="flex justify-between items-center">
                <span className="font-medium">Joueur 2</span>
                <span className="text-xl font-bold" style={{ color: gameState.snake2.color }}>
                  {gameState.snake2.score}
                </span>
              </div>
            )}
          </div>

          <button
            onClick={onReturnToMenu}
            className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-blue-600 transition-all hover:shadow-lg hover:scale-102"
          >
            Retour au menu
          </button>
        </div>
      </div>
    </div>
  );
};