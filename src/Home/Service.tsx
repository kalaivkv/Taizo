import React from "react";
import "./Service.css";
import img1 from "../assets/Profile.png";
import img2 from "../assets/Image.png";
import whatsappIcon from "../assets/whatsapp.svg";
import settings from "../assets/settingIcon.svg";

const Service: React.FC = () => {
  return (
    <div className="container who-we-serve">
      <h1 className="mb-5">Who we serve</h1>
      <div className="row align-items-center section mb-5">
        <div className="col-md-6 mb-5">
          <img
            src={img1}
            alt="Business Professional"
            className="img-fluid image"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between content ">
          <h3>For Manufacturing Businesses</h3>
          <p>
            We proudly cater to a wide range of manufacturing industries,
            ensuring their hiring needs are met with precision.
          </p>
          <p>Whether you’re in:</p>
          <ul>
            <li>
              <img src={settings} alt="settingsIcon" />
              Automotive Parts Manufacturing
            </li>
            <li>
              <img src={settings} alt="settingsIcon" />
              Aerospace Component Production
            </li>
            <li>
              <img src={settings} alt="settingsIcon" />
              Medical Device Manufacturing
            </li>
            <li>
              <img src={settings} alt="settingsIcon" />
              Tool and Die Development
            </li>
            <li>
              <img src={settings} alt="settingsIcon" />
              Metal Fabrication
            </li>
            <li>
              <img src={settings} alt="settingsIcon" />
              Precision Engineering
            </li>
          </ul>
          <p>
            Our specialized recruitment services connect you with top talent,
            helping your business achieve efficiency and excellence.
          </p>
          <div className="buttons">
            <button className="callButton">
              <i className="bi bi-telephone-fill"></i>
              &nbsp;+91&nbsp;780&nbsp;680&nbsp;5808
            </button>
            <button className="whatsappButton">
              <img src={whatsappIcon} alt="WhatsApp" />
              &nbsp;WhatsApp&nbsp;Us
            </button>
          </div>
        </div>
      </div>

      <div className="row align-items-center section">
        <div className="col-md-6 order-md-2 order-1">
          <img
            src={img2}
            alt="Factory Worker"
            className="img-fluid image mb-5"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between content mb-5 order-md-1 order-12">
          <h3>For Skilled Professionals</h3>
          <p>
            Finding the right job shouldn’t be complicated. We simplify the job
            search process for
          </p>
          <ul>
            <li>
              <img src={settings} alt="settingsIcon" /> CNC Machine Operators,
              Setters, and Programmers
            </li>
            <li>
              <img src={settings} alt="settingsIcon" /> Quality Specialists
            </li>
            <li>
              <img src={settings} alt="settingsIcon" /> Design Engineers
            </li>
            <li>
              <img src={settings} alt="settingsIcon" /> Mid to Senior Level
              Engineering Professionals
            </li>
          </ul>
          <p>
            Our recruitment professionals make it simpler than ever to find your
            next opportunity in manufacturing companies by bridging the gap
            between skilled workforce and leading manufacturing companies.
          </p>
          <div className="buttons">
            <button className="callButton">
              <i className="bi bi-telephone-fill"></i>
              &nbsp;+91&nbsp;780&nbsp;680&nbsp;5808
            </button>
            <button className="whatsappButton">
              <img src={whatsappIcon} alt="WhatsApp" />
              &nbsp;WhatsApp&nbsp;Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
