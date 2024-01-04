import React, { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeInput = (e: {
    currentTarget: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.currentTarget.value);
  };

  const reset = () => {
    setInputValue('');
  };

  return {
    inputValue,
    onChangeInput,
    reset,
  };
};

export default useInput;
