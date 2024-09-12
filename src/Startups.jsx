import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { HiChevronRight, HiChevronLeft, HiPlusCircle } from 'react-icons/hi';
import logo from './logo.jpg';
import admin from './admin.jpg';
import background from './image.jpg';


const Startups = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [startups, setStartups] = useState([
        { name: 'Shayan Unified', description: 'Shayan Unified embodies the essence of synergy and cohesion, bringing together diverse elements into a seamless alliance.' },
        { name: 'ByFusion', description: ' This company transforms plastic waste into building materials, specifically eco-friendly construction blocks, reducing landfill waste while creating sustainable construction options' },
        { name: 'The Ocean Cleanup', description: ' While primarily focused on removing plastic from the oceans, this company is also exploring ways to recycle the collected waste into new products, contributing to the circular economy.' },
        { name: 'Prayog Unified', description: 'Prayog Unified represents a groundbreaking approach to innovation, where experimentation and creativity come together in perfect synergy.' },
    ]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleAddStartup = () => {
        const name = window.prompt("Enter the name of the startup:");
        const description = window.prompt("Enter a description for the startup:");

        if (name && description) {
            const newStartup = { name, description };
            setStartups([...startups, newStartup]);
        } else {
            window.alert("Both name and description are required to add a new startup.");
        }
    };

    return (
        <>
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

            <div className="flex flex-col min-h-screen bg-[#F5FFFB] text-gray-800"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // opacity: 0.5, // Adjust the opacity as needed
            }}
            >
                <div className="relative flex flex-1">
                    <Sidebar isSidebarOpen={isSidebarOpen} />

                    <button
                        onClick={toggleSidebar}
                        className={`absolute top-1/2 transform -translate-y-1/2 ${
                            isSidebarOpen ? 'left-64' : 'left-0'
                        } transition-all duration-300 z-10 p-2 bg-blue-900 text-white rounded-full shadow-lg`}
                    >
                        {isSidebarOpen ? <HiChevronLeft size={24} /> : <HiChevronRight size={24} />}
                    </button>

                    <div className={`flex-1 p-10 ${isSidebarOpen ? 'ml-50' : 'ml-0'} transition-all duration-300`}>
                    <h1 className="text-5xl font-black mb-8 text-center text-black tracking-wide leading-tight"
                    >
                       Startups
                        
                    </h1>                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {startups.map((startup, index) => (
                                <div key={index} className="bg-white p-8 rounded-xl shadow-xl">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-900">{startup.name}</h2>
                                    <p className="text-gray-600">{startup.description}</p>
                                </div>
                            ))}
                            <div
                                onClick={handleAddStartup}
                                className="flex items-center justify-center bg-white p-8 rounded-xl shadow-xl cursor-pointer hover:bg-gray-100 transition"
                            >
                                <HiPlusCircle size={48} className="text-blue-900" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Startups;
