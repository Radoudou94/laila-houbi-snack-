import { Position, Direction } from '../types/game';
import { GRID_SIZE } from '../constants/gameConstants';

export const moveSnake = (snake: Position[], direction: Direction): Position[] => {
  const head = snake[0];
  const newHead = { ...head };

  switch (direction) {
    case 'up':
      newHead.y = (newHead.y - 1 + GRID_SIZE) % GRID_SIZE;
      break;
    case 'down':
      newHead.y = (newHead.y + 1) % GRID_SIZE;
      break;
    case 'left':
      newHead.x = (newHead.x - 1 + GRID_SIZE) % GRID_SIZE;
      break;
    case 'right':
      newHead.x = (newHead.x + 1) % GRID_SIZE;
      break;
  }

  return [newHead, ...snake.slice(0, -1)];
};

export const checkCollision = (pos: Position, snakeBody: Position[]): boolean => {
  return snakeBody.some(segment => segment.x === pos.x && segment.y === pos.y);
};

export const generateFood = (): Position => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  };
};