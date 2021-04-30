import React from 'react';

export default function PortfolioBanner({data}) {
    const  {img,client,location,date,category,heading,content} = data;
    return (
        <>
            <section id="portfolio_detail">
                <div className="container">
                    <h3 className="d-none">heading</h3>

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                        <div className="project_screen">
                            <img src={img} alt="Project" />
                        </div>
                        
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 about_project">
                            <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="icon">
                                    <i className="flat flaticon-avatar"></i>
                                </div>
                                <div className="content">
                                    <h6>Client</h6> 
                                <div className="value">{client}</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="icon">
                                    <i className="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i>
                                </div>
                                <div className="content">
                                    <h6>Location</h6> 
                                <div className="value">{location}</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="icon">
                                    <i className="flat flaticon-calendar"></i>
                                </div>
                                <div className="content">
                                    <h6>Date</h6> 
                                <div className="value">{date}</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                <div className="icon">
                                    <i className="flat flaticon-folder"></i>
                                </div>
                                <div className="content">
                                    <h6>Category</h6> 
                                <div className="value">{category}</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 project_description">
                            <h4>{heading}</h4>
                            <p>{content.para1}</p>
                            <p>{content.para2}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}