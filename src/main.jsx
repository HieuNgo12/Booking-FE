import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { TourSearchContextProvider } from "../src/context/TourSearchContext.jsx"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Tạo một instance của QueryClient
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1031104764261-5kcn6354nd1tai108r56gm38c9hqj0ec.apps.googleusercontent.com">
      <TourSearchContextProvider>

        <App />

      </TourSearchContextProvider>
    </GoogleOAuthProvider>

  </React.StrictMode>
)
