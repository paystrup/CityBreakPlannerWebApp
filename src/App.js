import React from 'react';
import './css/App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import LandingPage from './pages/LandingPage';
import MyTrips from './pages/MyTrips';
import BottomBar from './components/BottomBar';
import NavTopBar from './components/NavTopBar';
import SearchPage from './pages/SearchPage';
import CityPage from './pages/CityPage';
import Restaurantpage from './pages/Restaurantpage';

function App() {
  return (
    <main>
      <ScrollToTop />
      <NavTopBar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/trips" element={<MyTrips/>} />
        <Route path="/city/:slug" element={<CityPage/>} />
        <Route path="/city/:slug/restaurants" element={<Restaurantpage/>} />
        <Route path="/search" element={<SearchPage/>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <BottomBar />
    </main>
  );
}

export default App;
