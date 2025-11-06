import React, { useState } from "react";
import bgImage from "../assets/bg-img.jpg";
import githublogo from "../assets/github logo.png";
import linkedinlogo from "../assets/linkedin logo.png";
import instagramlogo from "../assets/instagram logo.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xanlrlen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div
      className="text-white px-6 sm:px-10 md:px-16 lg:px-20 py-10 font-sans bg-cover bg-center min-h-screen flex flex-col"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Header */}
      <div className="flex items-center text-[#52e09c] text-3xl sm:text-4xl md:text-5xl font-bold mb-8 w-full">
        <span className="hover:animate-bounce">Contact</span>
        <div className="grow h-0.5 bg-white ml-3 sm:ml-5"></div>
      </div>

      {/* Intro Text */}
      <div className="mb-8 sm:mb-10 text-white max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed">
        <p className="mb-2">
          Feel free to contact me anytime, my social media are always open.
        </p>
        <p>
          Contact me if you have any good opportunity or just wanna talk. I'll
          make sure to get back to you asap.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full justify-between items-start gap-10 sm:gap-16">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full lg:w-2/3 space-y-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg sm:text-xl mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full p-3 sm:p-4 rounded-xl bg-[#1a2d3a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#63d0ff]"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg sm:text-xl mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email id"
                className="w-full p-3 sm:p-4 rounded-xl bg-[#1a2d3a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#63d0ff]"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-lg sm:text-xl mb-2">
              Message for me
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type here"
              rows="6"
              className="w-full p-3 sm:p-4 rounded-xl bg-[#1a2d3a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#63d0ff]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="self-end px-6 sm:px-8 py-2 sm:py-3 bg-[#63d0ff] text-black font-bold text-lg sm:text-xl rounded-xl hover:bg-opacity-90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#63d0ff] focus:ring-offset-2 focus:ring-offset-[#1a2d3a]"
          >
            Submit
          </button>
        </form>
        <div className="flex lg:flex-col flex-row items-center justify-center gap-6 sm:gap-8 mt-6 lg:mt-12 w-full lg:w-1/3">
          <a
            href="https://www.instagram.com/anshu_das03/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="Instagram"
          >
            <img
              src={instagramlogo}
              alt="Instagram"
              className="w-12 sm:w-14 md:w-16 h-auto"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anshu-das-041864287/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="LinkedIn"
          >
            <img
              src={linkedinlogo}
              alt="LinkedIn"
              className="w-12 sm:w-14 md:w-16 h-auto"
            />
          </a>
          <a
            href="https://github.com/AnshuDas82"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
            title="GitHub"
          >
            <img
              src={githublogo}
              alt="GitHub"
              className="w-12 sm:w-14 md:w-16 h-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
