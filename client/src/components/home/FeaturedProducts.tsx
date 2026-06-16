import { useEffect, useState } from "react";
import { getProducts } from "../../services/productService";
import ProductCard from "../ui/ProductCard";
import type { Product } from "../../types/product";

function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data.products.slice(0, 6));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A]">
            Featured Collection
          </p>

          <h2 className="text-5xl font-semibold text-[#1A5C5A] mt-4">
            Best Sellers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedProducts;