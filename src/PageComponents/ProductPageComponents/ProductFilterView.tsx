import Image from "next/image";
import FilterProduct from "./FilterProduct";
import ProductList from "./ProductList";
import { useState } from "react";

const ProductFilterView: React.FC = () => {
  const [isShowAllProducts, setIsShowAllProducts] = useState<boolean>(true);
  const [selectedCategories, setSelectedCategories] = useState<Array<string>>(
    []
  );
  const [isFilterSidebarVisible, setIsFilterSidebarVisible] =
    useState<boolean>(false);

  const handleToggleFilterSidebarMenu = (): void => {
    setIsFilterSidebarVisible((prev) => !prev);
  };

  const handleCategoryChange = (url: string) => {
    if (url === "all") {
      setIsShowAllProducts(true);
      setSelectedCategories([]);
      return;
    }
    setIsShowAllProducts(false);
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(url)
        ? prevCategories.filter((cat) => cat !== url)
        : [...prevCategories, url]
    );
  };

  return (
    <div className="flex gap-6 items-start relative">
      <div
        className={`md:block absolute left-0 md:relative z-[120] mt-14 md:mt-0 ${
          isFilterSidebarVisible ? "block" : "hidden"
        }`}
      >
        <FilterProduct
          selectedCategories={selectedCategories}
          handleCategoryChange={handleCategoryChange}
        />
      </div>

      <Image
        src="/filter-category.png"
        width={35}
        height={35}
        onClick={handleToggleFilterSidebarMenu}
        alt="Filter Category Icon"
        className="md:hidden cursor-pointer"
      />

      <div className="w-full">
        <ProductList
          isShowAllProducts={isShowAllProducts}
          selectedCategories={selectedCategories}
        />
      </div>
    </div>
  );
};

export default ProductFilterView;
