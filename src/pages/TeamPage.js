import React from 'react';
import BannerLeft from "../components/BannerLeft";
import TeamSection from "../sections/TeamSection";

export default function TeamPage() {
    return (
        <>
            <BannerLeft heading="Our Team" l1="ourTeam"/>
            <TeamSection/>
        </>
    );
}