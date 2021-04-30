import React from 'react'

function SCounter({counter, title}) {
    return (
        <div className="counter-column col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <div className="counter_content">
            <div className="display"><span className="counter">{counter}</span></div>
            <div className="title">{title}</div>
          </div>
        </div>
    )
}

export default SCounter
