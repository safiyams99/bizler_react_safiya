import React from 'react'
import AboutQualityCard from '../components/AboutQualityCard'
import { AboutQualitiesData} from '../Data/Home_Data'

function AboutQualities() {
    const description = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    return (
        <>
        <section id="qualities" className="index-3">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="content">
                {AboutQualitiesData.map((data) => {
                    const {icon, heading} = data
                    return(
                        <AboutQualityCard key={icon} icon={icon} heading={heading} description={description}/>
                    )
                })}
              </div>
            </div>
          </div>
        </section>
        </>

    )
}

export default AboutQualities
