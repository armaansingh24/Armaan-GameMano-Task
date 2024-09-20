import Image from "next/image";
import React from "react";

const Ratings = () => {
  return (
    <div className="flex flex-col justify-end gap-2">
      <div className="mt-4 text-xs flex gap-2 items-center">
        <div className="bg-green-500 shadow-md shadow-green-500 w-2 h-2 rounded-full"></div>
        <p>40 of your friends are playing</p>
      </div>
      <Image src="stars.svg" width={120} height={32} alt="Ratings" />
    </div>
  );
};

export default Ratings;
