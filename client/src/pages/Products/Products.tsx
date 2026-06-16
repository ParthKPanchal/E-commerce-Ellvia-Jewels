import { useEffect, useMemo, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import ProductCard from "../../components/ui/ProductCard";
import { getProducts } from "../../services/productService";
import type { Product } from "../../types/product";

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [selectedMaterial, setSelectedMaterial] =
    useState("All");

  const [selectedPrice, setSelectedPrice] =
    useState("All");

  const [sortBy, setSortBy] =
    useState("default");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();

      setProducts(data.products || []);
    } catch (error) {
      console.error(error);
    }
  };

  const categories = useMemo(() => {
    const unique = [
      ...new Set(
        products.map((p) => p.category)
      ),
    ];

    return ["All", ...unique];
  }, [products]);

  const materials = useMemo(() => {
    const unique = [
      ...new Set(
        products
          .map((p) => p.material)
          .filter(Boolean)
      ),
    ];

    return ["All", ...unique];
  }, [products]);

  const filteredProducts = products
    .filter((product) =>
      product.product_name
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory
    )
    .filter((product) =>
      selectedMaterial === "All"
        ? true
        : product.material === selectedMaterial
    )
    .filter((product) => {
      const price = Number(product.price);

      if (selectedPrice === "1000-2000") {
        return price >= 1000 && price <= 2000;
      }

      if (selectedPrice === "2000-3000") {
        return price >= 2000 && price <= 3000;
      }

      if (selectedPrice === "3000+") {
        return price > 3000;
      }

      return true;
    });

  const sortedProducts = [...filteredProducts];

  if (sortBy === "low") {
    sortedProducts.sort(
      (a, b) =>
        Number(a.price) -
        Number(b.price)
    );
  }

  if (sortBy === "high") {
    sortedProducts.sort(
      (a, b) =>
        Number(b.price) -
        Number(a.price)
    );
  }

  return (
    <MainLayout>

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">

            <p className="uppercase tracking-[5px] text-sm text-[#1A5C5A] mb-3">
              Shop Collection
            </p>

            <h1 className="text-5xl font-semibold text-[#1A5C5A]">
              Everyday Jewellery
            </h1>

          </div>

          <div className="grid lg:grid-cols-[250px_1fr] gap-14">

            {/* Sidebar */}

            <aside className="space-y-10">

              {/* Category */}

              <div>

                <h3 className="text-xl font-semibold text-[#1A5C5A] mb-5">
                  Categories
                </h3>

                <div className="space-y-3">

                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() =>
                        setSelectedCategory(category)
                      }
                      className={`block px-4 py-2 rounded-full transition ${
                        selectedCategory === category
                          ? "bg-[#1A5C5A] text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {category}
                    </button>
                  ))}

                </div>

              </div>

              {/* Material */}

              <div>

                <h3 className="text-xl font-semibold text-[#1A5C5A] mb-5">
                  Material
                </h3>

                <div className="space-y-3">

                  {materials.map((material) => (
                    <button
                      key={material}
                      onClick={() =>
                        setSelectedMaterial(material)
                      }
                      className={`block px-4 py-2 rounded-full transition ${
                        selectedMaterial === material
                          ? "bg-[#1A5C5A] text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {material}
                    </button>
                  ))}

                </div>

              </div>

              {/* Price */}

              <div>

                <h3 className="text-xl font-semibold text-[#1A5C5A] mb-5">
                  Price
                </h3>

                <div className="space-y-3">

                  {[
                    "All",
                    "1000-2000",
                    "2000-3000",
                    "3000+",
                  ].map((price) => (
                    <button
                      key={price}
                      onClick={() =>
                        setSelectedPrice(price)
                      }
                      className={`block px-4 py-2 rounded-full transition ${
                        selectedPrice === price
                          ? "bg-[#1A5C5A] text-white"
                          : "text-gray-700"
                      }`}
                    >
                      {price}
                    </button>
                  ))}

                </div>

              </div>

            </aside>

            {/* Products */}

            <div>

              <div className="flex flex-col lg:flex-row gap-5 lg:items-center lg:justify-between mb-10">

                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="
                    border
                    border-gray-300
                    bg-transparent
                    px-5
                    py-3
                    rounded-full
                    outline-none
                    w-full
                    lg:max-w-sm
                  "
                />

                <div className="flex items-center justify-between lg:justify-end gap-5">

                  <p className="text-gray-700">
                    Showing {sortedProducts.length} products
                  </p>

                  <select
                    value={sortBy}
                    onChange={(e) =>
                      setSortBy(e.target.value)
                    }
                    className="
                      border
                      border-gray-300
                      bg-transparent
                      px-4
                      py-3
                      rounded-full
                      outline-none
                    "
                  >
                    <option value="default">
                      Sort By
                    </option>

                    <option value="low">
                      Price Low to High
                    </option>

                    <option value="high">
                      Price High to Low
                    </option>

                  </select>

                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

                {sortedProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Products;