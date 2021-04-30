import React from 'react'
import { Link } from 'react-router-dom'

function PostItem({id,img,title,date}) {
    return (
        <div className="post-item">
            <div className="post-img"><img src={img} alt="post"/></div>
            <div className="post-content">
                <Link to={`/Blog/${id}`} >{title}</Link>
                <div className="post-status"><i className="flat flaticon-calendar"></i>
                    <span>{date}</span></div>
            </div>
        </div>
    )
}

export default PostItem
