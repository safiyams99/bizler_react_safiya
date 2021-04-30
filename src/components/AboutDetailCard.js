import React from 'react'

function AboutDetailCard({src, alt, title1, title2, description}) {
    return (
        <>
        <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
          <div className="img-area">
            <img src={src} alt={alt} /> 
          </div>
          <div className="section_heading">
            <h4>{title1}<span>{title2}</span></h4>
             <div className="separator left-align ">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
        </>
    )
}

export default AboutDetailCard
