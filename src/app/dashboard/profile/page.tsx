'use client';

import React from 'react';
import ProfileHeader from '@/components/dashboard/profile/ProfileHeader';
import ProfileDetails from '@/components/dashboard/profile/ProfileDetails';
import { useEffect, useState } from 'react';
import { User } from '@/services/escuelajs';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/auth/profile');
        const data = await response.json();
        if (data.success) {
          setUser(data.data);
        }
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="text-xl font-semibold text-gray-800 mb-2">Profile Not Found</div>
        <p className="text-gray-600">Please try refreshing the page or logging in again.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        {/* Profile Header */}
        <ProfileHeader user={user} />
        
        {/* Profile Details */}
        <ProfileDetails user={user} />
      </div>
    </div>
  );
}
