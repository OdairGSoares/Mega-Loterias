import styled from 'styled-components';
import { theme } from '../styles/theme';
import { GlassCard } from './Layout';

interface GameCardProps {
  gameType: 'megasena' | 'lotofacil' | 'quina';
  numbers: number[];
}

// ... outros styled components ...

export function GameCard({ gameType, numbers }: GameCardProps) {
  return (
    <GameCardContainer gameType={gameType}>
      <GameTitle>{gameType}</GameTitle>
      <Numbers>
        {numbers.map((number, index) => (
          // Usando a combinação de número e índice para criar uma key única
          <Number key={`${number}-${index}`} gameType={gameType}>
            {number}
          </Number>
        ))}
      </Numbers>
    </GameCardContainer>
  );
} 