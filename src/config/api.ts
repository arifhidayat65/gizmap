import { environment, API_CONFIG } from './environment';

export const getApiUrl = (path: string, type: 'main' | 'escuelajs' = 'main'): string => {
  const baseUrl = type === 'escuelajs' ? environment.escuelaJsApi : environment.apiUrl;
  return `${baseUrl}${path}`;
};

export const API_ENDPOINTS = {
  auth: {
    login: (type: 'main' | 'escuelajs' = 'main') => getApiUrl(API_CONFIG.auth.login, type),
    logout: (type: 'main' | 'escuelajs' = 'main') => getApiUrl(API_CONFIG.auth.logout, type),
    register: (type: 'main' | 'escuelajs' = 'main') => getApiUrl(API_CONFIG.auth.register, type),
  },
  user: {
    profile: () => getApiUrl(API_CONFIG.user.profile),
    update: () => getApiUrl(API_CONFIG.user.update),
  },
  products: {
    list: () => getApiUrl(API_CONFIG.products.list, 'escuelajs'),
    detail: (id: number) => getApiUrl(API_CONFIG.products.detail(id), 'escuelajs'),
  },
  categories: {
    list: () => getApiUrl(API_CONFIG.categories.list, 'escuelajs'),
    detail: (id: number) => getApiUrl(API_CONFIG.categories.detail(id), 'escuelajs'),
  },
  users: {
    list: () => getApiUrl(API_CONFIG.users.list, 'escuelajs'),
    detail: (id: number) => getApiUrl(API_CONFIG.users.detail(id), 'escuelajs'),
  },
};

export default API_ENDPOINTS;
