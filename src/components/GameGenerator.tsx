import React, { useState, useEffect } from 'react';
import { Dices } from 'lucide-react';
import { generateGame } from '../utils/gameGenerator';
import { LOTTERY_GAMES } from '../config/constants';

interface GameGeneratorProps {
  game: typeof LOTTERY_GAMES[number];
}

export function GameGenerator({ game }: GameGeneratorProps) {
  const [numbers, setNumbers] = useState<number[]>([]);

  // Reset numbers when game changes
  useEffect(() => {
    setNumbers([]);
  }, [game.id]);

  const handleGenerate = () => {
    setNumbers(generateGame(game.minNumbers, game.maxNumbers, game.range));
  };

  return (
    <div 
      className="relative p-8 rounded-xl overflow-hidden backdrop-blur-xl border border-white/20"
      style={{ 
        background: `linear-gradient(135deg, ${game.color}, ${game.color})`,
        boxShadow: `0 8px 32px ${game.color}40`
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
      
      <div className="relative z-10 mb-6">
        <h3 className="text-white text-xl font-bold mb-2 drop-shadow-md">
          Gerador da {game.name}
        </h3>
        <p className="text-white/90 text-sm">
          Gere {game.maxNumbers} números entre 1 e {game.range}
        </p>
      </div>
      
      <div className="relative z-10 flex flex-wrap gap-3 min-h-[60px] mb-6">
        {numbers.map((num, index) => (
          <div
            key={`${game.id}-${num}-${index}`}
            className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all hover:scale-110 backdrop-blur-md bg-white/30 border border-white/50"
            style={{ 
              color: 'white',
              textShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}
          >
            {String(num).padStart(2, '0')}
          </div>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        className="relative z-10 w-full py-3 px-6 rounded-xl backdrop-blur-md bg-white/20 border border-white/40 flex items-center justify-center gap-3 text-lg font-bold transition-all hover:-translate-y-0.5 text-white hover:bg-white/30"
        style={{ 
          boxShadow: `0 4px 15px ${game.color}40`
        }}
      >
        <Dices className="w-6 h-6" />
        Gerar Jogo da {game.name}
      </button>
    </div>
  );
}