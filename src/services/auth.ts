import { API_ENDPOINTS } from '../config/api';
import { escuelajsApi } from './escuelajs';

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse> {
  try {
    // Call our Next.js API route instead of escuelajs directly
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

    return response.json();
  } catch (error) {
    throw error instanceof Error ? error : new Error('Failed to login');
  }
}

export async function logout(): Promise<void> {
  // Call logout API to clear the cookie
  await fetch('/api/auth/logout', {
    method: 'POST'
  });
  
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
