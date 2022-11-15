import React from 'react'
import MyTripsOverview from '../components/MyTripsOverview'
import PlusButton from '../components/PlusButton'

export default function MyTrips() {
  return (
    <div className="px-6 bg-white xl:min-h-screen">
      <MyTripsOverview/>
      <PlusButton />
    </div>
  )
}
