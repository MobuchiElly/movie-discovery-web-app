import React, { useState } from "react";
import "./Footer.css";
import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import SuccessModal from "./Modal";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValidEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };
  const handleModal = () => {
    setIsSubmitted(false);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setError("Please enter your email.");
      return;
    }

    if (isValidEmail(email)) {
      setError("");
      setEmail("");
      setIsSubmitted(true);
    }
    if (!isValidEmail(email)) {
      setError("Enter a valid email please");
    }
  };
  const content = 'Thank you subscribing. We would keep you informed on latest movies';

  return (
    <div
      className="bg-dark footer text-light shadow-lg"
      style={{ width: "100vw" }}
    >
      <footer className="row p-4">
        <div className="col-sm-6">
          <form onSubmit={handleSubmit}>
            <h3>Stay in the loop!</h3>
            <h4>Sign up to stay informed on latest movies.</h4>
            <h4>
              Enter your email*{" "}
              {error && <div className="text-danger text-sm">{error}</div>}
            </h4>
            <input
              value={email}
              onChange={handleInputChange}
              className={`form-control mb-2 mt-2 ${error ? "is-invalid" : ""}`}
              placeholder="example@gmail.com"
            />
            <p>
              By subscribing, you consent to be contacted by Netsonia about our
              latest movies and shows.
            </p>
            <button type="submit" className="btn btn-primary text-white">
              Submit
            </button>
          </form>
        </div>

        <div className="col-sm-6 d-flex flex-column align-items-center ">
          <div className="col-sm-6">
            <div className="social-icons d-flex flex-row justify-content-center">
              <a
                href="https://www.linkedin.com/in/eleazer-ugwu-662211200/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn color="white" size={20} />
              </a>

              <a
                href="https://github.com/MobuchiElly"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub color="white" size={20} />
              </a>

              <a href="https://twitter.com/MobuchiEleazer">
                <FaTwitter color="white" size={20} />
              </a>
            </div>
          </div>

          <div className="col-sm-6 d-flex justify-content-center mt-3">
            <h3>&copy; BuchiDev</h3>
          </div>
        </div>
      </footer>
      {isSubmitted && <SuccessModal content={content} handleModal={handleModal}/>}
    </div>
  );
}

export default Footer;