import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"


export default function Search() {
  return (
    <section  className='px-6 '>
        <form className="search">
            <input className="text-primaryGray-900" type="text" placeholder="Søg"/>
            <MagnifyingGlassIcon className="h-7 w-7"/>
        </form>
    </section>
  )
}
