import React from "react";
import logo1 from "../assets/footer/Frame.png";
import logo2 from "../assets/footer/Frame-1.png";
import logo3 from "../assets/footer/Frame-2.png";
import logo4 from "../assets/footer/Frame-3.png";
import logo from "../assets/Logo.png";
import instagram from "../assets/footer/instagram.png";
import linkedin from "../assets/footer/linkedin.png";
import facebook from "../assets/footer/Facebook.png";
import rating1 from "../assets/footer/rating1.png";
import rating2 from "../assets/footer/rating2.png";
import rating3 from "../assets/footer/rating3.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center pt-9 h-[620px]">
      <div className="flex justify-between h-[144px] w-[970px]">
        <img src={logo1} className="w-[140px]" />
        <img src={logo2} className="w-[140px]" />
        <img src={logo3} className="w-[140px]" />
        <img src={logo4} className="w-[140px]" />
      </div>
      <div className="w-full pt-[45px] px-[98px] gap-[50px]">
        <div className="pb-12">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "76px", width: "158px" }}
          />
        </div>
        <div className="flex justify-between">
          <nav className="flex flex-col gap-y-7">
            <div>
              <img src={rating1} className="h-[40px]" />
              <p className="text-[#767676] text-xs">4.5/5 Rating on Lorem</p>
            </div>
            <div>
              <img src={rating2} className="h-[40px]" />
              <p className="text-[#767676] text-xs">9/10 Rating on Ipsum</p>
            </div>
            <div>
              <img src={rating3} className="h-[40px]" />
              <p className="text-[#767676] text-xs">4.5/5 Rating on Dorel</p>
            </div>
          </nav>
          <div className="footer text-black gap-x-[160px] w-[780px]">
            <nav>
              <h4 className="text-xl font-bold pb-3">Quick Links</h4>
              <a href="/#header" className="text-base">
                Home
              </a>
              <a href="/skills" className="text-base">
                Skills
              </a>
              <a className="text-base">Education</a>
              <a href="/#projects" className="text-base">
                Projects
              </a>
              <a href="/#recommendations" className="text-base">
                Recommendations
              </a>
            </nav>

            <nav>
              <h4 className="text-xl font-bold pb-3">Portfolio</h4>
              <a className="text-base">Frontend Development</a>
              <a className="text-base">Backend Development</a>
              <a className="text-base">Website Design</a>
              <a className="text-base">Machine Learning</a>
              <a className="text-base">Problem Solving & DSA</a>
            </nav>

            <nav className="gap-4">
              <h4 className="text-xl font-bold pb-3">Connect</h4>
              <img src={linkedin} className="h-[25px]" />
              <img src={instagram} className="h-[25px]" />
              <img src={facebook} className="h-[25px]" />
            </nav>
          </div>
        </div>
      </div>

      <footer className="footer footer-center gap-2.5 py-4">
        <p className="text-base leading-6 text-[#767676]">
          © {new Date().getFullYear()} Copyright, All right reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
