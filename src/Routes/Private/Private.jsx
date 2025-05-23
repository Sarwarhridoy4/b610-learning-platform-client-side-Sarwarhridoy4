import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import Loading from "../../Loading/Loading";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/signin' state={{ from: location }} replace></Navigate>;
};
export default Private;
