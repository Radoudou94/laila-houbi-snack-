import React from 'react';
import { GameState } from '../types/game';
import { GridCell } from './GridCell';
import { GRID_SIZE } from '../constants/gameConstants';

interface GameBoardProps {
  gameState: GameState;
}

export const GameBoard: React.FC<GameBoardProps> = ({ gameState }) => {
  return (
    <div className="relative w-[600px] h-[600px] bg-gray-800 rounded-lg p-4 shadow-2xl">
      <div 
        className="grid gap-1" 
        style={{ 
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, 1fr)`,
        }}
      >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => {
          const x = i % GRID_SIZE;
          const y = Math.floor(i / GRID_SIZE);
          return (
            <GridCell 
              key={i} 
              position={{ x, y }} 
              gameState={gameState} 
            />
          );
        })}
      </div>
    </div>
  );
};