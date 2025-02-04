'use client';

import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const Wrapper = styled.input`
  padding: 6px 10px;
  border: solid 1px #ddd;
  outline: none;
`;

export default function Textbox(props: Props) {
  const { className, ...rest } = props;
  return <Wrapper {...rest} />;
}
