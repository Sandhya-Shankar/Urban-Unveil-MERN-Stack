import React, { useState } from 'react';
import axios from 'axios';
import './createfood.css';

const Createfood = () => {
  const [selectedCuisine, setSelectedCuisine] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedName, setSelectedName] = useState('');
  const [selectedRestId, setSelectedRestId] = useState('');
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedDes, setSelectedDes] = useState('');

  const [restaurants, setRest] = useState([])
  useEffect(()=> {
    axios.get('https://localhost:3001/getRest')
    .then(restaurants => setRest(restaurants.data))
    .catch(err=> console.log(err))
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/Createfood", {
      selectedRestId,
      selectedPrice,
      selectedArea,
      selectedCuisine,
      selectedName,
      selectedDes,
      selectedImage
    })
    .then(result => console.log(result))
    .catch(err => console.log(err));
  };

  return (
    <div>
      <h1>Create Food Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cuisine">Cuisine:</label>
          <input type="text" id="cuisine" value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)} placeholder="Enter cuisine" required />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} placeholder="Enter price" required />
        </div>
        <div>
          <label htmlFor="area">Area:</label>
          <input type="text" id="area" value={selectedArea} onChange={(e) => setSelectedArea(e.target.value)} placeholder="Enter area" required />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={selectedName} onChange={(e) => setSelectedName(e.target.value)} placeholder="Enter name" required />
        </div>
        <div>
          <label htmlFor="restId">Restaurant ID:</label>
          <input type="text" id="restId" value={selectedRestId} onChange={(e) => setSelectedRestId(e.target.value)} placeholder="Enter restaurant ID" required />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" value={selectedImage} onChange={(e) => setSelectedImage(e.target.value)} placeholder="Enter image URL" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" value={selectedDes} onChange={(e) => setSelectedDes(e.target.value)} placeholder="Enter description" required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Createfood;