import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './Card';
import MoviesSearch from './MoviesSearch';
import MovieDetails from './MovieDetails'; // Import your MovieDetails component

function App() {
  return (<div>
      <Router>
        <Routes>
          {/* Set /top-movies as the homepage */}
          <Route path="/top-movies" element={<Card />} />
          
          {/* Keep MoviesSearch component on the webpage at all times */}
          <Route path="*" element={<MoviesSearch />} />
          {/* Define the route for movie details */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
  </div>
  );
}

export default App;