import { API_ENDPOINTS } from '../config/api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  const response = await fetch(API_ENDPOINTS.auth.login('escuelajs'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to login');
  }

  const data = await response.json();
  
  // Set cookies with tokens
  document.cookie = `access_token=${data.access_token}; path=/; max-age=86400`; // 24 hours
  document.cookie = `refresh_token=${data.refresh_token}; path=/; max-age=604800`; // 7 days

  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token
  };
}

export async function logout(): Promise<void> {
  // Clear cookies
  document.cookie = 'access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  document.cookie = 'refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
  
  // Redirect to login page
  window.location.href = '/login';
}

export async function register(credentials: LoginCredentials): Promise<LoginResponse> {
  const response = await fetch(API_ENDPOINTS.auth.register('escuelajs'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to register');
  }

  return response.json();
}
