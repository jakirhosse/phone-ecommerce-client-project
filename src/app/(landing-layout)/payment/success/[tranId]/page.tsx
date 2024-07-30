import React from 'react';

const PaymentSuccessSinglePage = ({ params }: any) => {
  console.log(params.tranId);
    return (
      <div className="h-screen flex justify-center items-center text-6xl font-bold sm:text-center min-[320px]:text-center max-[600px]:text-center">
        Payment successfully
      </div>
    );
};

export default PaymentSuccessSinglePage;
