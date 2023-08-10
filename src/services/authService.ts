import { AxiosAdapter } from '../api/axiosAdapter';
import { IAuthResponse } from '../types/auth';

export class AuthService {
  private http = new AxiosAdapter();

  async login(email: string, password: string) {
    const response = await this.http
      .post<IAuthResponse>('/login', { email, password });

    return response;
  }

  async register(name: string, email: string, password: string) {
    const response = await this.http
      .post<IAuthResponse>('/register', { name, email, password });

    return response;
  }
}
