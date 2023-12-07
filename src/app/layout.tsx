import React from 'react';
import type { Metadata } from 'next';
import EmotionProvider from '@/lib/provider/emotion';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <EmotionProvider>
          <Header />
          {children}
          <Footer />
        </EmotionProvider>
      </body>
    </html>
  );
}