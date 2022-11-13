import React, { useState, useEffect } from 'react'
import logo from '../assets/svg/logoBigBlue.svg'
import dkFlag from '../assets/svg/flags/dk.svg'
import engFlag from '../assets/svg/flags/eng.svg'
import gerFlag from '../assets/svg/flags/ger.svg'
import { XMarkIcon } from "@heroicons/react/24/outline"
import { Link } from "react-router-dom";

export default function NavTopBar() {
    const [show, setShow] = useState(false);
    const [language, setLanguage] = useState("dk");

    const handleOnClick = () => setShow(!show);
    const handleLanguageDK = () => {
        setShow(!show);
        setLanguage("dk");
        console.log(language);
    }

    const handleLanguageENG = () => {
        setShow(!show);
        setLanguage("en");
        console.log(language);
    }

    const handleLanguageGER = () => {
        setShow(!show);
        setLanguage("ger");
        console.log(language);
    }

    // set language in localstorage
    useEffect(() => {
        window.localStorage.setItem('app_language', JSON.stringify(language));        
    }, [language]);

    return (
        <nav className='px-6 py-5 flex justify-between items-center'>
            <Link to="/">
                <img src={logo} alt="Visit Denmark Logo" className='w-2/4'></img>
            </Link>
            
            {language === "dk" && 
                <button className='w-7 h-7 rounded-full' 
                style={{ 
                    backgroundImage: `url(${dkFlag})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                onClick={handleOnClick}
                >
                </button>
            }

            {language === "en" && 
                <button className='w-7 h-7 rounded-full' 
                style={{ 
                    backgroundImage: `url(${engFlag})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                onClick={handleOnClick}
                >
                </button>
            }

            {language === "ger" && 
                <button className='w-7 h-7 rounded-full' 
                style={{ 
                    backgroundImage: `url(${gerFlag})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                onClick={handleOnClick}
                >
                </button>
            }

            <div className={show ? 'languageShow' : 'languageHidden'}>
                <div className='flex content-center flex-col h-full py-20'>
                    <div onClick={handleOnClick} className='flex justify-center pb-40'>
                        <XMarkIcon className='h-8 w-8 text-primaryGray-900'/>
                    </div>
                    <p className='font-visitdkSemiBold text-2xl'>Choose your language</p>
                    <div className='flex justify-center gap-10 pt-6'>
                        <button className='w-10 h-10 rounded-full' 
                            style={{ 
                                backgroundImage: `url(${dkFlag})`,
                                backgroundPosition: "top",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            onClick={handleLanguageDK}
                        >
                        </button>
                        <button className='w-10 h-10 rounded-full' 
                            style={{ 
                                backgroundImage: `url(${engFlag})`,
                                backgroundPosition: "top",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            onClick={handleLanguageENG}
                        >
                        </button>
                        <button className='w-10 h-10 rounded-full' 
                            style={{ 
                                backgroundImage: `url(${gerFlag})`,
                                backgroundPosition: "top",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                            onClick={handleLanguageGER}
                        >
                        </button>
                    </div>
                </div>
                
            </div>
        </nav>
  )
}
