import React,{useEffect} from "react";
import SectionHeader from "../components/SectionHeader";
import MainPortfolio from "./MainPortfolio";


const PortfolioSection = () => {
  

  return (
    <section id="portfolio" className="index-3">
    <div className="container">
      <SectionHeader title1="Portfolio" headingcontent="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
      <MainPortfolio />
    </div>
    <div className="overlay"></div>
  </section>
  );
};

export default PortfolioSection;
