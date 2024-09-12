import React from 'react';
import { useLocation } from 'react-router-dom';
import background from './image.jpg';

const StartupDetails = () => {
    const location = useLocation();
    const { startup } = location.state || {};

    if (!startup) {
        return <p>No startup selected.</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
            <div className="bg-white p-10 rounded-xl shadow-xl">
                <h1 className="text-4xl font-extrabold mb-4 text-blue-900">{startup.name}</h1>
                <p className="text-gray-600">{startup.description}</p>
            </div>
        </div>
    );
};

export default StartupDetails;
