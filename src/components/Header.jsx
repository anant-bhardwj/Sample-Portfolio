import React from "react";
import headerPic from "../assets/header/headerPic.png";
import vector from "../assets/header/vector.png";
import ellipse12 from "../assets/header/Ellipse12.png";
import ellipse13 from "../assets/header/Ellipse13.png";
import ellipse15 from "../assets/header/Ellipse15.png";
import ellipse16 from "../assets/header/Ellipse16.png";
import polygon1 from "../assets/header/Polygon1.png";
import rectangle52 from "../assets/header/Rectangle52.png";
import rectangle51 from "../assets/header/rectangle51.png";

const Header = () => {
  return (
    <div id="header" className="bg-[#FFFFFF] h-[630px] flex relative">
      <div style={{ zIndex: 2 }}>
        <div className="absolute top-[73px] left-[744px]">
          <img src={ellipse12} />
        </div>
        <div className="absolute bottom-[95px] right-[619px]">
          <img src={ellipse13} />
        </div>
        <div className="absolute top-[43px] left-[58px]">
          <img src={ellipse15} />
        </div>
        <div className="absolute bottom-[38px] left-[125px]">
          <img src={ellipse16} />
        </div>
        <div className="absolute bottom-[35px] right-[103px]">
          <img src={polygon1} />
        </div>
        <div className="absolute top-[95px] right-[130px]">
          <img src={rectangle51} />
        </div>
        <div className="absolute bottom-[150px] left-[535px]">
          <img src={rectangle52} />
        </div>
      </div>
      <div className="absolute bottom-0 right-0">
        <img src={headerPic} alt="Picture" style={{ height: "550px" }} />
      </div>
      <div
        style={{ zIndex: 1 }}
        className="relative flex flex-col justify-between items-start px-[100px] pt-[124px] pb-[112px]"
      >
        <div className="flex flex-col">
          <p className="text-5xl font-bold leading-tight">
            I'm Rayan Adlrdard
            <br />
            <span>
              <span className="text-customYellow">Front-end</span> Developer
            </span>
          </p>
        </div>
        <div className="w-[580px] text-base text-[#767676] my-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </div>
        <button className="bg-customYellow px-8 py-4 gap-x-2.5 rounded-md flex items-center text-lg font-bold">
          HIRE ME <img src={vector} />
        </button>
      </div>
    </div>
  );
};

export default Header;
