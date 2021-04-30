import React from "react"

const SectionHeader = ({title1, title2, headingcontent}) => {
    
    return(
    
      <div className="section_heading">
        <h2>{title1}<span>{title2}</span></h2>
          <div className="separator">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        <div className="heading_content"> {headingcontent}</div>
      </div>
   
    );
}

export default SectionHeader