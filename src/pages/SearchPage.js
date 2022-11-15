import React from 'react'
import Search from "../components/Search"
import CategoriesExplore from "../components/CategoriesExplore"

export default function SearchPage() {
  return (
    <div className='bg-white xl:min-h-screen'>
      <Search/>
      <CategoriesExplore/>
    </div>
  )
}
