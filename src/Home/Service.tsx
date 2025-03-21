import React from "react";
import "./Service.css";
import img1 from "../assets/Profile.png";
import img2 from "../assets/Image.png";
import { Settings } from "@mui/icons-material";
import whatsappIcon from "../assets/whatsapp.svg";

const Service: React.FC = () => {
  return (
    <div className="container who-we-serve">
      <div className="row align-items-center section mb-5">
      <div className="col-md-6 mb-5">
          <img src={img1} alt="Business Professional" className="img-fluid image" />
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
              <Settings style={{ color: "green" }} />
              &nbsp;Automotive Parts Manufacturing
            </li>
            <li>
              <Settings style={{ color: "green" }} />
              &nbsp;Aerospace Component Production
            </li>
            <li>
              <Settings style={{ color: "green" }} />
              &nbsp;Medical Device Manufacturing
            </li>
            <li>
              <Settings style={{ color: "green" }} />
              &nbsp;Tool and Die Development
            </li>
            <li>
              <Settings style={{ color: "green" }} />
              &nbsp;Metal Fabrication
            </li>
            <li>
              <Settings style={{ color: "green" }} />
              &nbsp;Precision Engineering
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
      <div className="col-md-6 d-flex flex-column justify-content-between content mb-5">
          <h3>For Skilled Professionals</h3>
          <p>
            Finding the right job shouldn’t be complicated. We simplify the job
            search process for
          </p>
          <ul>
            <li>
              <Settings style={{ color: "green" }} /> CNC Machine Operators,
              Setters, and Programmers
            </li>
            <li>
              <Settings style={{ color: "green" }} /> Quality Specialists
            </li>
            <li>
              <Settings style={{ color: "green" }} /> Design Engineers
            </li>
            <li>
              <Settings style={{ color: "green" }} /> Mid to Senior Level
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
        <div className="col-md-6">
          <img src={img2} alt="Factory Worker" className="img-fluid image" />
        </div>
      </div>
    </div>
  );
};

export default Service;
