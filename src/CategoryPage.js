import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div>
        <h1 className="text-2xl font-bold text-center mb-4">What to do with different types of waste</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Box component */}
          <Link to="/paper-cardboards" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">📦</div>
            <div className="text-xl font-semibold">Paper & Cardboards</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/plastics" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">🧴</div>
            <div className="text-xl font-semibold">Plastics</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/food-waste" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">🍌</div>
            <div className="text-xl font-semibold">Food Waste & Organic</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/metals" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">⚙️</div>
            <div className="text-xl font-semibold">Metals</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/batteries" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">🔋</div>
            <div className="text-xl font-semibold">Batteries</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/electrical" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">💡</div>
            <div className="text-xl font-semibold">Electrical</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/fabrics-textiles" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">👕</div>
            <div className="text-xl font-semibold">Fabrics & Textiles</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/hazardous-medical" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">⚠️</div>
            <div className="text-xl font-semibold">Hazardous & Medical</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/vehicles" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">🚗</div>
            <div className="text-xl font-semibold">Vehicles</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
          
          <Link to="/bulky-construction" className="bg-white border border-black shadow-sm rounded-lg p-6 text-center transform hover:-translate-y-1 transition-all w-full h-48 relative">
            <div className="text-4xl mb-4">🏗️</div>
            <div className="text-xl font-semibold">Bulky & Construction</div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-2xl">
              <FontAwesomeIcon icon={faArrowRight} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
