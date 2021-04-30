import React,{useEffect} from 'react';
import {HCDAta} from "../Data/Home_Data"
import Slider from "../sections/Slider"
import OurTeam from "../sections/OurTeam";
import AboutUs from "../sections/AboutUs";
import Qualities from "../sections/Qualities"
import Blog from "../sections/Blog"
import Portfolio from "../sections/Portfolio"
import Services from "../sections/Services"
import Counter from "../sections/Counter"
import Testimonial from "../sections/Testimonial"
import OurClient from '../sections/OurClients';
import Quickconnect from '../sections/QuickConnect';

const Home = () => {
  
  return (
<>
        <Slider />
        <Qualities />
        <AboutUs />
        <Services />
        <OurTeam />
        <Portfolio />
        <Counter data={HCDAta}/>
        <Blog />
        <OurClient/>
        <Testimonial />
        <Quickconnect />
        
</>
        );
}

export default Home;
