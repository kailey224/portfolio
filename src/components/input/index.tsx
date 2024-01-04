import React, { PropsWithChildren } from 'react';
import InputWrapper from './style';

const Input = ({ children }: PropsWithChildren) => {
  return <InputWrapper>{children}</InputWrapper>;
};

export default Input;
