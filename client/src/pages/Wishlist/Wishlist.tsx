import { useEffect, useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import {
  getWishlist,
  removeFromWishlist,
} from "../../services/wishlistService";

interface WishlistItem {
  id: number;
  product_id: number;
  product_name: string;
  price: number;
  category: string;
  image_url: string | null;
}

function Wishlist() {
  const [items, setItems] =
    useState<WishlistItem[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      const data =
        await getWishlist();

      setItems(data.wishlist);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (
    id: number
  ) => {
    try {
      await removeFromWishlist(id);

      fetchWishlist();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <section className="bg-[#FFF6E8] min-h-screen py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-5xl font-semibold text-[#1A5C5A] mb-10">
            Wishlist
          </h1>

          {loading ? (
            <p>Loading...</p>
          ) : items.length === 0 ? (
            <div className="bg-white rounded-[30px] p-10">
              Your wishlist is empty.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {items.map((item) => (
                <div
                  key={item.id}
                  className="
                    bg-white
                    rounded-[30px]
                    overflow-hidden
                  "
                >
                  <img
                    src={
                      item.image_url
                        ? `http://localhost:5000/uploads/${item.image_url}`
                        : "https://placehold.co/600x600"
                    }
                    alt={item.product_name}
                    className="
                      w-full
                      h-72
                      object-cover
                    "
                  />

                  <div className="p-6">

                    <h3 className="text-xl font-semibold text-[#1A5C5A]">
                      {item.product_name}
                    </h3>

                    <p className="mt-2 text-gray-500">
                      {item.category}
                    </p>

                    <p className="mt-3 font-medium">
                      ₹ {item.price}
                    </p>

                    <button
                      onClick={() =>
                        handleRemove(item.id)
                      }
                      className="
                        mt-5
                        text-red-500
                      "
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}

            </div>
          )}

        </div>

      </section>
    </MainLayout>
  );
}

export default Wishlist;