"use client";
import Image from "next/image";
import { useState } from "react";

interface SidebarItemProps {
  text: string;
  src: string;
  isHovered: boolean;
}

const SidebarItem = ({ text, src, isHovered }: SidebarItemProps) => (
  <div className="relative flex items-center cursor-pointer">
    <Image
      className="md:w-[24px] w-[20px] md:h-[24px] h-[20px]"
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
  </div>
);

const sidebarItems = [
  { text: "Home", src: "/home.svg" },
  { text: "Mesages", src: "/message.svg" },
  { text: "Shop", src: "/shop-home.svg" },
  { text: "Payment", src: "/payment.png" },
  { text: "Menu", src: "/menu.png" },
  { text: "Trophy", src: "/trophy.png" },
];

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 p-10 pt-9 h-full z-[2000] bg-black text-white transition-all duration-300 ease-in-out ${
        isHovered ? "w-60" : "md:w-[119px] w-[100px]"
      }`}
    >
      <div
        className={`absolute left-6 transition-all duration-500 ease-in-out  text-[#DAB785] ${
          isHovered
            ? "translate-x-0 opacity-100 text-2xl"
            : "opacity-100 text-3xl md:text-4xl"
        }`}
      >
        {isHovered ? "GameQuest" : "GQ"}
      </div>

      <div className="flex flex-col items-center gap-8 mt-24 border-b-[1px] border-[#5B5A57] pb-12">
        {sidebarItems.map(({ text, src }) => (
          <SidebarItem key={text} text={text} src={src} isHovered={isHovered} />
        ))}
      </div>

      <div className="flex flex-col gap-8 items-center mt-10">
        <SidebarItem
          text="Settings"
          src="/settings.png"
          isHovered={isHovered}
        />
        <SidebarItem text="Logout" src="/logout.svg" isHovered={isHovered} />
      </div>
    </div>
  );
};

export default Sidebar;
