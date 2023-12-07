import React from 'react';
import * as S from './style';
import Inner from '@/components/inner';

const Visual = () => {
  return (
    <>
      <Inner>
        <S.Container>
          <S.ProfileBox>
            <S.ProfileImage>profile image</S.ProfileImage>
          </S.ProfileBox>
          <S.TextBox>
            <S.Title>Hello!</S.Title>
            <S.Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              assumenda quaerat consequuntur quisquam.
              <br />
              Cupiditate cum temporibus dolor quasi esse tempora odio magnam?
              Nulla, cupiditate sunt!
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              assumenda quaerat consequuntur quisquam.
            </S.Desc>
          </S.TextBox>
        </S.Container>
      </Inner>
      <S.Border />
    </>
  );
};

export default Visual;
