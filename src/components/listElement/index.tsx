import React from 'react';
import { BlogContentsProps } from '@/lib/api/dto';
import Inner from '@/components/inner';
import Item from './item';
import * as S from './style';

interface ListElementProps {
  postData: BlogContentsProps[];
}

const ListElement = ({ postData }: ListElementProps) => {
  return (
    <Inner>
      <S.Container>
        {postData.map((item: BlogContentsProps) => (
          <Item key={item._id} item={item} />
        ))}
      </S.Container>
    </Inner>
  );
};

export default ListElement;
