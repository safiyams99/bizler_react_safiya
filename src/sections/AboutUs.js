import React from "react";
import SectionHeader from "../components/SectionHeader";
import { Heading_data } from "../Data/Home_Data";

import img1 from '../img/about_us_2.jpg'


const AboutUs = () => {
    return (
        <>
            <section id="our_team" className="index-3">
                <div className="container">
                    <SectionHeader
                        title1="About"
                        title2="Us"
                        headingcontent={Heading_data[0].headingcontent}
                    />
                    <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
                        <div className="row row-safari">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area"> <img className="img_sec" src={img1} alt="About" /> </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">
                                <h5>Providing best business solution for growing your business</h5>
                                <p>Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                                <p>Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                                <a className="defualt-button view_more" href="about-us.html">View More</a> </div>
                        </div>
                        
                    </div>
                </div>
                <div className="clearfix"></div>
            </section>
        </>
    );
};
export default AboutUs;
