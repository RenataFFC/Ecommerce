import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
   <App/>
  </BrowserRouter>,
)
