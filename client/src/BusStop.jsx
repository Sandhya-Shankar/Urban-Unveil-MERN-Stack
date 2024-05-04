import React from 'react';
import { Link } from 'react-router-dom';

const BusStop = () => {
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

      {/* Bus Stops Section */}
      <section id="bus-stops" className="section-spacing">
        <div className="container">
          <h2 className="section-title">Bus Stops</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
              <div className="fh5co-item animate-box">
                <h3>Besant Nagar Bus Stand</h3>
                <p>Besant Nagar</p>
                <a href="https://www.google.com/maps/place/Besant+Nagar/@12.9979869,80.2641703,17z/data=!4m10!1m2!2m1!1sbesant+bus+stands+in+chennai!3m6!1s0x3a5267fac3cd8199:0x712e977be25ce9a9!8m2!3d13.0003409!4d80.2659395!15sChxiZXNhbnQgYnVzIHN0YW5kcyBpbiBjaGVubmFpkgEIYnVzX3N0b3DgAQA!16s%2Fg%2F1tdqm23z?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Maps</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
              <div className="fh5co-item animate-box">
                <h3>Pallavaram Bus Stand</h3>
                <p>Pallavaram</p>
                <a href="https://www.google.com/maps/place/Pallavaram+Bus+Stand/@12.9692343,80.0739967,13z/data=!4m10!1m2!2m1!1sfamous+bus+stands+in+chennai!3m6!1s0x3a525f10e37ab011:0xa6dbd27c3cb1cff5!8m2!3d12.9692343!4d80.1502144!15sChxmYW1vdXMgYnVzIHN0YW5kcyBpbiBjaGVubmFpWh4iHGZhbW91cyBidXMgc3RhbmRzIGluIGNoZW5uYWmSARZ0cmFuc3BvcnRhdGlvbl9zZXJ2aWNlmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU4wT0UxVGJrWm5FQUXgAQA!16s%2Fg%2F11rjt_z6n0?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Maps</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
              <div className="fh5co-item animate-box">
                <h3>Koyambedu Bus Stand</h3>
                <p>Koyembedu</p>
                <a href="https://www.google.com/maps/place/Koyambedu+CMBT+Bus+Stand/@13.0686902,80.1670328,14z/data=!4m10!1m2!2m1!1sfamous+bus+stands+in+chennai!3m6!1s0x3a52671b0c5edc8f:0x986ca65db7afc134!8m2!3d13.0686902!4d80.2051416!15sChxmYW1vdXMgYnVzIHN0YW5kcyBpbiBjaGVubmFpkgEJYnVzX2RlcG904AEA!16s%2Fg%2F11h6ywdgdk?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Maps</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
              <div className="fh5co-item animate-box">
                <h3>Mylapore Bus Stand</h3>
                <p>Mylapore</p>
                <a href="https://google.com/maps/place/Mylapore+Bus+Stop/@13.034274,80.2296872,14z/data=!4m10!1m2!2m1!1sfamous+bus+stands+in+chennai!3m6!1s0x3a5267d2fcb8200f:0xfc1058da6b1d325d!8m2!3d13.034274!4d80.267796!15sChxmYW1vdXMgYnVzIHN0YW5kcyBpbiBjaGVubmFpkgEccHVibGljX3RyYW5zcG9ydGF0aW9uX3N5c3RlbeABAA!16s%2Fg%2F11c31rky62?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Maps</a>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-6 col-xxs-12 fh5co-item-wrap">
              <div className="fh5co-item animate-box">
                <h3>West Saidapet Bus Depot</h3>
                <p>Saidapet</p>
                <a href="https://www.google.com/maps/place/Egmore+Bus+Stop/@13.0642827,80.1896582,13z/data=!4m10!1m2!2m1!1sfamous+bus+stands+in+chennai!3m6!1s0x3a5266093fc2197f:0x8e67094a2aaf3055!8m2!3d13.0773175!4d80.2613527!15sChxmYW1vdXMgYnVzIHN0YW5kcyBpbiBjaGVubmFpWh4iHGZhbW91cyBidXMgc3RhbmRzIGluIGNoZW5uYWmSAQhidXNfc3RvcJoBIENoUkRTVWhOTUc5blMwVkpRMEZuU1VOM2IwbFJlQkFC4AEA!16s%2Fg%2F1pxq3m2px?entry=ttu" target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Maps</a>
              </div>
            </div>
            {/* Add more columns for additional bus stops */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusStop;
