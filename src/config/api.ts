import { environment } from './environment';

export const API_ENDPOINTS = {
  auth: {
    login: `${environment.apiUrl}/auth/login`,
    logout: `${environment.apiUrl}/auth/logout`,
    register: `${environment.apiUrl}/auth/register`,
  },
  // Add other API endpoints here as needed
  user: {
    profile: `${environment.apiUrl}/user/profile`,
    update: `${environment.apiUrl}/user/update`,
  },
};

export const getApiUrl = (path: string): string => {
  return `${environment.apiUrl}${path}`;
};

export default API_ENDPOINTS;
