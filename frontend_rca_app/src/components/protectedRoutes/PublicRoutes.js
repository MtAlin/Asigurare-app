import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const PublicRoutes = () => {
  const auth = useAuth();
  return auth ? <Navigate to="/" replace /> : <Outlet replace />;
};
