import React from "react";

interface SeperationProps {
  height: string;
}

const Seperation: React.FC<SeperationProps> = ({ height }) => {
  return <span className={`${height} border-r-[1px] border-[#5B5A57]`} />;
};

export default Seperation;
