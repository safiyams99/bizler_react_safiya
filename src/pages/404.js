import React from 'react'
import oops from "../img/oops.png"
import error from "../img/error_404.png"
import {Link} from "react-router-dom"
function NotFound() {
    return (
        <section id="page-not-found" className="gray-bg">
  <div className="container">
    <div className="row">
        <div className="col-lg-5 col-md-4 col-sm-12 col-xs-12 text-center img_sec">
            <img src={error} alt="Errow 404" />
        </div>
        <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12 text-center content_sec">
            <div className="errow-heading">
                <img src={oops} alt="oops" />
            </div>
            <div className="error-content">
              <h4>Page Not Found!</h4>
              <div className="separator">
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <p>This is not the page your are looking for. Reach out with your feelings and try refining your search or return to base.</p>
              <Link to="/" title="Homepage">Back to Home</Link>
            </div>
        </div>
    </div>
  </div>
</section>
    )
}

export default NotFound
