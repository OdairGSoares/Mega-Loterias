import React from 'react';
import { Trophy, Calendar, Users, MapPin, DollarSign } from 'lucide-react';
import { TransformedLotteryResult } from '../services/api/types';
import { LOTTERY_GAMES } from '../config/constants';

interface LotteryResultsProps {
  results: TransformedLotteryResult[];
}

export function LotteryResults({ results }: LotteryResultsProps) {
  return (
    <div className="space-y-6">
      {results.map((result) => {
        const gameConfig = LOTTERY_GAMES.find(game => game.id === result.gameId);
        const bgColor = gameConfig?.color || 'rgb(0, 155, 58)';
        const mainPrize = result.prizes[0];

        return (
          <div key={`${result.gameId}-${result.drawNumber}`} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4" style={{ backgroundColor: bgColor }}>
              <h3 className="text-xl font-bold text-white">{result.gameName}</h3>
              <p className="text-white/90 text-sm">
                Concurso {result.drawNumber} - {result.drawDate}
              </p>
            </div>
            
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-6">
                {result.numbers.map((num) => (
                  <div
                    key={num}
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
                    style={{ backgroundColor: `${bgColor}15`, color: bgColor }}
                  >
                    {String(num).padStart(2, '0')}
                  </div>
                ))}
              </div>

              {result.specialNumber && (
                <div className="mb-4 p-3 rounded-lg" style={{ backgroundColor: `${bgColor}15` }}>
                  <p className="text-sm text-gray-600">
                    {result.gameId === 'timemania' ? 'Time do Coração' : 'Mês da Sorte'}:
                  </p>
                  <p className="font-bold" style={{ color: bgColor }}>
                    {result.specialNumber}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainPrize && (
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-600">
                        {mainPrize.description}
                      </p>
                      <p className="font-bold text-green-600">
                        {mainPrize.prize}
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-600">Ganhadores</p>
                    <p className="font-bold text-blue-600">
                      {result.accumulated
                        ? 'Acumulou!'
                        : `${mainPrize?.winners || 0} ganhador${
                            mainPrize?.winners === 1 ? '' : 'es'
                          }`}
                    </p>
                  </div>
                </div>

                {result.collectionAmount && (
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                    <div>
                      <p className="text-sm text-gray-600">Arrecadação Total</p>
                      <p className="font-bold text-emerald-600">{result.collectionAmount}</p>
                    </div>
                  </div>
                )}

                {result.drawLocation && (
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                    <div>
                      <p className="text-sm text-gray-600">Local do Sorteio</p>
                      <p className="font-bold text-indigo-600">{result.drawLocation}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-purple-600" />
                  <div>
                    <p className="text-sm text-gray-600">Próximo Sorteio</p>
                    <p className="font-bold text-purple-600">{result.nextDrawDate}</p>
                  </div>
                </div>
              </div>

              {result.winningCities && result.winningCities.length > 0 && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm font-medium text-gray-700 mb-2">Cidades Premiadas:</p>
                  <div className="space-y-1">
                    {result.winningCities.map((city, index) => (
                      <p key={index} className="text-sm text-gray-600">
                        {city.winners} {city.winners === 1 ? 'ganhador' : 'ganhadores'} em{' '}
                        {city.city}, {city.state}
                      </p>
                    ))}
                  </div>
                </div>
              )}

              {result.nextDrawPrize && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">Prêmio Estimado Próximo Sorteio:</p>
                  <p className="font-bold text-green-600 text-lg">{result.nextDrawPrize}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}