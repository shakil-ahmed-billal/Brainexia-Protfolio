"use client";
import Image from "next/image";
import React from "react";

const ReadyToUse: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 overflow-hidden">
      <div className="container-custom mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <h2 className="h-color text-[32px] sm:text-[36px] font-bold font2 mt-10 leading-[48px]">
            Ready To Use Our App With No Hidden Malware
          </h2>

          <p className="p-color mt-4 text-[14px] sm:text-[16px] leading-[26px]">
            Etiam euismod volutpat lacus fringilla henr. Mauris lobortis purus
            velit quis. Nunc mollis venenatis metus nec aliquet.
          </p>

          <div className="relative max-w-[550px] mt-9 mb-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full py-4 sm:py-6 px-10 rounded-sm bg-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] outline-none border-none text-gray-400 placeholder:text-gray-300 font1 text-lg"
            />
          </div>

          <div className="flex items-center space-x-2 text-[16px] font1">
            <span className="text-gray-400 text-[14px] leading-[26px]">
              Already a member?
            </span>
            <button className="hover:text-[#0a1d37] text-gray-400 font-bold transition-colors cursor-pointer">
              Sign In
            </button>
          </div>
        </div>

        <div className="relative text-center w-full max-w-[600px] ml-auto">
          <Image
            src="/hero/ready-to-use-hero.png"
            alt="Visa 2"
            width={800}
            height={800}
            quality={100}
            priority
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToUse;
