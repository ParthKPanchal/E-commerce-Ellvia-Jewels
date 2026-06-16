import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../api/axios";

function ChangePassword() {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (
      formData.newPassword !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const token =
        localStorage.getItem("token");

      const response = await api.put(
        "/auth/change-password",
        {
          oldPassword:
            formData.oldPassword,
          newPassword:
            formData.newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      setFormData({
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Failed to change password"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section className="bg-[#FFF6E8] min-h-screen py-20">

        <div className="max-w-2xl mx-auto px-6">

          <h1 className="text-5xl font-semibold text-[#1A5C5A] mb-10">
            Change Password
          </h1>

          <div className="bg-white rounded-[30px] p-10">

            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div>
                <label className="block mb-2 text-[#1A5C5A]">
                  Current Password
                </label>

                <input
                  type="password"
                  name="oldPassword"
                  value={formData.oldPassword}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-full
                    px-5
                    py-4
                    focus:outline-none
                    focus:border-[#1A5C5A]
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-[#1A5C5A]">
                  New Password
                </label>

                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-full
                    px-5
                    py-4
                    focus:outline-none
                    focus:border-[#1A5C5A]
                  "
                />
              </div>

              <div>
                <label className="block mb-2 text-[#1A5C5A]">
                  Confirm Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="
                    w-full
                    border
                    border-gray-300
                    rounded-full
                    px-5
                    py-4
                    focus:outline-none
                    focus:border-[#1A5C5A]
                  "
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
                  bg-[#1A5C5A]
                  text-white
                  py-4
                  rounded-full
                  hover:opacity-90
                  transition
                "
              >
                {loading
                  ? "Updating..."
                  : "Update Password"}
              </button>

            </form>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}

export default ChangePassword;