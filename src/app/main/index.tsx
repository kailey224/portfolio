'use client';

import React, { useEffect, useState, cache } from 'react';
import { getBlogContents } from '@/lib/api/blog';
import { BlogContentsProps } from '@/lib/api/dto';
import Visual from '@/components/visual';
import ListElement from '@/components/listElement';
import Wrapper from '@/components/wrapper';
import GaApi from '@/lib/ga4api';

const Main = () => {
  const [postData, setPostData] = useState<BlogContentsProps[]>([]);

  useEffect(() => {
    const apiTest = cache(async () => {
      const res = await getBlogContents();
      setPostData(res.data);
    });
    apiTest();
  }, []);

  GaApi();

  return (
    <Wrapper>
      <Visual />
      <ListElement postData={postData} />
    </Wrapper>
  );
};

export default Main;
