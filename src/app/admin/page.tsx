'use client';

import React, { useEffect, useState, cache } from 'react';
import { getBlogContents } from '@/lib/api/blog';
import { BlogContentsProps } from '@/lib/api/dto';
import useSelecteItem from '@/lib/hooks/input/useSelectItem';
import Wrapper from '@/components/wrapper';
import Inner from '@/components/inner';
import Editor from './editor';
import Preview from './preview';
import * as S from './style';

const Admin = () => {
  const [postData, setPostData] = useState<BlogContentsProps[]>([]);
  const editItem = useSelecteItem();

  useEffect(() => {
    const apiTest = cache(async () => {
      const res = await getBlogContents();
      setPostData(res.data);
    });
    apiTest();
  }, []);

  return (
    <Wrapper>
      <Inner>
        <S.Box>
          <Editor editItem={editItem.selecteItem} />
          <Preview postData={postData} editItem={editItem} />
        </S.Box>
      </Inner>
    </Wrapper>
  );
};

export default Admin;
