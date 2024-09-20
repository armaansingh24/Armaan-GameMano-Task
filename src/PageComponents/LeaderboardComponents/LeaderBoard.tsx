import React from "react";
import TopBanner from "@/PageComponents/LeaderboardComponents/TopBanner";
import LeaderboardDescription from "@/PageComponents/LeaderboardComponents/LeaderboardDescription";
import LeaderRanks from "@/PageComponents/LeaderboardComponents/LeaderRanks";
import ArenaSelection from "@/PageComponents/LeaderboardComponents/ArenaSelection";
import Reviews from "@/PageComponents/LeaderboardComponents/Reviews";
import GamesList from "@/PageComponents/LeaderboardComponents/GameList";
import Topbar from "@/LayoutComponents/TopbarComponents/Topbar";

const Leaderboard = () => {
  return (
    <div className="bg-[#2F2B22]  w-full  mx-auto flex flex-col justify-center items-center rounded-xl shadow-lg ">
      <Topbar width={"w-full"} />
      <TopBanner />
      <LeaderboardDescription />
      <LeaderRanks />
      <ArenaSelection />
      <Reviews />
      <GamesList />
    </div>
  );
};

export default Leaderboard;
