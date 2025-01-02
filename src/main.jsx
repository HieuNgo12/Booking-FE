import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <GoogleOAuthProvider clientId="1031104764261-5kcn6354nd1tai108r56gm38c9hqj0ec.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>
    
  // </React.StrictMode>
)
