import React, { useState ,useEffect } from 'react';
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi'; 
import { Link } from 'react-router-dom'; 
import Sidebar from './Sidebar'; // Import the Sidebar component
import logo from './logo.jpg';

const HomePage = () => {
  useEffect(() => {
    let slideIndex = 0;
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 5 seconds
    };
    showSlides();
  }, []);

  return (
    <>
      <nav className="bg-green-100 border-b-2 border-black flex items-center justify-around sticky top-0 z-10">
        <div className="flex items-center">
          <img src="./images/logo.jpg" alt="Swipe2Clean Logo" className="w-20 h-20 ml-8 cursor-pointer" />
          <h2 className="text-xl font-bold ml-2">Swipe2Clean</h2>
        </div>
        <div className="flex gap-8 items-center">
          <a href="#" className="text-gray-700 text-lg hover:scale-110 hover:text-black transition-transform">Home</a>
          <a href="#" className="text-gray-700 text-lg hover:scale-110 hover:text-black transition-transform">Events</a>
          <a href="#" className="text-gray-700 text-lg hover:scale-110 hover:text-black transition-transform">Contact</a>
          <a href="#" className="text-gray-700 text-lg hover:scale-110 hover:text-black transition-transform">Admin</a>
        </div>
        <div className="flex items-center">
          <img src="./images/avatar.png" alt="Admin Avatar" className="w-10 h-10 mx-2 cursor-pointer" />
          <h4 className="text-lg text-gray-700">Admin Name</h4>
        </div>
      </nav>

      <div className="bg-blue-900 text-white shadow-inner h-10 flex items-center px-4">
        <div className="bg-yellow-400 text-black px-2 py-1 rounded-md font-medium">Latest News</div>
        <div className="ml-2 overflow-hidden whitespace-nowrap">
          <p className="animate-slide">Lorem ipsum dolor sit amet consectetur...</p>
        </div>
      </div>

      <main className="flex">
        <div className="bg-gray-800 text-white w-64 p-4 shadow-lg">
          <ul className="space-y-4">
            {["Dashboard", "Waste Categories", "Collection Schedule", "Reports", "Settings", "Logout"].map((item, index) => (
              <li key={index} className="hover:bg-gray-700 p-2 rounded-md flex items-center space-x-2 cursor-pointer">
                <img src={`images/${item.toLowerCase().replace(/\s/g, '-')}.png`} alt={`${item} Icon`} className="w-8 h-8" />
                <a href="#" className="text-white">{item}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 p-8 bg-green-50">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Inventory</h1>
            <div className="flex gap-8">
              {["Total Waste", "Biodegradable Waste", "E-Waste", "Plastic-Waste"].map((type, index) => (
                <div key={index} className="bg-white p-4 rounded-md shadow-md flex flex-col items-center w-64">
                  <p className="font-medium mb-4">{type}:</p>
                  <svg className="w-40 h-40 transform -rotate-90 mb-4">
                    <circle className="stroke-gray-300" strokeWidth="20" fill="transparent" r="50" cx="80" cy="80" />
                    <circle className={`stroke-${index === 0 ? 'red-500' : index === 1 ? 'green-500' : index === 2 ? 'orange-500' : 'blue-500'}`} strokeWidth="20" fill="transparent" r="50" cx="80" cy="80" />
                  </svg>
                  <div className="text-lg font-bold">75%</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Pick-Up History</h1>
            <div className="bg-white p-4 rounded-md shadow-md">
              <div className="flex justify-between border-b-2 pb-2 mb-4">
                <h4 className="w-1/4 text-lg font-medium">Uid.</h4>
                <h4 className="w-1/4 text-lg font-medium">Time / Date</h4>
                <h4 className="w-1/4 text-lg font-medium">Type</h4>
                <h4 className="w-1/4 text-lg font-medium">Location</h4>
              </div>
              <div className="overflow-y-auto max-h-80">
                {/* Content goes here */}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Waste Track</h1>
            <div className="bg-white p-4 rounded-md shadow-md">
              {/* Tracking section is commented out */}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex-1 lg:flex lg:justify-between">
            <div className="space-y-2">
              <a href="#" className="hover:text-yellow-400">About Swipe2Clean</a>
              <a href="#" className="hover:text-yellow-400">Our Team</a>
              <a href="#" className="hover:text-yellow-400">Career Guidance</a>
              <a href="#" className="hover:text-yellow-400">Support & FAQs</a>
              <a href="#" className="hover:text-yellow-400">Media Partners</a>
              <a href="#" className="hover:text-yellow-400">Explore Partnerships</a>
              <a href="#" className="hover:text-yellow-400">Contact Us</a>
            </div>
            <div className="text-center lg:text-left">
              <img src="./images/logo.jpg" alt="Swipe2Clean Logo" className="mx-auto lg:mx-0 mb-2" />
              <p className="mb-2">Lorem ipsum dolor sit amet consectetur...</p>
              <div className="flex justify-center lg:justify-start space-x-4">
                <a href="#"><img src="./images/fb.png" alt="Facebook" className="w-8 h-8" /></a>
                <a href="#"><img src="./images/yt.png" alt="YouTube" className="w-8 h-8" /></a>
                <a href="#"><img src="./images/ins.png" alt="Instagram" className="w-8 h-8" /></a>
                <a href="#"><img src="./images/tt.png" alt="Twitter" className="w-8 h-8" /></a>
              </div>
            </div>
          </div>
          <hr className="my-4 border-gray-600" />
          <div className="text-center">
            <p>&copy; 2024 Swipe2Clean. All rights reserved. Developed and Designed by <a href="#" className="hover:text-yellow-400">Your Company</a></p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
