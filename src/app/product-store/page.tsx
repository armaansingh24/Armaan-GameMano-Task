"use client";
import Topbar from "@/LayoutComponents/TopbarComponents/Topbar";
import ProductPage from "@/PageComponents/ProductPageComponents/ProductPage";

const ProductStore = () => {
  return (
    <>
      <Topbar width={"w-full"} />
      <ProductPage />
    </>
  );
};

export default ProductStore;
