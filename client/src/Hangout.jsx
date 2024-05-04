import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const getPriceLevel = (price) => {
  if (price < 500) {
    return 'Low';
  } else if (price > 500 && price <= 1000) {
    return 'Medium';
  } else {
    return 'High';
  }
};

const Hangout = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [hangouts, setHangouts] = useState([]);
  const [filteredHangouts, setFilteredHangouts] = useState([]);

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleRatingChange = (e) => {
    setSelectedRating(e.target.value);
  };

  const handleSubmit = () => {
    // Filter hangouts based on selected options
    let filtered = hangouts.filter(hangout => {
      let areaMatch = selectedArea === '' || hangout.Harea === selectedArea;
      let priceMatch = selectedPrice === '' || getPriceLevel(hangout.Hprice) === selectedPrice;
      let ratingMatch = selectedRating === '' || hangout.Hratings === selectedRating;
      return areaMatch && priceMatch && ratingMatch;
    });
    setFilteredHangouts(filtered);
  };

  useEffect(() => {
    // Fetch hangouts data from backend when component mounts
    axios.get('http://localhost:3001/gethang')
      .then(response => {
        setHangouts(response.data);
        setFilteredHangouts(response.data); // Set filtered hangouts initially to all hangouts
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Hangout</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/Foodmenus">Food</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Hangout">Hangout</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Createhang">Bus Stops</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h1 className="mb-4">Find Your Hangout Spot!</h1>
        <div className="row mb-4">
          <div className="col">
            <label className="form-label">Area:</label>
            <select className="form-select" value={selectedArea} onChange={handleAreaChange}>
              <option value="">All</option>
              <option value="Besant Nagar">Besant Nagar</option>
              <option value="Adyar">Adyar</option>
              <option value="Nungambakkam">Nungambakkam</option>
              <option value="T Nagar">T Nagar</option>
              <option value="Anna Nagar">Anna Nagar</option>
              <option value="Mylapore">Mylapore</option>
              <option value="Velachery">Velachery</option>
              <option value="Adyar Riverfront">Adyar Riverfront</option>
              <option value="Thiruvanmiyur">Thiruvanmiyur</option>
              <option value="Egmore">Egmore</option>
            </select>
          </div>
          <div className="col">
            <label className="form-label">Price:</label>
            <select className="form-select" value={selectedPrice} onChange={handlePriceChange}>
              <option value="">Any</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <div className="col">
            <label className="form-label">Rating:</label>
            <select className="form-select" value={selectedRating} onChange={handleRatingChange}>
              <option value="">Any</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col d-flex align-items-end">
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="row">
          {filteredHangouts.length > 0 ? (
            filteredHangouts.map(hangout => (
              <div className="col-md-4 mb-4" key={hangout.HId}>
                <div className="card">
                  <img src={hangout.HimageURL} className="card-img-top" alt={hangout.HName} />
                  <div className="card-body">
                    <h5 className="card-title">{hangout.HName}</h5>
                    <p className="card-text">Area: {hangout.Harea}</p>
                    <p className="card-text">Price: {hangout.Hprice}</p>
                    <p className="card-text">Ratings: {hangout.Hratings}</p>
                    <p className="card-text">Description: {hangout.HDesc}</p>
                    <a href={hangout.Hmaps} target="_blank" rel="noreferrer" className="btn btn-primary">View on Maps</a>
                    <Link to={`/hangreviews/${hangout.HId}`}>
                      <button className="btn btn-primary">Reviews</button>
                    </Link>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No hangouts available for the selected criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hangout;
