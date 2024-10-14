import React from "react";
import cards from "../assets/projects/projectsData.js";

const Projects = () => {
  return (
    <div id="projects" className="flex flex-col items-center my-11 px-[100px]">
      <div className="text-center pb-11">
        <h1 className="text-[32px] font-bold p-3">Projects</h1>
        <p className="text-center text-[15px] text-[#767676]">
          Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
          Sint. Velit Officia <br />
          Consequat Duis Enim Velit Mollit. Lorem Ipsum
        </p>
      </div>

      <div className="grid grid-cols-3 gap-[45px]">
        {/* 
        MAPPING THE DATA FOR INDIVIDUAL PROJECTS */}
        {cards.map((card) => (
          <div
            style={{ boxshadow: "5px 5px 10px 0px #0000001A" }}
            key={card.id}
            className="card w-96 h-[432.45px] shadow-xl bg-white border-solid border-[#00000033] border-[1px] "
          >
            <figure>
              <img src={card.image} alt="image" />
            </figure>
            <div
              style={{ padding: "14px 16px 20px 16px" }}
              className="flex flex-col h-[176.45px] gap-[5px]"
            >
              <h2 className="card-title text-base">{card.title}</h2>
              <p className="text-sm text-[#767676]">{card.desc}</p>
              <div className="card-actions pt-3">
                {card.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge text-[13px] px-3.5 py-3 bg-[#EFEFEF] text-black border-none"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

