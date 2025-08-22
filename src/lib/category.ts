import apiClient from '@/services/apiClient';
import { ENDPOINTS } from './constants';

export type Category = {
  categID: string;
  categName: string;
};

export async function getCategories(): Promise<Category[]> {
  const response = await apiClient.get<Category[]>(ENDPOINTS.category);
  return response.data;
}
