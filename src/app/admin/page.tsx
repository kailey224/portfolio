'use client';

import React from 'react';
import useInput from '@/lib/hooks/input/useInput';
import useInputArray from '@/lib/hooks/input/useInputArray';
import Wrapper from '@/components/wrapper';
import Inner from '@/components/inner';
import Input from '@/components/input';
import * as S from './style';

const Admin = () => {
  const titleInput = useInput();
  const descInput = useInput();
  const imgInput = useInput();
  const categoryInput = useInputArray();

  const data = {
    title: titleInput.inputValue,
    desc: descInput.inputValue,
    img: imgInput.inputValue,
    category: categoryInput.inputArrayValue,
  };

  const reset = () => {
    titleInput.reset();
    descInput.reset();
    imgInput.reset();
    categoryInput.reset();
  };

  console.log(data);

  return (
    <Wrapper>
      <Inner>
        <S.Title>Admin Page</S.Title>
        <S.FormBox>
          <Input>
            <S.LabelBox htmlFor="title">Title</S.LabelBox>
            <S.InputBox
              value={titleInput.inputValue}
              onChange={e => {
                titleInput.onChangeInput(e);
              }}
              type="text"
              name="title"
              placeholder="Title"
            />
          </Input>
          <Input>
            <S.LabelBox htmlFor="desc">Description</S.LabelBox>
            <S.TextAreaBox
              value={descInput.inputValue}
              onChange={e => {
                descInput.onChangeInput(e);
              }}
              name="desc"
              rows={10}
              cols={33}
              placeholder="Description"
            />
          </Input>
          <Input>
            <S.LabelBox htmlFor="img">Image URL</S.LabelBox>
            <S.InputBox
              value={imgInput.inputValue}
              onChange={e => {
                imgInput.onChangeInput(e);
              }}
              type="text"
              name="img"
              placeholder="Image URL"
            />
          </Input>
          <Input>
            <S.LabelBox htmlFor="category">Category</S.LabelBox>
            <S.InputBox
              value={categoryInput.inputArrayValue}
              onChange={e => {
                categoryInput.onChangeInputArray(e);
              }}
              type="text"
              name="category"
              placeholder="Category"
            />
          </Input>
          <S.Button
            type="button"
            onClick={() => {
              alert('success!!!');
              reset();
            }}
          >
            Submit
          </S.Button>
        </S.FormBox>
      </Inner>
    </Wrapper>
  );
};

export default Admin;
