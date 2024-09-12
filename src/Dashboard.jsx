import React, { useState } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'; 
import { Link } from 'react-router-dom'; 
import Sidebar from './Sidebar'; // Import the Sidebar component
import logo from './logo.jpg';
import admin from './admin.jpg';
import { FaHandshake, FaMapMarkerAlt, FaLeaf, FaFileAlt } from 'react-icons/fa';

import background from './image.jpg'; // Import the background image

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div
            className="flex flex-col min-h-screen text-gray-800"
           
        >
            <nav>
                <div className="navbar">
                    <div className="logo">
                        <img
                            src={logo}
                            alt="Logo"
                            className="w-20 h-20 cursor-pointer rounded-full"
                        />
                        <h2>Swipe2Clean</h2>
                    </div>
                    <div className="link">
                        <a href="#">Home</a>
                        <a href="#">Events</a>
                        <a href="#">Contact</a>
                        <a href="#">Admin</a>
                    </div>
                    <div className="sign">
                        <img
                            src={admin}
                            alt="Logo"
                            className="w-10 h-20 cursor-pointer rounded-full"
                        />
                        <h4>Admin Name</h4>
                    </div>
                </div>
            </nav>

            <div className="relative flex flex-1"
            >
                {/* Use the Sidebar component */}
                <Sidebar isSidebarOpen={isSidebarOpen} />

                <button
                    onClick={toggleSidebar}
                    className={`absolute top-1/2 transform -translate-y-1/2 ${
                        isSidebarOpen ? 'left-64' : 'left-0'
                    } transition-all duration-300 z-10 p-2 bg-blue-900 text-white rounded-full shadow-lg focus:outline-none`}
                >
                    {isSidebarOpen ? (
                        <HiChevronLeft size={24} />
                    ) : (
                        <HiChevronRight size={24} />
                    )}
                </button>

                {/* Main Content */}
                <div className={`flex-1 p-10 ${isSidebarOpen ? 'ml-50' : 'ml-0'} transition-all duration-300`}
                 style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // opacity: 0.5, // Adjust the opacity as needed
                }}
                >
                    
                    <h1 className="text-5xl font-black mb-8 text-center text-black tracking-wide leading-tight"
                    >
                        Disposal Dashboard
                        <span className="block text-lg font-medium text-back mt-2">
                            Efficiently manage and track your waste disposal
                        </span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Link
        to="/startups"
        id="collaboration"
        className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
    >
        <div className="flex items-center mb-4">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100">
                <FaHandshake className="text-blue-600" size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-blue-900 tracking-tight ml-3">Collaboration with Startups</h2>
        </div>
        <p className="text-gray-600">Explore opportunities to collaborate with startups on waste disposal innovations.</p>
    </Link>

    <Link
        to="https://mywaste.netlify.app"
        id="campaign"
        className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
    >
        <div className="flex items-center mb-4">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-green-100">
                <FaHandshake className="text-green-600" size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-blue-900 tracking-tight ml-3">Campaign</h2>
        </div>
        <p className="text-gray-600">Manage your waste disposal campaigns effectively here.</p>
    </Link>

    <Link
        to="/dropoff"
        className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
    >
        <div className="flex items-center mb-4">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-red-100">
                <FaMapMarkerAlt className="text-red-600" size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-blue-900 tracking-tight ml-3">Drop-off Location Finder</h2>
        </div>
        <p className="text-gray-600">Find the nearest drop-off locations for waste disposal.</p>
    </Link>

    
    <Link
        to="https://dashboardsihjan.netlify.app/"
        id="reports"
        className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
    >
        <div className="flex items-center mb-4">
            <div className="flex justify-center items-center w-12 h-12 rounded-full bg-yellow-100">
            <FaFileAlt className="text-purple-600" size={24} />
            </div>
            <h2 className="text-2xl font-semibold text-blue-900 tracking-tight ml-3">Daily Reports for Disposed Waste</h2>
        </div>
        <p className="text-gray-600">Get daily reports on the waste you've disposed of.</p>
    </Link>

    
</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
