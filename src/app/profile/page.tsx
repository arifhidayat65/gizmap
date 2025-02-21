'use client';

import { useEffect, useState } from 'react';
import { escuelajsApi } from '@/services/escuelajs';
import ProfileHeader from '@/components/dashboard/profile/ProfileHeader';
import ProfileDetails from '@/components/dashboard/profile/ProfileDetails';
import type { User } from '@/services/escuelajs';

export default function ProfilePage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('/api/auth/profile');
        
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message || 'Failed to fetch profile');
        }

        const { data } = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
        setError(error instanceof Error ? error.message : 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error || 'Failed to load profile'}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProfileHeader user={user} />
      <ProfileDetails user={user} />
    </div>
  );
}
