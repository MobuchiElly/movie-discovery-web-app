import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviesSearch from "./MoviesSearch";
import MovieDetails from "./MovieDetails";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Keep MoviesSearch on webpage at all times */}
          <Route
            path="*"
            element={
              <div>
                <MoviesSearch />
              </div>
            }
          />

          {/* Movie Details route*/}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;