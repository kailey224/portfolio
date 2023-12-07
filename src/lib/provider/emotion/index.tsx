'use client';

import React, { PropsWithChildren } from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import theme from '@/lib/styles/theme';
import global from '../../styles/global';

const EmotionProvider = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      {children}
    </ThemeProvider>
  );
};

export default EmotionProvider;
