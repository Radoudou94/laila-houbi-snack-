import { useState, useEffect, useCallback } from 'react';
import { GameState, Direction, Position, Difficulty, GameMode } from '../types/game';
import { INITIAL_GAME_STATE, SPEED_MAP } from '../constants/gameConstants';
import { moveSnake, checkCollision, generateFood } from '../utils/gameUtils';

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);

  const startGame = useCallback((mode: GameMode, difficulty: Difficulty) => {
    setGameState(prevState => ({
      ...INITIAL_GAME_STATE,
      mode,
      difficulty,
      isPlaying: true,
      isGameOver: false,
      food: generateFood(),
      snake1: {
        ...prevState.snake1,
        body: Array.from({ length: 3 }, (_, i) => ({ x: 10 - i, y: 10 })),
      },
      ...(mode === 'multi' && {
        snake2: {
          body: Array.from({ length: 3 }, (_, i) => ({ x: 10 - i, y: 15 })),
          direction: 'right',
          score: 0,
          color: '#3B82F6',
        },
      }),
    }));
  }, []);

  const togglePause = useCallback(() => {
    setGameState(prev => ({ ...prev, isPaused: !prev.isPaused }));
  }, []);

  const returnToMenu = useCallback(() => {
    setGameState(INITIAL_GAME_STATE);
  }, []);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (!gameState.isPlaying || gameState.isPaused || gameState.isGameOver) return;

    setGameState(prev => {
      const newState = { ...prev };
      
      // Player 1 controls (ZQSD)
      if (event.key === 'z' && prev.snake1.direction !== 'down') newState.snake1.direction = 'up';
      if (event.key === 's' && prev.snake1.direction !== 'up') newState.snake1.direction = 'down';
      if (event.key === 'q' && prev.snake1.direction !== 'right') newState.snake1.direction = 'left';
      if (event.key === 'd' && prev.snake1.direction !== 'left') newState.snake1.direction = 'right';

      // Player 2 controls (Arrow keys)
      if (prev.mode === 'multi' && prev.snake2) {
        if (event.key === 'ArrowUp' && prev.snake2.direction !== 'down') newState.snake2.direction = 'up';
        if (event.key === 'ArrowDown' && prev.snake2.direction !== 'up') newState.snake2.direction = 'down';
        if (event.key === 'ArrowLeft' && prev.snake2.direction !== 'right') newState.snake2.direction = 'left';
        if (event.key === 'ArrowRight' && prev.snake2.direction !== 'left') newState.snake2.direction = 'right';
      }

      return newState;
    });
  }, [gameState.isPlaying, gameState.isPaused, gameState.isGameOver]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (!gameState.isPlaying || gameState.isPaused || gameState.isGameOver) return;

    const gameLoop = setInterval(() => {
      setGameState(prev => {
        const newState = { ...prev };
        
        // Move snake 1
        const newSnake1Body = moveSnake(prev.snake1.body, prev.snake1.direction);
        const snake1Head = newSnake1Body[0];

        // Check collisions for snake 1
        if (checkCollision(snake1Head, prev.snake1.body.slice(1))) {
          newState.isGameOver = true;
          return newState;
        }

        newState.snake1 = {
          ...prev.snake1,
          body: newSnake1Body,
        };

        // Handle food collision for snake 1
        if (snake1Head.x === prev.food.x && snake1Head.y === prev.food.y) {
          newState.snake1.score += 10;
          newState.snake1.body = [...newSnake1Body, prev.snake1.body[prev.snake1.body.length - 1]];
          newState.food = generateFood();
        }

        // Handle snake 2 if in multiplayer mode
        if (prev.mode === 'multi' && prev.snake2) {
          const newSnake2Body = moveSnake(prev.snake2.body, prev.snake2.direction);
          const snake2Head = newSnake2Body[0];

          // Check collisions for snake 2
          if (checkCollision(snake2Head, prev.snake2.body.slice(1)) ||
              checkCollision(snake2Head, newSnake1Body) ||
              checkCollision(snake1Head, newSnake2Body)) {
            newState.isGameOver = true;
            return newState;
          }

          newState.snake2 = {
            ...prev.snake2,
            body: newSnake2Body,
          };

          // Handle food collision for snake 2
          if (snake2Head.x === prev.food.x && snake2Head.y === prev.food.y) {
            newState.snake2.score += 10;
            newState.snake2.body = [...newSnake2Body, prev.snake2.body[prev.snake2.body.length - 1]];
            newState.food = generateFood();
          }
        }

        return newState;
      });
    }, SPEED_MAP[gameState.difficulty]);

    return () => clearInterval(gameLoop);
  }, [gameState.isPlaying, gameState.isPaused, gameState.isGameOver, gameState.difficulty]);

  return {
    gameState,
    startGame,
    togglePause,
    returnToMenu,
  };
};