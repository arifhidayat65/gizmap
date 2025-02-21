import { cookies } from 'next/headers';

export async function fetchWithAuthServer(url: string, options: RequestInit = {}) {
  try {
    // Get the cookie store and await it
    const cookieStore = await cookies();
    const token = cookieStore.get('access_token')?.value;

    if (!token) {
      throw new Error('No authentication token found');
    }

    const headers = new Headers(options.headers);
    headers.set('Authorization', `Bearer ${token}`);

    const response = await fetch(url, {
      ...options,
      headers,
      cache: 'no-store', // Disable caching for authenticated requests
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error in fetchWithAuthServer:', error);
    throw error;
  }
}

export async function fetchWithoutAuthServer(url: string, options: RequestInit = {}) {
  try {
    const response = await fetch(url, {
      ...options,
      cache: 'no-store', // Disable caching for consistency
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  } catch (error) {
    console.error('Error in fetchWithoutAuthServer:', error);
    throw error;
  }
}
