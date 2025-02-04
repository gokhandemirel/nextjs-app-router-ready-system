'use client';
 
import styled from 'styled-components';
import Header from '@/components/organism/header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 24px 24px;
  border: solid 1px #ddd;
`;

export default function Layout({ children }: ILayoutProps) {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}
