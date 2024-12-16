import React from 'react';
import { GameState, Position } from '../types/game';

interface GridCellProps {
  position: Position;
  gameState: GameState;
}

export const GridCell: React.FC<GridCellProps> = ({ position, gameState }) => {
  const renderContent = () => {
    if (gameState.snake1.body.some(p => p.x === position.x && p.y === position.y)) {
      const isHead = position.x === gameState.snake1.body[0].x && position.y === gameState.snake1.body[0].y;
      return (
        <div 
          className={`w-full h-full ${isHead ? 'rounded-full' : 'rounded-sm'} transition-all`} 
          style={{ backgroundColor: gameState.snake1.color }} 
        />
      );
    }
    
    if (gameState.snake2?.body.some(p => p.x === position.x && p.y === position.y)) {
      const isHead = position.x === gameState.snake2.body[0].x && position.y === gameState.snake2.body[0].y;
      return (
        <div 
          className={`w-full h-full ${isHead ? 'rounded-full' : 'rounded-sm'} transition-all`} 
          style={{ backgroundColor: gameState.snake2.color }} 
        />
      );
    }
    
    if (position.x === gameState.food.x && position.y === gameState.food.y) {
      return (
        <div className="w-full h-full rounded-full bg-red-500 animate-pulse" />
      );
    }
    
    return null;
  };

  return (
    <div className="aspect-square border border-gray-700/50 transition-colors">
      {renderContent()}
    </div>
  );
};