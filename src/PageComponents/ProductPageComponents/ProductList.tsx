import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  emptyProduct,
  fetchProducts,
  fetchProductsByCategory,
} from "@/Redux/slices/productsSlice";
import { RootState, AppDispatch } from "@/Redux/store";
import ProductCard from "../CommonComponents/ProductCard";
import ProductSorting from "./ProductSorting";
import Link from "next/link";

interface ProductListProps {
  isShowAllProducts?: boolean;
  selectedCategories?: string[];
}

const ProductList: React.FC<ProductListProps> = ({
  isShowAllProducts,
  selectedCategories,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const { products, isLoading, total } = useSelector((state: RootState) => ({
    products: state.products.products,
    isLoading: state.products.isLoading,
    total: Number(state.products.total),
  }));

  const searchQuery = useSelector(
    (state: RootState) => state.search.searchQuery
  );

  const [selectedOption, setSelectedOption] = useState("");
  const [skip, setSkip] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (isShowAllProducts) {
      if (skip === 0) {
        dispatch(emptyProduct());
      }
      dispatch(fetchProducts(skip));
    } else if (selectedCategories && selectedCategories.length > 0) {
      dispatch(emptyProduct());
      dispatch(fetchProductsByCategory(selectedCategories));
      setSkip(0);
    }
  }, [dispatch, isShowAllProducts, selectedCategories, skip]);

  useEffect(() => {
    if (searchQuery === "") {
      if (isShowAllProducts) {
        dispatch(emptyProduct());
        dispatch(fetchProducts(0));
        setSkip(0);
      }
    }
  }, [searchQuery, isShowAllProducts, dispatch]);

  useEffect(() => {
    if (
      (products.length >= total && total > 0) ||
      (selectedCategories && selectedCategories.length > 0)
    ) {
      setHasMore(false);
    } else if (selectedCategories?.length === 0) {
      setHasMore(true);
    }
  }, [products.length, total, selectedCategories]);

  const handleScroll = () => {
    if (ref.current) {
      const scrollTop = ref.current.scrollTop;
      const scrollHeight = ref.current.scrollHeight;
      const clientHeight = ref.current.clientHeight;

      if (
        scrollTop + clientHeight >= scrollHeight - 10 &&
        hasMore &&
        !isLoading
      ) {
        setSkip((prevSkip) => prevSkip + 30);
      }
    }
  };

  useEffect(() => {
    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      return () => currentRef.removeEventListener("scroll", handleScroll);
    }
  }, [isLoading, hasMore]);

  const filteredProducts = searchQuery
    ? products.filter((product) => {
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
          product?.title?.toLowerCase().includes(lowerCaseQuery) ||
          product?.brand?.toLowerCase().includes(lowerCaseQuery) ||
          product?.category?.toLowerCase().includes(lowerCaseQuery) ||
          product?.availabilityStatus?.toLowerCase().includes(lowerCaseQuery)
        );
      })
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedOption === "Release date: Old to New") {
      return (
        new Date(a.meta.createdAt).getTime() -
        new Date(b.meta.createdAt).getTime()
      );
    } else if (selectedOption === "Release date: New to Old") {
      return (
        new Date(b.meta.createdAt).getTime() -
        new Date(a.meta.createdAt).getTime()
      );
    } else if (selectedOption === "Price: Low to High") {
      return a.price - b.price;
    } else if (selectedOption === "Price: High to Low") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  if (isLoading && products.length === 0) {
    return (
      <h2 className="h-full text-center text-primary text-lg">Loading...</h2>
    );
  }

  return (
    <>
      <div className="flex justify-between items-start">
        {searchQuery !== "" && (
          <div>
            <h4 className="text-lg mb-2 whitespace-nowrap">
              Search results for {searchQuery}
            </h4>
            <span className="text-sm text-gray-400 font-normal">
              {filteredProducts.length} results found
            </span>
          </div>
        )}
        <div className="flex justify-end items-end w-full">
          <ProductSorting
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div
        className="grid sm:grid-cols-2 lg:grid-cols-3 items-start place-items-center grid-cols-1 2xl:grid-cols-4 gap-y-8 gap-4 my-10 overflow-y-scroll h-[60rem] scrollbar-hide"
        ref={ref}
      >
        {sortedProducts.map((product) => (
          <Link
            href={`/product-store/${product.id}`}
            prefetch={true}
            key={product.id}
            className="my-10"
          >
            <ProductCard
              product={{
                id: product.id,
                title: product.title,
                price: product.price,
                rating: product.rating,
                images: product.images,
                thumbnail: product.thumbnail,
                availabilityStatus: product.availabilityStatus,
                description: product.description,
              }}
            />
          </Link>
        ))}
      </div>

      {isLoading && <h2 className="text-center">Loading more products...</h2>}
    </>
  );
};

export default ProductList;
