import styled from '@emotion/styled';

export const Container = styled.div<{ height: string | undefined }>`
  grid-row-end: ${({ height }) => `span ${height}`};
`;

export const Card = styled.div<{ color: string | undefined }>`
  position: relative;
  padding: 26px;
  width: auto;
  height: auto;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.lightgray};
  background: ${({ color, theme }) =>
    color ? `${color}` : theme.colors.lightgray};
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.size.title.t01};
  color: ${({ theme }) => theme.colors.black};
`;

export const Desc = styled.p`
  ${({ theme }) => theme.typography.size.subtitle.s01};
  color: ${({ theme }) => theme.colors.black};
`;

export const ImageBox = styled.div`
  margin-bottom: 24px;
`;

export const Image = styled.div`
  width: 100%;
  height: 184px;
  background-color: #707070;
  opacity: 48%;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;

export const Category = styled.div`
  padding: 4px 12px;
  border-radius: 50px;
  // border: 1px solid ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.typography.size.subtitle.s01};
  color: ${({ theme }) => theme.colors.black};
`;

export const ButtonBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  top: 6%;
  right: 6%;
  z-index: 1;
`;

export const Button = styled.button`
  width: 4em;
  height: 1.5rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.green};
  ${({ theme }) => theme.typography.size.subtitle.s01};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;
