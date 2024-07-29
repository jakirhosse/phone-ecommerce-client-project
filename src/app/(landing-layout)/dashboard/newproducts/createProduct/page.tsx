import NewcreateProduct from '@/components/dashboard/newproducts/createproduct';
import Sidebar from '@/components/dashboard/sidebar';
import React from 'react';

const CreateProduct = () => {
  return (
    <div className="flex mx-10">
      <div className="w-1/5">
        <Sidebar></Sidebar>
      </div>
      <div className="w-4/5">
      <NewcreateProduct></NewcreateProduct>
      </div>
    </div>
  );
};

export default CreateProduct;