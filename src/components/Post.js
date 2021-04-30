import React from 'react'
import {Link } from "react-router-dom"
function Post({id,date,img,title,category,cmnts}) {

  
    return (
        <div className="item blog_card">
            <div className="post-img"> <img src={img} alt="Post" />
              <div className="posted_on"> <span className="date">{date.charAt(0)}</span> <span className="month">{date.charAt(4)}.</span> </div>
            </div>
            <div className="post-detail">
              <h5><Link to={`/blog/${id}`}>{title}</Link></h5>
              <div className="post-status">
                <ul>
                  <li><i className="flat flaticon-folder"></i> <span><Link to="/blog">{category}</Link></span></li>
                  <li><i className="flat flaticon-chat"></i> <span>{cmnts}</span></li>
                </ul>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
    )
}

export default Post
