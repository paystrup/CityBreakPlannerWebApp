import React from 'react'
import Citycard from '../components/CityCards'
import LandingHeader from '../components/LandingHeader'
import LandingSwiper from '../components/LandingSwiper'

export default function LandingPage() {
    // for language implementation
    // will be added later

    // const [renderLanguage, setRenderLanguage] = useState(JSON.parse(localStorage.getItem('app_language')));

    // useEffect(() => {
    //     window.addEventListener('storage', (e) => {
    //       const renderLanguage = JSON.parse(localStorage.getItem('app_language'))
    //       console.log(renderLanguage);
    //       setRenderLanguage(renderLanguage);
    //     })
    // }, []);


  return (
    <section className='bg-white pb-20'>
        <LandingHeader />
        <section className='py-8'>
            <Citycard />
        </section>
        <section className='py-8'>
            <h2 className='text-2xl font-visitdkExtraBold px-6 pb-6'>
                Gå på opdagelse i Danmarks perler
            </h2>
            <LandingSwiper/>
        </section>
    </section>
  )
}
