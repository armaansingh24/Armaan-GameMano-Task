import Banner from "./Banner";
import TrendingProductsSection from "./TrendingProductsSection";
import GamesShow from "@/PageComponents/CommonComponents/GamesShow";
import Sidebar from "@/LayoutComponents/SidebarComponents/Sidebar";
import Topbar from "@/LayoutComponents/TopbarComponents/Topbar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-24 bg-[#15140F]">
        <Topbar width={"w-[93%]"} margin={"ml-[6.5rem]"} />
        <main className="px-0 py-10 md:p-10 flex flex-col gap-14 overflow-hidden border-l-[1px]">
          <Banner />
          <div className=" flex gap-11 flex-col">
            <TrendingProductsSection />
            <GamesShow />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
