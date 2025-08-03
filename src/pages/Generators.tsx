import React from 'react';
import { LOTTERY_GAMES } from '../config/constants';
import { GameGenerator } from '../components/GameGenerator';
import { AdUnit } from '../components/AdUnit';

export function Generators() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Ad */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <AdUnit size="large-banner" className="mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Geradores de Jogos
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {LOTTERY_GAMES.map((game, index) => (
            <React.Fragment key={game.id}>
              <div>
                <h2 
                  className="text-xl font-semibold mb-4"
                  style={{ color: game.color }}
                >
                  {game.name}
                </h2>
                <GameGenerator game={game} />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Ad */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdUnit size="large-banner" className="mx-auto" />
      </div>
    </div>
  );
} 