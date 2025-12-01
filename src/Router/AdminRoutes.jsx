import React from "react";
import useRoleHook from "../Hooks/useRoleHook";
import useAuthHook from "../Hooks/useAuthHook";

const AdminRoutes = ({ children }) => {
  const { role, roleLoading } = useRoleHook();
  const { loading } = useAuthHook();

  if (loading || roleLoading) {
    return <h2>Loading...</h2>;
  }

  if (role !== "admin") {
    return <h2>Forbidden access.</h2>;
  }

  return children;
};

export default AdminRoutes;
