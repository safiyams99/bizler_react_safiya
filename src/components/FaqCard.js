import React from 'react'

const FaqCard = ({id1,cname1,spanNo,collapseId,spanContent,id2,cname2,heading}) => {
    return (
        <>
        <div className="card">
          <div className="card-header" id={id1}>
            <h5 className="mb-0">
              <button className={cname1} data-toggle="collapse" data-target={collapseId} aria-expanded="true" aria-controls="collapseOne">
                <span className="s_no">{spanNo}</span>{spanContent}</button>
            </h5>
          </div>
          <div id={id2} className={cname2} aria-labelledby={heading} data-parent="#accordion">
            <div className="card-body">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              <ul>
                <li><i className=""></i>Lorem Ipsum has been the industry`s standard</li>
                <li><i className=""></i>Lorem Ipsum has been the industry`s standard</li>
                <li><i className=""></i>Lorem Ipsum has been the industry`s standard</li>
              </ul>
            </div>
          </div>
        </div>
        </>
    )
}

export default FaqCard;