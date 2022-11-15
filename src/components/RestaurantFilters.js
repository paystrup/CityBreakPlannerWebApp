import React from 'react'
import {
    AdjustmentsVerticalIcon,
    ListBulletIcon,
    MapIcon,
    Squares2X2Icon
  } from "@heroicons/react/24/outline"

export default function RestaurantFilters() {
  return (
    <section className='py-2 px-6 font-visitdk text-sm text-primaryGray-900'>
        <div className='flex justify-between items-start'>
            <button className='flex gap-1 items-center justify-center'>
                <AdjustmentsVerticalIcon className='h-5 w-5'/>
                <p>Filtrér</p>
            </button>
            <div className='flex gap-3'>
                <button className='flex gap-1'>
                    <Squares2X2Icon className='h-5 w-5'/>
                    <p>Grid</p>
                </button>

                <button className='flex flex-col gap-1 text-primaryBlue font-visitdkBold'>
                    <div className='flex'>
                        <ListBulletIcon className='h-5 w-5'/>
                        <p>Liste</p>
                    </div>

                    <hr className='h-05 mt-1 w-full bg-primaryBlue' />
                </button>

                <button className='flex gap-1'>
                    <MapIcon className='h-5 w-5'/>
                    <p>Kort</p>
                </button>
            </div>
        </div>

    </section>
  )
}
