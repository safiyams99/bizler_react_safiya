import React from 'react';


const PostComment = ({src, name, date,msg}) => {
    return(
        <>
            <div className="comment">
                <div className="visitor_pic"><img src={src} alt="Visitor"/>
                </div>
                <div className="visitor_description">
                    <div className="name_date">
                        <h6>{name}</h6>
                        <div className="date">{date}</div>
                    </div>
                    <p>{msg} </p>
                    <a href="javascript:void(0)" title="Reply">Reply</a></div>
            </div>
        </>
    );
}
export default PostComment;