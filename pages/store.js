import React, { useEffect } from 'react';
import Link from 'next/link';

const Store = () => {
  useEffect(() => {
    // Check if user is authenticated, otherwise redirect to login
    const storedUser = JSON.parse(window.localStorage.getItem('user'));
    if (!storedUser) {
      window.location.href = '/login';
    }
  }, []);

  const handleLogout = () => {
    // Implement logout functionality (clearing session, etc.)
    // For simplicity, redirecting to login
    window.location.href = '/login';
  };

  return (
    <div className='store'>
      <h2>Welcome to the store!</h2>
      <button className='logout-btn' onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Store;
