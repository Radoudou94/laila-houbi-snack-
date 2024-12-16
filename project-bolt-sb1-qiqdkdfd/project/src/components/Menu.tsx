import React from 'react';
import { Difficulty, GameMode } from '../types/game';
import { Gamepad2, Users2, ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';

interface MenuProps {
  onStart: (mode: GameMode, difficulty: Difficulty) => void;
}

export const Menu: React.FC<MenuProps> = ({ onStart }) => {
  const [mode, setMode] = React.useState<GameMode>('single');
  const [difficulty, setDifficulty] = React.useState<Difficulty>('medium');

  return (
    <div className="w-[400px] bg-white rounded-xl shadow-xl p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Snake Game</h1>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Mode de jeu</label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setMode('single')}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
                mode === 'single'
                  ? 'bg-emerald-500 text-white border-emerald-600 shadow-lg scale-105'
                  : 'border-gray-300 hover:border-emerald-500 hover:scale-102'
              }`}
            >
              <Gamepad2 size={20} />
              <span>1 Joueur</span>
            </button>
            <button
              onClick={() => setMode('multi')}
              className={`flex items-center justify-center gap-2 p-3 rounded-lg border transition-all ${
                mode === 'multi'
                  ? 'bg-blue-500 text-white border-blue-600 shadow-lg scale-105'
                  : 'border-gray-300 hover:border-blue-500 hover:scale-102'
              }`}
            >
              <Users2 size={20} />
              <span>2 Joueurs</span>
            </button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Difficulté</label>
          <div className="grid grid-cols-3 gap-2">
            {(['easy', 'medium', 'hard'] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setDifficulty(diff)}
                className={`p-2 rounded-lg border transition-all ${
                  difficulty === diff
                    ? 'bg-purple-500 text-white border-purple-600 shadow-lg scale-105'
                    : 'border-gray-300 hover:border-purple-500 hover:scale-102'
                }`}
              >
                {diff === 'easy' && 'Facile'}
                {diff === 'medium' && 'Moyen'}
                {diff === 'hard' && 'Difficile'}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-3">Contrôles</h3>
          {mode === 'single' ? (
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Utilisez les touches <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">Z</span> <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">Q</span> <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">S</span> <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">D</span> pour diriger le serpent</p>
            </div>
          ) : (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold text-emerald-600">Joueur 1:</span>
                <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">Z</span>
                <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">Q</span>
                <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">S</span>
                <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">D</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="font-semibold text-blue-600">Joueur 2:</span>
                <span className="flex gap-1">
                  <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <ArrowUp size={14} /> Haut
                  </span>
                  <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <ArrowLeft size={14} /> Gauche
                  </span>
                  <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <ArrowDown size={14} /> Bas
                  </span>
                  <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <ArrowRight size={14} /> Droite
                  </span>
                </span>
              </div>
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2">Appuyez sur <span className="font-mono bg-gray-200 px-1.5 py-0.5 rounded">Espace</span> pour mettre en pause</p>
        </div>

        <button
          onClick={() => onStart(mode, difficulty)}
          className="w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-blue-600 transition-all hover:shadow-lg hover:scale-102"
        >
          Commencer
        </button>
      </div>
    </div>
  );
};