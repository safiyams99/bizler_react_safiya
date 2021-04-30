import React from 'react'
//import BlogPostData from '../../Data/BlogData'
import {Switch,Route,useParams,useRouteMatch, Link} from "react-router-dom"
import DetailedBlog from "../../pages/DetailedBlog" 

function BlogPost({id,img,title,category,cmnts,date,content}) {
    
    return (
        <div className="item blog_card card_mr_bt d-flex">
                <div className="post-img"><img src={img} alt="Post"/></div>
                <div className="post-detail">
                    <h5><Link to={`/Blog/${id}`} >{title}</Link>
                    </h5>
                    <div className="post-status">
                        <ul>
                            <li><i className="flat flaticon-folder"></i> <span><Link
                                to="/blog">{category}</Link></span></li>
                            <li><i className="flat flaticon-chat"></i> <span>{cmnts}</span></li>
                            <li><i className="flat flaticon-calendar"></i> <span>{date}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="description">
                        <p>{content}</p>
                        <Link to={`/Blog/${id}`} title="View More">View More</Link></div>
                </div>
                <div className="clearfix"></div>
                
            </div>
    )
}

export default BlogPost
