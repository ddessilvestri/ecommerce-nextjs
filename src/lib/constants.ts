// Centralized constants and API endpoints for the project

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const MEDIA_API = process.env.NEXT_PUBLIC_MEDIA_API;
export const MEDIA_URL = process.env.NEXT_PUBLIC_MEDIA_URL;

export const ENDPOINTS = {
  adminUsers: '/gambit/admin/users',
  user: '/gambit/user',
  address: '/gambit/address',
  category: '/gambit/category',
  product: '/gambit/product',
  order: '/gambit/order',
  stock: '/gambit/stock',
};

export const TOKEN = 'token';
export const BASKET = 'basket';
