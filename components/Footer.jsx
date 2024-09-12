"use client";

import Image from "next/image";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaYoutube, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary border-t border-t-white/20 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="-mt-3 xl:mb-0 mb-8">
        <Image src="/images/hlogo.png"
         width={40} height={40} />
        </div>

        {/* Navigation Links */}
        <nav className="flex xl:ml-14 justify-center items-center flex-col md:flex-row gap-4 mb-4 md:mb-0">
          <a href="/" className="hover:text-indigo-300">Home</a>
          <a href="/services" className="hover:text-indigo-300">Services</a>
          <a href="/resume" className="hover:text-indigo-300">Resume</a>
          <a href="/works" className="hover:text-indigo-300">Portfolio</a>
          <a href="/contact" className="hover:text-indigo-300">Contact</a>
        </nav>

        {/* Social Media Links */}
        <div className="flex gap-4">
          <a href="https://github.io" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300">
            <FaGithub size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300">
            <FaYoutube size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-300">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Zayn Elmoubtakir. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
