'use client';

import React, { useEffect, useState, cache } from 'react';
import { getBlogContent } from '@/lib/api/blog';
import { BlogContentsProps } from '@/lib/api/dto';
import Wrapper from '@/components/wrapper';
import Inner from '@/components/inner';
import * as S from './style';

interface PostProps {
  params: { id: string };
}

const Post = ({ params: { id } }: PostProps) => {
  const [postData, setPostData] = useState<BlogContentsProps>();

  useEffect(() => {
    const getPost = cache(async () => {
      const res = await getBlogContent(id);
      setPostData(res.data);
    });
    getPost();
  }, []);

  return (
    <Wrapper>
      <Inner>
        <S.Test>testtest</S.Test>
        <S.Test>{postData?.title}</S.Test>
        <S.Test>{postData?.desc}</S.Test>
      </Inner>
    </Wrapper>
  );
};

export default Post;
