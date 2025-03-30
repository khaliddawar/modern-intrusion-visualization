
import React, { ReactNode } from 'react';

interface IDSFeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const IDSFeature: React.FC<IDSFeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-cyber-dark border border-cyber-blue/20 rounded-lg p-5 backdrop-blur-sm shadow-[0_0_10px_rgba(14,165,233,0.15)] hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="bg-cyber-blue/20 p-2 rounded-md">
          <div className="text-cyber-blue w-6 h-6">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="text-white font-medium text-lg">{title}</h3>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default IDSFeature;
