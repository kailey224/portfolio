'use client';

import React, { useState } from 'react';
import Wrapper from '@/components/wrapper';
import Inner from '@/components/inner';
import * as S from './style';

interface dataType {
  title: string;
  desc: string;
  img: string;
  category: string[];
}

const Admin = () => {
  const [data, setData] = useState<dataType>({
    title: '',
    desc: '',
    img: '',
    category: [],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.name === 'category') {
      const categoryString = e.target.value;
      const categoryArray = categoryString.split(',');
      setData(prev => ({
        ...prev,
        category: categoryArray,
      }));
    } else {
      setData(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  };

  console.log(data);

  return (
    <Wrapper>
      <Inner>
        <S.Title>Admin Page</S.Title>
        <S.FormBox>
          <S.InputWrapper>
            <S.LabelBox htmlFor="title">Title</S.LabelBox>
            <S.InputBox
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Title"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelBox htmlFor="desc">Description</S.LabelBox>
            <S.TextAreaBox
              onChange={handleChange}
              name="desc"
              rows={10}
              cols={33}
              placeholder="Description"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelBox htmlFor="img">Image URL</S.LabelBox>
            <S.InputBox
              onChange={handleChange}
              type="text"
              name="img"
              placeholder="Image URL"
            />
          </S.InputWrapper>
          <S.InputWrapper>
            <S.LabelBox htmlFor="category">Category</S.LabelBox>
            <S.InputBox
              onChange={handleChange}
              type="text"
              name="category"
              placeholder="Category"
            />
          </S.InputWrapper>
        </S.FormBox>
      </Inner>
    </Wrapper>
  );
};

export default Admin;
