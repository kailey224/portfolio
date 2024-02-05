'use client';

import React, { useEffect, useState, cache } from 'react';
import { getBlogContents } from '@/lib/api/blog';
import { BlogContentsProps } from '@/lib/api/dto';
import useSelecteItem from '@/lib/hooks/input/useSelectItem';
import Wrapper from '@/components/wrapper';
import Editor from './editor';
import Preview from './preview';

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
      <Editor editItem={editItem} />
      <Preview postData={postData} editItem={editItem} />
    </Wrapper>
  );
};

export default Admin;
