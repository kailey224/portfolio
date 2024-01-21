import { useState } from 'react';
import { BlogContentsProps } from '../../api/dto';

const useSelecteItem = () => {
  const [selecteItem, setSelecteItem] = useState<BlogContentsProps>();

  const onClickSelecteItem = (item: BlogContentsProps) => {
    setSelecteItem(item);
  };

  return { selecteItem, onClickSelecteItem };
};

export default useSelecteItem;
