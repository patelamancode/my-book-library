import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BookDataContext, BookDataContextProvider } from './context/DataContext';
export { BookDataContext };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookDataContextProvider>
      <Router>
      <App />
    </Router>
    </BookDataContextProvider>
  </React.StrictMode>
);
reportWebVitals();
