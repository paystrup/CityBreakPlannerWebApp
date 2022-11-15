import React from 'react'
import { useNavigate } from "react-router-dom";

export default function BackBtn() {
    const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
        <button 
            className="bg-secondaryPink text-primaryBlue w-3/4 px-5 py-3 font-visitdkBold" 
            onClick={() => navigate(-1)}
        >
            Gå tilbage
        </button>
    </div>

  )
}
