// PageLayout.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { UserProvider } from '../components/UserContext';

const PageLayout = () => {
  return (
    <UserProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-4">
          <Outlet />
        </main>
        <Footer />
      </div>
    </UserProvider>
  );
};

export default PageLayout;
