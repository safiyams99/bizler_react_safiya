import React from 'react'
import {Link} from "react-router-dom"
function FooterBar() {
    return (
        <footer className="inner index-3">
  <div className="bottom">
    <div className="container">
      <div className="navigation">
        <ul>
          <li><Link to="/" title="Homepage">Home</Link></li>
          <li className="separator-pipesign white"></li>
          <li><Link to="/about" title="About Us">About Us</Link></li>
          <li className="separator-pipesign white"></li>
          <li><Link to="/services" title="Services">Services</Link></li>
          <li className="separator-pipesign white"></li>
          <li><Link to="/blog" title="Blog">Blog</Link></li>
          <li className="separator-pipesign white"></li>
          <li><Link to="/portfolio" title="Pages">Portfolio</Link></li>
          <li className="separator-pipesign white"></li>
          <li><Link to="/contactUs" title="Contact Us">Contact Us</Link></li>
        </ul>
      </div>
    </div>
    <hr />
    <div className="container">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 copyright">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12"> Copyright &copy; 2018
            <span className="separator-pipesign white"></span>
            All Rights Reserved
            <span className="separator-pipesign white"></span>
            </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-right"> <Link to="/">Privacy Policy</Link>
            <span className="separator-pipesign white"></span>
            <Link to="/">Terms &amp; Conditions</Link>
            <span className="separator-pipesign white"></span>
            <Link to="/faqs">{`FAQ's`}</Link> </div>
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default FooterBar
