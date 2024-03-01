import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './movie/components/App.js'
import Navbar from './movie/components/Navbar.js';
import Footer from './movie/components/Footer.js';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='overflow-x-hidden'>
    <Navbar/>
    <App />
    <Footer />
    </div>
);
