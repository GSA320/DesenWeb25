import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import CadastroBarbeiro from './pages/CadastroBarbeiro';
import Agendamento from './pages/Agendamento';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home/> 
  },
  {
    path: "/CadastroBarbeiro",  
    element: <CadastroBarbeiro />  
  },
  {
    path: "/Home",  
    element: <App /> 
  },
  {
    path: "/Agendamento",  
    element: <Agendamento /> 
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* Envolvendo a aplicação com RouterProvider */}
  </React.StrictMode>
);