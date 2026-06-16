import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/productService";

function AddProduct() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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
    is_new_arrival: true,
    is_active: true,
  });

  const [images, setImages] =
    useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement)
              .checked
          : value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      const payload =
        new FormData();

      Object.entries(formData).forEach(
        ([key, value]) => {
          payload.append(
            key,
            String(value)
          );
        }
      );

      images.forEach((image) => {
        payload.append(
          "images",
          image
        );
      });

      await createProduct(payload);

      alert(
        "Product created successfully"
      );

      navigate("/admin/products");
    } catch (error) {
      console.error(error);

      alert(
        "Failed to create product"
      );
    }
  };

  return (
    <div>
      <h1 className="text-4xl font-bold text-[#1A5C5A] mb-8">
        Add Product
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-[25px] space-y-5"
      >
        <input
          type="text"
          name="sku"
          placeholder="SKU"
          value={formData.sku}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />

        <input
          type="text"
          name="product_name"
          placeholder="Product Name"
          value={formData.product_name}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
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
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
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

        <div className="grid md:grid-cols-2 gap-4">
          <label>
            <input
              type="checkbox"
              name="adjustable"
              checked={formData.adjustable}
              onChange={handleChange}
            />
            <span className="ml-2">
              Adjustable
            </span>
          </label>

          <label>
            <input
              type="checkbox"
              name="waterproof"
              checked={formData.waterproof}
              onChange={handleChange}
            />
            <span className="ml-2">
              Waterproof
            </span>
          </label>

          <label>
            <input
              type="checkbox"
              name="tarnish_resistant"
              checked={
                formData.tarnish_resistant
              }
              onChange={handleChange}
            />
            <span className="ml-2">
              Tarnish Resistant
            </span>
          </label>

          <label>
            <input
              type="checkbox"
              name="is_bestseller"
              checked={
                formData.is_bestseller
              }
              onChange={handleChange}
            />
            <span className="ml-2">
              Bestseller
            </span>
          </label>

          <label>
            <input
              type="checkbox"
              name="is_new_arrival"
              checked={
                formData.is_new_arrival
              }
              onChange={handleChange}
            />
            <span className="ml-2">
              New Arrival
            </span>
          </label>

          <label>
            <input
              type="checkbox"
              name="is_active"
              checked={
                formData.is_active
              }
              onChange={handleChange}
            />
            <span className="ml-2">
              Active
            </span>
          </label>
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Product Images
          </label>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => {
              if (e.target.files) {
                setImages(
                  Array.from(
                    e.target.files
                  )
                );
              }
            }}
          />
        </div>

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
          Create Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;