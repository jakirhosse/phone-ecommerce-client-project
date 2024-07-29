import Sidebar from '@/components/dashboard/sidebar';
import TopAllproducts from '@/components/dashboard/topproducts/allproducts';
import React from 'react';

const AllProducts = () => {
  return (
    <div className="flex mx-10">
      <div className="w-1/5">
       <Sidebar></Sidebar>
      </div>
      <div className="w-4/5">
       <TopAllproducts></TopAllproducts>
      </div>
    </div>
  );
};

export default AllProducts;