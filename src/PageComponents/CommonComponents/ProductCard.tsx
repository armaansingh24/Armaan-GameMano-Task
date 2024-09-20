interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    rating: number;
    images: string[];
    thumbnail: string;
    availabilityStatus: string;
    description: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card border p-4 rounded-lg bg-[#FEF3BC] w-[15rem] h-[30rem]">
      <img
        src={product.thumbnail || product.images[0]}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg font-semibold mt-2 text-[#281E1F]">
        {product.title}
      </h2>
      <p className="text-sm text-[#281E1F]">{product.description}</p>
      <div className="flex justify-between items-center mt-3">
        <span className="text-orange-500 font-bold">${product.price}</span>
        <span className="text-sm text-[#281E1F]">
          {product.availabilityStatus}
        </span>
      </div>
      <div className="mt-2">
        <span className="text-yellow-500">⭐ {product.rating}</span>
      </div>
    </div>
  );
};

export default ProductCard;
