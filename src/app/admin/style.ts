import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-bottom: 100px;
  ${({ theme }) => theme.typography.size.title.t01};
  color: ${({ theme }) => theme.colors.white};
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LabelBox = styled.label`
  display: block;
  width: 20%;
  ${({ theme }) => theme.typography.size.title.t02};
  color: ${({ theme }) => theme.colors.white};
`;

export const InputBox = styled.input`
  padding: 8px;
  width: 80%;
  height: 40px;
`;

export const TextAreaBox = styled.textarea`
  padding: 8px;
  width: 80%;
`;
