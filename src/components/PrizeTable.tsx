import React from 'react';

interface PrizeTableProps {
  prizes: {
    description: string;
    winners: number;
    prize: string;
  }[];
}

export function PrizeTable({ prizes }: PrizeTableProps) {
  return (
    <div className="space-y-3">
      {prizes.map((prize, index) => (
        <div key={index} className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">{prize.description}</p>
            <p className="text-sm text-gray-500">
              {prize.winners} {prize.winners === 1 ? 'ganhador' : 'ganhadores'}
            </p>
          </div>
          <p className="font-bold text-green-600">{prize.prize}</p>
        </div>
      ))}
    </div>
  );
}