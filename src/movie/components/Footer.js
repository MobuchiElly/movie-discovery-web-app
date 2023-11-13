import React, { useState } from 'react';
import './Footer.css';
import { FaLinkedin, FaTwitter, FaGithub, FaLinkedinIn, FaTwitterSquare, FaGithubSquare } from 'react-icons/fa';
import createTransporter from './Auth/email';

function Footer({ openModal }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  console.log(openModal);
  
  const isValidEmail  = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (emailPattern.test(email));
  }
  
  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError('')
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email == '') {
      setError('Please enter your email.');
      return;
    }

    if (isValidEmail(email)) {
        console.log('Email submitted:', email);
        setSuccess('Thank you for subscribing to buchiDevs Movie Discovery App. I would keep you updated on latest movies')
        openModal('Thank you for subscribing to buchiDevs Movie Discovery App. I would keep you updated on latest movies')
        setError('');
        setEmail('');
        setIsSubmitted(true);
    }
    if (!isValidEmail(email)) {
      setError('Enter a valid email please')
    }
    
  };

  return (
    <div className="container-fluid bg-dark footer text-light shadow-lg">
      <footer className="row p-4 mt-5">
      
      <div className="col-sm-6">
          
            <form onSubmit={handleSubmit}>
              <h3>Stay in the loop!</h3>
              <h4>Sign up to stay informed on latest movies.</h4>
              <h4>Enter your email* {error && <div className='text-danger text-sm'>{error}</div>}</h4>
              
              {success && <h4>{success}</h4>}
              
              <input value={email} onChange={handleInputChange} className={`form-control mb-2 mt-2 ${error ? 'is-invalid' : ''}`} placeholder='example@gmail.com'/>
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
