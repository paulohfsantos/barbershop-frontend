import type { AxiosRequestHeaders } from 'axios';
import type { ILoginRequest, IRegisterRequest } from '../types/auth';

export interface HttpClient {
  auth<T>(url: string, body: ILoginRequest): Promise<T>;
  register<T>(url: string, body: IRegisterRequest): Promise<T>;
  get<T>(url: string, header: AxiosRequestHeaders): Promise<T>;
  post<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T>;
  put<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T>;
  patch<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T>;
  delete<T>(url: string, header: AxiosRequestHeaders): Promise<T>;
}
