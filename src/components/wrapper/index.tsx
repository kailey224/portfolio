import React, { PropsWithChildren } from 'react';
import Container from './style';

const Wrapper = ({ children }: PropsWithChildren) => {
  return <Container>{children}</Container>;
};

export default Wrapper;
