import React from 'react';
import Sidebar from './sidebar';
import AllProducts from '@/app/(landing-layout)/dashboard/topproducts/allproducts/page';

const DashboardPage = () => {
  return (
     <div className='flex'>
            <div className='w-1/5'>
                <Sidebar></Sidebar>
            </div>
            <div className='w-4/5'>
               <AllProducts></AllProducts>
            </div>
        </div>
  );
};

export default DashboardPage;