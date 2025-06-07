import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaAmazon } from "react-icons/fa";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      // location: "Millennium City Centre, Gurugram",
      // openPositions: 10,
      icon: <FaMicrosoft />,
        link:"https://www.microsoft.com/en-in/about/contact-us",
    },
    {
      id: 2,
      title: "Google",
      // location: "Millennium City Centre, Gurugram",
      // openPositions: 5,
       icon: <FaGoogle  />,
      link:"https://www.google.com/about/careers/applications/jobs/results?location=India",
    },
    {
      id: 3,
      title: "Amazon",
      // location: "Millennium City Centre, Gurugram",
      // openPositions: 20,
      icon: <FaAmazon />,
      link:"https://www.amazon.jobs/content/en/teams/international-stores/india",
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    {/* <p>{element.location}</p> */}
                  </div>
                </div>
                {/* <button>Open Positions {element.openPositions}</button> */}
                <div className="learn-link-div"> <a
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="learn-link"
                 
                >
              Dive In
              {/* Visit */}
                </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
