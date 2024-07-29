'use client';
import React from 'react';
import { useLogoutMutation } from '@/components/redux/features/api/auth';
import { clearUser } from '@/components/redux/store';
import { useDispatch } from 'react-redux';

const Logoutpage: React.FC = () => {
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const result = await logout();
    if (!result.error) {
      dispatch(clearUser());
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white p-2 rounded hover:bg-red-700"
      disabled={isLoading}
    >
      {isLoading ? 'Logging out...' : 'Logout'}
    </button>
  );
};

export default Logoutpage;
