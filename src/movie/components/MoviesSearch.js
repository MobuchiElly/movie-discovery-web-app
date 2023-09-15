import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom'; // Import Link from react-router-dom
import Card from './Card';

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

        const apiKey = '40da2c9b0397c0ab39d5b5831c254918';

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

    if (query) {
      searchMovies();
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div>
        <h1>Movie Search</h1>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={handleInputChange}
        />
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <div className="search-results">
          {searchResults.map((movie) => (
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
          ))}
        </div>
      </div>
      {(searchResults !== []) && <Card data-testid="movie-card"/>}
    </div>
  );
}

export default MovieSearch;