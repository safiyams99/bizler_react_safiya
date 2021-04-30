import React from "react";
import { Link } from "react-router-dom";
const ServiceSectionCard = ({title,icon,content}) => {
return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 blog-iso-item">
        <div className="item card_mr_top">
            <div className="service-card">
                <div className="service_icon">
                    <i className={`falt flaticon-${icon}`}> </i>
                </div>
                <div className="service_detail">
                    <h5>
                        <Link to={`/${title}`} title={title}>{title} </Link>
                    </h5>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    </div>
)
}
export default ServiceSectionCard