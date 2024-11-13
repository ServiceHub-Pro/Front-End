import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const PageLayout = () => {
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('name')
  const email = localStorage.getItem('email')
  const user = {name, email}
  

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar user={user}/>
      <main className="flex-grow p-4"> {/* Adjust padding as needed */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
