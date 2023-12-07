'use client';

import React from 'react';
import Link from 'next/link';
import Inner from '@/components/inner';
import SnsBtnList from './data';
import * as S from './style';

const Footer = () => {
  return (
    <S.Wrapper>
      <Inner>
        <S.Container>
          <S.Title>Want to work with me?</S.Title>
          <S.SnsBox>
            {SnsBtnList.map((snsbtn: { sns: string; link: string }) => (
              <Link key={snsbtn.sns} href={snsbtn.link} target="blank">
                {snsbtn.sns}
              </Link>
            ))}
          </S.SnsBox>
        </S.Container>
        <S.TextBox>
          <S.desc>Contact Email : kailey.lee224@gmail.com</S.desc>
          <S.desc>Copyright ©️ 2023 Hwajeoung Lee. All Rights Reserved</S.desc>
        </S.TextBox>
      </Inner>
    </S.Wrapper>
  );
};

export default Footer;
