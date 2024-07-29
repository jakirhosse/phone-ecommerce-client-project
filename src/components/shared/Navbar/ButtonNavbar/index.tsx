"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';
const ButtonNavbar = () => {
  const { register, handleSubmit } = useForm();
  const carts = useSelector((state: any) => state.carts.carts);
  
  const onSubmit = (data: any) => {
    console.log('Search submitted:', data.searchQuery);
    // Handle search submission here
  };
  return (
    <div className="bg-purple-400 text-white px-12">
      <header className="lg:flex md:flex w-full justify-between items-center py-3">
        {/* All Categories Button */}
        <div className="lg:block hidden">
          <button className="bg-gray-800 text-white lg:px-4 px-2 py-1 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            All Categories
          </button>
        </div>

        {/* Search Input */}
        <div className="flex justify-center lg:my-0 my-4">
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
            <input
              type="text"
              {...register('searchQuery')}
              placeholder="Search products..."
              className="flex-grow border text-black border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:border-gray-500"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-4 py-1 rounded-r-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
            >
              Search
            </button>
          </form>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-center gap-4">
          {/* Cart Icon */}
          <Link href="/cart" className="flex gap-1 ">
            <AiOutlineShoppingCart className="h-8 w-8 cursor-pointer text-md font-bold" />{' '}
            <sup>{carts.length}</sup>
          </Link>

          {/* Account Icon */}
          <AiOutlineUser className="h-6 w-6 cursor-pointer" />

          {/* Wishlist Icon */}
          <AiOutlineHeart className="h-6 w-6 cursor-pointer" />
        </div>
      </header>
    </div>
  );
};

export default ButtonNavbar;