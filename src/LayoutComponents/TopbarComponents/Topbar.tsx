import React from "react";
import Seperation from "./Seperation";
import TopbarUtilites from "./TopbarUtilites";
import TopbarList from "./TopbarList";
import SearchBar from "./SearchBar";

interface TopbarProps {
  width?: string;
  margin?: string;
}

const Topbar: React.FC<TopbarProps> = ({ width = "", margin = "" }) => {
  return (
    <div
      className={`flex ${width} ${margin} gap-4 justify-between items-center px-4 fixed bg-[#15140F] z-[200] top-0 left-0`}
    >
      <div className="flex items-center">
        <TopbarList />
      </div>
      <div className="md:flex items-center gap-6 opacity-0 md:opacity-100">
        <SearchBar />
        <div className="lg:flex items-center lg:opacity-100 hidden relative gap-6">
          <Seperation height="h-[30px]" />
          <TopbarUtilites />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
