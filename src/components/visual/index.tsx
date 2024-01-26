import React from 'react';
import * as S from './style';

const Visual = () => {
  const skillList = ['Next.js', 'React.js', 'HTML / CSS', 'Google Workspace'];

  return (
    <S.Container>
      <S.TextBox>
        <S.Title>Hwajeoung Lee</S.Title>
        <S.Desc>Frontend Developer</S.Desc>
      </S.TextBox>
      <S.Border />
      <S.ContactBox>
        <S.Desc>Kailey.lee224@gmail.com</S.Desc>
        <S.Desc>Linkedin</S.Desc>
        <S.Desc>Blog</S.Desc>
        <S.Desc>Github</S.Desc>
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
