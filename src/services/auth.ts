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
  const response = await fetch('/api/auth/login', {
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

  const { data } = await response.json();
  return data;
}

export async function logout(): Promise<void> {
  const response = await fetch('/api/auth/logout', {
    method: 'POST',
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to logout');
  }

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
