import type { Product } from "../../types/product";
import { Link } from "react-router-dom";
interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`} className="block">
      <div
        className="
      bg-white
      rounded-[24px]
      overflow-hidden
      shadow-sm
      hover:shadow-lg
      transition
    "
      >
        <img
          src={`http://localhost:5000/uploads/products/${product.primary_image}`}
          alt={product.product_name}
          className="w-full h-72 object-cover"
        />

        <div className="p-5">
          <h3 className="text-[#1A5C5A] font-semibold text-lg">
            {product.product_name}
          </h3>

          <p className="text-gray-500 mt-2">{product.category}</p>

          <p className="text-[#1A5C5A] font-bold mt-3">₹ {product.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
