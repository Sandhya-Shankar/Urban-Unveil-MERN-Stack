import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Reviews = () => {
  const { restID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState('');

  useEffect(() => {
    // Fetch reviews based on restaurant ID
    axios.get(`http://localhost:3001/getReview/${restID}`)
      .then(response => {
        setReviews(response.data);
      })
      .catch(err => console.log(err));
  }, [restID]);

  const handleSubmit = () => {
    // Post the review to the backend
    axios.post(`http://localhost:3001/addReview/${restID}`, { name, review: reviewText, rating })
      .then(response => {
        // Refresh reviews after adding the new one
        axios.get(`http://localhost:3001/getReview/${restID}`)
          .then(response => {
            setReviews(response.data);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));

    // Reset form fields after submitting
    setName('');
    setReviewText('');
    setRating('');
  };

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
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '5px' }}>
        <h1>Reviews</h1>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map(review => (
              <li key={review.restID}>
                <p>ID: {review.restID}</p>
                <strong>{review.name}:</strong> {review.review}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available for this restaurant.</p>
        )}

        {/* Add review form */}
        <div style={{ marginTop: '30px' }}>
          <h3>Add a Review</h3>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Review:</label>
            <textarea rows="4" value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
          </div>
          <div style={{ marginTop: '10px' }}>
            <label>Rating:</label>
            <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} />
          </div>
          <button className="btn btn-primary mt-2" onClick={handleSubmit}>Submit Review</button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
