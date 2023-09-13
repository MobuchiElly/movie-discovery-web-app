import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './index.css';

function Card() {
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  const getTopMovies = () => {
    const apiKey = '40da2c9b0397c0ab39d5b5831c254918';

    // Fetch the top-rated movies using the TMDb API
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`)
      .then((res) => res.json())
      .then((json) => {
        // Limit the movie list to the top ten
        const topTenMovies = json.results.slice(0, 10);
        setMovieList(topTenMovies);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching top movies:', error);
        setLoading(false); // Handle error and set loading to false
      });
  };

  useEffect(() => {
    getTopMovies();
  }, []);

  return (
    <div className="movie-grid">
      {loading ? (
        <p>Loading...</p>
      ) : (
        movieList.map((movie) => (
          <Link to={`/movies/${movie.id}`} key={movie.id}>
            <div className="movie-card">
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="movie-details">
                <div className="movie-title">{movie.title}</div>
                <div className="movie-release-date">{movie.release_date}</div>
              </div>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Card;
