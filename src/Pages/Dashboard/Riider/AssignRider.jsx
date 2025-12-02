import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";

const AssignRider = () => {
  const sequreAxios = useAxiosSequre();
  const { data:parcels=[] } = useQuery({
    queryKey: ["parcels",'pending-pickup'],
    queryFn: async () => {
      const result = await sequreAxios.get(
        "/parcels?deliveryStatus=pending-pickup"
      );
      return result.data;
    },
  });

  console.log(parcels);

  return <div>assign rider {parcels.length}</div>;
};

export default AssignRider;
