import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaHandshake, FaMapMarkerAlt, FaLeaf, FaFileAlt } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen }) => {
    return (
        <div
            className={`${
                isSidebarOpen ? 'w-64' : 'w-0'
            } bg-[#2c3e50] text-white shadow-2xl transition-all duration-300 overflow-hidden`}
        >
            <div className="flex items-center justify-between p-6">
                <h2 className="text-3xl font-extrabold tracking-wide">Dashboard</h2>
            </div>
            <ul className={`px-4 ${isSidebarOpen ? 'space-y-6' : 'hidden'}`}>
                <li>
                    <Link to="/" className="flex items-center py-2 px-4 text-lg font-medium text-white hover:bg-blue-400 rounded transition duration-150 ease-in-out">
                        <FaHome className="mr-3" /> Home
                    </Link>
                </li>
                <li>
                    <Link to="/startups" className="flex items-center py-2 px-4 text-lg font-medium text-white hover:bg-blue-400 rounded transition duration-150 ease-in-out">
                        <FaHandshake className="mr-3" /> Collaboration
                    </Link>
                </li>
                <li>
                    <a href="https://mywaste.netlify.app" className="flex items-center py-2 px-4 text-lg font-medium text-white hover:bg-blue-400 rounded transition duration-150 ease-in-out">
                        <FaFileAlt className="mr-3" />Campaign
                    </a>
                </li>
                <li>
                    <Link to="/dropoff" className="flex items-center py-2 px-4 text-lg font-medium text-white hover:bg-blue-400 rounded transition duration-150 ease-in-out">
                        <FaMapMarkerAlt className="mr-3" /> Drop-off Finder
                    </Link>
                </li>
                
                <li>
                    <a href="https://dashboardsihjan.netlify.app/" className="flex items-center py-2 px-4 text-lg font-medium text-white hover:bg-blue-400 rounded transition duration-150 ease-in-out">
                        <FaFileAlt className="mr-3" /> Daily Reports
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
