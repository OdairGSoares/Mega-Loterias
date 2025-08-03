import React from 'react';
import { Calendar, DollarSign } from 'lucide-react';
import { TransformedLotteryResult } from '../services/api/types';
import { DrawNumbers } from './DrawNumbers';
import { PrizeTable } from './PrizeTable';
import { LOTTERY_GAMES } from '../config/constants';
import { useNavigate } from 'react-router-dom';

interface LotteryCardProps {
  result: TransformedLotteryResult;
}

export function LotteryCard({ result }: LotteryCardProps) {
  const game = LOTTERY_GAMES.find(g => g.id === result.gameId)!;
  const navigate = useNavigate();
  
  const shouldShowSpecialNumber = result.specialNumber && result.gameId === 'timemania';
  
  const handleBetClick = () => {
    window.open('https://www.loteriasonline.caixa.gov.br/silce-web/#/home', '_blank');
  };

  const handleViewMoreResults = () => {
    navigate(`/resultados/${result.gameId}`);
  };
  
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all border border-white/20">
      <div 
        className="p-6 relative overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${game.color}, ${game.color})`,
          boxShadow: `0 4px 30px ${game.color}30`
        }}
      >
        <div className="absolute inset-0 backdrop-blur-sm bg-white/10" />
        
        <div className="relative z-10 flex justify-between items-center text-white">
          <div>
            <h3 className="text-xl font-bold mb-1 drop-shadow-sm">{result.gameName}</h3>
            <p className="text-white/90 text-sm drop-shadow-sm">
              Concurso {result.drawNumber} - {result.drawDate}
            </p>
          </div>
          {result.accumulated && (
            <span className="px-4 py-1.5 backdrop-blur-md bg-white/20 rounded-full text-sm font-bold border border-white/40 shadow-lg">
              ACUMULOU!
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 bg-white/80 backdrop-blur-md">
        <DrawNumbers numbers={result.numbers} gameType={result.gameId as 'megasena' | 'lotofacil' | 'quina'} />
        
        {shouldShowSpecialNumber && (
          <div 
            className="mb-6 p-4 rounded-lg backdrop-blur-sm"
            style={{ 
              background: `${game.color}20`,
              borderLeft: `4px solid ${game.color}`,
              boxShadow: `inset 0 2px 4px ${game.color}20`
            }}
          >
            <p className="text-sm opacity-80">Time do Coração:</p>
            <p className="font-bold text-lg" style={{ color: game.color }}>{result.specialNumber}</p>
          </div>
        )}

        <PrizeTable prizes={result.prizes} />

        <div className="mt-6 pt-6 border-t border-gray-200/50 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Próximo Sorteio</p>
                <p className="font-medium text-gray-900">{result.nextDrawDate}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <DollarSign className="w-5 h-5 text-gray-400" />
              <div>
                <p className="text-sm text-gray-500">Prêmio Estimado</p>
                <p className="font-bold text-green-600">{result.nextDrawPrize}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button 
              onClick={handleViewMoreResults}
              className="w-full py-2.5 px-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              Ver Outros Resultados
            </button>
            <button 
              onClick={handleBetClick}
              className="w-full py-2.5 px-4 text-white rounded-lg transition-all hover:-translate-y-0.5 shadow-lg font-medium"
              style={{ 
                background: `linear-gradient(135deg, ${game.color}, ${game.color})`,
                boxShadow: `0 4px 12px ${game.color}40, inset 0 1px 1px rgba(255, 255, 255, 0.3)`
              }}
            >
              Apostar Agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}