import { useAuth } from '../store/auth';
import { api } from '../api/api';
import type { AxiosRequestHeaders } from 'axios';
import type { IUser } from '../types/user';

export const setHeader = () => {
  const auth = useAuth();
  const token = auth.token;
  const headers = {} as AxiosRequestHeaders;

  if (hasToken()) {
    headers.Authorization = `Bearer ${token}`;
  }

  api.interceptors.request.use((config) => {
    config.headers = headers;
    return config;
  });

  return headers;
}

export async function isLogged() {
  const token = getToken();

  if (!token) {
    return false;
  }

  api.defaults.headers.Authorization = token;

  return true;
}

export function saveToken(token: string) {
  localStorage.setItem('authToken', token);
}

export function getToken() {
  return localStorage.getItem('authToken');
}

export function hasToken() {
  return !!getToken();
}

export function killToken() {
  localStorage.removeItem('authToken');
}

export function setUser(user: IUser) {
  return localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  const user = localStorage.getItem('user');
  const hasUser = !!user;

  return hasUser && JSON.parse(user || '{}');
}

export function killUser() {
  localStorage.removeItem('user');
}
