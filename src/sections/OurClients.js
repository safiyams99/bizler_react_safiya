import React from "react";
import OwlCarousel from "react-owl-carousel"
import {ClientData} from "../Data/Home_Data";
import SectionHeader from "../components/SectionHeader";



const OurClient=()=>{
    return(
<section id="client" className="index-2">
    <div className="container">
        <SectionHeader title1="Our Clients"/>
        <div className="col-lg-12">
            <OwlCarousel className="" items={4}>
            
              {ClientData.map((data)=>{
                return <div className="item" key={data.pic}><img src={data.pic}  alt="Client"/></div>
                })}
            </OwlCarousel>
            <div className="left-tri"> </div>
            <div className="right-tri"> </div>
        </div>
    </div>
    <div className="clearfix"> </div>
    <div className="overlay"> </div>
</section>
    );
}

export default OurClient
// import React from "react";

// import {ClientData} from "../Data/Home_Data";
// import SectionHeader from "../components/SectionHeader";



// const OurClient=()=>{
//     return(
// <section id="client" className="index-2">
//     <div className="container">
//         <SectionHeader title1="Our Clients"/>
//         <div className="col-lg-12">
//             <div className="team-slider owl-six owl-carousel owl-theme">
            
//               {ClientData.map((data)=>{
//                 return(
//                 <div className="item" key={data.pic}><img src={data.pic}  alt="Client"/></div>
//               )})}
              
//             </div>
//             <div className="left-tri"> </div>
//             <div className="right-tri"> </div>
//         </div>
//     </div>
//     <div className="clearfix"> </div>
//     <div className="overlay"> </div>
// </section>
//     );
// }

// export default OurClient