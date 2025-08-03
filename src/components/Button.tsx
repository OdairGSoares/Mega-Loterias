import styled from 'styled-components';

export const Button = styled.button`
  padding: 12px 24px;
  background: var(--glass-background);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--glass-border);
  border-radius: 8px;
  color: #1a1a1a;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    background: var(--primary-gradient);
    color: white;
    border-color: transparent;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    &:hover {
      transform: none;
      background: var(--glass-background);
      color: #1a1a1a;
      border: 1px solid var(--glass-border);
    }
  }
`; 