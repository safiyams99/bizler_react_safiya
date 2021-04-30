import React from 'react';
import { Link } from "react-router-dom"

export default function ProjectCard(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 port-item design development">
                <div className="project portfolio-inner">
                    <img src={props.img} alt="project" />
                    <div className="label">
                        <div className="label-text"> <Link to={`/${props.title}`} className="text-title">{props.title}</Link> </div>
                        <div className="label-bg"></div>
                    </div>
                    <div className="zoom"> <a href={props.img} className="popup-box" data-lightbox="image" data-title="Project"> <i className="flat flaticon-magnifying-glass"></i> </a> </div>
                </div>
            </div>
        </>
    );
}