import React from 'react';
import { Loader2 } from 'lucide-react';


import { LotteryCard } from '../components/LotteryCard';
import { GameGenerator } from '../components/GameGenerator';
import { AdUnit } from '../components/AdUnit';
import { useLotteryResults } from '../hooks/useLotteryResults';
import { LOTTERY_GAMES } from '../config/constants';

export function Home() {
  const { data: results, isLoading, error } = useLotteryResults();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
          <AdUnit size="large-banner" className="mx-auto" />
      </div>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">Últimos Resultados</h2>

            
            {isLoading ? (
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <p>Carregando resultados...</p>
                </div>
              </div>
            ) : error ? (
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-center text-red-600">
                  Erro ao carregar os resultados. Tente novamente mais tarde.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {results?.map((result) => (
                  <React.Fragment key={result.gameId}>
                    <LotteryCard result={result} />

                  </React.Fragment>
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6 text-gray-800">Gerador de Jogos</h2>
              <div className="space-y-4">
                {LOTTERY_GAMES.map((game) => (
                  <GameGenerator key={game.id} game={game} />
                ))}
              </div>
            </div>
            
            <div className="hidden lg:block">
              {[...Array(5)].map((_, index) => (
                <AdUnit key={index} size="large-skyscraper" />
              ))}
            </div>
          </aside>
        </div>
      </main>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdUnit size="large-banner" className="mx-auto" />
      </div>
    </div>
  );
}