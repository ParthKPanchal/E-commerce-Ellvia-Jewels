import { Navigate } from "react-router-dom";

interface AdminRouteProps {
  children: React.ReactNode;
}

function AdminRoute({
  children,
}: AdminRouteProps) {
  const token =
    localStorage.getItem("token");

  const user = JSON.parse(
    localStorage.getItem("user") ||
      "null"
  );

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (user?.role !== "admin") {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}

export default AdminRoute;