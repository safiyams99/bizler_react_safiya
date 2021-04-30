import React from "react";
import ServiceCard from "../components/ServiceCard";
import ServiceSectionCard from "../components/ServiceSectionCard";
import {Services_Data} from"../Data/Home_Data";

const ServicesSection = () => {
    return (

        <section id="services" className="index-3 inner pdb-70">
            <div className="container">
                <div className="col-lg-12 col-md-12 col-xs-12">
                    <div className="row blog-isotope">
                        {Services_Data.map((data)=>{
                            const {title,icon,content} = data
                            return(
                                <ServiceSectionCard key={icon} title={title} icon={icon} content={content}/>
                            )
                        })}
                        {Services_Data.map((data,key)=>{
                            const {title,icon,content} = data
                            return(
                                <ServiceSectionCard key={key} title={title} icon={icon} content={content}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection
