  
import React from 'react'

const Qcard= ({Sheading,hcontent}) =>{
    return (
    <>
            <div className="section_heading">
                <h4>{Sheading}</h4>
                <div className="separator">
                  <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <div className="heading_content">{hcontent}</div>
            </div>
    </>
  );
  }

  export default Qcard;