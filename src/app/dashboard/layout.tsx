import React from 'react'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <img 
            src="https://storage.googleapis.com/a1aa/image/iXtFY1DZexD4cqlIXBWX512jh_Z5X7WhF_f1VWTwmXw.jpg"
            alt="GizMap logo"
            className="h-8"
          />
        </div>
        <nav className="mt-4 px-2">
          <Link 
            href="/dashboard" 
            className="block px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-500 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <i className="fas fa-home"></i>
              <span>Overview</span>
            </div>
          </Link>
          <Link 
            href="/dashboard/podcast" 
            className="block px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-500 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <i className="fas fa-podcast"></i>
              <span>Podcasts</span>
            </div>
          </Link>
          <Link 
            href="/dashboard/analytics" 
            className="block px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-500 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <i className="fas fa-chart-line"></i>
              <span>Analytics</span>
            </div>
          </Link>
          <Link 
            href="/dashboard/settings" 
            className="block px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-500 rounded-lg transition-colors duration-200"
          >
            <div className="flex items-center space-x-2">
              <i className="fas fa-cog"></i>
              <span>Settings</span>
            </div>
          </Link>
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
              <button className="text-gray-500 hover:text-gray-600">
                <i className="fas fa-bell text-xl"></i>
              </button>
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-medium">A</span>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
