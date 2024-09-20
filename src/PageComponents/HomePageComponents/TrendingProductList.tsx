"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ProductCard from "../CommonComponents/ProductCard";
import { fetchProductsByCategory } from "@/Redux/slices/productsSlice";
import { RootState, AppDispatch } from "@/Redux/store";

const TrendingProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    dispatch(
      fetchProductsByCategory([
        "https://dummyjson.com/products/category/Beauty",
      ])
    );
  }, [dispatch]);

  if (isLoading) return <h1 className="text-center">Loading...</h1>;
  if (error) return <h1 className="text-center">Error loading products</h1>;

  return (
    <div className="flex gap-4 flex-wrap w-full justify-center items-center">
      {products.map((product, i) => (
        <Link
          href={`/product-store/${product.id}`}
          prefetch={true}
          key={product.id}
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
  );
};

export default TrendingProductList;
