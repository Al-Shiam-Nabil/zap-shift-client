import React from 'react';
import { useSearchParams } from 'react-router';

const PaymentSuccessPage = () => {

    const  [searchParams]=useSearchParams()
    console.log(searchParams)
    return (
        <div>
            payment success
        </div>
    );
};

export default PaymentSuccessPage;