import React from 'react';
import { LOTTERY_GAMES } from '../config/constants';

type GameType = 'megasena' | 'lotofacil' | 'quina';

interface DrawNumbersProps {
  numbers: number[];
  gameType: GameType;
}

export function DrawNumbers({ numbers, gameType }: DrawNumbersProps) {
  const game = LOTTERY_GAMES.find(g => g.id === gameType);
  
  if (!game) return null;

  return (
    <div className="flex flex-wrap gap-3 mb-6">
      {numbers.map((number, index) => (
        <div 
          key={`${gameType}-${number}-${index}`}
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white transition-transform hover:scale-110 shadow-lg"
          style={{ 
            background: `linear-gradient(135deg, ${game.color}, ${game.color})`,
            boxShadow: `0 4px 12px ${game.color}40`
          }}
        >
          {String(number).padStart(2, '0')}
        </div>
      ))}
    </div>
  );
}