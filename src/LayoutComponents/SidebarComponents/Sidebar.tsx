"use client";
import Image from "next/image";
import { useState } from "react";

interface SidebarItemProps {
  text: string;
  src: string;
  isHovered: boolean;
}

const SidebarItem = ({ text, src, isHovered }: SidebarItemProps) => {
  return (
    <div className="relative flex items-center cursor-pointer">
      <Image
        className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px]"
        src={src}
        alt={text}
        width={24}
        height={24}
      />
      <span
        className={`absolute left-full bg-black z-[100] ml-2 whitespace-nowrap transition-transform duration-500 ease-in-out ${
          isHovered ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
        }`}
      >
        {text}
      </span>
      <div className="w-4"></div>
    </div>
  );
};

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 p-10 pt-9 h-full z-[2000] bg-black text-white transition-all duration-300 ease-in-out ${
        isHovered ? "w-60" : "md:w-[119px] w-[100px]"
      }`}
    >
      <div
        className={`absolute left-6 transition-all duration-500 ease-in-out font-pressStart2 text-2xl text-[#DAB785] ${
          isHovered ? "opacity-0" : "opacity-100 md:text-4xl text-3xl"
        }`}
      >
        GQ
      </div>

      <div
        className={`absolute left-6 transition-all duration-500 ease-in-out font-pressStart2 text-2xl text-[#DAB785] ${
          isHovered ? "translate-x-0 opacity-100" : "opacity-0"
        }`}
      >
        GameQuest
      </div>

      <div className="flex gap-8 mt-24 flex-col border-b-[1px] border-[#5B5A57] pb-12 w-full justify-center items-center">
        <SidebarItem text="Home" src="/home.svg" isHovered={isHovered} />
        <SidebarItem text="Shop" src="/shop-home.svg" isHovered={isHovered} />
        <SidebarItem text="Payment" src="/payment.png" isHovered={isHovered} />
        <SidebarItem text="Menu" src="/menu.png" isHovered={isHovered} />
        <SidebarItem text="Trophy" src="/trophy.png" isHovered={isHovered} />
      </div>

      <div className="flex flex-col gap-8 justify-center items-center mt-10">
        <SidebarItem
          text="Settings"
          src="/settings.png"
          isHovered={isHovered}
        />
        <div className="relative flex items-center">
          <Image
            className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px]"
            src="/settings.png"
            alt="Settings"
            width={24}
            height={24}
          />
          <span
            className={`absolute left-full bg-black z-[100] ml-2 whitespace-nowrap transition-transform duration-500 ease-in-out ${
              isHovered
                ? "translate-x-0 opacity-100"
                : "translate-x-4 opacity-0"
            }`}
          >
            Settings
          </span>
          <div className="w-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
