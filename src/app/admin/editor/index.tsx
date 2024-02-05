'use client';

import React, { ChangeEvent, cache } from 'react';
import useInput from '@/lib/hooks/input/useInput';
import useInputArray from '@/lib/hooks/input/useInputArray';
import { postBlogContent, updateBlogContent } from '@/lib/api/blog';
import { BlogContentsProps } from '@/lib/api/dto';
import Input from '@/components/input';
import * as S from './style';

interface EditorProps {
  editItem?: {
    selecteItem: BlogContentsProps | undefined;
    onClickSelecteItem: (item: BlogContentsProps) => void;
  };
}

const Editor = ({ editItem }: EditorProps) => {
  const titleInput = useInput();
  const descInput = useInput();
  const imgInput = useInput();
  const categoryInput = useInputArray();
  const heightInput = useInput();
  const colorInput = useInput();

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: string
  ) => {
    if (editItem?.selecteItem) {
      if (fieldName === 'title') {
        editItem.selecteItem.title = e.currentTarget.value;
      }
      if (fieldName === 'desc') {
        editItem.selecteItem.desc = e.currentTarget.value;
      }
      if (fieldName === 'img') {
        editItem.selecteItem.img = e.currentTarget.value;
      }
      if (fieldName === 'category') {
        const categoryString = e.target.value;
        const categoryArray = categoryString.split(',');
        editItem.selecteItem.category = categoryArray;
      }
      if (fieldName === 'height') {
        editItem.selecteItem.height = e.currentTarget.value;
      }
      if (fieldName === 'color') {
        editItem.selecteItem.color = e.currentTarget.value;
      }
    }
  };

  const reset = () => {
    titleInput.reset();
    descInput.reset();
    imgInput.reset();
    categoryInput.reset();
    heightInput.reset();
    colorInput.reset();
  };

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      title: titleInput.inputValue,
      desc: descInput.inputValue,
      img: imgInput.inputValue,
      category: categoryInput.inputArrayValue,
      height: heightInput.inputValue,
      color: colorInput.inputValue,
    };

    const postData = cache(async () => {
      const res = await postBlogContent(data);
      if (res.data) {
        alert('success!!');
        reset();
      }
    });
    postData();
  };

  const onSubmitEdit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const editData = {
      id: editItem?.selecteItem?._id,
      title: editItem?.selecteItem?.title,
      desc: editItem?.selecteItem?.desc,
      img: editItem?.selecteItem?.img,
      category: editItem?.selecteItem?.category,
      height: editItem?.selecteItem?.height,
      color: editItem?.selecteItem?.color,
    };

    const updateData = cache(async () => {
      const res = await updateBlogContent(editData);
      if (res.data) {
        alert('edit!!');
        reset();
      }
    });
    updateData();
  };

  const handleSubmit = editItem ? onSubmitEdit : onSubmit;

  return (
    <S.FormBox onSubmit={handleSubmit}>
      <S.Title>Editor</S.Title>
      <Input>
        <S.LabelBox htmlFor="title">Title</S.LabelBox>
        <S.InputBox
          value={editItem?.selecteItem?.title || titleInput.inputValue}
          onChange={e => {
            onChangeInput(e, 'title');
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
          value={editItem?.selecteItem?.desc || descInput.inputValue}
          onChange={e => {
            onChangeInput(e, 'desc');
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
          value={editItem?.selecteItem?.img || imgInput.inputValue}
          onChange={e => {
            onChangeInput(e, 'img');
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
          value={
            editItem?.selecteItem?.category || categoryInput.inputArrayValue
          }
          onChange={e => {
            onChangeInput(e, 'category');
            categoryInput.onChangeInputArray(e);
          }}
          type="text"
          name="category"
          placeholder="Category"
        />
      </Input>
      <Input>
        <S.LabelBox htmlFor="height">Height</S.LabelBox>
        <S.InputBox
          value={editItem?.selecteItem?.height || heightInput.inputValue}
          onChange={e => {
            onChangeInput(e, 'height');
            heightInput.onChangeInput(e);
          }}
          type="text"
          name="height"
          placeholder="Height"
        />
      </Input>
      <Input>
        <S.LabelBox htmlFor="color">Color</S.LabelBox>
        <S.InputBox
          value={editItem?.selecteItem?.color || colorInput.inputValue}
          onChange={e => {
            onChangeInput(e, 'color');
            colorInput.onChangeInput(e);
          }}
          type="text"
          name="color"
          placeholder="Color Code"
        />
      </Input>
      <S.Button type="submit">Submit</S.Button>
    </S.FormBox>
  );
};

export default Editor;
