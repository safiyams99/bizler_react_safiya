import React from "react"

const AboutQualityCard = ({icon, heading, description}) => {
    return (
        <>
        <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 column">
          <div className="icon"><i className={icon}></i></div>
          <div className="heading">
          <h5>{heading}</h5>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
        </>
    )
}

export default AboutQualityCard;