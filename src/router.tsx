import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
]);

export default router;
