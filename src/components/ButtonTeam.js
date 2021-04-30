import React from 'react';
import {Link} from "react-router-dom"
const ButtonTeam = ({cname,link}) => {
    return(
      <div className="col-lg-12 col-md-12 col-xs-12  text-center"><Link className={cname} to={link}>View More</Link></div>
    );
}

export default ButtonTeam;