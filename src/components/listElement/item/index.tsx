import React from 'react';
import Link from 'next/link';
import { BlogContentsProps } from '@/lib/api/dto';
import { deleteBlogContent } from '@/lib/api/blog';
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
  const handleDelete = async (id: string) => {
    await deleteBlogContent(id);
    alert('delete success');
  };

  return (
    <S.Container height={item.height}>
      <S.Card color={item.color}>
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
        {isAdmin && (
          <S.ButtonBox>
            <S.Button onClick={() => editItem.onClickSelecteItem(item)}>
              Edit
            </S.Button>
            <S.Button onClick={() => handleDelete(item._id)}>Delete</S.Button>
          </S.ButtonBox>
        )}
      </S.Card>
    </S.Container>
  );
};

export default Item;
