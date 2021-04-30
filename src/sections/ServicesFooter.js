import React from 'react'
import logo from "../img/logo-3.png"
import {Link} from "react-router-dom"
function ServicesFooter() {
    return (
        <div>
            <footer>
  <div className="container">
    <div className="col-lg-12">
      <div className="row">
        <div className="col-lg-4 col-md-12 col-sm-12 column">
          <div className="footer_about_content">
            <div className="footer_logo"><Link to="index.html" title="Bizler"><img src={logo} alt="Bizler" /></Link> </div>
            <p>Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <p>It has survived not only five centuries, but also the leap into electronic typesetting.</p>
            <Link className="view_more" to="/">View More</Link> </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-3 col-xs-12 column">
          <h5>Navigation</h5>
          <div className="navigations">
            <ul>
              <li><Link to="/" title="Home"> Home</Link></li>
              <li><Link to="/about" title="About Us"> About Us</Link></li>
              <li><Link to="/services" title="Services"> Services</Link></li>
              <li><Link to="/blog" title="Blog"> Blog</Link></li>
              <li><Link to="/portfolio" title="Pages"> Portfolio</Link></li>
              <li><Link to="/contactUs" title="Contact Us"> Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-4 col-sm-4 col-xs-12 column">
          <h5>Useful Links</h5>
          <div className="navigations">
            <ul>
              <li><Link to="/" title="Help Center">Help Center</Link></li>
              <li><Link to="/" title="Community"> Community</Link></li>
              <li><Link to="/" title="Sitemap"> Sitemap</Link></li>
              <li><Link to="/" title="Career"> Career</Link></li>
              <li><Link to="/" title="Privacy Policy"> Privacy Policy</Link></li>
              <li><Link to="/faqs" title="FAQ's"> {`FAQ's`}</Link></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 col-sm-5 col-xs-12 column">
          <h5>Contact Info</h5>
          <div className="contact_info">
            <ul>
              <li> <i className="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i>123, Street Name, City Name, State Name, Country Name, Pin Code : 123456 </li>
              <li> <i className="flat flaticon-phone-receiver"></i>0123-456-789, 0123-456-789 </li>
              <li> <i className="flat flaticon-mail-black-envelope-symbol"></i>info@bizler.com </li>
            </ul>
            <div className="follow_us_on"> <Link to="/"><i className="flat flaticon-facebook-logo"></i></Link> <Link to="/"><i className="flat flaticon-twitter"></i></Link> <Link to="/"><i className="flat flaticon-google-plus-logo"></i></Link> <Link to="/"><i className="flat flaticon-linkedin-logo"></i></Link> <Link to="/"><i className="flat flaticon-instagram"></i></Link> </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-12">
      <div className="newsletter">
        <div className="row">
          <div className="col-md-3">
            <h4>Our Newsletter</h4>
          </div>
          <div className="col-md-9">
            <form action="/">
              <div className="row">
                <div className="col-md-4">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-md-4">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="col-md-4">
                  <button type="Submit" style={{backgroundColor:"#2285d9"}}>Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
     <div className="copyright col-lg-12">
<div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"> Copyright &copy; 2018
            <span className="separator-pipesign"></span>
            All Rights Reserved
            <span className="separator-pipesign"></span>
            </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right"> <Link to="/">Privacy Policy</Link>
            <span className="separator-pipesign"></span>
            <Link to="/">Terms &amp; Conditions</Link>
            <span className="separator-pipesign"></span>
            <Link to="/faqs">{`FAQ's`}</Link> </div>
        </div>
    </div>
  </div>
</footer>
        </div>
    )
}

export default ServicesFooter
