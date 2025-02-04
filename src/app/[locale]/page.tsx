'use client';

import Layout from '@/components/templates/layout';
import { getHome } from '@/store/homeSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 120px;
`;

const TodoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  list-style-type: decimal;
  padding-left: 16px;

  & > li {
    font-size: 16px;
    line-height: 20px;
  }
`;

export default function Home() {
  const t = useTranslations('homePage');
  const dispatch = useAppDispatch();
  const home = useAppSelector((state) => state.home);

  useEffect(() => {
    dispatch(getHome());
  }, []);

  return (
    <Layout>
      <Wrapper>
        <span>{t('title')}</span>
        {home.todos.length > 0 ? (
          <TodoList>
            {home.todos.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))}
          </TodoList>
        ) : (
          <span>{t('todoLoadText')}</span>
        )}
      </Wrapper>
    </Layout>
  );
}
