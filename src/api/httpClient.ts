import type { AxiosRequestHeaders } from 'axios';

export interface HttpClient {
  get<T>(url: string, header: AxiosRequestHeaders): Promise<T>;
  post<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T>;
  put<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T>;
  patch<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T>;
  delete<T>(url: string, header: AxiosRequestHeaders): Promise<T>;
}
