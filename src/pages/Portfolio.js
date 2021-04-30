import React from 'react'
import Banner from "../components/Banner"
import Counter from "../sections/Counter"
import {HCDAta} from "../Data/Home_Data"
import MainPortfolio from '../sections/MainPortfolio'
function Portfolio() {
    return (
        <>
            <Banner heading="Portfolio"/>
            <section id="portfolio" >
                <div className="container">
            <MainPortfolio />
            </div>
            </section>
            <Counter data={HCDAta} cls overlay/>

        </>
    )
}

export default Portfolio
