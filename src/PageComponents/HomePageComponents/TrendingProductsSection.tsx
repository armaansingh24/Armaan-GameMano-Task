import Image from "next/image";
import Link from "next/link";
import TrendingProductList from "./TrendingProductList";

const TrendingProductsSection = () => {
  return (
    <div className="bg-[#2E2616] sm:p-10 p-6 py-10 rounded-lg overflow-hidden ">
      <div className="flex flex-col justify-start gap-4">
        <div className="flex justify-between md:flex-row flex-col items-center">
          <div className="font-pressStart2 lg:text-4xl md:text-2xl text-base sm:text-xl whitespace-nowrap text-[#DAB785]">
            MOST TRENDING
          </div>

          <Link
            href="product-store"
            className="flex justify-end items-center gap-2 uppercase text-white text-lg hover:text-orange-300"
          >
            <span className="lg:text-sm text-xs">GO TO GAME STORE</span>
            <Image src={"arrow-right.svg"} alt="" width={30} height={20} />
          </Link>
        </div>
        <TrendingProductList />
      </div>
    </div>
  );
};

export default TrendingProductsSection;
