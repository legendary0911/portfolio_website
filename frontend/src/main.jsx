import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Router/index'
import { UserProvider } from './api/Contextapi'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserProvider>
    <App />
    <ToastContainer />

  </UserProvider>

  // </React.StrictMode>
)
