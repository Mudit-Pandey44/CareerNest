import React from "react";
import { Link } from "react-router-dom";
import { Bookmark } from "lucide-react";

import google from "../assets/logos/google.png";
import amazon from "../assets/logos/amazon.png";
import microsoft from "../assets/logos/microsoft.png";
import infosys from "../assets/logos/infosys.png";
import tcs from "../assets/logos/tcs.png";
import wipro from "../assets/logos/wipro.png";
import zoho from "../assets/logos/zoho.png";
import flipkart from "../assets/logos/flipkart.png";
import swiggy from "../assets/logos/swiggy.png";
import zomato from "../assets/logos/zomato.png";
import paytm from "../assets/logos/paytm.png";
import startup from "../assets/logos/startup.png";

const logos = {
  Google: google,
  Amazon: amazon,
  Microsoft: microsoft,
  Infosys: infosys,
  TCS: tcs,
  Wipro: wipro,
  Zoho: zoho,
  Flipkart: flipkart,
  Swiggy: swiggy,
  Zomato: zomato,
  Paytm: paytm,
  Startup: startup,
};

const Card = ({
  index,
  company,
  title,
  location,
  salary,
  type,
  level,
  time,
  saved,
  onSave,
}) => {
  return (
    <div className="card">
      <div className="top">
        <img src={logos[company]} alt={company} />

        {/* ✅ REAL SAVE BUTTON */}
        <button
          onClick={() => onSave(index)}
          className={`save-btn ${saved ? "saved-btn" : ""}`}
        >
          {saved ? "Saved" : "Save"}
          <Bookmark
            size={16}
            strokeWidth={2}
            fill={saved ? "#fff" : "none"}
            color={saved ? "#fff" : "black"}
          />
        </button>
      </div>

      <div className="center">
        <h3>
          {company} <span>{time}</span>
        </h3>
        <h2>{title}</h2>

        <div className="tag">
          <span>{type}</span>
          <span>{level}</span>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h3>{salary}</h3>
          <p>{location}</p>
        </div>

        <Link to={`/job/${index}`}>
          <button>Apply Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
