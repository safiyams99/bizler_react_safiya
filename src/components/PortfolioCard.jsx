import React from "react";
import {Link} from "react-router-dom"
const PortfolioCard = ({ content ,img_thumbnail, img_large, cls}) => {
  return (
    <div className={`col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item ${cls}`}>
    <div className="project portfolio-inner">
        <img src={img_thumbnail} alt="project" />
        <div className="label">
            <div className="label-text"> <Link to={`/${content}`} className="text-title">{content}</Link> </div>
            <div className="label-bg"></div>
        </div>
        <div className="zoom"> <a href={img_large} className="popup-box"  data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> </a> </div>
    </div>
</div>
    
  );
};
export default PortfolioCard;
