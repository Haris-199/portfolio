import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      {
        path: 'projects',
        children: [
          { index: true, element: <Projects /> },
          { path: ':id', element: <ProjectDetails /> },
        ],
      },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export default router;
