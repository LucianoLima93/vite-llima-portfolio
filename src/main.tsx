import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import './i18n.ts';
AOS.init();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
