import styled from '@emotion/styled';

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
  min-width: 560px;
  width: 100%;
  height: auto;
`;

export const Title = styled.h2`
  margin-bottom: 54px;
  ${({ theme }) => theme.typography.size.title.t01};
  color: ${({ theme }) => theme.colors.white};
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

export const Button = styled.button`
  align-self: flex-end;
  width: 180px;
  height: 60px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.green};
  ${({ theme }) => theme.typography.size.title.t01};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;
