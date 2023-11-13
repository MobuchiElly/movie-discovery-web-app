import React, { useState } from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaGithub, FaLinkedinIn, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import createTransporter from './Auth/email';

function Footer() {
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!input) {
      setError('Please enter your email.');
      return;
    }

    // Your logic for handling the form submission goes here.
    // For example, you can make an API call or update the state.
    // For demonstration purposes, let's just log the input to the console.
    console.log('Email submitted:', input);

    setInput('');
    setIsSubmitted(true);
  };

  return (
    <div className="container-fluid bg-dark footer text-light shadow-lg">
      <footer className="row p-4 mt-5">
      
      <div className="col-sm-6">
          
            <form onSubmit={handleSubmit}>
              <h3>Stay in the loop!</h3>
              <h4>Sign up to stay informed on latest movies.</h4>
              <h4>Enter your email* {error && <div className={`invalid-feedback {error ? 'mr-5' : ''}`}>{error}</div>}</h4>
              
              <input value={input} onChange={handleInputChange} className={`form-control mb-2 mt-2 ${error ? 'is-invalid' : ''}`} placeholder='example@gmail.com'/>
              <p>By subscribing, you consent to be contacted by Workable about our relevant content, products and events. You can opt-out any time. For more information please see our privacy policy.</p>
              <button type='submit' className='btn btn-primary text-white'>Submit</button>
            </form>
          
        </div>
        
      <div className="col-sm-6 d-flex flex-column align-items-center ">
          
          <div className="col-sm-6">
            
            <div className="social-icons d-flex flex-row justify-content-center">
              <a
                href="https://www.linkedin.com/in/eleazer-ugwu-662211200/"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn color="white" size={20}/>
              </a>

              <a
                href="https://github.com/MobuchiElly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="white" size={20}/>
              </a>
              
              <a href="">
                <FaTwitter color="white" size={20}/>
              </a>
            </div>

          </div>
          
          <div className="col-sm-6 d-flex justify-content-center mt-3">
            <h3>&copy; BuchiDev</h3>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Footer;
