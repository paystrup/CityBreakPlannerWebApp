import React from 'react'
import CityCards from '../components/CityCards'
import LandingHeader from '../components/LandingHeader'
import LandingSwiper from '../components/LandingSwiper'
import LandingTitleAndCard from '../components/LandingTitleAndCard'
import WhereWhen from '../components/LandingSmallCarousel'
import LandingGuide from '../components/LandingGuide'

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
        <CityCards />

        <section className='py-8'>
            <h2 className='text-2xl font-visitdkBold px-6 pb-4'>
                Gå på opdagelse i Danmarks perler
            </h2>
            <LandingSwiper/>
        </section>

        <LandingTitleAndCard />

        <section className='py-8'>
            <h2 className='text-2xl font-visitdkBold px-6 pb-4'>
                Hvor, hvad og hvordan?
            </h2>
            <WhereWhen />
        </section>

        <LandingGuide />
    </section>
  )
}
