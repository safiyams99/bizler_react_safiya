import React from 'react'
import BannerLeft from '../components/BannerLeft'
import Pricing from "../sections/Pricing"
import ServiesSection from "../sections/ServicesSection"
function Services() {
    return (
        <div>
            <BannerLeft heading="Services"/>
            <ServiesSection/>
            <Pricing />
        </div>
    )
}

export default Services
