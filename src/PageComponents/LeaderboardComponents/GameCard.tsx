const GameCard = ({ game }) => {
    return (
      <div className="bg-[#FEF3BC] p-4 rounded-lg w-72 mx-2 text-black min-w-[280px]">
        <div className="flex justify-between items-center mb-2">
          <div className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm flex items-center justify-start gap-2 ">
            <div className="bg-green-500 shadow-md shadow-green-500 w-2 h-2 rounded-full  "></div>
           <span className="text-xs md:text-base"> 1200 Online</span>
          </div>
        </div>
        <h2 className="md:text-2xl font-bold mb-2 text-base">{game.name}</h2>
        <div className="flex items-center mb-2">
          <span className="text-yellow-500 text-sm  md:text-lg">★★★★☆</span>
        </div>
        <p className="text-gray-600 mb-2 text-xs md:text-base">
          10k+ Players • <span className="text-red-600">Action</span> •{" "}
          <span className="text-red-600">Adventure</span>
        </p>
        <p className="text-gray-500 mb-4  text-xs md:text-base">Released {game.releaseDate}</p>
        <div className="flex justify-between items-center">
          <p className="md:text-2xl font-bold  text-sm">${game.price}</p>
          <button className="bg-yellow-400  text-xs md:text-bas text-white px-4 py-2 rounded-md hover:bg-yellow-500">
            Buy Now
          </button>
        </div>
      </div>
    );
  };
  

  export default GameCard;