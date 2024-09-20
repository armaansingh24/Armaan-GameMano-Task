"use client";
import Image from "next/image";
import { ChangeEvent, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setSearchQuery } from "@/Redux/slices/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInputValue(value);
  }

  useEffect(() => {
    dispatch(setSearchQuery(inputValue));
  }, [inputValue, dispatch]);

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/product-store");
  };

  return (
    <div>
      <form
        className="border-2 border-[#757473] flex items-center p-3 pl-4 rounded-3xl w-[300px]"
        onClick={handleClick}
      >
        <Image src="/search.svg" width={18} height={18} alt="Search icon" />
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="border-none outline-none bg-inherit text-sm w-full px-4"
          type="text"
          placeholder="What are you looking for?"
        />
      </form>
    </div>
  );
};

export default SearchBar;
