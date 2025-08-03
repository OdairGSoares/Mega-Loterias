# 🍀 Mega Loterias

Uma plataforma web moderna e responsiva para acompanhar resultados e gerar jogos das principais loterias brasileiras.

## 📋 Descrição

**Mega Loterias** é uma aplicação React/TypeScript que oferece uma experiência completa para apostadores brasileiros. A plataforma integra nove modalidades de loteria em uma interface intuitiva com design glassmorphism e cores dinâmicas que se adaptam a cada jogo.

## ✨ Funcionalidades

### 🎯 Principais Recursos
- **Resultados em Tempo Real**: Acompanhe os últimos resultados de todas as loterias
- **Busca por Concurso**: Encontre resultados específicos por número de concurso
- **Geradores de Jogos**: Gere jogos aleatórios para todas as modalidades
- **Reset Automático**: Os geradores são limpos automaticamente ao trocar de jogo
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile
- **Cores Dinâmicas**: Cada jogo tem sua identidade visual única

### 🎲 Loterias Suportadas
- **Mega-Sena** (6-15 números, 1-60)
- **Lotofácil** (15-20 números, 1-25)
- **Quina** (5-15 números, 1-80)
- **Lotomania** (50 números, 1-100)
- **Timemania** (10 números, 1-80)
- **Dupla Sena** (6-15 números, 1-50)
- **Dia de Sorte** (7-15 números, 1-31)
- **Super Sete** (7 números, 1-10)
- **+Milionária** (6-12 números, 1-50)

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento da aplicação
- **React Query** - Gerenciamento de estado e cache
- **Tailwind CSS** - Framework CSS utilitário
- **Styled Components** - CSS-in-JS
- **Lucide React** - Ícones modernos

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **PostCSS** - Processamento CSS
- **Autoprefixer** - Prefixos CSS automáticos

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/brazilian-lottery.git
cd brazilian-lottery
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute em modo de desenvolvimento**
```bash
npm run dev
```

4. **Acesse a aplicação**
```
http://localhost:5173
```

### Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Gera build de produção
npm run preview      # Visualiza o build de produção
npm run lint         # Executa o linter
```

## 📁 Estrutura do Projeto

```
brazilian-lottery/
├── public/                 # Arquivos estáticos
├── src/
│   ├── components/         # Componentes React
│   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   ├── GameGenerator.tsx # Gerador de jogos
│   │   ├── LotteryCard.tsx   # Card de resultados
│   │   └── ...
│   ├── pages/             # Páginas da aplicação
│   │   ├── Home.tsx       # Página inicial
│   │   ├── GameResults.tsx # Página de resultados
│   │   └── Generators.tsx  # Página de geradores
│   ├── hooks/             # Custom hooks
│   ├── services/          # Serviços e APIs
│   ├── utils/             # Utilitários
│   ├── config/            # Configurações
│   ├── types/             # Definições de tipos
│   └── styles/            # Estilos globais
├── package.json
└── README.md
```

## 🎨 Características do Design

### Interface Moderna
- **Glassmorphism**: Efeitos de vidro e transparência
- **Cores Dinâmicas**: Cada loteria tem sua paleta de cores
- **Animações Suaves**: Transições e hover effects
- **Responsividade**: Layout adaptável para todos os dispositivos

### Experiência do Usuário
- **Navegação Intuitiva**: Menu lateral e breadcrumbs
- **Feedback Visual**: Estados de loading e erro
- **Acessibilidade**: Contraste adequado e navegação por teclado
- **Performance**: Carregamento otimizado e cache inteligente

## 🔧 Configuração de Ambiente

### Variáveis de Ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_BASE_URL=https://sua-api.com
VITE_ADSENSE_CLIENT_ID=ca-pub-xxxxxxxxxx
```

### Configuração de Anúncios
A aplicação inclui integração com Google AdSense. Configure suas tags de anúncio no arquivo de componentes `AdUnit.tsx`.

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

**Desenvolvido com ❤️ para a comunidade brasileira de apostadores** 