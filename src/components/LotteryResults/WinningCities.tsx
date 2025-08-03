import React from 'react';
import { TransformedLotteryResult } from '../../services/api/types';

interface WinningCitiesProps {
  cities: NonNullable<TransformedLotteryResult['winningCities']>;
}

export function WinningCities({ cities }: WinningCitiesProps) {
  return (
    <div className="mt-4 pt-4 border-t">
      <p className="text-sm font-medium text-gray-700 mb-2">Cidades Premiadas:</p>
      <div className="space-y-1">
        {cities.map((city) => (
          <p 
            key={`${city.city}-${city.state}-${city.winners}`} 
            className="text-sm text-gray-600"
          >
            {city.winners} {city.winners === 1 ? 'ganhador' : 'ganhadores'} em{' '}
            {city.city}, {city.state}
          </p>
        ))}
      </div>
    </div>
  );
}