import React from 'react';

const TestimonialCard = ({img, name, position, content }) => {
    return (
        <div className="item">
            <div className="comment-box">
                <div className="comment">
                    <p>{content}</p>
                </div>
            </div>
            <div className="client_detail">
                <div className="client_dp">
                    <img src={img} alt="Client DP"/>
                </div>
                <div className="name_designation">
                    <h5> {name} </h5>
                    <span> {position} </span>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard