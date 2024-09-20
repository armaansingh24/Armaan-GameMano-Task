import Image from "next/image";
import ButtonComponent from "../CommonComponents/ButtonComponent";

const BuyNow: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 justify-start">
      <div className="flex items-center gap-2 md:gap-5 flex-wrap">
        <ButtonComponent text="Try For Free" />
        <div className="flex gap-3 items-center whitespace-nowrap md:text-sm text-xs">
          <span>Availeble on:</span>
          <Image
            src="/os.svg"
            alt="Operating Systems"
            className="md:w-[90px] md:h-[90px] w-[50px] h-[50px]"
            width={100}
            height={100}
          />
        </div>
      </div>
      <span className="md:text-sm text-xs whitespace-nowrap">
        Buy now for $40 only
      </span>
    </div>
  );
};

export default BuyNow;
