import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import chennaiImage from './images/Chennai.jpg';
import YouTube from 'react-youtube';

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (!showVideo && videoRef.current) {
      const videoTop = videoRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (videoTop < windowHeight * 0.75) {
        setShowVideo(true);
      }
    }
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="container">
          <Link className="navbar-brand" to="/">Chennai</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Foodmenus">Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Hangout">Hangout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/BusStop">Transport</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="jumbotron jumbotron-fluid text-center" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${chennaiImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>
          <h1 className="display-4" style={{ color: "#e61931", fontFamily: "serif" }}>Welcome to Chennai</h1>
        </div>
      </div>

      {/* Description of Chennai */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>About Chennai</h2>
            <p>Chennai, the capital of Tamil Nadu, is a vibrant city located on the southeastern coast of India. It is known for its rich cultural heritage, stunning architecture, and delicious cuisine. Explore the bustling streets, visit historical landmarks, and indulge in the diverse flavors of Chennai.</p>
          </div>
        </div>
      </div>

      {/* YouTube Video */}
      <div ref={videoRef}>
        {showVideo && (
          <YouTube videoId="AIzxw8L1jcY" opts={{ playerVars: { autoplay: 1 } }} />
        )}
      </div>
    </div>
  );
};

export default Home;
