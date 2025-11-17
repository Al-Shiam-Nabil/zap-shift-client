import React, { use } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const useAuthHook = () => {
  const authInfo = use(AuthContext);

  return authInfo;
};

export default useAuthHook;
