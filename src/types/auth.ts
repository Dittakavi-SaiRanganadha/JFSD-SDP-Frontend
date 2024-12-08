export interface User {
  id: string;
  email: string;
  role: 'user' | 'admin';
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}