import { environment } from '../config/environment';

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

interface Category {
  id: number;
  name: string;
  image: string;
}

interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export const escuelajsApi = {
  // Products
  getAllProducts: async (): Promise<Product[]> => {
    const response = await fetch(`${environment.escuelaJsApi}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return response.json();
  },

  getProduct: async (id: number): Promise<Product> => {
    const response = await fetch(`${environment.escuelaJsApi}/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }
    return response.json();
  },

  // Categories
  getAllCategories: async (): Promise<Category[]> => {
    const response = await fetch(`${environment.escuelaJsApi}/categories`);
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  },

  getCategory: async (id: number): Promise<Category> => {
    const response = await fetch(`${environment.escuelaJsApi}/categories/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch category');
    }
    return response.json();
  },

  // Users
  getAllUsers: async (): Promise<User[]> => {
    const response = await fetch(`${environment.escuelaJsApi}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  },

  getUser: async (id: number): Promise<User> => {
    const response = await fetch(`${environment.escuelaJsApi}/users/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  },

  // Create new product
  createProduct: async (product: Omit<Product, 'id'>): Promise<Product> => {
    const response = await fetch(`${environment.escuelaJsApi}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to create product');
    }
    return response.json();
  },

  // Update product
  updateProduct: async (id: number, product: Partial<Product>): Promise<Product> => {
    const response = await fetch(`${environment.escuelaJsApi}/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to update product');
    }
    return response.json();
  },

  // Delete product
  deleteProduct: async (id: number): Promise<boolean> => {
    const response = await fetch(`${environment.escuelaJsApi}/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
    return true;
  },

  // Auth
  login: async (credentials: { email: string; password: string }): Promise<LoginResponse> => {
    const response = await fetch(`${environment.escuelaJsApi}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    return response.json();
  },
};
