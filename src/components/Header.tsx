import React, { useState } from 'react';
import { 
  Clover, 
  Menu, 
  X, 
  Dices,
  Home,
  Star,
  Heart,
  Flower2,
  Clover as CloverIcon,
  Trophy,
  Target
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { LOTTERY_GAMES } from '../config/constants';

// Mapeamento de ícones para cada jogo
const gameIcons: Record<string, React.ReactNode> = {
  'megasena': <CloverIcon size={18} />,
  'lotofacil': <Heart size={18} />,
  'quina': <Star size={18} />,
  'lotomania': <Flower2 size={18} />,
  'timemania': <Trophy size={18} />,
  'duplasena': <Target size={18} />
};

export function Header() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Função para obter a cor do jogo selecionado
  const getCurrentGameColor = () => {
    const currentPath = location.pathname;
    
    if (currentPath === '/') {
      return 'rgb(0, 155, 58)'; // Cor padrão verde
    }
    
    const gameId = currentPath.split('/resultados/')[1];
    
    if (gameId) {
      const game = LOTTERY_GAMES.find(g => g.id === gameId);
      return game?.color || 'rgb(0, 155, 58)';
    }
    
    return 'rgb(0, 155, 58)'; // Cor padrão verde
  };

  const currentColor = getCurrentGameColor();

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-white/20 shadow-lg shadow-black/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <Link 
                to="/" 
                className="flex items-center gap-3 transition-all hover:scale-105 group"
              >
                <div 
                  className="p-2 rounded-xl text-white shadow-lg transition-all group-hover:shadow-opacity-30"
                  style={{
                    backgroundColor: currentColor,
                    boxShadow: `0 4px 12px ${currentColor}40`
                  }}
                >
                  <Clover size={24} className="group-hover:rotate-12 transition-transform" />
                </div>
                <h1 
                  className="text-xl font-bold"
                  style={{
                    color: currentColor
                  }}
                >
                  <span style={{ color: currentColor }}>
                    Mega Loterias
                  </span>
                </h1>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:block overflow-x-auto">
                <div className="flex flex-wrap gap-x-1 xl:gap-x-2">
                  <Link 
                    to="/" 
                    className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all ${
                      location.pathname === '/' 
                        ? 'text-white bg-green-600 shadow-sm' 
                        : 'text-green-600 hover:text-white hover:bg-green-600'
                    }`}
                  >
                    <Home size={18} />
                    <span>Início</span>
                  </Link>
                  
                  {LOTTERY_GAMES.map((game) => (
                    <Link
                      key={game.id}
                      to={`/resultados/${game.id}`}
                      className={`px-4 py-2 rounded-lg flex items-center gap-2 font-medium transition-all whitespace-nowrap hover:-translate-y-0.5 ${
                        location.pathname === `/resultados/${game.id}`
                          ? 'bg-opacity-10 shadow-sm'
                          : 'hover:bg-opacity-5'
                      }`}
                      style={{ 
                        color: location.pathname === `/resultados/${game.id}` ? 'white' : game.color,
                        backgroundColor: location.pathname === `/resultados/${game.id}` ? game.color : 'transparent',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div 
                        className="transition-transform group-hover:scale-110"
                        style={{
                          color: location.pathname === `/resultados/${game.id}` ? 'white' : game.color
                        }}
                      >
                        {gameIcons[game.id]}
                      </div>
                      <span>{game.name}</span>
                    </Link>
                  ))}
                </div>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-600 hover:text-white rounded-lg hover:bg-gray-600 transition-all"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div 
          className={`fixed inset-y-0 right-0 w-72 bg-white/80 backdrop-blur-xl shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Menu</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 text-gray-600 hover:text-white rounded-lg hover:bg-gray-600 transition-all"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Navegação
              </div>
              
              <Link 
                to="/" 
                className={`px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                  location.pathname === '/' 
                    ? 'bg-green-600 text-white font-medium' 
                    : 'text-green-600 hover:bg-green-600 hover:text-white'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Home size={20} />
                <span>Início</span>
              </Link>
              
              {LOTTERY_GAMES.map((game) => (
                <Link
                  key={game.id}
                  to={`/resultados/${game.id}`}
                  className="px-4 py-3 rounded-lg transition-all flex items-center gap-3 hover:-translate-y-0.5"
                  style={{ 
                    color: location.pathname === `/resultados/${game.id}` ? 'white' : game.color,
                    backgroundColor: location.pathname === `/resultados/${game.id}` ? game.color : 'transparent',
                    fontWeight: location.pathname === `/resultados/${game.id}` ? 500 : 400,
                    transition: 'all 0.2s ease'
                  }}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <div 
                    className="transition-transform group-hover:scale-110"
                    style={{
                      color: location.pathname === `/resultados/${game.id}` ? 'white' : game.color
                    }}
                  >
                    {gameIcons[game.id]}
                  </div>
                  <span>{game.name}</span>
                </Link>
              ))}

              <div className="px-4 py-2 mt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Ferramentas
              </div>

              <Link
                to="/geradores"
                className={`px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                  location.pathname === '/geradores'
                    ? 'bg-blue-600 text-white font-medium'
                    : 'text-blue-600 hover:bg-blue-600 hover:text-white'
                }`}
                onClick={() => setIsSidebarOpen(false)}
              >
                <Dices size={20} />
                <span>Geradores de Jogos</span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}