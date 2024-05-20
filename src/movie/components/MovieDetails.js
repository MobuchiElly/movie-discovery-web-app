import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Loader from "./Loader";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_MY_API_KEY;
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not unsuccessful");
        }
        return response.json();
      })
      .then((data) => setMovieDetails(data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);

  if (!movieDetails) {
    return <Loader className={`fade-in ${!movieDetails ? "visible" : ""} `} />;
  }
  
  return (
    <div
      className="d-flex justify-content-center align-items-center h-100 px-4 py-5 row"
      style={{ height: "100vh", overflow: "auto" }}
    >
      <div
        className="col-sm-8 col-md-6 py-4 border border-dark my-1 bg-slate rounded shadow"
        style={{ height: "auto", overflow: "auto" }}
        data-testid="movie-card"
      >
        <div className="b-dark p-2">
          <div
            className="movie-poster d-flex justify-content-center mb-1"
            data-testid="movie-poster"
          >
            <img
              src={`https://image.tmdb.org/t/p/w185/${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width={350}
              height={400}
            />
          </div>
          <div className="overflow-auto m-0 movie-details">
            <h2
              className="text-primary m-0 text-center"
              data-testid="movie-title"
            >
              {movieDetails.title}
            </h2>
            <p
              className="movie-overview m-0 p-1 text-20px "
              data-testid="movie-overview"
            >
              {movieDetails.overview}
            </p>
            <p
              className="m-0 px-1 text-18px"
              data-testid="movie-release-date"
            >
              <span className="" style={{ fontWeight: "600" }}>
                Release Date:
              </span>{" "}
              {movieDetails.release_date}
            </p>
            <p
              className="movie-runtime m-0 px-1 text-18px"
              data-testid="movie-runtime"
            >
              <span className="" style={{ fontWeight: "600" }}>
                Runtime:
              </span>{" "}
              {movieDetails.runtime} minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;