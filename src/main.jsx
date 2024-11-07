import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Toaster setup for notifications */}
    <Toaster
      position="top-center"
      toastOptions={{
        // Default toast options
        duration: 4000,
        style: {
          background: '#363636', // Dark background for all toasts
          color: '#fff',         // White text for readability
        },
        // Success toast customization
        success: {
          duration: 3000,
          style: {
            background: '#6D4C41', // Brown theme background
            color: '#fff',
          },
        },
        // Error toast customization
        error: {
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        },
      }}
    />
    <App />
  </React.StrictMode>
);
