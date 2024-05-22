import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./contexts/auth";

export function PrivateRoute({ element }: { element: JSX.Element }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    element
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}
export default PrivateRoute;
