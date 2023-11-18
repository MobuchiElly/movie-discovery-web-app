import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer';
import Loader from './Loader';
import './MovieDetails.css';
import Navbar from './Navbar';

function MovieDetails() {
  const { id } = useParams(); console.log(id); 
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    
    const apiKey = process.env.REACT_APP_MY_API_KEY;
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
   
    return (
      <Loader className={`fade-in ${!movieDetails ? 'visible' : ''} `}/>
    )
  }

  return (
    <body>
      <Navbar />
      <div className='movie-trailer-card container-fluid vh-100 p-2 text-center' data-testid="movie-card">
      <div className="movie-poster"data-testid="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`} alt={movieDetails.title} width={350} height={400}/>
        </div>
        <div className='movie-details p-0 overflow-auto'>
          <h2 className='movie-title text-primary' data-testid="movie-title">{movieDetails.title}</h2>
          <p className='movie-release-date text-white' data-testid="movie-release-date">{movieDetails.release_date}</p>
          <p className='movie-runtime'  data-testid="movie-runtime">{movieDetails.runtime} minutes</p>
          <p6 className='movie-overview' data-testid="movie-overview">{movieDetails.overview}</p6>
        </div>
      </div>
      <div className='bg-dark text-white'>
        
      </div>
    </body>
  );
}

export default MovieDetails;
