
import React from "react";
import useAuthHook from "../../../Hooks/useAuthHook";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";
import { useQuery } from "@tanstack/react-query";

const PaymentHistoryPage = () => {
  const { user } = useAuthHook();
  const sequreAxios = useAxiosSequre();
  const { data:payments=[] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await sequreAxios.get(`/payments?email=${user?.email}`);
    return (res.data);
    },
  });

  console.log(payments);
  return <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>SL</th>
        <th>Parcel Name</th>
        <th>Currency</th>
        <th>Amount</th>
        <th>Status</th>
        <th>Paid At</th>
        <th>Transaction Id</th>
        <th>Tracking Id</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        payments.map((payment,index)=>  <tr key={payment._id}>
        <td>{index+1}</td>
        <td>{payment?.parcelName}</td>
        <td>{payment.currency}</td>
        <td>${payment.amount}</td>
        <td>{payment.paymentStatus}</td>
        <td>{payment.paymentAt}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.trackingId}</td>
      </tr>)
      }
    
    
    </tbody>
  </table>
</div>;
};

export default PaymentHistoryPage;
