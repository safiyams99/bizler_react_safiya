import React from 'react'
import SCounter from "../components/SCounter"
import $ from 'jquery'
// import "../js/jquery.counterup.min"
// import "../js/waypoints.min.js"
// import "../js/custom.js"
function ServicesCounter({data}) {

    return (
        <section id="services-counter" className="text-center">
  <div className="container">
    <h3 className="d-none">heading</h3>
    <div className="col-lg-12">
      <div className="row">
        {data.map((data)=> {
            const {counter, title} = data
            return(
                <SCounter key={counter} counter={counter} title={title}/>
            )
        })}
        
      </div>
    </div>
  </div>
  <div className="overlay"></div>
</section>
    )
}

export default ServicesCounter
