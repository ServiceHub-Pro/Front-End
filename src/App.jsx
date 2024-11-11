import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './assets/components/Login';
import ForgottenPassword from './assets/components/ForgottenPassword';
import Signup from './assets/components/Signup';
import PageLayout from './assets/layouts/PageLayout';
import Home from './assets/components/Home';
import Dashboard from './assets/components/Dashboard';
import UserPage from './assets/components/UserPage'; // Add a user page

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          index: true,
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
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: '/user',
      element: <PageLayout />,
      children: [
        {
          index: true, // This defines the default route for /user
          element: <UserPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
