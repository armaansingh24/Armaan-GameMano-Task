import GameCard from "./GameCard";


const GamesList = () => {
  const games = [
    { name: "World of Warcraft", releaseDate: "10th August 2022", price: 48 },
    { name: "The Witcher", releaseDate: "10th August 2022", price: 48 },
    { name: "Horizon", releaseDate: "10th August 2022", price: 48 },
    { name: "Valorant", releaseDate: "10th August 2022", price: 48 },
  ];

  return (
    <div className="bg-black p-8 w-full py-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-white md:text-3xl font-bold sm:text-lg">
          Games recommended for you
        </h1>
        <a href="#" className="text-white md:text-lg text-sm whitespace-nowrap">
          VIEW ALL →
        </a>
      </div>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
        {games.map((game, index) => (
          <GameCard key={index} game={game} />
        ))}
      </div>
    </div>
  );
};

export default GamesList;

