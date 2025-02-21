'use client';

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  let token;
  
  // Client-side cookie access
  token = document.cookie
    .split('; ')
    .find(row => row.startsWith('access_token='))
    ?.split('=')[1];

  if (!token) {
    throw new Error('No authentication token found');
  }

  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`,
  };

  return fetch(url, {
    ...options,
    headers,
  });
}

export async function fetchWithoutAuth(url: string, options: RequestInit = {}) {
  return fetch(url, options);
}
