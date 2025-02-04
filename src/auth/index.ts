import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';

export async function auth() {
  const token = (await cookies()).get('next-auth-token')?.value ?? '';

  if (token) {
    const tokenDecoded = jwtDecode(token);
    return {
      user: {
        tokenDecoded
      }
    };
  }

  return token;
}
