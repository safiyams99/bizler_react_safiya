import React from 'react'
import ProjectCard from '../components/ProjectCard'
import img1 from '../img/portfolio/thumbnail/project_1.jpg';
import img2 from '../img/portfolio/thumbnail/project_2.jpg';
import img3 from '../img/portfolio/thumbnail/project_3.jpg';

import SectionHeader from '../components/SectionHeader'

const data = [
    {
        img: img1,
        title: "Photography",
    },
    {
        img: img2,
        title: "Ecommerce",
    },
    {
        img: img3,
        title: "Education",
    },

]
export default function RecentProjects() {
    return (
        <>
            <section id="portfolio" className="gray-bg">
                <div className="container">
                <SectionHeader
                        title1="Recent "
                        title2="Projects"
                        headingcontent=""
                    />
                    <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
                        <div className="row">

                        {data.map((data,key) => {
                            const { img, title } = data
                            return (
                                <ProjectCard key={key} img={img} title={title} />
                            )
                        })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}