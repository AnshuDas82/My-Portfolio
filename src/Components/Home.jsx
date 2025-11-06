import React from "react";
import videoBg from "../assets/bg-video.mp4";
import Name from "../assets/My name.png";
import Pic from "../assets/dp.png";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden scroll-smooth text-white">
      {/* Background video */}
      <video
        src={videoBg}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Navbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 pt-2 sm:pt-4">
        {/* Logo */}
        <div className="z-10 animate-bounce mb-3 sm:mb-0">
          <img
            src={Name}
            alt="name"
            className="h-10 sm:h-14 md:h-16 lg:h-20 w-auto"
          />
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-5 sm:gap-8 text-[#52e09c] z-10 text-sm sm:text-base font-medium">
          <a
            className="hover:text-[#63d0ff] transition duration-200 ease-in-out transform hover:scale-110"
            href="#home"
          >
            Home
          </a>
          <a
            className="hover:text-[#63d0ff] transition duration-200 ease-in-out transform hover:scale-110"
            href="#about"
          >
            About
          </a>
          <a
            className="hover:text-[#63d0ff] transition duration-200 ease-in-out transform hover:scale-110"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="hover:text-[#63d0ff] transition duration-200 ease-in-out transform hover:scale-110"
            href="#contact"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Body Section */}
      <div className="flex flex-col-reverse md:flex-row items-center w-full z-10">
        {/* Left Text */}
        <div className="w-full md:w-1/2 z-10 p-6 sm:p-10 md:p-16 lg:p-24 font-bold text-center md:text-left">
          <div className="space-y-2">
            <p className="text-2xl sm:text-3xl text-[#63d0ff]">Hi 👋, I am</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#63d0ff] font-bold">
              Anshu Kumar Das
            </h1>
            <p className="flex justify-center md:justify-start text-xl sm:text-2xl text-[#63d0ff]">
              And I am a
              <span className="ml-2 text-[#52e09c]">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Competitive Programmer",
                      "UI/UX Designer",
                      "Digital Artist",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center w-full md:w-1/2 z-10">
          <div
            className="
          p-1.5 rounded-full bg-linear-to-r from-[#63d0ff] to-[#52e09c] 
          shadow-lg transition-all duration-300 ease-in-out 
          hover:shadow-2xl hover:shadow-[#63d0ff]/50
          w-2/3 sm:w-1/2 md:w-2/3 lg:w-1/2
        "
          >
            <div className="w-full h-full overflow-hidden rounded-full">
              <img
                src={Pic}
                alt="developer"
                className="w-full h-full object-cover rounded-full transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Email */}
      <div className="absolute bottom-6 left-0 w-full z-10 flex flex-col sm:flex-row items-center justify-center sm:justify-start px-6 space-y-2 sm:space-y-0 sm:space-x-4">
        <hr className="w-full sm:w-[250px] md:w-[400px] border-t-2 border-white opacity-70" />
        <span className="text-[#52e09c] text-sm sm:text-base font-medium">
          <a
            className="hover:text-[#63d0ff] transition duration-200 ease-in-out"
            href="#contact"
          >
            kranshu983@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
}

export default Home;
