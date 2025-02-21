'use client';
import { logout } from '@/services/auth';

export default function LogoutButton() {
  const handleLogout = async () => {
    await logout();
  };

  return (
    <button 
      onClick={handleLogout}
      className="px-4 py-2 text-red-600 hover:text-red-700 font-medium"
    >
      Logout
    </button>
  );
}
