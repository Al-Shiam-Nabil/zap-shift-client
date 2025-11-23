import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const sessionId = searchParams.get("session_id");
  const sequreAxios = useAxiosSequre();

  useEffect(() => {
    if (sessionId) {
      sequreAxios.patch(`/payment-success/${sessionId}`).then((res) => {
        console.log(res.data);
        setPaymentInfo({
          transactionId: res.data.transactionId,
          trackingId: res.data.trackingId,
        });
      });
    }
  }, [sequreAxios, sessionId]);

  return (
    <div>
      <h3>Payment success.</h3>
      <p>Your transaction id : {paymentInfo.transactionId}</p>
      <p>Your trackingId : {paymentInfo.trackingId}</p>
    </div>
  );
};

export default PaymentSuccessPage;
