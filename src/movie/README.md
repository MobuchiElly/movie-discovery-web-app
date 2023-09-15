Movie Discovery Web App by BuchiTheDeveloper

This is a Movie Discovery Web App built using React and React Router DOM. It allows users to search for movies, view top-rated movies, and explore movie details.

You can access the web app at this url: https://movie-discovery-web-h73mmjn80-mobuchielly.vercel.app/

Project Structure
The project is organized as follows:

In my src and src/component folders you would find my source codes
App.js: The main application component that defines the routing for different pages.

Card.js: Component to display the top-rated movies on the homepage.

MovieSearch.js: Component to search for movies and display search results.

MovieDetails.js: Component to display details of a selected movie.

index.js: The entry point of the application.

index.css: Stylesheet for the application.

Code Overview
App.js: This file sets up the routing for different pages using React Router DOM. It defines routes for the homepage , the movie search page, and movie details (/movies/:id).

Card.js: This component fetches and displays the top-rated movies on the homepage. It uses the TMDb API to fetch movie data and displays it in a grid layout.

MovieSearch.js: This component allows users to search for movies by entering a query. It uses the TMDb API to fetch search results and displays them as cards with movie posters.

MovieDetails.js: This component displays detailed information about a selected movie. It fetches data for a specific movie using its IMDb ID and displays its title, release date, runtime, and overview.

Built With
React - JavaScript library for building user interfaces.
React Router DOM - Library for handling routing in React applications.
Acknowledgments
This project uses data from The Movie Database (TMDb), which provides a powerful and flexible API for accessing movie information.

I would be actively working on expanding this project and adding implementing designs
