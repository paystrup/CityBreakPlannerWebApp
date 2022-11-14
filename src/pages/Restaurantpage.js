import React from 'react'
import RestaurantSektion from "../components/restaurantsektion"; 
import RestaurantHeader from "../components/RestaurantHeader"; 

export default function Restaurantpage() {
  return (
    <div>
        <RestaurantHeader />
        <RestaurantSektion />
    </div>
  )
}
