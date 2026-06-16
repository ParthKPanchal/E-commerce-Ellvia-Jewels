import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout";
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    try {
      setLoading(true);

      const data =
        await loginUser(formData);

      localStorage.setItem(
        "token",
        data.token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      );

      alert("Login Successful");

      if (
        data.user?.role === "admin"
      ) {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error: any) {
      console.error(error);

      alert(
        error?.response?.data
          ?.message ||
          "Login Failed"
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
            Welcome Back
          </p>

          <h1
            className="
              text-4xl
              font-semibold
              text-[#1A5C5A]
            "
          >
            Login
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
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
                ? "Logging In..."
                : "Login"}
            </button>
          </form>

          <p
            className="
              mt-6
              text-center
              text-gray-600
            "
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              className="
                text-[#1A5C5A]
                font-medium
              "
            >
              Register
            </Link>
          </p>
        </div>
      </section>
    </MainLayout>
  );
}

export default Login;