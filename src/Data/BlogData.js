import React from 'react'
import img1 from "../img/blog-post-1.jpg"
import img2 from "../img/blog-post-2.jpg"
import img3 from "../img/blog-post-3.jpg"
import img4 from "../img/blog-post-4.jpg"
import img5 from "../img/blog-post-5.jpg"
import img6 from "../img/blog-post-6.jpg"

import CommentImg1 from "../img/visitor_pic.jpg"
import CommentImg2 from '../img/visitor_pic_2.jpg'
import AuthorImg from '../img/author_dp.jpg';
const BlogPostData =[
    {
        id:1,
        img:img1,
        title: "Lorem Ipsum has been the industry's standard",
        category:"UI Developer",
        cmnts:20,
        date:new Date().toDateString(),
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        tags:["BOOTSTRAP","HTML","CSS","JQUERY","WEB DEVELOPMENT","CREATIVE"],
        author:{
            name:"Rebecca Stormville",
            img:AuthorImg,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
            
        },
        commentData:[
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago",
                msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago",
                msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago",
                msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago",
                msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        ]
        
    },

    {
        id:2,
        img:img2,
        title:"If you are going to use a passage of Lorem Ipsum",
        category:"Hosting & Servers",
        cmnts:10,
        date:new Date().toDateString(),
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        tags:["BOOTSTRAP","HTML","CSS","JQUERY","WEB DEVELOPMENT","CREATIVE"],
        author:{
            name:"Rebecca Stormville",
            img:AuthorImg,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        commentData:[
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago",
                msg:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            },
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            }
        ]
        
    },

    {
        id:3,
        img:img3,
        title:"There are many variations of passages",
        category:"UI Developer",
        cmnts:24,
        date:new Date().toDateString(),
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        tags:["BOOTSTRAP","HTML","CSS","JQUERY","WEB DEVELOPMENT","CREATIVE"],
        author:{
            name:"Rebecca Stormville",
            img:AuthorImg,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        commentData:[
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            },
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            }
        ]
        
    },

    {
        id:4,
        img:img4,
        title:"Lorem Ipsum has been the industry's standard",
        category:"Servers",
        cmnts:17,
        date:new Date().toDateString(),
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        tags:["BOOTSTRAP","HTML","CSS","JQUERY","WEB DEVELOPMENT","CREATIVE"],
        author:{
            name:"Rebecca Stormville",
            img:AuthorImg,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        commentData:[
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            },
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            }
        ]
        
    },

    {
        id:5,
        img:img5,
        title:"If you are going to use a passage of Lorem Ipsum",
        category:"Designing ",
        cmnts:20,
        date:new Date().toDateString(),
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        tags:["BOOTSTRAP","HTML","CSS","JQUERY","WEB DEVELOPMENT","CREATIVE"],
        author:{
            name:"Rebecca Stormville",
            img:AuthorImg,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        commentData:[
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            },
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            }
        ]
        
    },

    {
        id:6,
        img:img6,
        title:"If you are going to use a passage of Lorem Ipsum",
        category:"Illustration",
        cmnts:20,
        date:new Date().toDateString(),
        content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
        tags:["BOOTSTRAP","HTML","CSS","JQUERY","WEB DEVELOPMENT","CREATIVE"],
        author:{
            name:"Rebecca Stormville",
            img:AuthorImg,
            description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        },
        commentData:[
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            },
            {
                src: CommentImg1,
                name: "Jonathon Joe",
                date: "3 days ago"
            },
            {
                src: CommentImg2,
                name: "Alec Thompson",
                date: "3 days ago"
            }
        ]
    }

]
export  default BlogPostData