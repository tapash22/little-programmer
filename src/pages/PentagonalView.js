import React, { useState } from 'react';

const PentagonalView = () => {
  const [hoveredShapeIndex, setHoveredShapeIndex] = useState(null);

  const plotWidth = 400;
  const plotHeight = 300;

  const shapes = [
    { type: 'triangle', points: '0,0 0,40 20,0', color: 'purple', text: 'tri', x:50, y:50 },
    { type: 'hexagon', points: '0,40 20,60 40,60 60,20 40,0 20,0', color: 'orange', text: 'hexa',x:50, y:50 },
    { type: 'polygon', points: '40,60 80,60 80,0 40,0 60,20', color: 'blue', text: ' polygon', x:50, y:50 },
    { type: 'triangle', points: '80,60 100,0 80,0', color: 'yellow', text: 'tri',x:50, y:50 },
    // { type: 'triangle', points: '20,60 80,60 80,120', color: 'green', text: 'this is the details of tri', x:50, y:50},
    {
        type: 'rectangle',
        points: '20,60 80,60 80,120 20,120',
        color: 'red',
        text: 'rectangle',
        x: 50,
        y: 50
      },
      {
        type: 'rectangle',
        points: '0,40 0,140 20,140 20,60',
        color: 'green',
        text: 'rectangle',
        x: 50,
        y: 50
      },
    {
        type: 'pentagon',
        points: [
          { x: 40, y: 60 },
          { x: 80, y: 60 },
          { x: 80, y: 0 },
          { x: 40, y: 0 },
          { x: 60, y: 20 }
        ],
        color: 'pink',
        text: 'pentagon'
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
        {type === 'pentagon' ? (
         <>
           <polygon
             points={props.points.map(point => `${point.x},${point.y}`).join(' ')}
             fill={isHovered ? 'lightgray' : props.color}
             stroke={isHovered ? 'black' : '#333'}
             strokeWidth="1"
             onMouseEnter={handleHover}
             onMouseLeave={handleLeave}
           />
           {
            props.points[0].x- props.points[0].y
           }
           <text
             x={props.points[0].x +22}
             y={props.points[0].y - 15}
             textAnchor="middle"
             alignmentBaseline="middle"
             fill="black"
             fontSize="6"
             fontWeight="700"
           >
             {props.text || `Shape ${index + 1}`}
           </text>
 
       </>  
        ) :type === 'rectangle' ? (
           <>
            <polygon
              points={props.points}
              transform={isHovered ? 'scale(1.5)' : 'scale(1)'}
              fill={isHovered ? 'lightgray' : props.color}
              stroke={isHovered ? 'black' : '#333'}
              strokeWidth="1"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
            <text
            x={props.points[0].x }
            y={props.points[0].y }
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="black"
            fontSize="6"
            fontWeight="700"
          >
            {props.text || `Shape ${index + 1}`}
          </text>
          </>
          ):type === 'multipolygon' || type === 'triangle' ? (
           <> 
            <polygon
              points={type === 'triangle' ? props.points : props.polygons[0].map(point => `${point.x},${point.y}`).join(' ')}
              transform={isHovered ? 'scale(1.5)' : 'scale(1)'}
              fill={isHovered ? 'lightgray' : props.color}
              stroke={isHovered ? 'black' : '#333'}
              strokeWidth="1"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            />
            <text
            x={props.points[0].x}
            y={props.points[0].y}
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="black"
            fontSize="6"
            fontWeight="700"
          >
            {props.text || `Shape ${index + 1}`}
          </text>
           </>
          ) : type === 'hexagon' ? (
                <> 
                <polygon
                  points={props.points}
                  transform={isHovered ? 'scale(1.5)' : 'scale(1)'}
                  fill={isHovered ? 'lightgray' : props.color}
                  stroke={isHovered ? 'black' : '#333'}
                  strokeWidth="1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                />
                <text
                x={props.points[0].x}
                y={props.points[0].y}
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="black"
                fontSize="6"
                fontWeight="700"
              >
                {props.text || `Shape ${index + 1}`}
              </text>
                </>
              ): type === 'circle' ? (
                <>
                <circle
                  cx={props.cx}
                  cy={props.cy}
                  r={props.r}
                  transform={isHovered ? 'scale(1.5)' : 'scale(1)'}
                  fill={isHovered ? 'lightgray' : props.color}
                  stroke={isHovered ? 'black' : '#333'}
                  strokeWidth="1"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                />
                <text
                x={props.points[0].x }
                y={props.points[0].y }
                textAnchor="middle"
                alignmentBaseline="middle"
                fill="black"
                fontSize="6"
                fontWeight="700"
              >
                {props.text || `Shape ${index + 1}`}
              </text>
                </>
              ) : (
              <>
              <rect
                x={props.x || 0}
                y={props.y || 0}
                width={type === 'rect' ? props.width : 0}
                height={type === 'rect' ? props.height : 0}
                transform={isHovered ? 'scale(1.5)' : 'scale(1)'}
                fill={isHovered ? 'lightgray' : props.color}
                stroke={isHovered ? 'black' : '#333'}
                strokeWidth="1"
                onMouseEnter={handleHover}
                onMouseLeave={handleLeave}
              />
              <text
              x={props.points[0].x }
              y={props.points[0].y }
              textAnchor="middle"
              alignmentBaseline="middle"
              fill="black"
              fontSize="6"
              fontWeight="700"
            >
              {props.text || `Shape ${index + 1}`}
            </text>
            </>
            )}
  
        {/* Popup */}
        {isHovered && (
           <div></div>

        //   <foreignObject
        //     x={centroid[0] - 60}
        //     y={centroid[1] - 1}
        //     width={120}
        //     height={70}
        //     style={{
        //       transition: 'transform 0.3s ease',
        //       transform: isHovered ? 'scale(1.5)' : 'scale(1)',
        //     }}
        //   >
        //     <div className='bg-white p-2 ring-1 ring-indigo-500 rounded-lg flex justify-center items-center '>
        //       <p className="text-xs font-normal text-center">
        //         {props.text || `Popup Content for Shape ${index + 1}`}
        //       </p>
        //     </div>
        //   </foreignObject>
        )}
      </>
    );
  };

export default PentagonalView;
