import NewAllproduct from '@/components/dashboard/newproducts/allProduct';
import Sidebar from '@/components/dashboard/sidebar';
import React from 'react';

const AllProducts = () => {
  return (
      <div className='flex mx-10'>
        <div className='w-1/5'>
        <Sidebar></Sidebar>
        </div>
        <div className='w-4/5'>
        <NewAllproduct></NewAllproduct>
        </div>
    </div>
  );
};
export default AllProducts;
