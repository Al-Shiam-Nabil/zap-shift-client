import React from 'react';
import { Link } from 'react-router';

const PaymentCancelPage = () => {
    return (
        <div>
           <h3> payment cancel.please try again.</h3>

            <Link to='/dashboard/my-parcels' ><button className='btn btn-primary text-secondary'>Try again</button></Link>

        </div>
    );
};

export default PaymentCancelPage;