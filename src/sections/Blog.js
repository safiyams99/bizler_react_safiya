import React from 'react'
import Post from "../components/Post"
import BlogPostData from '../Data/BlogData';
import blog1 from "../img/blog-post-1.jpg";
import blog2 from "../img/blog-post-2.jpg";
import blog3 from "../img/blog-post-3.jpg";

function Blog() {
    // const data = [
    //     {
    //         date: 4,
    //         month:"sept",
    //         img:blog1,
    //         detail:"Standard is simply dummy text of the printing and typesetting.",
    //         designation:"UI Developer",
    //         comments:20
    //     },
    //     {
    //         date: 5,
    //         month:"sept",
    //         img:blog2,
    //         detail:"Standard is simply dummy text of the printing and typesetting.",
    //         designation:"UI Developer",
    //         comments:20
    //     },
    //     {
    //         date: 6,
    //         month:"sept",
    //         img:blog3,
    //         detail:"Standard is simply dummy text of the printing and typesetting.",
    //         designation:"UI Developer",
    //         comments:15
    //     },
    //     {
    //         date: 7,
    //         month:"sept",
    //         img:blog1,
    //         detail:"Standard is simply dummy text of the printing and typesetting.",
    //         designation:"UI Developer",
    //         comments:9
    //     },
    //     {
    //       date: 8,
    //       month:"sept",
    //       img:blog2,
    //       detail:"Standard is simply dummy text of the printing and typesetting.",
    //       designation:"UI Developer",
    //       comments:10
    //   },
    //]
    return (
        <section id="blog_post" className="index-3">
    <div className="container">
      <div className="section_heading">
        <h2>Blog <span>Posts</span></h2>
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
        <div className="blog-slider owl-five owl-carousel owl-theme">
          {BlogPostData.map((data)=>{
            const {id,date,img,title,category,cmnts} = data
            return(
              <Post key={id} id={id} date={date} img={img} title={title} category={category} cmnts={cmnts}/>
            )
          })}
          
        </div>
      </div>
    </div>
    <div className="clearfix"></div>
  </section>
    )
}

export default Blog
