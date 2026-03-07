"use client";
import { Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-16 md:pt-24 pb-10 overflow-hidden">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div className="flex items-center mb-8">
              <Image
                src="/logos/logo-light.png"
                alt="Brainexia Logo"
                width={180}
                height={60}
                className="object-contain"
              />
            </div>

            <p className="text-[#B4B6C4] text-[16px] leading-[26px] font1 max-w-sm">
              Phasellus pulvinar porta turpis sit amet facilis sapien bibendum
              eu praesent massa.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Phone
                  size={20}
                  className="text-white group-hover:text-blue-400 transition-colors"
                />
                <span className="text-[#B4B6C4] text-[16px] font1">
                  (888) 1234-5678
                </span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail
                  size={20}
                  className="text-white group-hover:text-blue-400 transition-colors"
                />
                <span className="text-[#B4B6C4] text-[16px] font1">
                  info@example.com
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Image
                src="/icons/google-play.png"
                alt="Google Play"
                width={130}
                height={40}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
              <Image
                src="/icons/app-store.png"
                alt="App Store"
                width={130}
                height={40}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              />
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-8 lg:gap-8">
            {/* Useful Links */}
            <div className="min-w-[120px]">
              <h4 className="text-white font-bold mb-8 font2 text-[18px]">
                Useful Links
              </h4>
              <ul className="space-y-4 text-[#B4B6C4] font1">
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Features
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  About
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Service
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Team
                </li>
              </ul>
            </div>

            <div className="min-w-[120px]">
              <h4 className="text-white font-bold mb-8 font2 text-[18px]">
                Help & Support
              </h4>
              <ul className="space-y-4 text-[#B4B6C4] font1">
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  FAQ
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Blog
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Contact Us
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Support
                </li>
              </ul>
            </div>

            <div className="min-w-[120px] col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold mb-8 font2 text-[18px]">
                Resources
              </h4>
              <ul className="space-y-4 text-[#B4B6C4] font1">
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Guides
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Team
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Tools
                </li>
                <li className="hover:text-white text-[16px] cursor-pointer transition-colors">
                  Support
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 text-center md:text-left">
          <p className="text-gray-500 font1 text-[14px]">
            © {new Date().getFullYear()}{" "}
            <span className="text-gray-400">Brainexia</span>. All Right Reserved
          </p>

          <div className="flex space-x-6">
            <Instagram
              size={20}
              className="text-gray-400 hover:text-white cursor-pointer transition-all transform hover:-translate-y-1"
            />
            <Twitter
              size={20}
              className="text-gray-400 hover:text-white cursor-pointer transition-all transform hover:-translate-y-1"
            />
            <Linkedin
              size={20}
              className="text-gray-400 hover:text-white cursor-pointer transition-all transform hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
