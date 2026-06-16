import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getProducts,
  deleteProduct,
} from "../../services/productService";

interface Product {
  id: number;
  sku: string;
  product_name: string;
  category: string;
  price: number;
  primary_image?: string;
}

function AdminProducts() {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data =
        await getProducts();

      setProducts(data.products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (
    id: number
  ) => {
    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this product?"
      );

    if (!confirmDelete) return;

    try {
      await deleteProduct(id);

      alert(
        "Product deleted successfully"
      );

      loadProducts();
    } catch (error) {
      console.error(error);

      alert("Delete failed");
    }
  };

  return (
    <div>

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold text-[#1A5C5A]">
          Product Management
        </h1>

        <Link
          to="/admin/products/add"
          className="
            bg-[#1A5C5A]
            text-white
            px-6
            py-3
            rounded-full
          "
        >
          + Add Product
        </Link>

      </div>

      <div className="bg-white rounded-[25px] overflow-hidden shadow-sm">

        {loading ? (
          <div className="p-8">
            Loading...
          </div>
        ) : (

          <table className="w-full">

            <thead>

              <tr className="bg-gray-50 border-b">

                <th className="p-4 text-left">
                  ID
                </th>

                <th className="p-4 text-left">
                  SKU
                </th>

                <th className="p-4 text-left">
                  Product
                </th>

                <th className="p-4 text-left">
                  Category
                </th>

                <th className="p-4 text-left">
                  Price
                </th>

                <th className="p-4 text-left">
                  Actions
                </th>

              </tr>

            </thead>

            <tbody>

              {products.map((product) => (

                <tr
                  key={product.id}
                  className="border-b"
                >

                  <td className="p-4">
                    {product.id}
                  </td>

                  <td className="p-4">
                    {product.sku}
                  </td>

                  <td className="p-4">
                    {product.product_name}
                  </td>

                  <td className="p-4">
                    {product.category}
                  </td>

                  <td className="p-4">
                    ₹ {product.price}
                  </td>

                  <td className="p-4 flex gap-3">

                    <Link
                      to={`/admin/products/edit/${product.id}`}
                      className="
                        px-4
                        py-2
                        border
                        rounded-full
                      "
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(
                          product.id
                        )
                      }
                      className="
                        px-4
                        py-2
                        bg-red-500
                        text-white
                        rounded-full
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </div>
  );
}

export default AdminProducts;