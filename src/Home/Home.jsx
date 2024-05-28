import React from 'react'
import BannerSection from './Sections/BannerSection/BannerSection'
import HowItWorkSection from './Sections/HowItWorkSection/HowItWorkSection'
import DesignGrid from './Sections/DesignGrid/DesignGrid'
import Feedback from './Sections/Feedback/Feedback'
import DownloadApp from './Sections/DownloadApp/DownloadApp'
import PricingSection from './Sections/PricingSection/PricingSection'
import ContactUs from './Sections/ContactUs/ContactUs'
import FaqSection from './Sections/FaqSection/FaqSection'
import TryBanigiAi from './Sections/TryBanigiAi/TryBanigiAi'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import BuildJob from './Sections/buildJob/BuildJob'

const Home = () => {
  return (
    <div>
      <Header/>
      <BannerSection/>
      {/* <HowItWorkSection/> */}
      <TryBanigiAi/>
     
      <DesignGrid/>
      <BuildJob/>
      <Feedback/>
      <DownloadApp/>
      <PricingSection/>

      <FaqSection/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
