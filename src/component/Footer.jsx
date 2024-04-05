import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#020C1B] w-full h-auto py-10 flex flex-col gap-8 items-center justify-center">
      <div className="flex gap-8 text-[16px] font-semibold text-white">
        <li className="list-none">Terms Of Use</li>
        <li className="list-none">Privacy-Policy</li>
        <li className="list-none">About</li>
        <li className="list-none">Blog</li>
        <li className="list-none">FAQ</li>
      </div>
      <div className="w-[50%] text-center text-gray-400 font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <div className="footer-icons flex gap-5 text-4xl text-white" >
        <a
          href="https://github.com/Amit848211"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <FaGithub className="hover:shadow-2xl shadow-cyan-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/amit-kumar-644036252"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
      <p className="w-[50%] text-center text-gray-400 font-medium">© 2024 Example Company. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
