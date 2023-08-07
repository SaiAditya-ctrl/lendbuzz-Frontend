import React from 'react';
import './Errorhandler.css'; // Import your CSS file
import img from "../../../src/images/error.png"
function Errorhandler() {
  return (
    <div className="error-container">
      <img
        src={img}// Replace with your image path
        alt="Error"
        className="error-image"
      />
      <div className="error-message">
        <h1>Sorry, Please check wether the backend is running or Not</h1>
        <p>Start the backend node js.</p>
      </div>
    </div>
  );
}

export default Errorhandler;
