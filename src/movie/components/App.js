import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesSearch from './MoviesSearch';
import MovieDetails from './MovieDetails';
import Footer from './Footer';
import Navbar from './Navbar';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    openModal(`${Modal}`)
  }, [])
  
  return (
    <div>
      <Router>
        <Routes>
          {/* Keep MoviesSearch component on the webpage at all times */}
          <Route
            path="*"
            element={
              <div>
                <Navbar />
                <MoviesSearch />
                {isModalOpen && (
                  <div className="modal">
                    <div className="modal-content">
                      <span className="close" onClick={closeModal}>
                        &times;
                      </span>
                      <p>{modalContent}</p>
                    </div>
                  </div>
                )}
                <Footer openModal={openModal} />
              </div>
            }
          />

          {/* Route for movie details */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
