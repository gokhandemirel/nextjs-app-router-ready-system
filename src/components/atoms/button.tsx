'use client';

import { HtmlHTMLAttributes } from 'react';
import styled from 'styled-components';

interface IButtonProps extends HtmlHTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 20px;
  background: #383838;
  color: #fff;
  border: solid 1px transparent;
  cursor: pointer;
`;

export default function Button(props: IButtonProps) {
  const { children, ...rest } = props;
  return <Wrapper {...rest}>{children}</Wrapper>;
}
