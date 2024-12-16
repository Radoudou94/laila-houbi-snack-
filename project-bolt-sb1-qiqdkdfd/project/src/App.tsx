import React from 'react';
import { Menu } from './components/Menu';
import { GameBoard } from './components/GameBoard';
import { ScoreBoard } from './components/ScoreBoard';
import { GameOver } from './components/GameOver';
import { LoveMessage } from './components/LoveMessage';
import { useGameLogic } from './hooks/useGameLogic';
import { PauseMenu } from './components/PauseMenu';

const App: React.FC = () => {
  const { gameState, startGame, togglePause, returnToMenu } = useGameLogic();

  return (
    <div className="min-h-screen bg-red-900 flex items-center justify-center relative overflow-hidden">
      <div className="fixed top-4 left-0 right-0 z-50">
        <LoveMessage />
      </div>

      <div className="relative z-10 flex items-center gap-8">
        {gameState.isPlaying && (
          <div className="flex flex-col gap-4">
            <ScoreBoard 
              gameState={gameState} 
              onPause={togglePause}
              onReturnToMenu={returnToMenu}
            />
          </div>
        )}

        <div>
          {!gameState.isPlaying ? (
            <Menu onStart={startGame} />
          ) : (
            <div className="relative">
              <GameBoard gameState={gameState} />
              
              {gameState.isPaused && (
                <PauseMenu 
                  onResume={togglePause}
                  onReturnToMenu={returnToMenu}
                />
              )}

              {gameState.isGameOver && (
                <GameOver 
                  gameState={gameState}
                  onReturnToMenu={returnToMenu}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;