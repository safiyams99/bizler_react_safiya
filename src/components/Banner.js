import React from 'react'
import {Link} from "react-router-dom"
function Banner({heading,l1,l2}){
    return(
        <section id="inner-banner">
  <div className="container">
    <div className="row">
      <div className="inner-heading">
        <h2>{heading}</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
             <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item"><Link to={`/${l1}`} title={l1}>{l1}</Link></li>
            <li className="breadcrumb-item active" aria-current="page">{l2}</li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
</section>
    )
}

export default Banner;