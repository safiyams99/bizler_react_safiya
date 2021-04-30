import React from 'react';
import SectionHeader from '../components/SectionHeader'
import TeamDetail from "./TeamDetail";
import {ids,TeamData} from '../Data/TeamData'
import TeamMemberCard from "../components/TeamMemberCard";


const TeamSection = () => {
    return (
        <section id="our_team" className="inner index-3">
            {ids.map((idname,index)=>{
                const {id,title} = idname;
               return (
               <div id={id} key={index} className={`${title==="Web Developers"&& "gray-bg"}`}>
                <div className="container">
                    <SectionHeader title1={title}/>
                    <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
                        <div className="row">
                            {TeamData.map((cardData,key)=>{
                                const {pic, content,name,position} = cardData
                                return(
                                    <TeamMemberCard key={key} pic={pic} content={content} name={name} position={position}/>
                                )
                            })}
                         </div>
                    </div>
                </div>
            </div>
            )
            })}
           
        </section>
    );
}
export default TeamSection;