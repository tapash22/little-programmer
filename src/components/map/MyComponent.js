import React from 'react';

const MyComponent = () => {
  const geoJSONFeature = {
    "arcs": [
      [
        79,
        80,
        81
      ]
    ],
    "type": "Polygon",
    "properties": {
      "name": "Bangladesh",
      "Alpha-2": "BD"
    },
    "id": "BGD"
  };

  // Assuming you have a function to scale or transform your data if needed
  const scale = (coord) => {
    // Your scaling logic here
    return coord; // Placeholder, replace with your actual scaling logic
  };

  // Extracting the coordinates from the geoJSONFeature and applying scaling
  const coordinates = geoJSONFeature.arcs[0].map(coord => [scale(coord[0]), scale(coord[1])]);

  // Convert the coordinates to an SVG points string
  const pointsString = coordinates.map(coord => coord.join(',')).join(' ');

  return (
    <div className='flex justify-center items-center bg-white'>
      <svg width="500" height="500" className='bg-white'>
      <polygon
        points={pointsString}
        style={{
          fill: "#fff",
          stroke: "#ff0",
          strokeWidth: 2
        }}
      />
    </svg>
    </div>
  );
};

export default MyComponent;
