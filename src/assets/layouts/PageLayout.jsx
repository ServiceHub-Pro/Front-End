import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { UserProvider } from '../components/Authentication/UserContext';
import BackButton from '../components/BackButton'; // <-- Add this!

const PageLayout = () => {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <BackButton /> {/* <-- Inject the magic here! */}
        <main className="flex-grow pt-16 pb-0.5">
          <div className="h-full">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default PageLayout;
