import { AxiosAdapter } from '../api/axiosAdapter';
import type { IAuthResponse } from '../types/auth';

export class AuthService {
  private http = new AxiosAdapter();

  async login(email: string, password: string) {
    const response = await this.http
      .auth<IAuthResponse>('/login', { email, password });

    return response;
  }

  async register(name: string, email: string, password: string) {
    const response = await this.http
      .register<IAuthResponse>('/register', { name, email, password });

    return response;
  }
}
