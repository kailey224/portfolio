import React, { PropsWithChildren } from 'react';
import Container from './style';

const Inner = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Inner;
