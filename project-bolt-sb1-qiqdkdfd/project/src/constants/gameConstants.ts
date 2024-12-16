import { GameState } from '../types/game';

export const GRID_SIZE = 20;
export const INITIAL_SNAKE_LENGTH = 3;

export const SPEED_MAP = {
  easy: 200,
  medium: 150,
  hard: 100,
} as const;

export const INITIAL_GAME_STATE: GameState = {
  mode: 'single',
  difficulty: 'medium',
  isPlaying: false,
  isPaused: false,
  isGameOver: false,
  food: { x: 5, y: 5 },
  snake1: {
    body: [{ x: 10, y: 10 }],
    direction: 'right',
    score: 0,
    color: '#10B981',
  },
};