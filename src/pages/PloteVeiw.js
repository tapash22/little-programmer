import React, { useState } from 'react';

const PlotView = () => {
  const [hoveredShapeIndex, setHoveredShapeIndex] = useState(null);

  const plotWidth = 400;
  const plotHeight = 300;

  const shapes = [
    { type: 'triangle', points: '0,0 0,40 20,0', color: 'purple', text: 'this is the details of tri', },
    { type: 'hexagon', points: '0,40 20,60 40,60 60,20 40,0 20,0', color: 'orange', text: 'this is the details of hexa' },
    { type: 'polygon', points: '40,60 80,60 80,0 40,0 60,20', color: 'blue', text: 'this is the details of polygon',  },
    { type: 'triangle', points: '80,60 100,0 80,0', color: 'yellow', text: 'this is the details of tri', },
    { type: 'triangle', points: '20,60 80,60 80,120', color: 'green', text: 'this is the details of tri', },
    // { type: 'rect', x: 300, y: 0, width: 100, height: 100, color: 'green', text: 'this is the details of rect',  },
    // { type: 'polygon', points: '250,0 200,100 300,100', color: 'blue', text: 'this is the details of polygon', x: 250, y: 50 },
    // { type: 'circle', cx: 350, cy: 250, r: 50, color: 'yellow', text: 'this is the details of circle',x: 250, y: 50 },
  
    // { type: 'multipolygon', polygons: [[{ x: 0, y: 0 }, { x: 0, y: 200 }, { x: 100, y: 0 }]], color: 'red', text: 'this is the details of view',x: 250, y: 50 },
    // { type: 'multipolygon', polygons: [[{ x: 0, y: 200 }, { x: 150, y: 150 }, { x: 100, y: 0 }]], color: 'blue', text: 'this is the details of view',x: 250, y: 50 },
    // { type: 'triangle', points: '50,150 0,250 100,250', color: 'purple', text: 'this is the details of tri', x: 250, y: 50 },
    // { type: 'hexagon', points: '200,200 250,150 300,150 350,200 300,250 250,250', color: 'orange', text: 'this is the details of hexa',x: 250, y: 50 },
  
    // New Pentagon Shape
    {
        type: 'pentagon',
        points: [
          { x: 200, y: 150 },
          { x: 250, y: 100 },
          { x: 300, y: 100 },
          { x: 350, y: 150 },
          { x: 275, y: 225 }
        ],
        color: 'pink',
        text: 'This is the details of the pentagon'
      }
  ];
  

  return (
    <div className='flex justify-center items-center h-screen'>
      <svg width={plotWidth} height={plotHeight} xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width={plotWidth} height={plotHeight} fill="#e6e6e6" stroke='red' />

        {shapes.map((shape, index) => (
          <Shape
            key={index}
            index={index}
            {...shape}
            isHovered={index === hoveredShapeIndex}
            onHover={() => setHoveredShapeIndex(index)}
            onLeave={() => setHoveredShapeIndex(null)}
          />
        ))}
      </svg>
    </div>
  );
};

const Shape = ({ type, index, isHovered, onHover, onLeave, ...props }) => {
    const calculateCentroid = (points) => {
        if (Array.isArray(points)) {
          const centroid = points.reduce((acc, point) => [acc[0] + point.x, acc[1] + point.y], [0, 0]);
          return [centroid[0] / points.length, centroid[1] / points.length];
        } else {
          const pointArray = points.split(' ').map(point => point.split(',').map(Number));
          const centroid = pointArray.reduce((acc, point) => [acc[0] + point[0], acc[1] + point[1]], [0, 0]);
          return [centroid[0] / pointArray.length, centroid[1] / pointArray.length];
        }
      };
  
    const centroid = type === 'polygon' || type === 'triangle' ?
      calculateCentroid(props.points) :
      [props.cx || props.x, props.cy || props.y];
  
    const handleHover = () => {
      onHover();
    };
  
    const handleLeave = () => {
      onLeave();
    };
  
    return (
      <>
        {type === 'multipolygon' || type === 'triangle' ? (
          <polygon
            points={type === 'triangle' ? props.points : props.polygons[0].map(point => `${point.x},${point.y}`).join(' ')}
            fill={isHovered ? 'lightgray' : props.color}
            stroke={isHovered ? 'black' : '#333'}
            strokeWidth="1"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
        ) : type === 'hexagon' ? (
            <polygon
              points={props.points}
              fill={isHovered ? 'lightgray' : props.color}
              stroke={isHovered ? 'black' : '#333'}
              strokeWidth="1"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
          ): type === 'circle' ? (
            <circle
              cx={props.cx}
              cy={props.cy}
              r={props.r}
              fill={isHovered ? 'lightgray' : props.color}
              stroke={isHovered ? 'black' : '#333'}
              strokeWidth="1"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
          ) : (
          <rect
            x={props.x || 0}
            y={props.y || 0}
            width={type === 'rect' ? props.width : 0}
            height={type === 'rect' ? props.height : 0}
            fill={isHovered ? 'lightgray' : props.color}
            stroke={isHovered ? 'black' : '#333'}
            strokeWidth="1"
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          />
        )}
  
        {/* Popup */}
        {isHovered && (
          <foreignObject
            x={centroid[0] - 60}
            y={centroid[1] - 1}
            width={120}
            height={70}
            style={{
              transition: 'transform 0.3s ease',
              transform: 'scale(1)',
            }}
          >
            <div className='bg-white p-2 ring-1 ring-indigo-500 rounded-lg flex justify-center items-center z-50'>
              <p className="text-xs font-normal text-center">
                {props.text || `Popup Content for Shape ${index + 1}`}
              </p>
            </div>
          </foreignObject>
        )}
      </>
    );
  }
  
  
  

export default PlotView;
