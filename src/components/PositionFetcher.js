import React, { useState } from "react";

const PositionFetcher = (props) => {
  const [currentPosition, setCurrentPosition] = useState([]);
  const handleClick = (event) => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      setCurrentPosition([position.coords.latitude, position.coords.longitude]);
    });
  };
  return (
    <div id="container" className="w-full max-w-sm mx-auto">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Get current position
      </button>
      <p>Current Position: Lat {currentPosition[0]}</p>
      <p>Current Position: Long {currentPosition[1]}</p>
    </div>
  );
};

export default PositionFetcher;
