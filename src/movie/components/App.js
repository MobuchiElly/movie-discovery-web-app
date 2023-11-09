import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesSearch from './MoviesSearch';
import MovieDetails from './MovieDetails'; // Import your MovieDetails component
import Footer from './Footer';
import Navbar from './Navbar';

function App() {
  return (<div>
      <Navbar />
      <Router>
        <Routes>
          {/* Keep MoviesSearch component on the webpage at all times */}
          <Route path="*" element={<MoviesSearch />} />
          
          {/* Route for movie details */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
      <Footer />
  </div>
  );
}

export default App;