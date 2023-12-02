import React from 'react';

const LandPlotComponent = () => {
  const plotWidth = 400;
  const plotHeight = 300;
  

  const shapes = [
    // Rectangle
    { type: 'rect', x: 300, y: 0, width: 100, height: 100, color: 'green' },
    // Triangle
    { type: 'polygon', points: '250,0 200,100 300,100', color: 'blue' },
    // Circle
    { type: 'circle', cx: 350, cy: 250, r: 50, color: 'yellow' },
    // Multipolygon
  
    { type: 'multipolygon', polygons: [[{ x: 0, y: 0 }, { x: 0, y: 200 }, { x: 100, y: 0 }]], color: 'red' },
    { type: 'multipolygon', polygons: [[{ x: 0, y: 200 },  { x: 150, y: 150 },{ x: 100, y: 0 },]], color: 'blue' },
    
  ];

  return (
    <div className='flex justify-center items-center h-screen '>
      <svg width={plotWidth} height={plotHeight} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width={plotWidth} height={plotHeight} fill="#e6e6e6" stroke='red' />

        {shapes.map((shape, index) => (
          <Shape key={index} {...shape} />
        ))}
      </svg>
    </div>
  );
};

const Shape = ({ type, ...props }) => {
  switch (type) {
    case 'rect':
      return <rect {...props} stroke="#333" strokeWidth="1" fill='red' />;
    case 'polygon':
      return <polygon {...props} stroke="#333" strokeWidth="1" fill='yellow' />;
    case 'circle':
      return <circle {...props} fill="none" stroke="#333" strokeWidth="1" />;
    case 'multipolygon':
      return (
        <g>
          {props.polygons.map((polygon, polyIndex) => (
            <polygon key={polyIndex} points={polygon.map(point => `${point.x},${point.y}`).join(' ')} fill={props.color} />
          ))}
        </g>
      );
    default:
      return null;
  }
};



export default LandPlotComponent;
