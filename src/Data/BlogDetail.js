import img1 from '../img/recent-post-thumb-1.jpg'
import img2 from '../img/recent-post-thumb-2.jpg'
import img3 from '../img/recent-post-thumb-3.jpg'
import CommentImg1 from "../img/visitor_pic.jpg"
import CommentImg2 from '../img/visitor_pic_2.jpg'

const Posts = [
    {
        title:"",
        img:"",
        category:"",
        cmnts:"",
        content:"",
        description:"",
        tags:["BOOTSTRAP","HTML","CSS","JQUERY","WEB DEVELOPMENT","CREATIVE"],
        author:{
            name:"",
            description:""
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


export default Post
