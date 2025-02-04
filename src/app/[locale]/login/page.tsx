'use client';

import { signIn } from '@/actions/signIn';
import Button from '@/components/atoms/button';
import Textbox from '@/components/atoms/textbox';
import Layout from '@/components/templates/layout';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  gap: 32px;

  & > form {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: 14px;

    & > fieldset {
      display: flex;
      justify-content: baseline;
      width: 100%;
    }
  }
`;

export default function Login() {
  const t = useTranslations('login');
  const [username, setUsername] = useState('nextjs');
  const [password, setPassword] = useState('1234');
  const [error, setError] = useState<any>();

  const onSubmit = async () => {
    // axios.post('/api/auth/signIn', JSON.stringify({ username, password })).then((dd) => {
    //   debugger;
    // });
    // const response = await login({ username, password });
    // if (response?.success) {
    // } else {
    //   setError(response);
    // }
  };

  return (
    <Layout>
      <Wrapper>
        <form action={signIn}>
          <fieldset>
            <Textbox
              name="username"
              placeholder={t('formFieldUsername')}
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <Textbox
              name="password"
              placeholder={t('formFieldPassword')}
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </fieldset>
          {error && <fieldset>{error.message}</fieldset>}
          <fieldset>
            <Button>{t('formButtonLogin')}</Button>
          </fieldset>
        </form>
      </Wrapper>
    </Layout>
  );
}
