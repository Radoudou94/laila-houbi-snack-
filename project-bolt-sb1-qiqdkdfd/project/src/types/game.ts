export type Difficulty = 'easy' | 'medium' | 'hard';
export type GameMode = 'single' | 'multi';
export type Direction = 'up' | 'down' | 'left' | 'right';
export type Position = { x: number; y: number };
export type Snake = {
  body: Position[];
  direction: Direction;
  score: number;
  color: string;
};

export type GameState = {
  mode: GameMode;
  difficulty: Difficulty;
  isPlaying: boolean;
  isPaused: boolean;
  isGameOver: boolean;
  food: Position;
  snake1: Snake;
  snake2?: Snake;
};