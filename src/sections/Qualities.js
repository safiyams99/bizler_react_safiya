import React from 'react'
import QualityCard from "../components/QualityCard"

function Qualities() {
    const desc = [
        {
            icon:"reward",
            heading:"We are Professional",
            desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "
        },
        {
            icon:"certificate",
            heading:"Licensed and Certified",
            desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "
        },
        {
            icon:"enterprise",
            heading:"No 1 Company",
            desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "
        },
        {
            icon:"working-team",
            heading:"Leading Provider",
            desc:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s "
        },
    ]
    return (
        // <!-- ====== Qualities Start ====== -->
        <section id="qualities" className="index-3">
        <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="content">
            {desc.map((data) => {
                const {icon,heading,desc} = data
                return(
                    <QualityCard key={icon} icon={icon} heading={heading} description={desc} />
                )
            })}
        
        </div>
        </div>
        </div>
    
    </section>
        // <!-- ====== Qualities End ====== --> 
    )
}

export default Qualities
