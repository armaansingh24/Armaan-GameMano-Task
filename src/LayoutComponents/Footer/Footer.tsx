import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-4 bg-[#1E1D16]">
      <div className="h-[50px]"></div>
      <div className="flex flex-col gap-4 bg-[#15140F] py-8 px-10">
        <ul className="flex items-center justify-center gap-4 lg:gap-10 text-sm lg:text-base flex-wrap cursor-pointer">
          {[
            "Privacy Notice",
            "Terms of Service",
            "Cookie Policy",
            "Company Information",
            "Cookie Preferences",
          ].map((item) => (
            <li
              key={item}
              className="hover:text-orange-300 transition-colors duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="w-full h-1 border-b border-b-[#5B5A57]" />
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="font-thin text-gray-400">
            Copyright &copy; GameQust, inc. All rights reserved
          </p>
          <Image
            className="cursor-pointer"
            src="/social.svg"
            alt="Social media icons"
            width={150}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
