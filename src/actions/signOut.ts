'use server';

import { LOGIN_REDIRECT } from '@/auth/routes';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signOut() {
  (await cookies()).delete('next-auth-token');
  redirect(LOGIN_REDIRECT);
}
