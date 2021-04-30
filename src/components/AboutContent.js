import React from 'react'
import { Link } from 'react-router-dom'
import imgabout from '../img/about_us_2.jpg'

function AboutContent() {
    return (
        <>
        <section id="about-us" className="index-3">
          <div className="container">
            <h2 className="d-none">Heading</h2>
            <div className="col-lg-12 col-md-12 col-xs-12">
            <div className="row row-safari">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area"> <img className="img_sec" src={imgabout} alt="About" /> </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">
                <div className="about-heading">Providing best business solution for growing your business</div>
                <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Link className="defualt-button view_more" to="/mainAbout">View More</Link> </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default AboutContent
