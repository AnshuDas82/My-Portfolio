import React from "react";
import bgImage from "../assets/bg-img.jpg";
import htmllogo from "../assets/hmtl logo.png";
import csslogo from "../assets/css logo.png";
import jslogo from "../assets/javascript logo.png";
import reactlogo from "../assets/react logo.png";
import cpplogo from "../assets/c++ logo.png";
import pythonlogo from "../assets/python logo.png";
import tailwindlogo from "../assets/tailwind logo.png";

function Skills() {
  const skillLogos = [
    { src: htmllogo, name: "HTML" },
    { src: csslogo, name: "CSS" },
    { src: jslogo, name: "JavaScript" },
    { src: reactlogo, name: "React.js" },
    { src: cpplogo, name: "C++" },
    { src: pythonlogo, name: "Python" },
    { src: tailwindlogo, name: "Tailwind CSS" },
  ];

  return (
    <div
      className="text-white px-6 sm:px-10 md:px-16 lg:px-20 py-10 font-sans bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center text-[#52e09c] text-3xl sm:text-4xl md:text-5xl font-bold mb-8 w-full">
        <span className="hover:animate-bounce">Skills</span>
        <div className="grow h-0.5 bg-white ml-3 sm:ml-5"></div>
      </div>
      <div className="grow flex flex-col justify-center items-center space-y-10">
        {/* Skills list */}
        <div className="text-xl sm:text-2xl md:text-3xl text-[#63d0ff] text-center w-full">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-14">
            <ul className="hover:animate-pulse">Web Development</ul>
            <ul className="hover:animate-pulse">UI/UX Designer</ul>
            <ul className="hover:animate-pulse">
              Data Structures & Algorithms
            </ul>
            <ul className="hover:animate-pulse">Competitive Programmer</ul>
            <ul className="hover:animate-pulse">Digital Artist</ul>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12 md:gap-16 p-6 w-full">
          {skillLogos.map((logo, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center"
            >
              <img
                src={logo.src}
                alt={logo.name}
                title={logo.name}
                className="w-16 sm:w-20 md:w-24 lg:w-28 h-auto hover:animate-bounce transition-transform duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
