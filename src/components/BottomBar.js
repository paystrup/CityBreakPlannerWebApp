// Bottombar on Mobile App 📱

import React from "react";
import { NavLink } from "react-router-dom";
import "../css/App.css";
import {
  MagnifyingGlassIcon,
  BriefcaseIcon,
  HomeIcon
} from "@heroicons/react/24/outline"

// react router Navlinks so we can use active styling to display
// new styling when user is navigated to the url assigned
export default function BottomBar() {
  return (
    <div className="fixed w-full bottom-0 left-0 px-10 pb-5 pt-5 font-visitdkMedium text-xs xl:hidden bg-white z-10">
      <ul className="flex justify-between w-full">
        <li className="text-primaryGray-900">
          <NavLink to="/" end className='flex flex-col items-center gap-1'>
            <HomeIcon className="h-7 w-7"/>
            <p>Hjem</p>
          </NavLink>
        </li>

        <li className="text-primaryGray-900">
          <NavLink to="/search" className='flex flex-col items-center gap-1'>
            <MagnifyingGlassIcon className="h-7 w-7"/>
            <p>Udforsk</p>
          </NavLink>
        </li>

        <li className="text-primaryGray-900">
          <NavLink to="/trips" className='flex flex-col items-center gap-1'>
            <BriefcaseIcon className="h-7 w-7"/>
            <p>Mine ture</p>
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
}