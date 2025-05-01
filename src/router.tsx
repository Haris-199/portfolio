import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Intro from './components/Intro';
import Projects from './components/Projects';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Intro /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
]);

export default router;
