import MainLayout from "../../layouts/MainLayout";
import { Link } from "react-router-dom";
function Profile() {
  const user = JSON.parse(
    localStorage.getItem("user") || "null"
  );

  return (
    <MainLayout>
      <section className="bg-[#FFF6E8] min-h-screen py-20">

        <div className="max-w-5xl mx-auto px-6">

          <h1 className="text-5xl font-semibold text-[#1A5C5A] mb-10">
            My Profile
          </h1>

          <div
            className="
              bg-white
              rounded-[30px]
              p-10
              shadow-sm
            "
          >
            <div className="space-y-8">

              <div>
                <p className="text-sm text-gray-500">
                  Full Name
                </p>

                <h2 className="text-xl font-medium text-[#1A5C5A]">
                  {user?.full_name || "N/A"}
                </h2>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <h2 className="text-xl font-medium text-[#1A5C5A]">
                  {user?.email || "N/A"}
                </h2>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Role
                </p>

                <h2 className="text-xl font-medium capitalize text-[#1A5C5A]">
                  {user?.role || "User"}
                </h2>
              </div>

            </div>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">

            <a
              href="/orders"
              className="
                bg-[#1A5C5A]
                text-white
                px-8
                py-4
                rounded-full
              "
            >
              My Orders
            </a>

            <Link to="/change-password"
              className="
                border
                border-[#1A5C5A]
                text-[#1A5C5A]
                px-8
                py-4
                rounded-full
              "
            >
              Change Password
            </Link>

          </div>

        </div>

      </section>
    </MainLayout>
  );
}

export default Profile;