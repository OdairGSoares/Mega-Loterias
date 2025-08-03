import React from 'react';
import styled from 'styled-components';

interface CardProps {
  gradient?: string;
  children: React.ReactNode;
  className?: string;
}

const StyledCard = styled.div<{ gradient?: string }>`
  padding: 24px;
  margin: 16px 0;
  transition: all 0.3s ease;
  
  ${props => props.gradient ? `
    background: ${props.gradient};
    color: white;
  ` : `
    background: var(--glass-background);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border: 1px solid var(--glass-border);
  `}
  
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

export const Card: React.FC<CardProps> = ({ gradient, children, className }) => {
  return (
    <StyledCard gradient={gradient} className={className}>
      {children}
    </StyledCard>
  );
}; 