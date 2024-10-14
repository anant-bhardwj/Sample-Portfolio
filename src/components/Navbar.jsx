import React from "react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 200 }}>
      <nav
        className="bg-[#FFFFFF] flex flex-wrap justify-between"
        style={{
          padding: "38px 96px",
          height: "152px",
          boxShadow: "4px 0px 10px 0px #2F7AF91A",
        }}
      >
        <img src={logo} alt="Logo" style={{ height: "76px", width: "158px" }} />
        <ul className="flex items-center gap-x-3 font-medium text-sm text-black tracking-normal">
          <li className="py-[10px] px-[14px] rounded-[5px] hover:bg-customYellow">
            <a href="/#header">Home</a>
          </li>
          <li className="py-[10px] px-[14px] rounded-[5px] hover:bg-customYellow ">
            <a href="/skills">Skills</a>
          </li>
          <li className="py-[10px] px-[14px] rounded-[5px] hover:bg-customYellow">
            <a href="">Educations</a>
          </li>
          <li className="py-[10px] px-[14px] rounded-[5px] hover:bg-customYellow ">
            <a href="/#projects">Projects</a>
          </li>
          <li className="py-[10px] px-[14px] rounded-[5px] hover:bg-customYellow ">
            <a href="/#recommendations">Recommendations</a>
          </li>
          <li className="py-[10px] px-[14px] rounded-[5px] hover:bg-customYellow ">
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
