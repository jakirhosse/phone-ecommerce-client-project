'use client';

import { useSignupMutation } from '@/components/redux/features/api/auth';
import { setUser } from '@/components/redux/store';
import Link from 'next/link';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const Registerpage: React.FC = () => {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterForm>();
  const [signup, { isLoading, isError, error }] = useSignupMutation();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<RegisterForm> = async (data) => {
    const result = await signup(data);
    if (!result.error) {
      dispatch(setUser(result.data));
    }

    router.push('/');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'your register is sucessfully',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 rounded shadow-md"
      >
        <h2 className="text-2xl mb-4 text-center font-bold">Sign Up</h2>
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            className="w-full p-2 border rounded"
          />
          {errors.name && (
            <p className="text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            {...register('email', { required: 'Email is required' })}
            type="email"
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password</label>
          <input
            {...register('password', { required: 'Password is required' })}
            type="password"
            className="w-full p-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Sign Up'}
        </button>
        <p className="text-center font-normal text-base">
          Already have an Account?{' '}
          <span className="text-red-900 hover:underline">
            <Link href="/login">Login</Link>{' '}
          </span>
        </p>
        {isError && <p className="text-red-600 mt-4">this is required</p>}
      </form>
    </div>
  );
};

export default Registerpage;
