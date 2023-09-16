import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'
import BookProvider from './components/BooksProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookProvider>
      <Router>
        <App />
      </Router>
    </BookProvider>
  </React.StrictMode>,
)
