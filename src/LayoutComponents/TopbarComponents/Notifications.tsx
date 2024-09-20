import React from "react";

const Notifications = () => {
  return (
    <div className="absolute bg-[--background] rounded-2xl p-4 w-[350px] right-4 top-14 px-6">
      <h3 className="mb-2 text-center text-lg text-white">Notifications</h3>
      <div className="flex flex-col justify-start gap-3">
        <div>
          <div className="text-primary">New Feature Alert!</div>
          <p className="text-xs text-gray-300">
            🚀 Check out the latest updates! We’ve introduced new tools to
            enhance your experience. Explore them now!
          </p>
        </div>
        <div>
          <div className="text-primary">Daily Rewards</div>
          <p className="text-xs text-gray-300">
            🎁 Don’t forget to claim your daily rewards! Log in to receive
            exclusive bonuses and boost your progress.
          </p>
        </div>
        <div>
          <div className="text-primary">Upcoming Event</div>
          <p className="text-xs text-gray-300">
            📅 Mark your calendar! A special in-game event is coming soon. Get
            ready for amazing challenges and rewards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
