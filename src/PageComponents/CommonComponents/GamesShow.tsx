import React from "react";
import BuyNowButton from "./BuyNowButton";
import Ratings from "./Ratings";

const GamesShow: React.FC = () => {
  return (
    <div className="flex bg-black text-white py-4 sm:p-10 justify-center items-center relative">

      <div className="">
        <div className="flex justify-end items-end w-full absolute right-10">
          <Ratings />
        </div>
        <div className="flex flex-col justify-start gap-12 pl-4 z-30 m-10">
          <div className="flex flex-col justify-start max-w-[450px]">
            <h1 className="font-aoboshiOne text-3xl sm:text-5xl my-6 md:text-[70px] text-white">
              Evolution
            </h1>
            <div className="bg-[#1E1E1E] md:text-sm text-xs p-2 text-end">
              RELEASE DATE : 30TH DECEMBER
            </div>
          </div>

          <p className="font-prostoOne md:text-base text-sm">
            Players assume the role of Deacon St. John, a former bounty hunter
            struggling to survive in a post-apocalyptic world filled with
            zombie-like creatures called Freaks. Though players are surrounded
            by death and danger on all sides, the world that they get to explore
            feels as though {"it's"} truly alive, which can encourage players to
            take risks when they probably {"shouldn't"}.
          </p>

          <BuyNowButton />
        </div>
      </div>
    </div>
  );
};

export default GamesShow;
