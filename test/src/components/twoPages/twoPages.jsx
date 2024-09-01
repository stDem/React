import React from 'react'
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const TwoPages = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/page/home" element={<HomePage />} />
                    <Route path="/page/about" element={<AboutPage />} />
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default TwoPages;