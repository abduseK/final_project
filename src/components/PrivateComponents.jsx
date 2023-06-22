import { Navigate, Outlet } from "react-router-dom";

export default function PrivateComponents() {
  const auth = localStorage.getItem("user");
  return auth ? <Outlet /> : <Navigate to="/users/auth" />;
}
