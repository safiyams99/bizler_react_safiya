import React from "react"
import ServicesContent from "../sections/ServicesContent";
import ServicesCounter from "../sections/ServicesCounter";
import OtherServices from "../sections/OtherServices";
import Banner from "../components/Banner"
import {SDDATA} from "../Data/Home_Data"

export default function DetailedBusinessPartner({content}) {
  return (
    <>
      
        <Banner l1="Business Partner" l2="Business Partner Detail"/>
        <ServicesContent content={content}/>
        <ServicesCounter data={SDDATA} cls="display"/>
        <OtherServices />
        
    
    </>
  );
}
