import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { registerUser } from "../../services/authService";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
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
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        full_name: formData.full_name,
        email: formData.email,
        password: formData.password,
      });

      alert(
        "Registration Successful. Please login."
      );

      navigate("/login");
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <section
        className="
          min-h-[80vh]
          flex
          items-center
          justify-center
          bg-[#FFF6E8]
          px-6
          py-20
        "
      >
        <div
          className="
            w-full
            max-w-md
            bg-white
            rounded-[32px]
            shadow-sm
            p-10
          "
        >
          <p
            className="
              uppercase
              tracking-[5px]
              text-sm
              text-[#1A5C5A]
              mb-3
            "
          >
            Join Ellvia
          </p>

          <h1
            className="
              text-4xl
              font-semibold
              text-[#1A5C5A]
            "
          >
            Create Account
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <div>
              <label className="block mb-2 text-[#1A5C5A]">
                Full Name
              </label>

              <input
                type="text"
                name="full_name"
                required
                value={formData.full_name}
                onChange={handleChange}
                className="
                  w-full
                  px-5
                  py-4
                  border
                  border-gray-300
                  rounded-full
                  outline-none
                  focus:border-[#1A5C5A]
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-[#1A5C5A]">
                Email
              </label>

              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full
                  px-5
                  py-4
                  border
                  border-gray-300
                  rounded-full
                  outline-none
                  focus:border-[#1A5C5A]
                "
              />
            </div>

            <div>
              <label className="block mb-2 text-[#1A5C5A]">
                Password
              </label>

              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="
                  w-full
                  px-5
                  py-4
                  border
                  border-gray-300
                  rounded-full
                  outline-none
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
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className="
                  w-full
                  px-5
                  py-4
                  border
                  border-gray-300
                  rounded-full
                  outline-none
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
                ? "Creating Account..."
                : "Register"}
            </button>
          </form>

          <p
            className="
              mt-6
              text-center
              text-gray-600
            "
          >
            Already have an account?{" "}
            <Link
              to="/login"
              className="
                text-[#1A5C5A]
                font-medium
              "
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default Register;