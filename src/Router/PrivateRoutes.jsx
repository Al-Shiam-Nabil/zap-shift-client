import React from "react";
import useAuthHook from "../Hooks/useAuthHook";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuthHook();
  const location=useLocation()


  if (loading) {
    return (
      <div className="w-full py-10 grid place-items-center h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
