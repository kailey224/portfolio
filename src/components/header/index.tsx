'use client';

import React, { MouseEvent, useState } from 'react';
import Link from 'next/link';
import * as S from './style';

const Header = () => {
  const MenuBtnList = ['Home', 'Work', 'Profile'];
  const [button, setButton] = useState(MenuBtnList[0]);

  const onButtonClick = (e: MouseEvent) => {
    const eventTarget = e.target as HTMLElement;
    setButton(eventTarget.innerText);
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Logo>
          <Link href="/">Hwajeoung Lee</Link>
        </S.Logo>
        <S.MenuWrap>
          {MenuBtnList.map((btn: string) => (
            <S.MenuButton
              key={btn}
              isBtn={button === btn}
              onClick={(e: MouseEvent) => onButtonClick(e)}
            >
              {btn}
            </S.MenuButton>
          ))}
        </S.MenuWrap>
        <S.ContactButton>
          <Link
            href="https://www.linkedin.com/in/%ED%99%94%EC%A0%95-%EC%9D%B4-025a62270/"
            target="blank"
          >
            Linkedin
          </Link>
        </S.ContactButton>
      </S.Container>
    </S.Wrapper>
  );
};

export default Header;
