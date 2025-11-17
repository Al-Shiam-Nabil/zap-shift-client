import React from "react";
import useAuthHook from "../Hooks/useAuthHook";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuthHook();

  if (loading) {
    return (
      <div className="w-full py-10 grid place-items-center">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
