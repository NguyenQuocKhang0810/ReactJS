import React from "react";
import "../styles/user.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";

const User = () => {
  return (
    <div>
      <div className="intro-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="intro-message">
                <h1 className="animated slideInLeft">
                  Welcome to my{" "}
                  <span className="highlight">page</span>.
                </h1>
                <h3 className="animated slideInRight">Explore your options.</h3>

                <ul className="list-inline intro-social-buttons">
                  <li>
                    <a href="#">
                      <button className="button animated bounceInUp btn btn-info btn-lg">
                        {" "}
                        <span className="network-name">
                          View Web Page 
                        </span>
                      </button>
                    </a>
                  </li>

                  <li>
                    <a href="#">
                      <button className="button2 animated bounceInUp btn btn-info btn-lg button2">
                        {" "}
                        <span className="network-name">More Details</span>
                      </button>
                    </a>
                  </li>
                </ul>

                <h4 className="learn animated bounceInUp">About Our Agency</h4>
                <i className="arrow animated infinite pulse fa fa-angle-down icon fa-5x"></i>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
