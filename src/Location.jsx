import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Sidebar from './Sidebar'; // Import the Sidebar component
import logo from './logo.jpg';
import admin from './admin.jpg';


// Define a custom icon for the markers
const customIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

// Define specific coordinates within India
const locations = [
    { lat: 28.7041, lng: 77.1025, name: "Delhi" },
    { lat: 27.4915, lng: 77.6737, name: "Mathura" },
    { lat: 30.3165, lng: 78.0322, name: "Dehradun" },
    { lat: 29.9554, lng: 78.1642, name: "Haridwar" },
];

const Location = () => {
    return (
        <>
                        <nav className='bg-[#1d2b38]'>
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
          <a href="#" >Home</a>
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

            <div className="flex min-h-screen bg-[#F5FFFB] text-gray-800">
                {/* Sidebar */}
                <Sidebar isSidebarOpen={true} /> {/* Pass the necessary props */}

                {/* Main content */}
                <div className="flex-1 p-4">
                    <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-900">Location Finder</h1>
                    <div className="relative h-96 w-full rounded-xl shadow-xl border border-gray-500 overflow-hidden">
                        <MapContainer center={[28.7041, 77.1025]} zoom={6} className="h-full w-full">
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {locations.map((location, index) => (
                                <Marker
                                    key={index}
                                    position={[location.lat, location.lng]}
                                    icon={customIcon}
                                >
                                    <Popup>{location.name}</Popup>
                                </Marker>
                            ))}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Location;
