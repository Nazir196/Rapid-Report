import React from 'react';
import image from '../assets/Rapid.jpg'

const NewsItems = ({ title, description, src, url }) => {
  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Card container */}
      <div className="border-2  flex flex-col lg:flex-row bg-white rounded-lg shadow-md overflow-hidden">
        
        <img className="w-full lg:w-1/3 h-48 lg:h-auto object-cover" src={src?src:image} alt="Image" />

        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 text-gray-700">{title}</h2>
            <p className="text-gray-600 mb-4">{description?description:"Description not available."}</p>
          </div>

          <a href={url} className="inline-block text-white bg-gray-700 text-xs font-semibold px-2 py-1 rounded">Read more</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;
