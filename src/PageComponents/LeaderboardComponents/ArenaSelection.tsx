const ArenaSelection = () => {
  return (
    <div className="relative h-screen w-full bg-[#2a221a] flex items-center justify-center ">
      <div className="w-3/4  h-4/5 bg-[#1d1711] lg:flex-row flex-col  rounded-lg flex justify-center items-center gap-10 lg:justify-between p-12">
        <div className="flex flex-col justify-center">
          <h2 className="lg:text-[26px] md:text-[20px] text-base font-aoboshiOne text-[#d4af7a]  font-bold tracking-wide mb-4">
            CHOOSE FROM MULTIPLE
          </h2>
          <h1 className="md:text-[70px]  md:leading-[70px] text-[40px] font-aoboshiOne text-[#e8c48f] font-bold tracking-widest mb-8">
            ARENAS
          </h1>
          <p className="text-white opacity-80  max-w-lg text-sm">
            Battle across an icy bridge as your team of random champions charge
            toward the enemy Nexus in this chaotically fun 5v5 game mode.
          </p>
        </div>

        <div className="flex items-center ">
          <div className="relative flex justify-center items-center z-20 mr-10 ">
            <div className="md:w-[200px] md:h-[200px] w-[160px] h-[160px]  lg:w-[300px] lg:h-[300px] outline-offset-8 outline-2 outline-[#A7A5A2] outline-dashed border-[#e8c48f] bg-black rounded-full"></div>
          </div>

          <div className="flex flex-col justify-center gap-6 whitespace-nowrap">
            <div className="flex items-center space-x-4">
              <div className="sm:w-16 sm:h-16 w-10 h-10  lg:w-20 lg:h-20  border-2 border-[#e8c48f]"></div>
              <span className="text-white text-lg">Arena 1</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="sm:w-16 sm:h-16 w-10 h-10  lg:w-20 lg:h-20  border-2 border-[#e8c48f]"></div>
              <span className="text-white text-lg">Arena 2</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="sm:w-16 sm:h-16 w-10 h-10  lg:w-20 lg:h-20  border-2 border-[#e8c48f]"></div>
              <span className="text-white text-lg">Arena 3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArenaSelection;
