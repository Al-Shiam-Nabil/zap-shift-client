import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuthHook from "./useAuthHook";
import useAxiosSequre from "./useAxiosSequre";

const useRoleHook = () => {
  const { user } = useAuthHook();
  const sequreAxios = useAxiosSequre();
  const { data: role = "user", isLoading:roleLoading } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const data = await sequreAxios.get(`/users/${user?.email}/role`);
      return data.data;
    },
  });

  console.log(role);
  return { role, roleLoading };
};

export default useRoleHook;
