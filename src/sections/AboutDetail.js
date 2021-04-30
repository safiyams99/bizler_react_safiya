import React from 'react';
import AboutDetailCard from '../components/AboutDetailCard'
import { Aboutdetail_data } from '../Data/Home_Data';

const Aboutdetail = () => {
    const description = "Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    return (
        <>
        <section id="about-detail" className="index-3">
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mid-content">
              <div className="row">
                  {Aboutdetail_data.map((data) => {
                      const {src, alt,title1, title2} = data
                      return(
                        <AboutDetailCard
                        key={alt}
                        src = {src} 
                        alt = {alt}
                        title1 = {title1}
                        title2 = {title2}
                        description = {description}
                        />
                      )
                  })}

              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Aboutdetail;