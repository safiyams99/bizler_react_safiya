import React from "react";
import logoA from "../img/team-member-pic.jpg";
import {Link} from "react-router-dom"

const Teammember_card = ({ pic, name, position, content }) => {
  return (
    <div className="item col-lg-6 col-md-6 col-sm-12 col-xs-12">
      <div className="client_dp">
        <img src={pic} alt="Team" />
      </div>
      <div className="team-card">
        <div className="name_designation">
          <h5>
            <Link to="/teampage">{name}</Link>
          </h5>
          <span>{position}</span>
        </div>
        <div className="description">
          <p>{content}</p>
        </div>
        <div className="social_links">
          <ul>
            <li>
              <Link to="/" title="Facebook">
                <i className="flat flaticon-facebook-logo"></i>
              </Link>
            </li>
            <li>
              <Link to="/" title="Twitter">
                <i className="flat flaticon-twitter"></i>
              </Link>
            </li>
            <li>
              <Link to="/" title="Google">
                <i className="flat flaticon-google-plus-logo"></i>
              </Link>
            </li>
            <li>
              <Link to="/" title="Linkedin">
                <i className="flat flaticon-linkedin-logo"></i>
              </Link>
            </li>
            <li>
              <Link to="/" title="Instagram">
                <i className="flat flaticon-instagram"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Teammember_card;
