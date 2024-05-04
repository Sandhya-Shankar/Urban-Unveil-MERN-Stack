import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Food.css'; // Custom CSS for styling

const generateRatingStars = (rating) => {
  const maxRating = 5;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5 ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStar;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<i key={i} className="bi bi-star-fill"></i>);
  }

  if (halfStar === 1) {
    stars.push(<i key={fullStars} className="bi bi-star-half"></i>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i key={fullStars + i + 1} className="bi bi-star"></i>);
  }

  return stars;
};


const getPriceLevel = (price) => {
  if (price < 500) {
    return 'Low';
  } else if (price > 500 && price <= 1000) {
    return 'Medium';
  } else {
    return 'High';
  }
};

const Foodmenus = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const handleCuisineChange = (e) => {
    setSelectedCuisine(e.target.value);
  };

  const handlePriceChange = (e) => {
    setSelectedPrice(e.target.value);
  };

  const handleAreaChange = (e) => {
    setSelectedArea(e.target.value);
  };

  const handleSubmit = () => {
    // Filter restaurants based on selected options
    let filtered = restaurants.filter(restaurant => {
      let cuisineMatch = selectedCuisine === '' || restaurant.Cuisine === selectedCuisine;
      let priceMatch = selectedPrice === '' || getPriceLevel(restaurant.price) === selectedPrice;
      let areaMatch = selectedArea === '' || restaurant.area === selectedArea;
      return cuisineMatch && priceMatch && areaMatch;
    });
    setFilteredRestaurants(filtered);
  };

  useEffect(() => {
    // Fetch restaurants data from backend when component mounts
    axios.get('http://localhost:3001/getRest')
      .then(response => {
        setRestaurants(response.data);
        setFilteredRestaurants(response.data); // Set filtered restaurants initially to all restaurants
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Chennai</Link>
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
                <Link className="nav-link" to="/BusStop">Transport</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mt-5">
        <h1 className="mb-4">Welcome to Food Page</h1>
        <div className="row mb-4">
          <div className="col">
            <label className="form-label">Cuisine:</label>
            <select className="form-select" value={selectedCuisine} onChange={handleCuisineChange}>
              <option value="">All</option>
              <option value="Indian">Indian</option>
              <option value="Chinese">Chinese</option>
              <option value="Italian">Italian</option>
              {/* Add other cuisine options here */}
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
          <div className="col d-flex align-items-end">
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
        <div className="row">
          {filteredRestaurants.map(restaurant => (
            <div className="col-md-4 mb-4" key={restaurant.restID}>
              <div className="card">
                <img src={restaurant.imageURL} className="card-img-top" alt={restaurant.restName} />
                <div className="card-body">
                  <h5 className="card-title">{restaurant.restName}</h5>
                  <p className="card-text">Cuisine: {restaurant.Cuisine}</p>
                  <p className="card-text">Price: {restaurant.price}</p>
                  <p className="card-text">Rating: {restaurant.ratings} </p>
                  <Link to={`/reviews/${restaurant.restID}`} className="btn btn-primary">Reviews</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foodmenus;
