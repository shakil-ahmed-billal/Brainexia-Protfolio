"use client";
import React from 'react';
import { Phone, Mail, Instagram, Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0f172a] text-white pt-20 pb-10 px-6">
            <div className="container-custom">
                <div className="flex justify-between gap-12 mb-6">

                    <div className="flex flex-col space-y-6 basis-[40%]">
                        <div className="flex items-center space-x-2 mb-8">
                            <Image src="/Brainexia-logo-light.png" alt="Google Play" width={230} height={230} />
                        </div>

                        <p className="text-[#B4B6C4] text-[16pxl leading-[26px] font1 max-w-xs">
                            Phasellus pulvinar porta turpis sit amet facilis sapien bibendum eu praesent massa.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Phone size={20} className="text-white" />
                                <span className="text-[#B4B6C4] text-[16px]">(888) 1234-5678</span>
                            </div>
                            <div className="flex items-center space-x-3 text-gray-400">
                                <Mail size={20} className="text-white" />
                                <span className="text-[#B4B6C4] text-[16px]">info@example.com</span>
                            </div>
                        </div>

                        <div className="flex space-x-4 pt-4">
                            <Image src="/google.png" alt="Google Play" width={130} height={130} />

                            <Image src="/apple.png" alt="App Store" width={130} height={130} />
                        </div>
                    </div>
                    <div className='flex basis-[60%] justify-between'>


                        <div>
                            <h4 className="text-xl font-bold mb-8 font2 text-white text-[18px]">Useful Links</h4>
                            <ul className="space-y-4 text-gray-400 font1">
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Features</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">About</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Service</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Team</li>
                            </ul>
                        </div>


                        <div>
                            <h4 className="text-xl font-bold mb-8 font2 text-white text-[18px]">Help & Support</h4>
                            <ul className="space-y-4 text-gray-400 font1">
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">FAQ</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Blog</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Contact Us</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Support</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-8 font2 text-[18px] text-white">Resources</h4>
                            <ul className="space-y-4 text-gray-400 font1">
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Guides and resources</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Team</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Tools</li>
                                <li className="hover:text-white text-[#B4B6C4] text-[16px] cursor-pointer transition-colors">Support</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <p className="text-gray-500 font1 text-[14px]">© All Right Reserved</p>

                    <div className="flex space-x-6">
                        <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-all" />
                        <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-all" />
                        <Linkedin size={20} className="text-gray-400 hover:text-white cursor-pointer transition-all" />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;