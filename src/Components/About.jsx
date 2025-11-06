import React from "react";
import bgImage from "../assets/bg-img.jpg";
import pic from "../assets/myimg.jpg";

const HoverGrowImage = ({ src, alt = "Profile image" }) => {
  return (
    <div className="p-1.5 rounded-full bg-linear-to-r from-[#63d0ff] to-[#52e09c] w-fit shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-[#63d0ff]/50">
      <div className="overflow-hidden rounded-full w-40 h-44 sm:w-52 sm:h-60 md:w-60 md:h-72">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div
      className="text-white px-6 sm:px-10 md:px-16 lg:px-20 py-10 font-sans bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="flex items-center text-[#52e09c] text-3xl sm:text-4xl md:text-5xl font-bold mb-8 w-full">
        <span className="hover:animate-bounce">About Me</span>
        <div className="grow h-0.5 bg-white ml-3 sm:ml-5"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-center grow">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-2xl sm:text-3xl font-bold text-[#63d0ff] hover:animate-pulse">
            Anshu Kumar Das
          </p>

          <p className="text-lg sm:text-xl leading-[1.4] mb-3 text-[#52e09c]">
            A passionate web developer, coder, UI/UX designer,
            <br />
            and digital artist.
          </p>

          <p className="text-base sm:text-lg leading-relaxed text-white max-w-full sm:max-w-[650px] md:max-w-[700px] mx-auto lg:mx-0">
            Currently pursuing my{" "}
            <span className="text-[#63d0ff] font-bold">B-Tech</span> in{" "}
            <span className="text-[#63d0ff] font-bold">
              Computer Science and Engineering with AI
            </span>{" "}
            specialization from MCE, Motihari. I'm also the proud moderator of{" "}
            <span className="text-[#63d0ff] font-bold">
              <a
                href="https://www.zeroonemce.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                ZERO-ONE Coding Club
              </a>
            </span>
            , our college's official coding community. I'm a fast learner with a
            genuine love for exploring new technologies, backed by strong
            confidence and communication skills. I'm eager to find opportunities
            where I can apply my diverse skillset and prove my capabilities.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center mt-10 lg:mt-0 lg:pl-16 xl:pl-24">
          <HoverGrowImage src={pic} alt="Anshu Kumar Das" />
        </div>
      </div>
    </div>
  );
};

export default About;
