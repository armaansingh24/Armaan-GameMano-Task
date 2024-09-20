import ButtonComponent from "@/PageComponents/CommonComponents/ButtonComponent";

const LeaderRanks = ({}) => {
  return (
    <div className="relative md:h-[2000px] h-[1600px] w-full bg-black">
      <div className="absolute top-[10%] left-[15%] flex flex-col items-center text-white">
        <h3 className="md:text-[50px] text-[40px] ">Akali</h3>
        <p className="md:text-[30px]  text-[20px] mb-2">The Rogue Assassin</p>
        <ButtonComponent text={"Play Now"} />
      </div>

      <div className="absolute top-[30%] right-[10%] flex flex-col items-center text-white">
        <h3 className="md:text-[50px] text-[40px]">Thresh</h3>
        <p className="md:text-[30px]  text-[20px] mb-2">The Chain Warden</p>
        <ButtonComponent text={"Play Now"} />
      </div>

      <div className="absolute bottom-[35%] left-[20%] flex flex-col items-center text-white">
        <h3 className="md:text-[50px] text-[40px]">Jinx</h3>
        <p className="md:text-[30px]  text-[20px] mb-2">The Loose Cannon</p>
        <ButtonComponent text={"Play Now"} />
      </div>

      <div className="absolute bottom-[10%] right-[15%] flex flex-col items-center text-white">
        <h3 className="md:text-[50px] text-[40px]">Yasuo</h3>
        <p className="md:text-[30px]  text-[20px] mb-2">The Unforgiven</p>
        <ButtonComponent text={"Play Now"} />
      </div>
    </div>
  );
};

export default LeaderRanks;
