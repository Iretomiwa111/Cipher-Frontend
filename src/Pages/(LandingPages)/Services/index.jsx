import React from 'react'
import ServiceSectionPage from './Sections/FirstSection/Herosection'
import ContactSection from '../Sections/Landing/LastSection'
import MiddleSection from './Sections/MiddleSection'


const Services = () => {
  return (
    <div>
      <ServiceSectionPage/>
      <MiddleSection/>
      <ContactSection/>
    </div>
  )
}

export default Services