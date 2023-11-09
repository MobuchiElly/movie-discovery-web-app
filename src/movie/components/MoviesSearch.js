import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'; // Import Link from react-router-dom
import Card from './Card';
import './MoviesSearch.css'
import Loader from './Loader';

function MovieSearch() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const searchMovies = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiKey = process.env.REACT_APP_MY_API_KEY;

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        setSearchResults(data.results);
        setLoading(false);
      } catch (err) {
        setError('An error occurred while fetching search results.');
        setLoading(false);
      }
    };
    
    if (query && query !== "") {
      searchMovies();
    }

  }, [query]);

  const handleInputChange = (e) => {
    
    setQuery(e.target.value);
  };
  const movieMap = searchResults.map((movie) => (
    <Link to={`/movies/${movie.id}`} key={movie.id}>
      <div className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
          alt={movie.title} data-testid="movie-poster"
        />
        <h2 data-testid="movie-title">{movie.title}</h2>
        <p data-testid="movie-release-date">Release Date: {movie.release_date}</p>
      </div>
    </Link>
  ))
  
  return (
    <div className="body">
      <div>
        <div className="input">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={handleInputChange}
          />
        </div>
        {loading && <Loader className={`fade-in ${loading ? 'visible' : ''}`}/> }
        {error && <p>{error}</p>}
        {query && <div className="search-results movie-grid" className={`fade-out ${loading ? 'opaque' : ''}`}>
          {movieMap}
        </div>}
      </div>
      {!query && <Card data-testid="movie-card"/>}
    </div>
  );
}

export default MovieSearch;