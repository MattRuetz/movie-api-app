import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';

const API_KEY = process.env.TMDB_API_KEY;

// Pages
// import MovieDetail from './pages/MovieDetail';
// import MovieList from './pages/MovieList';
// import PageNotFound from './pages/PageNotFound';
// import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
