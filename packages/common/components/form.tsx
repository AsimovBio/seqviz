import { useEffect, useState } from 'react';
import ReactInputAutosize from 'react-input-autosize';

import { styled } from '../stitches.config';

const StyledAutosizeInput: any = styled(ReactInputAutosize, {
  input: {
    '&:focus-visible': { outline: '$active auto 1px;' },
  },
});

export function AutosizeInput({ value, onChange, ...props }) {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = ({ target: { name, value } }) => {
    setInputValue(value);
    onChange(name, value);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <StyledAutosizeInput
      {...props}
      onChange={handleChange}
      value={inputValue}
    />
  );
}

export const Input = styled('input', {
  '&:focus-visible': { outline: '$active auto 1px;' },
});

export const Label = styled('label', {
  alignItems: 'center',
  display: 'flex',
});

export default styled('form', {});
