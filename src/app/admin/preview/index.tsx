'use client';

import React from 'react';
import { BlogContentsProps } from '@/lib/api/dto';
import ListElement from '@/components/listElement';

interface PreviewProps {
  postData: BlogContentsProps[];
  isAdmin?: boolean;
  editItem?: {
    selecteItem: BlogContentsProps | undefined;
    onClickSelecteItem: (item: BlogContentsProps) => void;
  };
}

const Preview = ({ postData, editItem, isAdmin }: PreviewProps) => {
  return <ListElement postData={postData} editItem={editItem} isAdmin />;
};

export default Preview;
