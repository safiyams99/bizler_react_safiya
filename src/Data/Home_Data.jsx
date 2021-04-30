import React from "react";

import img1 from "../img/team-member-pic.jpg";
import img2 from "../img/team-member-pic2.jpg";
import img3 from "../img/team-member-pic4.jpg";
import img4 from "../img/team-member-pic3.jpg";
/////// Testimonial SECTION IMAGES ///////
import about_img from '../img/about_us_2.jpg'
import about_img1 from '../img/client_dp1.jpg'
/////// PORTFOLIO SECTION IMAGES ///////
import portfolio_a from "../img/portfolio/thumbnail/project_1.jpg";
import portfolio_b from "../img/portfolio/thumbnail/project_2.jpg";
import portfolio_c from "../img/portfolio/thumbnail/project_3.jpg";
import portfolio_d from "../img/portfolio/thumbnail/project_4.jpg";
import portfolio_e from "../img/portfolio/thumbnail/project_5.jpg";
import portfolio_f from "../img/portfolio/thumbnail/project_6.jpg";

import portfolio_A from "../img/portfolio/large/project_1.jpg";
import portfolio_B from "../img/portfolio/large/project_2.jpg";
import portfolio_C from "../img/portfolio/large/project_3.jpg";
import portfolio_D from "../img/portfolio/large/project_4.jpg";
import portfolio_E from "../img/portfolio/large/project_5.jpg";
import portfolio_F from "../img/portfolio/large/project_6.jpg";
/////// OURCLIENTS SECTION DETAILS ///////
import ourclient_a from "../img/client-1.jpg"
import ourclient_b from "../img/client-2.jpg"
import ourclient_c from "../img/client-3.jpg"
import ourclient_d from "../img/client-4.jpg"
import ourclient_e from "../img/client-5.jpg"
import ourclient_f from "../img/client-6.jpg"

// ***About Quality Detail Images ***
import qimg1 from '../img/why-choose-us.jpg'
import qimg2 from '../img/our-mission.jpg'
import qimg3 from '../img/our-vision.jpg'

const Sdata = [
  {
    pic: img1,
    name: "Alec Thompson",
    position: "Developer",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    pic: img4,
    name: "Tania Andrew",
    position: "Designer",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    pic: img3,
    name: "Christian Mike",
    position: "Developer",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    pic: img2,
    name: "Rebecca Stormville",
    position: "Designer",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];

const Heading_data = [
  {
    title1: "Our ",
    title2: "Team",
    headingcontent:`Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  },
  {
    title1: "Portfolio ",
    headingcontent:
      `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
  }
];

// ABout Deatil Data
const Aboutdetail_data = [
  {
     src: qimg1,
     alt: "Why Choose Us",
     title1: "Why ",
     title2: "Choose Us?" 
  },
  {
     src: qimg2,
     alt: "Our Mission",
     title1: "Our ",
     title2: "Mission" 
  },

  {
      src: qimg3,
      alt: "Our Vision",
      title1: "Our ",
      title2: "Vision" 
   },
]
const AboutQualitiesData = [
  {
      icon: "flat flaticon-reward",
      heading: "We are Professional",
  },
  {
      icon: "flat flaticon-certificate",
      heading: "Licensed and Certified",
  },
  {
      icon: "flat flaticon-enterprise",
      heading: "Number 1 Company",
  },
  {
      icon: "flat flaticon-working-team",
      heading: "Leading Provider",
  }
]
/////// PORTFOLIO SECTION DETAILS///////
const Portfolio_data = [
  {
    content: "Photography",
    img_thumbnail: portfolio_a,
    img_large: portfolio_A,
    cls:"design development"
  },
  {
    content: "Ecommerce",
    img_thumbnail: portfolio_b,
    img_large: portfolio_B,
    cls:"app logo"
  },
  {
    content: "Education",
    img_thumbnail: portfolio_c,
    img_large: portfolio_C,
    cls:"development logo"
  },
  {
    content: "Real Estate",
    img_thumbnail: portfolio_d,
    img_large: portfolio_D,
    cls:"design development logo"
  },
  {
    content: "Bar & Restaurant",
    img_thumbnail: portfolio_e,
    img_large: portfolio_E,
    cls:"app web development"
  },
  {
    content: "Saloon & Spa",
    img_thumbnail: portfolio_f,
    img_large: portfolio_F,
    cls:"design development"
  }
];
//pricingdata
const Pdata = [
  {
      heading : "Personal",
      price : "9$"
  },
  {
      heading : "Ultimate",
      price : "199$"
  },
  {
      heading : "Business",
      price : "99$"
  }

]
//Services Data
const Services_Data = [
  {
    title: "Web Development",
    icon: "web-design",
    content:
      `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
  },
  {
    title: "Web Designing",
    icon: "computer-graphic",
    content:
      `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
  },
  {
    title: "Web Hosting",
    icon: "servers",
    content:
      `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
  },
  {
    title: "Digital Marketing",
    icon: "digital-marketing",
    content:
      `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
  },
  {
    title: "SEO / SMO",
    icon: "computer-graphic",
    content:
      `All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.`
  }
];
////// TESTIMONIAL SECTION DETAILS///////
const Testimonail_data = [
  {
      pic:about_img1,
      name: "Rebecca Stormville" ,
      position:"Designer" ,
      content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
  {
      pic:about_img1,
      name: "Rebecca Stormville" ,
      position:"Designer" ,
      content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
  {
      pic:about_img1,
      name: "Rebecca Stormville" ,
      position:"Designer" ,
      content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
  {
      pic:about_img1,
      name: "Rebecca Stormville" ,
      position:"Designer" ,
      content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
  {
      pic:about_img1,
      name: "Rebecca Stormville" ,
      position:"Designer" ,
      content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },

  {
      pic:about_img1,
      name: "Rebecca Stormville" ,
      position:"Designer" ,
      content:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. "
  },
]
/////// OurClient Section Data ///////
const ClientData = [
  {
      pic:ourclient_a
  },
  {
      pic:ourclient_b
  },
  {
      pic:ourclient_c
  },
  {
      pic:ourclient_d
  },
  {
      pic:ourclient_e
  },
  {
      pic:ourclient_f
  },
]
//Home Counter
const HCDAta = [
  {
    icon:"happiness",
    counter:200,
    title:"Happy Client"
  },
  {
    icon:"coffee-cup",
    counter:750,
    title:"Cups Of Coffee"
  },
  {
    icon:"like",
    counter:1800,
    title:"Projects Done"
  },
  {
    icon:"building",
    counter:15,
    title:"Office Location"
  },

]
const SDDATA= [
  {
    counter:"87K",
    title:"Projects Done"
  },
  {
    counter:8782,
    title:"Hours Work"
  },
  {
    counter:682,
    title:"Clients"
  },

]
export { Sdata, Heading_data,Services_Data,HCDAta,SDDATA, Testimonail_data,Portfolio_data ,ClientData, Pdata,Aboutdetail_data,AboutQualitiesData};
