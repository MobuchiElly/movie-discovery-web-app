import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
  const { id } = useParams(); // Get the IMDb ID from the URL
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    
    const apiKey = '40da2c9b0397c0ab39d5b5831c254918';

    // Fetch movie details based on the IMDb ID
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error('Error fetching movie details:', error));
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>; // You can add loading handling here
  }

  return (
    <div>
      <h1 data-testid="movie-title">{movieDetails.title}</h1>
      <p data-testid="movie-release-date">{movieDetails.release_date}</p>
      <p data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
      <p data-testid="movie-overview">{movieDetails.overview}</p>
    </div>
  );
}

export default MovieDetails;
