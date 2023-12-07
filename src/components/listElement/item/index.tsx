import React from 'react';
import { BlogContentsProps } from '@/lib/api/dto';
import * as S from './style';

interface ItemElementProps {
  item: BlogContentsProps;
}

const Item = ({ item }: ItemElementProps) => {
  return (
    <S.Container>
      <S.TextBox>
        <S.Title>{item.title}</S.Title>
        <S.Desc>{item.desc}</S.Desc>
      </S.TextBox>
      <S.ImageBox>
        <S.Image />
      </S.ImageBox>
      <S.CategoryBox>
        {item.category.map((category: string) => (
          <S.Category key={category}>{category}</S.Category>
        ))}
      </S.CategoryBox>
    </S.Container>
  );
};

export default Item;
