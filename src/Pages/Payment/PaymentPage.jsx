import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router";
import useAxiosSequre from "../../Hooks/useAxiosSequre";

const PaymentPage = () => {
  const { parcelId } = useParams();
  const sequreAxios = useAxiosSequre();

  const { data, isLoading } = useQuery({
    queryKey: ["parcel", parcelId],
    queryFn: async () => {
      const result = await sequreAxios.get(`/parcels/${parcelId}`);
      return result.data;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full py-10 grid place-items-center h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }

  const handlePayment=async()=>{
    const parcelInfo={
        parcelName:data?.parcelName,
        parcelId:data?._id,
        sellerEmail:data?.senderEmail,
        cost:data?.cost
    }

    const res=await sequreAxios.post('/create-checkout-session',parcelInfo)
    window.location.href=res.data.url
  }

  console.log(data);
  return (
    <div>
      <h3>
        payment {data?.cost} for {data?.parcelName}
      </h3>
      <button onClick={handlePayment} className="btn btn-primary text-secondary">Pay</button>
    </div>
  );
};

export default PaymentPage;
