import { ILoginRequest, IRegisterRequest } from '../types/auth';
import { api } from './api';
import type { HttpClient } from './httpClient';
import type { AxiosResponse, AxiosRequestHeaders } from 'axios';

export class AxiosAdapter implements HttpClient {
  async auth<T>(url: string, body: ILoginRequest): Promise<T> {
    const response = await api.post<T>(url, body);
    return this.handleResponse(response);
  }

  async register<T>(url: string, body: IRegisterRequest): Promise<T> {
    const response = await api.post<T>(url, body);
    return this.handleResponse(response);
  }

  async get<T>(url: string, header: AxiosRequestHeaders): Promise<T> {
    const response = await api.get<T>(url, { headers: header });
    return this.handleResponse(response);
  }

  async post<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T> {
    const response = await api.post<T>(url, body, { headers: header });
    return this.handleResponse(response);
  }

  async put<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T> {
    const response = await api.put<T>(url, body, { headers: header });
    return this.handleResponse(response);
  }

  async patch<T>(url: string, body: unknown, header: AxiosRequestHeaders): Promise<T> {
    const response = await api.patch<T>(url, body, { headers: header });
    return this.handleResponse(response);
  }

  async delete<T>(url: string, header: AxiosRequestHeaders): Promise<T> {
    const response = await api.delete<T>(url, { headers: header });
    return this.handleResponse(response);
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    const { status } = response;
    const possibleStatus = [400, 404, 500];
    const authStatus = [401, 403];

    if (possibleStatus.includes(status)) {
      throw new Error('Status inválido');
    }

    if (authStatus.includes(status)) {
      throw new Error('Não autorizado');
    }

    return response.data;
  }
}
