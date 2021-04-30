import React from "react";
import OtherServicesCard from "../components/OtherServicesCard";
import SectionHeader from "../components/SectionHeader";
import { Services_Data } from "../Data/Home_Data";

const OtherServices = () => {
  return (
    <section id="services" className="gray-bg">
      <div className="container">
        <SectionHeader
          title1="Other"
          title2="  Services"
          headingcontent="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
        <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
          <div className="service-slider owl-one owl-carousel owl-theme">
            {Services_Data.map((data) => {
              const { icon, title, content } = data;
              return (
                <OtherServicesCard
                  key={icon}
                  icon={icon}
                  title={title}
                  content={content}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default OtherServices;
