import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster
      position="top-center"
      toastOptions={{
        // Customize default toast options
        duration: 4000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        // Customize success toast
        success: {
          duration: 3000,
          style: {
            background: '#6D4C41', // Using your brown theme
            color: '#fff',
          },
        },
        // Customize error toast
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
