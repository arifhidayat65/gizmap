import { API_ENDPOINTS } from '../config/api';
import { fetchWithAuthServer } from '../utils/http/server-fetch';
import type { User } from './escuelajs';

export const escuelajsServerApi = {
  getProfile: async (): Promise<User> => {
    const response = await fetchWithAuthServer(API_ENDPOINTS.auth.profile('escuelajs'), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch profile');
    }

    return response.json();
  },

  updateProfile: async (data: Partial<User>): Promise<User> => {
    const response = await fetchWithAuthServer(API_ENDPOINTS.user.update(), {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to update profile');
    }

    return response.json();
  },
};
