import React from "react";
import BuyNowButton from "./BuyNowButton";
import Ratings from "./Ratings";

interface Game {
  title: string;
  releaseDate: string;
  description: string;
  parentClassName: string;
  childClassName: string;
}

const gamesData: Game[] = [
  {
    title: "Evolution",
    releaseDate: "30TH DECEMBER",
    description:
      "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
    parentClassName: "bg-black",
    childClassName: "md:ml-[40%]",
  },
  {
    title: "Valorant",
    releaseDate: "30TH DECEMBER",
    description:
      "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
    parentClassName: "bg-[#0000004D]",
    childClassName: "md:ml-[20%]",
  },
  {
    title: "Warlords",
    releaseDate: "30TH DECEMBER",
    description:
      "Players assume the role of Deacon St. John, a former bounty hunter struggling to survive in a post-apocalyptic world filled with zombie-like creatures called Freaks. Though players are surrounded by death and danger on all sides, the world that they get to explore feels as though it's truly alive, which can encourage players to take risks when they probably shouldn't.",
    parentClassName: "bg-black",
    childClassName: "w-full",
  },
];

const GamesShow: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-white py-4 sm:p-10 w-full">
      {gamesData.map((game) => (
        <div key={game.title} className={` mb-10 p-10 ${game.parentClassName}`}>
          <div
            className={`flex justify-center items-start relative ${game.childClassName}`}
          >
            <div className="flex flex-col justify-start gap-12 pl-4 z-30">
              <div className="flex flex-col justify-start max-w-[450px]">
                <h1 className="text-3xl sm:text-5xl my-6 md:text-[70px] text-white">
                  {game.title}
                </h1>
                <div className="bg-[#1E1E1E] md:text-sm text-xs p-2 text-end">
                  RELEASE DATE : {game.releaseDate}
                </div>
              </div>

              <p className=" md:text-base text-sm">{game.description}</p>

              <BuyNowButton />
            </div>
            <div className="flex justify-end items-end w-full  right-10">
              <Ratings />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GamesShow;
