import React from 'react'
import Banner from '../components/Banner'
import AboutContent from "../components/AboutContent"
import AboutDetail from "../sections/AboutDetail"
import AboutQualities from "../sections/AboutQualities"
import OurTeam from "../sections/OurTeam"
import Counter from "../components/Counter"

function ViewAbout() {
    return (
        <>
        <Banner heading="About Us"/>
        <AboutContent />
        <AboutQualities />
        <section id="about-us-inner">
  <div className="container">
    <h2 className="d-none">Heading</h2>
    <div className="col-lg-12 col-md-12 col-xs-12">
      <div className="row">
        <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 img-area"> <img className="img-area" src="img/about-inner.jpg" alt="About" /> </div>
        <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 content-area">
          <div className="about-heading">Providing best business solution for growing your business</div>
          <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
        </div>
      </div>
    </div>
  </div>
</section>
       
        {/* <!-- ====== About Details Start ====== --> */}
<section id="about-detail">
  <div className="container">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mid-content">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area"> <img src="img/why-choose-us.jpg" alt="Why Choose Us" /> </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">
          <div className="section_heading">
            <div className="number">01</div>
            <h4>Why <span>Choose Us?</span></h4>
             <div className="separator left-align ">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
          </div>
          <div className="description">
            <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mid-content">
      <div className="row row-reverse">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area"> <img src="img/our-mission.jpg" alt="Our Mission" /> </div>
         <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">
          <div className="section_heading">
            <div className="number">02</div>
            <h4>Our <span>Mission</span></h4>
             <div className="separator left-align ">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
          </div>
          <div className="description">
            <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mid-content">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area"> <img src="img/our-vision.jpg" alt="Our Mission" /> </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">
          <div className="section_heading">
            <div className="number">03</div>
            <h4>Our <span>Vision</span></h4>
             <div className="separator left-align ">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
          </div>
          <div className="description">
            <p>Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- ====== About Details End ====== -->  */}

        <OurTeam/>
        <section id="counter" className="counter-inner">
        <Counter/>
        <div className="overlay"></div>
        </section>
        </>
    )
}

export default ViewAbout
