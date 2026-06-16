import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getProductById,
  updateProduct,
} from "../../services/productService";

function EditProduct() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(true);

  const [formData, setFormData] =
    useState({
      sku: "",
      product_name: "",
      description: "",
      price: "",
      category: "",
      material: "",
      finish_color: "",
      stone_type: "",
      size: "",
      occasion: "",
      style: "",
      stock: "",

      adjustable: false,
      waterproof: false,
      tarnish_resistant: false,

      is_bestseller: false,
      is_new_arrival: false,
      is_active: true,
    });

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      const data =
        await getProductById(id!);

      const product =
        data.product;

      setFormData({
        sku: product.sku || "",
        product_name:
          product.product_name || "",
        description:
          product.description || "",
        price: product.price || "",
        category:
          product.category || "",
        material:
          product.material || "",
        finish_color:
          product.finish_color || "",
        stone_type:
          product.stone_type || "",
        size: product.size || "",
        occasion:
          product.occasion || "",
        style:
          product.style || "",
        stock:
          product.stock?.toString() ||
          "",

        adjustable:
          !!product.adjustable,

        waterproof:
          !!product.waterproof,

        tarnish_resistant:
          !!product.tarnish_resistant,

        is_bestseller:
          !!product.is_bestseller,

        is_new_arrival:
          !!product.is_new_arrival,

        is_active:
          !!product.is_active,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const {
      name,
      value,
      type,
    } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (
              e.target as HTMLInputElement
            ).checked
          : value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await updateProduct(
        Number(id),
        formData
      );

      alert(
        "Product updated successfully"
      );

      navigate(
        "/admin/products"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to update product"
      );
    }
  };

  if (loading) {
    return (
      <div>
        Loading Product...
      </div>
    );
  }

  return (
    <div>

      <h1 className="text-4xl font-bold text-[#1A5C5A] mb-8">
        Edit Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="
          bg-white
          p-8
          rounded-[25px]
          space-y-5
        "
      >

        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={formData.product_name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="material"
          placeholder="Material"
          value={formData.material}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="finish_color"
          placeholder="Finish Color"
          value={formData.finish_color}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="stone_type"
          placeholder="Stone Type"
          value={formData.stone_type}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="size"
          placeholder="Size"
          value={formData.size}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="occasion"
          placeholder="Occasion"
          value={formData.occasion}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="text"
          name="style"
          placeholder="Style"
          value={formData.style}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
          className="w-full border p-3 rounded"
        />

        <button
          type="submit"
          className="
            bg-[#1A5C5A]
            text-white
            px-8
            py-3
            rounded-full
          "
        >
          Update Product
        </button>

      </form>

    </div>
  );
}

export default EditProduct;