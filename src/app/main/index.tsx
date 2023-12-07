'use client';

import React, { useEffect, useState, cache } from 'react';
import getBlogContents from '@/lib/api/blog';
import * as S from './style';
import Visual from '@/components/visual';
import ListElement from '@/components/listElement';
import { BlogContentsProps } from '@/lib/api/dto';

const Main = () => {
  const [postData, setPostData] = useState<BlogContentsProps[]>([]);

  useEffect(() => {
    const apiTest = cache(async () => {
      const res = await getBlogContents();
      setPostData(res.data);
    });
    apiTest();
  }, []);

  console.log(postData);

  return (
    <S.Wrapper>
      <Visual />
      <ListElement postData={postData} />
    </S.Wrapper>
  );
};

export default Main;
