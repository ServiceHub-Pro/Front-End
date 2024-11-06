import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './assets/components/Login';
import ForgottenPassword from './assets/components/ForgottenPassword';
import Signup from './assets/components/Signup';
import PageLayout from './assets/layouts/PageLayout';
import Home from './assets/components/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />, // Use PageLayout as the layout
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/forgottenpassword',
      element: <ForgottenPassword />,
    },
    // Uncomment and add the Dashboard route when available
    // {
    //   path: '/dashboard',
    //   element: <Dashboard />,
    // },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
