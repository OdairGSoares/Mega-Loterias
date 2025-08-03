import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader2, Search } from 'lucide-react';
import { GameGenerator } from '../components/GameGenerator';
import { LotteryCard } from '../components/LotteryCard';
import { LOTTERY_GAMES } from '../config/constants';
import { useLotteryResult } from '../hooks/useLotteryResult';
import { AdUnit } from '../components/AdUnit';

export function GameResults() {
  const { gameId } = useParams<{ gameId: string }>();
  const [searchConcurso, setSearchConcurso] = useState('');
  const game = LOTTERY_GAMES.find(g => g.id === gameId);
  
  const { data: result, isLoading, error } = useLotteryResult(gameId!, searchConcurso);

  if (!game) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-600">Jogo não encontrado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">


      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-4" style={{ color: game.color }}>
                Resultados - {game.name}
              </h1>
              
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="number"
                  placeholder="Buscar por número do concurso"
                  className="w-full md:w-96 pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2"
                  style={{ '--tw-ring-color': `${game.color}40` } as React.CSSProperties}
                  value={searchConcurso}
                  onChange={(e) => setSearchConcurso(e.target.value)}
                />
              </div>
            </div>

            {isLoading ? (
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <p>Carregando resultado...</p>
                </div>
              </div>
            ) : error ? (
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-center text-red-600">
                  Resultado não encontrado. Verifique o número do concurso e tente novamente.
                </p>
              </div>
            ) : result ? (
              <>
                <LotteryCard result={result} />
                {/* In-content Ad */}
                <div className="mt-8 hidden lg:block">
                  <AdUnit size="rectangle" className="mx-auto" />
                </div>
              </>
            ) : null}
          </div>

          <aside className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h2 className="text-xl font-semibold mb-6" style={{ color: game.color }}>
                Gerador da {game.name}
              </h2>
              <GameGenerator game={game} />
            </div>
            
            {/* Anúncios para desktop */}
            <div className="hidden lg:block space-y-4">
              {[...Array(1)].map((_, index) => (
                <AdUnit key={index} size="large-skyscraper" />
              ))}
            </div>

            {/* Anúncios para mobile */}
            <div className="lg:hidden space-y-4">
              {[...Array(1)].map((_, index) => (
                <AdUnit key={index} size="rectangle" className="mx-auto" />
              ))}
            </div>
          </aside>
        </div>
      </div>

    </div>
  );
}