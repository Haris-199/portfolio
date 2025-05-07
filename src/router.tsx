import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      { path: 'projects', element: <Projects /> },
      { path: 'about', element: <About /> },
      { path: '*', element: <ErrorPage /> },
    ],
  },
]);

export default router;
