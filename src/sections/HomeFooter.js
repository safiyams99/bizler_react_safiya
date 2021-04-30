import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/logo-3-footer.png"
import blogThumb from "../img/recent-post-thumb-1.jpg"
function HomeFooter() {
    return (
        <footer className="home index-3">
  <div className="container">
    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <div className="row row-safari">
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 about">
          <div className="logo"><img src={logo} alt="Bizler" /></div>
          <div className="detail">
            <p>Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
          </div>
          <Link to="/about" className="view_more" title="View More">View More</Link> </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 latest-news">
          <div className="section_heading">Latest <span>News</span></div>
          <div className="post-item">
            <div className="post-img"> <img src={blogThumb} alt="post" /> </div>
            <div className="post-content">
              <p><Link to="/blog">Lorem Ipsum has been the {`industry's`} standard  dummy text ever since the 1500s.</Link></p>
              <div className="post-status"> 05/10/2018 </div>
            </div>
          </div>
          <div className="post-item">
            <div className="post-img"> <img src={blogThumb} alt="post" /> </div>
            <div className="post-content">
              <p><Link to="/blog/1">when an unknown printer took a galley of type and scrambled it to make a type.</Link></p>
              <div className="post-status"> 06/10/2018 </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
     <div className="contact_info">
          <div className="row row-safari">
		
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 column">
            <div className="icon"> <i className="flat flaticon-facebook-placeholder-for-locate-places-on-maps"></i> </div>
            <div className="detail">
              <h5>Address</h5>
              <div className="content"> Head Office :<span className="value"> 123, Street Name, City Name, State Name, Country Name, Pin Code : 123456 </span> </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 column">
            <div className="icon"> <i className="flat flaticon-phone-receiver"></i> </div>
            <div className="detail">
              <h5>Call Us On</h5>
              <div className="content"> Main Office :<span className="value"><Link to="/" title="0123-456-789"> 0123-456-789 </Link></span> <br />
                Customer Support :<span className="value"> <Link to="/" title="0123-456-789"> 0123-456-789 </Link> </span> </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 column">
            <div className="icon"> <i className="flat flaticon-mail-black-envelope-symbol"></i> </div>
            <div className="detail">
              <h5>Mail Us On</h5>
              <div className="content">Customer Support : support@bizler.com<br />Technical Support : support@bizler.com</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 column social">
            <div className="icon"> <i className="flat flaticon-share"></i> </div>
            <div className="detail">
              <h5>Follow Us On</h5>
              <div className="content"> <Link to="/" title="Facebook" ><i className="flat flaticon-facebook-logo"></i></Link> <Link to="/" title="Twitter" ><i className="flat flaticon-twitter"></i></Link> <Link to="/" title="Google" ><i className="flat flaticon-google-plus-logo"></i></Link> <Link to="/" title="Linkedin" ><i className="flat flaticon-linkedin-logo"></i></Link> <Link to="/" title="Instagram" ><i className="flat flaticon-instagram"></i></Link> </div>
            </div>
          </div>
        </div>          
          </div>
     </div>
  </div>
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
            2020</div>
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

export default HomeFooter
