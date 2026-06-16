import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#FFF6E8] flex">

      {/* Sidebar */}

      <aside
        className="
          w-72
          bg-[#1A5C5A]
          text-white
          p-8
        "
      >
        <h1 className="text-3xl font-bold mb-12">
          Ellvia Admin
        </h1>

        <nav className="flex flex-col gap-5">

          <Link
            to="/admin"
            className="hover:opacity-80"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/products"
            className="hover:opacity-80"
          >
            Products
          </Link>

          <Link
            to="/admin/orders"
            className="hover:opacity-80"
          >
            Orders
          </Link>

          <Link
            to="/admin/users"
            className="hover:opacity-80"
          >
            Users
          </Link>

        </nav>

        <button
          onClick={handleLogout}
          className="
            mt-12
            border
            border-white
            px-4
            py-2
            rounded-full
          "
        >
          Logout
        </button>
      </aside>

      {/* Content */}

      <main className="flex-1 p-10">
        <Outlet />
      </main>

    </div>
  );
}

export default AdminLayout;