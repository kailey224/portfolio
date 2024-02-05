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
  }, [id]);

  return (
    <Wrapper>
      <Inner>
        <S.Title>{postData?.title}</S.Title>
        <S.Desc>{postData?.desc}</S.Desc>
        <S.CategoryBox>
          {postData?.category?.map((category: string) => (
            <S.Category key={category}>{category}</S.Category>
          ))}
        </S.CategoryBox>
      </Inner>
      <S.Border />
      <Inner>
        <S.ImageBox>
          <S.Image />
          <S.Image />
          <S.Image />
        </S.ImageBox>
      </Inner>
    </Wrapper>
  );
};

export default Post;
