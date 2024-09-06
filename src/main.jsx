import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, RouterProvider } from 'react-router-dom';
import router from './router.jsx';
import './index.css';
import { ContextProvider } from './contexts/contentprovider.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    </HashRouter>
  </React.StrictMode>
);
