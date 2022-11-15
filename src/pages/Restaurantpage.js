import React from 'react'
import RestaurantSektion from "../components/RestaurantSektion"; 
import RestaurantHeader from "../components/RestaurantHeader"; 
import RestaurantFilters from '../components/RestaurantFilters';

export default function Restaurantpage() {
  return (
    <div className='bg-white xl:min-h-screen'>
        <RestaurantHeader />
        <RestaurantFilters />
        <RestaurantSektion />
    </div>
  )
}
