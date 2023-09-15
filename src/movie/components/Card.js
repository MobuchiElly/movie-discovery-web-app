import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './index.css';

function Card() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);

  const getTopMovies = () => {
    const apiKey = '40da2c9b0397c0ab39d5b5831c254918';
    const fetchUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((json) => {
        const topTenMovies = json.results.slice(0, 10);
        setMovieList(topTenMovies);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching top movies:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <div className="movie-grid">
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        movieList.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div data-testid="movie-card" className="movie-card">
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title} data-testid="movie-poster"
              />
              <div data-testid="movie-details" className="movie-details">
                <div data-testid="movie-title" className="movie-title">{movie.title}</div>
                <div data-testid="movie-release-date" className="movie-release-date">{movie.release_date}</div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Card;
