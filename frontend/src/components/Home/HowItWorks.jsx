import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>FROM SEARCH TO SUCCESS !</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Your Account – Start Your Career Journey</p>
              <p>
               Sign up in seconds to access a smart, user-friendly platform where job seekers and employers can connect instantly. Your career or hiring success begins here.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find Jobs / Post Openings – All in One Place</p>
              <p>
                 Whether you're seeking your dream role or the perfect hire, Career Connect brings both to one powerful dashboard. Post jobs or explore openings with ease.
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply for Jobs / Recruit Top Talent – Faster, Smarter</p>
              <p>
                 Apply to jobs in a click or review the best-fit candidates quickly. Our streamlined system saves time and boosts results for both seekers and recruiters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
