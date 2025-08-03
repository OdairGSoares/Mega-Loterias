export const theme = {
  colors: {
    primary: {
      gradient: 'linear-gradient(135deg, #1A73E8, #3498DB)',
      glass: 'rgba(26, 115, 232, 0.1)',
    },
    games: {
      megasena: {
        gradient: 'linear-gradient(135deg, #209869, #29BB89)',
        glass: 'rgba(32, 152, 105, 0.1)',
      },
      lotofacil: {
        gradient: 'linear-gradient(135deg, #930089, #B829BB)',
        glass: 'rgba(147, 0, 137, 0.1)',
      },
      quina: {
        gradient: 'linear-gradient(135deg, #260085, #4B29BB)',
        glass: 'rgba(38, 0, 133, 0.1)',
      },
    },
    background: '#0F1117',
    backgroundGradient: 'radial-gradient(circle at top right, rgba(41, 98, 255, 0.1), transparent), radial-gradient(circle at bottom left, rgba(147, 0, 137, 0.1), transparent)',
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255, 255, 255, 0.7)',
    }
  },
  glassMorphism: {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
  }
} as const 