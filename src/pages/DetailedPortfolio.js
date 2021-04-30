import React from 'react'
import Counter from "../sections/Counter";
import Banner from "../components/Banner"
import RecentProjects from "../sections/RecentProjects";
import PortfolioBanner from "../sections/PortfolioBanner";
import { HCDAta } from '../Data/Home_Data';

export default function DetailedPortfolio({data}) {
  console.log(data)
  return (
    <>
         <Banner heading="Portfolio" l1="portfolio"/>
        <PortfolioBanner data={data}/>
        <RecentProjects />
        <Counter data={HCDAta} cls overlay/>
    </>
  );
}