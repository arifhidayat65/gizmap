'use client';

import Image from 'next/image';
import type { User } from '../../../services/escuelajs';

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Cover Image */}
      <div className="h-32 bg-gradient-to-r from-green-400 to-blue-500"></div>
      
      <div className="p-6 sm:p-8 -mt-16">
        <div className="flex flex-col sm:flex-row items-center">
          {/* Profile Image */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 ring-4 ring-white rounded-full shadow-lg">
            <Image
              src={user.avatar || 'https://via.placeholder.com/128'}
              alt={user.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          
          {/* Profile Info */}
          <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
            <p className="text-gray-600 mt-1">{user.email}</p>
            <div className="mt-3 flex items-center justify-center sm:justify-start space-x-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-700">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {user.role}
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Active
              </span>
            </div>
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-gray-200 pt-6">
          <div className="text-center">
            <span className="block text-2xl font-bold text-gray-900">24</span>
            <span className="text-sm text-gray-600">Projects</span>
          </div>
          <div className="text-center border-x border-gray-200">
            <span className="block text-2xl font-bold text-gray-900">12</span>
            <span className="text-sm text-gray-600">Teams</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl font-bold text-gray-900">154</span>
            <span className="text-sm text-gray-600">Tasks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
