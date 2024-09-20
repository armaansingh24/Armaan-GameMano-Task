const LeaderboardDescription = () => {
  return (
    <div className="my-16 p-4 px-10 prostoOne max-w-[1200px] ">
      <div className=" flex flex-col items-start gap-4 text-sm  pb-8">
        <p>
          Wild Rift! Built from the ground up for mobile-first PvP, Wild Rift is
          a 5v5 multiplayer online battle arena (MOBA) game with exciting action
          where your skills, strategy, and combat senses are put to the test.
          Wild Rift is packed with content and fresh features for the ultimate
          PvP multiplayer experience.{" "}
        </p>
        <p>
          Enjoy fast-paced MOBA combat, real-time strategy, smooth controls, and
          diverse 5v5 gameplay. Team up with friends, lock in your champion, and
          play to win!
        </p>
      </div>

      <div className=" flex flex-col items-start gap-2  ">
        <div className="tracking-[10px] font-bold text-[#FFE3C1]">
          <h3 className="md:text-[26px] text-[20px] ">CHOOSE YOUR</h3>
          <h2 className="md:text-[70px] md:leading-[70px] text-[40px] sm:leading-[56px] leading-[40px] ">
            CHAMPION
          </h2>
        </div>

        <p className="mt-2 text-sm ">
          Whether you like to dive straight into the fray, support your
          teammates, or something in between, there’s a spot for you on the
          Rift.
        </p>
      </div>
    </div>
  );
};

export default LeaderboardDescription;
