import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams(); 
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    
    const apiKey = '40da2c9b0397c0ab39d5b5831c254918';
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not unsuccessful');
        }
        return response.json();
      })
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movieDetails) {
    return <h3>Loading...</h3>; 
  }

  return (
    <div className='movie-trailer-card' data-testid="movie-card">
      <div className="movie-poster" data-testid="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt={movieDetails.title} width={350} height={400}/>
      </div>
      <div className='movie-details'>
        <h1 className='movie-title' data-testid="movie-title">{movieDetails.title}</h1>
        <p className='movie-release-date' data-testid="movie-release-date">{movieDetails.release_date}</p>
        <p className='movie-runtime'  data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
        <p className='movie-overview' data-testid="movie-overview">{movieDetails.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;