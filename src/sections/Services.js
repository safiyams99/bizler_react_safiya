import React from "react"
import ServiceCard from "../components/ServiceCard"
const Services  = () => {
const data = [
    {
        icon:"web-design",
        title:"Web Development",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"computer-graphic",
        title:"Web Design",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"servers",
        title:"Web Hosting",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"digital-marketing",
        title:"Digital Marketing",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"web-design",
        title:"Web Development",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"web-design",
        title:"Web Development",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"computer-graphic",
        title:"Web Design",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"servers",
        title:"Web Hosting",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
    {
        icon:"digital-marketing",
        title:"Digital Marketing",
        content:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."
    },
]
    return(
       <section id="services" className="gray-bg index-3">
    <div className="container">
      <div className="section_heading">
        <h2>Services</h2>
        <div className="separator">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
    <div className="heading_content"> Lorem Ipsum has been the {`industry's`} standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>
      </div>
      <div className="col-lg-12 col-md-12 col-xs-12 content_sec">
         <div className="service-slider owl-one owl-carousel owl-theme">
             {data.map((data,index)=>{
                 const {icon, title, content} = data
                 return(
                     <ServiceCard key={index} icon={icon} title={title} content={content}/>
                 )
             })}
          
        </div>
        <div className="h-border"><span></span></div>
      </div>
    </div>
    <div className="overlay"></div>
  </section>
    )
}
export default Services