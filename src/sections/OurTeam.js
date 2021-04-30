import React from "react";
import TeamMemberCard from "../components/TeamMemberCard";
import SectionHeader from "../components/SectionHeader";
import ButtonTeam from "../components/ButtonTeam";
import { Sdata, Heading_data } from "../Data/Home_Data";

const OurTeam = () => {
  return (
    <>
      <section id="our_team" className="index-3">
        <div className="container">
          <SectionHeader
            title1={Heading_data[0].title1}
            title2={Heading_data[0].title2}
            headingcontent={Heading_data[0].headingcontent}
          />
          <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
            <div className="row">
            {Sdata.map((data)=>{
                const {pic,name,position,content} = data
                return(
                    <TeamMemberCard
                        key={pic}
                        pic={pic}
                        name={name}
                        position={position}
                        content={content}
                    />
                )
            })}
              <ButtonTeam cname="view_more" link="/teamPage" />
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>
    </>
  );
};
export default OurTeam;
