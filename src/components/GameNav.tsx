import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LOTTERY_GAMES } from '../config/constants';

export function GameNav() {
  const location = useLocation();

  return (
    <nav className="bg-white border-b sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 overflow-x-auto">
        <div className="flex space-x-8 py-3">
          <Link
            to="/"
            className={`whitespace-nowrap font-medium transition-colors ${
              location.pathname === '/' 
                ? 'text-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
          >
            Todos os Jogos
          </Link>
          {LOTTERY_GAMES.map((game) => (
            <Link
              key={game.id}
              to={`/resultados/${game.id}`}
              className={`whitespace-nowrap font-medium transition-colors`}
              style={{ 
                color: location.pathname === `/resultados/${game.id}` 
                  ? game.color 
                  : '#4B5563'
              }}
            >
              {game.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}