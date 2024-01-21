import React from 'react';
import Link from 'next/link';
import { BlogContentsProps } from '@/lib/api/dto';
import * as S from './style';

interface ItemElementProps {
  item: BlogContentsProps;
  isAdmin?: boolean;
  editItem?: {
    selecteItem: BlogContentsProps | undefined;
    onClickSelecteItem: (item: BlogContentsProps) => void;
  };
}

const Item = ({ item, isAdmin, editItem }: ItemElementProps) => {
  return (
    <>
      <S.Container isAdmin={isAdmin}>
        <Link href={`/post/${item._id}`}>
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
        </Link>
      </S.Container>
      {isAdmin && (
        <S.ButtonBox>
          <S.Button onClick={() => editItem.onClickSelecteItem(item)}>
            Edit
          </S.Button>
          <S.Button>Delete</S.Button>
        </S.ButtonBox>
      )}
    </>
  );
};

export default Item;
