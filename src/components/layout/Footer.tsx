import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { MapPin, Phone, Printer, Mail, Globe, AtSign } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-black to-[#1a1a1a] text-white pt-12 pb-4 text-sm relative">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8">
          <div className="transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold mb-4 text-blue-400 tracking-wide">
              CONTACT US
            </h2>
            <div className="space-y-3 text-gray-300 hover:text-white transition-colors duration-200">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 flex-shrink-0" />
                <span>Link Road Number 3, Near Kali Mata Mandir, Bhopal, Madhya Pradesh, India 462003</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>+91 755 4051000, 4052000</span>
              </p>
              <p className="flex items-center">
                <Printer className="w-5 h-5 mr-2" />
                <span>+91-755 2670562</span>
              </p>
            </div>
          </div>

          <div className="transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold mb-4 text-blue-400 tracking-wide">
              GET IN TOUCH
            </h2>
            <div className="space-y-3 text-gray-300 hover:text-white transition-colors duration-200">
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>pro[at]manit[dot]ac[dot]in</span>
              </p>
              <p className="flex items-center">
                <AtSign className="w-5 h-5 mr-2" />
                <span>officeofdirector[at]manit[dot]ac[dot]in</span>
              </p>
              <p className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <a
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 underline"
                  href="https://www.manit.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.manit.ac.in
                </a>
              </p>
            </div>
          </div>

          <div className="transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold mb-4 text-blue-400 tracking-wide">
              FOLLOW US
            </h2>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.facebook.com/people/MANIT-Bhopal/100057525636119/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center transform hover:scale-110 hover:bg-blue-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white text-lg" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCXzZC99puUZuJDiQ09p72cw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center transform hover:scale-110 hover:bg-red-500 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-white text-lg" />
              </a>
              <a
                href="https://twitter.com/manitbpl"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center transform hover:scale-110 hover:bg-blue-300 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white text-lg" />
              </a>
              <a
                href="https://www.instagram.com/manitbhopl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center transform hover:scale-110 hover:from-purple-500 hover:to-pink-400 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white text-lg" />
              </a>
            </div>
          </div>

          <div className="transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-bold mb-4 text-blue-400 tracking-wide">
              COLLABORATORS
            </h2>
            <div className="space-y-3 text-gray-300 hover:text-white transition-colors duration-200">
              <p>Rakesh Kundan(MANIT'25)</p>
              <p>V.Yogananda Reddy (MANIT'26)</p>
              <p>Palak Agrawal (MANIT'26)</p>
              <p>Pranjal Jain (MANIT'26)</p>
            </div>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-700/50 text-center">
          <p className="text-yellow-400 hover:text-white transition-colors duration-200">
            © {new Date().getFullYear()} MANIT Bhopal. All Rights Reserved |
            <a href="#" className="ml-1 text-blue-400 hover:text-blue-300 transition-colors duration-200">
              Terms of Use
            </a> and
            <a href="#" className="ml-1 text-blue-400 hover:text-blue-300 transition-colors duration-200">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;