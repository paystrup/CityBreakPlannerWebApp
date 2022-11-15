import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"


export default function Search() {
  return (
    <section  className='px-6 soeg'>
        <form className="search">
            <input className="text-primaryGray-900" type="text" placeholder="Søg"/>
            <MagnifyingGlassIcon className="h-7 w-7 primaryGray-900"/>
        </form>
    </section>
  )
}

// background: url(assets/svg/icons/IconSearch.svg) no-repeat;
// background-position: center right 26.5px;
