import { IUser } from './user';

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface IAuth {
  login(email: string, password: string): Promise<IAuthResponse>;
  register(name: string, email: string, password: string): Promise<IAuthResponse>;
}