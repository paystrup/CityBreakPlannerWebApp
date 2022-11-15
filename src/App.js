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
import { useState } from "react";
import ActivityPage from './pages/ActivityPage';

function App() {
  // state for loading animation
  const [loading, setLoading] = useState(true);
  // loader div is inserted into index.html, timeout/hide after 1000ms and show root
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
      setLoading(false);
    }, 1000);
  }

  return (
    !loading && (
      <main className='xl:bg-black xl:min-h-screen'>
        <div className='xl:max-w-sm xl:m-auto xl:shadow-md'>
          <ScrollToTop />
          <NavTopBar />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/trips" element={<MyTrips/>} />
            <Route path="/city/:slug" element={<CityPage/>} />
            <Route path="/city/:slug/restaurants" element={<Restaurantpage/>} />
            <Route path="/city/Aarhus/restaurants/:Id" element={<ActivityPage/>} exact={true}/>
            <Route path="/search" element={<SearchPage/>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <BottomBar />
        </div>
      </main>
    )
  );
}

export default App;
