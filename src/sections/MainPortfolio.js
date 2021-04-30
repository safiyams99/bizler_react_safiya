import React from 'react'
import { Portfolio_data } from "../Data/Home_Data";
import PortfolioCard from "../components/PortfolioCard";
import { data } from "isotope-layout";
import Isotope from "isotope-layout"
import $ from "jquery"

function MainPortfolio() {
    const handleClick= (newFilter) => {
        //this.iso = new Isotope()
        // $('.portfolio-sort ul li').on("Click", function () {
                //             console.log("I am filter 2")
    
                // $('.portfolio-sort ul li ').removeClass('active');
                // $(this).addClass('active');
                // if (this.iso === undefined) {
        //         this.iso = new Isotope('.portfolio-gallary', {
        //           itemSelector: '.port-item',
        //           percentPosition: true,
        //           masonry: {
        //             columnWidth: '.port-item'
        //           }
        //   });
        //}
        // $('.portfolio-sort ul li ').Isotope({
        //     itemSelector: '.port-item',
        //     percentPosition: true,
        //     masonry: {
        //         columnWidth: '.port-item'
        //       }
        // })
        // if(newFilter === '*') {
        //   this.iso.arrange({ filter: `*` });
        // } else {
        //   this.iso.arrange({ filter: `.${newFilter}` });
        // }
    
        //         return false;
        //     }
            //);
     }
    return (
        <div className="col-lg-12 col-md-12 col-xs-12 content_sec ">
        <div className="portfolio-sort">
          <ul className="sorting clearfix center-grid">
            <li className="sort-btn active" data-filter="*" onClick={()=>handleClick("*")}>All</li>
            <li className="sort-btn" data-filter=".design" onClick={()=>handleClick("design")}>Web Design</li>
            <li className="sort-btn" data-filter=".development" onClick={()=>handleClick("development")}>Web Development</li>
            <li className="sort-btn" data-filter=".logo" onClick={()=>handleClick("logo")}>Logo Design</li>
            <li className="sort-btn" data-filter=".app" onClick={()=>handleClick("app")}>App Design</li>
          </ul>
        </div>
     <div className="row portfolio-gallary">
                     {Portfolio_data.map((data)=>{
                         const {content, img_thumbnail,img_large, cls} = data
                         console.log(cls)
                         return(
                             <PortfolioCard key={content} content={content} img_thumbnail={img_thumbnail} img_large={img_large} cls={cls} />
                         )
                     })}
                </div>
                
      </div>
    )
}

export default MainPortfolio
