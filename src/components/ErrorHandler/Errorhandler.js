import React from 'react';
import './Errorhandler.css'; 
import img from "../../../src/images/source.gif"
function Errorhandler() {
  return (
    <div className="error-container">
      <img
        src={img}
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
