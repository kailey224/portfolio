import { ChangeEvent, useState } from 'react';

const useInput = () => {
  const [inputArrayValue, setInputArrayValue] = useState<string[]>([]);

  const onChangeInputArray = (e: ChangeEvent<HTMLInputElement>) => {
    const categoryString = e.target.value;
    const categoryArray = categoryString.split(',');
    setInputArrayValue(categoryArray);
  };

  const reset = () => {
    setInputArrayValue([]);
  };

  return {
    inputArrayValue,
    onChangeInputArray,
    reset,
  };
};

export default useInput;
