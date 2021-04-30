import React from 'react'

function WidgetHeading({heading}) {
    return (
              <div className="sidebar_heading">
                <h5>{heading}</h5>
                <div className="separator left-align ">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
    )
}

export default WidgetHeading
