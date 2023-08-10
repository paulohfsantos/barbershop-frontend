import axios from 'axios';
import { useAuth } from '../store/auth';
import type { AxiosRequestHeaders } from 'axios';
import type { IUser } from '../types/user';

export const setHeader = () => {
  const auth = useAuth();
  const token = auth.token;
  const headers = {} as AxiosRequestHeaders;

  token && (headers['Authorization'] = `Bearer ${token}`);

  axios.defaults.headers = headers as any;
  axios.interceptors.response.use((response) => response);

  return headers;
}

export function saveToken(token: string) {
  localStorage.setItem('token', token);
}

export function getToken() {
  return localStorage.getItem('token');
}

export function hasToken() {
  return !!getToken();
}

export function killToken() {
  localStorage.removeItem('token');
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
