import React from "react";
import img from "../img/service_detail.jpg";

const ServiesContent = ({content}) => {
  console.log(content)
  const {img, heading,data} = content;
  return (
    <section id="services-top">
      <div className="container">
        <h3 className="d-none">heading</h3>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 img-area">
              {" "}
              <img src={img} alt="About" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 content-area">
              <h5>
                {heading}
              </h5>
              <p>
                {data.para1}
              </p>
              <p>
               {data.para2}
              </p>
              <p>
                {data.para3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiesContent;
