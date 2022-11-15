import React from 'react'
import EventHeader from '../components/EventHeader'
import EventSection from "../components/EventSection"
import RestaurantFilters from '../components/RestaurantFilters'

export default function EventPage() {
  return (
    <section className='bg-white'>
        <EventHeader />
        <RestaurantFilters />
        <EventSection />
    </section>
  )
}
