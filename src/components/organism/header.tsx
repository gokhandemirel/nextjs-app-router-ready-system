'use client';

import { signOut } from '@/actions/signOut';
import { useSession } from '@/auth/sessionProvider';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  background-color: #efefef;
`;

const Logo = styled.figure``;

const Menu = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  width: 100%;

  & > ul {
    display: flex;
    align-items: center;
    gap: 20px;

    & > li > article {
      display: flex;
      align-items: center;
      gap: 5px;

      & > hr {
        width: 1px;
        height: 14px;
        background-color: #cdcdcd;
      }
    }
  }

  & > article {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  & > article > div,
  & > article > a {
    cursor: pointer;
  }
`;

export default function Header() {
  const t = useTranslations('menu');
  const session = useSession();

  return (
    <Wrapper>
      <Logo>
        <Link href="/">
          <Image src="/next.svg" width={180} height={37} alt="" priority />
        </Link>
      </Logo>
      <Menu>
        <ul>
          <li>
            <Link href="/">{t('home')}</Link>
          </li>
          <li>
            <Link href="/producted">{t('producted')}</Link>
          </li>
          <li>
            <article>
              <Link href="/" locale="tr">
                {t('tr')}
              </Link>
              <hr />
              <Link href="/" locale="en">
                {t('en')}
              </Link>
            </article>
          </li>
        </ul>
        <article>
          {session.user ? (
            <form action={signOut}>
              <button>{t('logout')}</button>
            </form>
          ) : (
            <Link href="/login">{t('login')}</Link>
          )}
        </article>
      </Menu>
    </Wrapper>
  );
}
