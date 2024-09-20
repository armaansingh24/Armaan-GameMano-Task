import Image from "next/image";
import React from "react";

const Reviews = () => {

  return (
    <div className="bg-[#1a1917] py-16 w-full ">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white md:text-3xl text-lg">
            Reviews from other top players
          </h2>
          <div className="flex items-center">
            <span className="text-white hover:underline whitespace-nowrap text-sm md:text-base">View All</span>
            <Image src={"arrow-right.svg"} alt="" width={18} height={18} />
          </div>
        </div>

        <div className="flex gap-6 overflow-x-scroll scrollbar-hide">
          {[...Array(5)].map((review, i) => (
            <div
              key={i}
              className="bg-[#DAB785] rounded-lg p-6  shadow-md"
            >
              <div className="flex items-center mb-2">
                <div className="border-gray-500 border-2  w-12 h-12 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-black">Gamer1568</p>
                  <div className="flex">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={
                          index < 4
                            ? "text-yellow-600 text-2xl"
                            : "text-gray-300 text-2xl"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm md:text-base">Suspendisse tristique cursus viverra eu ac ac arcu integer. Et dolor aliquam nisi lacinia commodo facilisis tortor lobortis malesuada. Id nibh nisl convallis odio dui</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
