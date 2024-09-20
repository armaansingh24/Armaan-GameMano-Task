import GamesShow from "../CommonComponents/GamesShow";
import ProductFilterView from "./ProductFilterView";

const ProductPage = () => {
  return (
    <div className="px-8 py-4 relative flex flex-col gap-10 bg-[#15140F]">
      <ProductFilterView />
      <GamesShow />
    </div>
  );
};

export default ProductPage;
