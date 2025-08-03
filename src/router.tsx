import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { GameResults } from './pages/GameResults';
import { Generators } from './pages/Generators';
import { Layout } from './components/Layout';

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/resultados/:gameId",
          element: <GameResults />,
        },
        {
          path: "/geradores",
          element: <Generators />,
        }
      ]
    }
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true
    }
  }
); 