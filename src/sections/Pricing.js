import React from 'react'
import PricingCard from '../components/PricingCard'
import SectionHeader from "../components/SectionHeader"
import {Sdata, Heading_data, Pdata} from '../Data/Home_Data'

function Pricing(){
    return(
        <>
        <section id="pricing">
        <div className="container">           
                <SectionHeader title1="Our " title2="Pricing" headingcontent={Heading_data[0].headingcontent}/>
                <div className='col-lg-12 col-md-12 col-sm-6 col-xs-12 content_sec'>
                <div className='row' >
                
                            <PricingCard 
                            heading={Pdata[0].heading}
                            price={Pdata[0].price}
                            card="price_card"
                            l1="deactive"
                            l2="deactive"
                            l3="deactive"
                            
                            />

                            <PricingCard 
                            heading={Pdata[1].heading}
                            price={Pdata[1].price}
                            card = "price_card ultimate"
                           
                            />

                            <PricingCard
                            heading={Pdata[2].heading}
                            price={Pdata[2].price} 
                            card="price_card"
                            l3="deactive"
                            
                            />        

                </div>
                </div>

                            
                    <div/>


             </div>
             <div className="clearfix"></div>        
        </section>



        </>
    )
}

export default Pricing;