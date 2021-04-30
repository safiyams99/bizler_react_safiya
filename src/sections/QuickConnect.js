import React from 'react'
import Qcard from '../components/QuickConnect'

export default function Quickconnect(){
    return(
        <>
        <section id="quick-connect" className="index-3">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row">

                <div className="col-lg-6 col-md-6 col-sm-12">  
                  <div className="newsletter">        
                    <Qcard 
                           Sheading = 'Subscribe Our Newsletter' 
                           hcontent='Provide your email address and stay informed with our latest resources' 
                    />
                    <form>
                      <input type="text" placeholder="Enter your Email Id"/>
                      <button type="submit">Subscribe</button>
                     </form>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12"> 
                  <div className ='quick-info'>
                    <Qcard Sheading='For Quick Info'/>
                    <div className="content">
                      <div className="sub-heading">Call Us On</div>
                      <div className="contact-no">0123-456-789</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
        </>
    )
}