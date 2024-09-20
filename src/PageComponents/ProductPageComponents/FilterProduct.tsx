"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/Redux/slices/productsSlice";
import { RootState, AppDispatch } from "@/Redux/store";

interface FilterProductProps {
  selectedCategories: string[];
  handleCategoryChange: (category: string) => void;
}

const FilterProduct: React.FC<FilterProductProps> = ({
  selectedCategories,
  handleCategoryChange,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const { categories, isLoading } = useSelector((state: RootState) => ({
    categories: state.products.categories,
    isLoading: state.products.isLoading,
  }));

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleCategoryClick = (category: string) => {
    handleCategoryChange(category);
  };

  if (isLoading && selectedCategories.length) return <h1>Loading...</h1>;

  return (
    <div className="bg-[#362F25] p-6 mt-2 rounded-lg w-[300px] shadow-lg shadow-[#201f1f]">
      <div>
        <h3 className="text-white font-medium mb-4">All</h3>
        <label className="flex items-center mb-3 text-white">
          <input
            type="checkbox"
            name="all"
            onChange={() => handleCategoryClick("all")}
            checked={selectedCategories.length === 0}
            className="appearance-none h-4 w-4 border border-[#5B5A57] rounded-[4px] checked:bg-orange-500 checked:border-orange-500 focus:ring-1 focus:ring-orange-300"
          />
          <span className="ml-2 font-light text-sm">All</span>
        </label>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-white font-medium mb-4">Categories</h3>
        {categories.map((category) => (
          <label
            key={category.slug}
            className="flex items-center mb-3 text-white"
          >
            <input
              type="checkbox"
              name={category.slug}
              onChange={() => handleCategoryChange(category.url)}
              checked={selectedCategories.includes(category.url)}
              className="appearance-none h-4 w-4 border border-[#5B5A57] rounded-[4px] checked:bg-orange-500 checked:border-orange-500 focus:ring-1 focus:ring-orange-300"
            />
            <span className="ml-2 font-light text-sm">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterProduct;
