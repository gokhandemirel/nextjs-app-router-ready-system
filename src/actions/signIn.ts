'use server';

import { jwtDecode } from 'jwt-decode';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signIn(formData: FormData) {
  const data = {
    username: formData.get('username'),
    password: formData.get('password')
  };

  if (data) {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    (await cookies()).set('next-auth-token', token, {
      path: '/',
      domain: 'localhost',
      maxAge: 300,
      httpOnly: true,
      secure: false
    });

    const url = (await cookies()).get('next-auth-callback-url')?.value ?? '/';
    const decoded = jwtDecode(token);
    // console.log(decoded);

    redirect(url);
  }
}
