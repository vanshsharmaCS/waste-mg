import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Startups from './Startups';
import Location from './Location';
import StartupDetails from './StartupDetails';  // Import the StartupDetails component
// import HomePage from './HomePage'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/startups" element={<Startups />} />
                <Route path="/startup-details" element={<StartupDetails />} /> {/* Add route for StartupDetails */}
                <Route path="/dropoff" element={<Location />} />
            </Routes>
        </Router>
    );
};

export default App;
