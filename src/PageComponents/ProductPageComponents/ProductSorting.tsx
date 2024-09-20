"use client";
import Image from "next/image";
import { useState } from "react";

interface DropdownMenuProps {
  text: string;
  selectedOption: string;
  onSelect: (option: string) => void;
}

interface ProductSortingProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const ProductSorting: React.FC<ProductSortingProps> = ({
  selectedOption,
  setSelectedOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    "Release date: Old to New",
    "Release date: New to Old",
    "Price: Low to High",
    "Price: High to Low",
  ];

  return (
    <div className="relative inline-block text-left">
      <div
        onClick={toggleDropdown}
        className="flex items-center gap-2 border rounded-full p-2 cursor-pointer"
      >
        <span className="text-sm whitespace-nowrap">Sort by</span>
        <Image src={"bottom-arrow.svg"} alt="" width={8} height={8} />
      </div>

      {isOpen && (
        <div className="absolute right-0 z-20 w-56 mt-2 origin-top-right bg-[--background] divide-y divide-gray-700 rounded-xl shadow-lg">
          <div className="py-4 mx-2">
            {options.map((option) => (
              <DropdownMenu
                key={option}
                text={option}
                selectedOption={selectedOption}
                onSelect={handleOptionSelect}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  text,
  selectedOption,
  onSelect,
}) => (
  <button
    onClick={() => onSelect(text)}
    className={`px-4 py-2 rounded-sm text-sm w-full text-left whitespace-nowrap ${
      selectedOption === text
        ? "bg-orange-500 text-white"
        : "text-white hover:bg-gray-700"
    }`}
  >
    {text}
  </button>
);

export default ProductSorting;
