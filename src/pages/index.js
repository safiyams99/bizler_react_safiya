import React,{useState, useEffect} from 'react'
import Routes from "../Routes"
import Navbar from "../components/Navbar";
import Topbar from "../components/Topbar";
import HomeFooter from "../sections/HomeFooter"
import FooterBar from "../components/FooterBar"
import ServicesFooter from "../sections/ServicesFooter"

function Pages() {
    const [footer , setFooter] = useState()
    const path = window.location.pathname; 
     useEffect(()=> {
        if(path=="/") {
            setFooter(HomeFooter) }
        else if((path=="/about") || (path=="/services")) {
        setFooter(FooterBar) 
          }
        else {
            setFooter(ServicesFooter)   }
       
    },[path])
    
    return (
        <>
        <div className={`${path=="/services"|| path== "/about" ?'v2-inner':'wraper'}`}>
        <Topbar />
        <Navbar />
        <Routes />
        </div>
        {footer}
        </>
    )
}

export default Pages
