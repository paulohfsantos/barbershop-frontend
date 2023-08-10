import { IUser } from './user';

export interface IAuthResponse {
  access_token: string;
  user: IUser;
}

export interface IAuth {
  login(email: string, password: string): Promise<IAuthResponse>;
  register(name: string, email: string, password: string): Promise<IAuthResponse>;
}