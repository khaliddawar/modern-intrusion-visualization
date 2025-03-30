
import React from 'react';

const DataFlowAnimation: React.FC = () => {
  // Binary-like data for the animation
  const binaryChunks = [
    "10101001", "11001010", "10011101", "00110101", 
    "10101101", "00101011", "10100111", "11010010"
  ];

  return (
    <div className="absolute inset-0 flex items-center">
      <div className="whitespace-nowrap animate-data-flow flex">
        {[...Array(4)].map((_, mainIndex) => (
          <React.Fragment key={mainIndex}>
            {binaryChunks.map((chunk, index) => (
              <span
                key={`${mainIndex}-${index}`}
                className={`inline-block px-3 font-mono text-xs 
                  ${index % 3 === 0 ? 'text-cyber-blue' : index % 3 === 1 ? 'text-cyber-cyan' : 'text-cyber-accent'}`}
              >
                {chunk}
              </span>
            ))}
            <span className="inline-block px-3 font-mono text-xs text-cyber-danger">!</span>
            <span className="inline-block px-3 font-mono text-xs text-cyber-success">✓</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DataFlowAnimation;
