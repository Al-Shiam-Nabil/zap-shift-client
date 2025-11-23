import React, { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSequre from "../../../Hooks/useAxiosSequre";

const PaymentSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const sequreAxios = useAxiosSequre();

  useEffect(() => {
    if(sessionId){
        sequreAxios.patch(`/payment-success/${sessionId}`).then((res) => {
      console.log(res.data);
    });
    }
  }, [sequreAxios, sessionId]);

  return <div>payment success</div>;
};

export default PaymentSuccessPage;
