import { AxiosAdapter } from '../api/axiosAdapter';
import type { IAuthResponse } from '../types/auth';

export class AuthService {
  private http = new AxiosAdapter();

  async login(email: string, password: string) {
    const response = await this.http
      .auth<IAuthResponse>('/api/public/login', { email, password });

    return response;
  }

  async register(name: string, email: string, password: string) {
    const response = await this.http
      .register<IAuthResponse>('/api/public/register', { name, email, password });

    return response;
  }
}
