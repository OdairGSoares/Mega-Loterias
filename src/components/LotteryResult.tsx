import styled from 'styled-components';
import { Card } from './Card';

const LotteryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  padding: 24px;
`;

const LotteryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    background: var(--primary-gradient);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
`;

const Numbers = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
`;

const Number = styled.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--glass-background);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  font-weight: 600;
  color: inherit;
`;

const PrizeInfo = styled.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--glass-border);
  
  p {
    display: flex;
    justify-content: space-between;
    margin: 8px 0;
  }
`;

// Componente atualizado com os novos estilos
export const LotteryResult = ({ game, results }) => {
  const getGradientByGame = (gameName) => {
    switch (gameName.toLowerCase()) {
      case 'mega-sena':
        return 'var(--mega-sena-gradient)';
      case 'lotofacil':
        return 'var(--lotofacil-gradient)';
      case 'quina':
        return 'var(--quina-gradient)';
      default:
        return 'var(--primary-gradient)';
    }
  };

  return (
    <Card gradient={getGradientByGame(game.name)}>
      <LotteryHeader>
        <h2>{game.name}</h2>
        <span>Concurso {results.contestNumber}</span>
      </LotteryHeader>
      
      <Numbers>
        {results.numbers.map((number) => (
          <Number key={number}>{number}</Number>
        ))}
      </Numbers>
      
      <PrizeInfo>
        <p>
          <span>Prêmio Estimado:</span>
          <strong>{results.estimatedPrize}</strong>
        </p>
        <p>
          <span>Acumulado:</span>
          <strong>{results.accumulated ? 'Sim' : 'Não'}</strong>
        </p>
      </PrizeInfo>
    </Card>
  );
}; 