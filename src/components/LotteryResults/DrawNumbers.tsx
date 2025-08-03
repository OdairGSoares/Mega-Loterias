import React from 'react';

interface DrawNumbersProps {
  numbers: number[];
  bgColor: string;
}

export function DrawNumbers({ numbers, bgColor }: DrawNumbersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {numbers.map((num) => (
        <div
          key={`number-${num}`}
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg"
          style={{ backgroundColor: `${bgColor}15`, color: bgColor }}
        >
          {String(num).padStart(2, '0')}
        </div>
      ))}
    </div>
  );
}