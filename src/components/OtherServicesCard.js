import React from 'react'
import { Link } from 'react-router-dom'

function OtherServicesCard({icon,title,content}) {
    return (
        <div className="item service-card">
            <div className="service_icon"><i className={`flat flaticon-${icon}`}></i></div>
            <div className="service_detail">
              <h5> <Link to={`/${title}`} title={title}>{title}</Link></h5>
              <p>{content}</p>
            </div>
            </div>
    )
}

export default OtherServicesCard
