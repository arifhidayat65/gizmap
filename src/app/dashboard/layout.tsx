'use client';
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LogoutButton from '@/components/auth/LogoutButton'
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  const isActiveLink = (path: string) => {
    return pathname === path;
  };

  const getLinkClassName = (path: string) => {
    const baseClasses = "block px-4 py-2 rounded-lg transition-colors duration-200";
    return `${baseClasses} ${
      isActiveLink(path)
        ? "bg-green-50 text-green-600"
        : "text-gray-600 hover:bg-green-50 hover:text-green-600"
    }`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-4 border-b border-gray-200">
          <Image 
           src="/izmap.svg"
              alt="GizMap Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </div>
        <nav className="mt-4 px-2">
          {[
            { href: '/dashboard', icon: 'home', label: 'Overview' },
            { href: '/dashboard/podcast', icon: 'podcast', label: 'Podcasts' },
            { href: '/dashboard/analytics', icon: 'chart-line', label: 'Analytics' },
            { href: '/dashboard/profile', icon: 'user', label: 'Profile' },
            { href: '/dashboard/settings', icon: 'cog', label: 'Settings' },
          ].map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className={getLinkClassName(link.href)}
            >
              <div className="flex items-center space-x-3">
                <i className={`fas fa-${link.icon}`}></i>
                <span>{link.label}</span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex justify-between items-center p-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-gray-600 transition-colors duration-200">
                <i className="fas fa-bell text-xl"></i>
              </button>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-medium">A</span>
              </div>
              <LogoutButton />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
