import React from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';
import * as S from './style';

const Visual = () => {
  const skillList = ['Next.js', 'React.js', 'HTML / CSS', 'Google Workspace'];

  const onClickGithub = () => {
    sendGAEvent({
      event: 'click_github_btn',
      value: 'xyz',
      action: 'click_github',
    });
  };

  return (
    <S.Container>
      <S.TextBox>
        <S.Title>Hwajeoung Lee</S.Title>
        <S.Desc>Frontend Developer</S.Desc>
      </S.TextBox>
      <S.Border />
      <S.ContactBox>
        <S.Desc>Kailey.lee224@gmail.com</S.Desc>
        <Link
          className="Linkedin"
          href="https://www.linkedin.com/in/kailey224/"
        >
          <S.Desc>Linkedin</S.Desc>
        </Link>
        <Link href="https://velog.io/@kailey/">
          <S.Desc>Blog</S.Desc>
        </Link>
        <Link href="https://github.com/kailey224" onClick={onClickGithub}>
          <S.Desc>Github</S.Desc>
        </Link>
      </S.ContactBox>
      <S.SkillBox>
        {skillList.map((category: string) => (
          <S.Skill key={category}>{category}</S.Skill>
        ))}
      </S.SkillBox>
    </S.Container>
  );
};

export default Visual;
