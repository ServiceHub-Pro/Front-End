import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './assets/components/Login';
import ForgottenPassword from './assets/components/ForgottenPassword';
import Signup from './assets/components/Signup';
import PageLayout from './assets/layouts/PageLayout';
import Home from './assets/components/Home';
import Dashboard from './assets/components/Dashboard/Dashboard';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        { index: true, element: <Home /> },
      ],
    },
    { path: '/login', element: <Login /> },
    { path: '/signup', element: <Signup /> },
    { path: '/forgottenpassword', element: <ForgottenPassword /> },
    {
      path: '/dashboard/*',  // Allows nested routing in Dashboard
      element: <Dashboard />,
    },
 
  ]);

  return <RouterProvider router={router} />;
}

export default App;
