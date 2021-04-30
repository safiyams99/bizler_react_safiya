import React from "react";
import TeamData from "../Data/TeamData";
import TeamMemberCard from "../components/TeamMemberCard";


const TeamDetail = () => {
    return (
        <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
            <div className="row">
                <TeamMemberCard
                    pic={Section_data[0].pic}
                    content={Section_data[0].content}
                    name={Section_data[0].name}
                    position={Section_data[0].position}
                />
                <TeamMemberCard
                    pic={Section_data[1].pic}
                    name={Section_data[1].name}
                    position={Section_data[1].position}
                    content={Section_data[1].content}
                />
                <TeamMemberCard
                    pic={Section_data[2].pic}
                    name={Section_data[2].name}
                    position={Section_data[2].position}
                    content={Section_data[2].content}
                />
                <TeamMemberCard
                    pic={Section_data[3].pic}
                    name={Section_data[3].name}
                    position={Section_data[3].position}
                    content={Section_data[3].content}
                />
            </div>
        </div>
    )
}
export default TeamDetail