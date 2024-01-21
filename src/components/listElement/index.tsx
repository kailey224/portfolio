import React from 'react';
import { BlogContentsProps } from '@/lib/api/dto';
import Item from './item';
import * as S from './style';

interface ListElementProps {
  postData: BlogContentsProps[];
  isAdmin?: boolean;
  editItem?: {
    selecteItem: BlogContentsProps | undefined;
    onClickSelecteItem: (item: BlogContentsProps) => void;
  };
}

const ListElement = ({ postData, isAdmin, editItem }: ListElementProps) => {
  return (
    <S.Container isAdmin={isAdmin}>
      {postData.map((item: BlogContentsProps) => (
        <Item
          key={item._id}
          item={item}
          isAdmin={isAdmin}
          editItem={editItem}
        />
      ))}
    </S.Container>
  );
};

export default ListElement;
