import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet replace /> : <Navigate to="/" replace />;
};
