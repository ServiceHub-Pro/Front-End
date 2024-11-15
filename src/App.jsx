import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { useState } from 'react'; // Import useState for logged-in status
import Dashboard from './assets/components/Dashboard/Dashboard';
import ArtisanSingle from './assets/components/ArtisanSingle';
import Home from './assets/components/Home';
import PageLayout from './assets/layouts/PageLayout';
import ForgottenPassword from './assets/components/ForgottenPassword';
import Login from './assets/components/Login';
import ServiceList from './assets/components/ArtisanList';
import Signup from './assets/components/Signup';
// import UserProfile from './assets/components/UserProfile'; // Uncomment when the endpoint is ready

function App() {
  // State to simulate logged-in status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PageLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      ),
      children: [
        { index: true, element: <Home/> },
        { path: 'services', element: <ServiceList/>},
        { path: 'artisan/:id', element: <ArtisanSingle /> },
      ],
    },
    { path: '/login', element: <Login setIsLoggedIn={setIsLoggedIn} /> },
    { path: '/signup', element: <Signup/> },
    { path: '/forgottenpassword', element: <ForgottenPassword/> },
    {
      path: '/dashboard/*',
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
