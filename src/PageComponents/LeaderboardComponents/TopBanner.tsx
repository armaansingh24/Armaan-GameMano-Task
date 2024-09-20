"use client";
import FadeInTransition from "@/animations/FadeInTransition";
import TextSlideFadeTransition from "@/animations/TextSlideFadeTransition";
import ButtonComponent from "@/PageComponents/CommonComponents/ButtonComponent";
import Image from "next/image";

const TopBanner = () => {
  return (
    <div className=" bg-[#2F2B22] h-full mt-14  flex w-full items-center justify-center relative ">
      <div className="p-4 max-w-[1200px] min-h-[500px] border-[#5B5A57]  relative  bg-[#352C24] ">
        <TextSlideFadeTransition>
          <div className="flex justify-start flex-col  items-start text-[#FFFFFFB3] text-sm mb-4">
            <div className=" bg-[#1E1E1E] md:text-sm text-xs p-2 flex-1  max-w-[350px] w-full ">
              RELEASE DATE : 30TH DECEMBER
            </div>
            <div className="flex items-center text-2xl">
              <span className="text-yellow-400">★★★★</span>
              <span className="text-yellow-400 opacity-50">★</span>
            </div>
          </div>
        </TextSlideFadeTransition>

        <FadeInTransition>
          <div className="">
            <div className="flex justify-center items-center mt-12">
              <h1 className="lg:text-[90px] sm:text-[70px] md:leading-[70px] text-[40px] sm:leading-[56px] leading-[40px]   text-[#FFE3C1] text-center ">
                LEAGUE OF LEGENDS
              </h1>
            </div>

            <div className="flex justify-center mt-12">
              <ButtonComponent text={"Try for free"} />
            </div>

            <div className="flex justify-center mt-4">
              <p className="text-[#FFFFFFB3] text-sm">
                <span className="text-green-500 mr-1">&#x2022;</span> 245k
                players already enrolled
              </p>
            </div>
          </div>
        </FadeInTransition>
        <div className="flex  gap-3 items-center whitespace-nowrap md:text-sm text-xs absolute bottom-0 right-16">
          <span>Availeble on:</span>

          <Image
            src={"os.svg"}
            alt=""
            className="md:w-[90px] md:h-[90px] w-[50px] h-[50px] "
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
