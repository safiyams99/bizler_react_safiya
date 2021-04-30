import React from 'react'
import PostItem from '../PostItem'
import WidgetHeading from './WidgetHeading'
import {Link} from "react-router-dom";
import img1 from '../../img/recent-post-thumb-1.jpg'
import img2 from '../../img/recent-post-thumb-2.jpg'
import img3 from '../../img/recent-post-thumb-3.jpg'
import BlogPostData from '../../Data/BlogData';


const PostItemData = [
    {
        img:img1,
        date:new Date().toDateString,
        content: "Lorem Ipsum is simply dummy text of the printing "
    },
    {
        img:img2,
        date:new Date().toDateString,
        content: "Standard dummy text ever since the 1500s"
    },
    {
        img:img3,
        date:new Date().toDateString,
        content: "The leap into electronic typesetting"
    }
]
function Sidebar() {
    return (
        <aside className="col-lg-3 col-md-3 col-sm-12 col-xs-12 sidebar right">
            <div className="widget">
              <WidgetHeading heading="Search" />
              <div className="widget-content">
              <div className="search">
                <form action="https://wpshopmart.com/index.html">
                  <div className="form-group">
                    <input type="text" placeholder="Search..." />
                    <button type="submit"> <i className="flat flaticon-search"></i> </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
            <div className="widget">
              <WidgetHeading heading="Recent Posts"/>
              <div className="widget-content">
                {BlogPostData.map((data)=> {
                    const {id,img,date,title} = data;
                    return(
                        <PostItem key={id} img={img} title={title} date={date}/>
                    )
                })}
                
              </div>
            </div>
            <div className="widget">
            <WidgetHeading heading="Tags"/>
              <div className="widget-content">
                <div className="tags">
                  <ul>
                    <li><Link to="/blog" title="Bootstrap">Bootstrap</Link></li>
                    <li><Link to="/blog" title="HTML">HTML</Link></li>
                    <li><Link to="/blog" title="CSS">CSS</Link></li>
                    <li><Link to="/blog" title="Jquery">Jquery</Link></li>
                    <li><Link to="/blog" title="Web Development">Web Development</Link></li>
                    <li><Link to="/blog" title="Creative">Creative</Link></li>
                    <li><Link to="/blog" title="HTML">HTML</Link></li>
                    <li><Link to="/blog" title="CSS">CSS</Link></li>
                  </ul>
                </div>
              </div>
              <div className="clearfix"></div>
            </div>
            <div className="widget">
            <WidgetHeading heading="Quick Connect"/>

              <div className="widget-content">
                <div className="quick-connect-form">
                  <form action="https://wpshopmart.com/index.html">
                    <div className="form-group">
                      <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Phone No." />
                    </div>
                    <div className="form-group">
                      <input type="text" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                      <textarea placeholder="Message"></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit">Send Message <i className="flat flaticon-plane"></i></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </aside>
    )
}

export default Sidebar
