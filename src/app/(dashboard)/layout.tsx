'use client';

import Link from 'next/link';
import { logout } from '@/services/auth';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Dashboard Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Dashboard</h2>
        </div>
        <nav className="space-y-4">
          <Link 
            href="/dashboard"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Overview
          </Link>
    
          <Link 
            href="/profile"
            className="block py-2 px-4 rounded hover:bg-gray-700 transition-colors"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left py-2 px-4 rounded hover:bg-gray-700 transition-colors text-red-400"
          >
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
