export interface Session {
  user: User;
}

export interface User {
  sub: string;
  name: string;
  iat: string;
}
