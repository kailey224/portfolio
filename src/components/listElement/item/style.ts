import styled from '@emotion/styled';

export const Container = styled.div<{ isAdmin: boolean }>`
  padding: 26px;
  width: ${({ isAdmin }) => (isAdmin ? '100%;' : '')}
  height: auto;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.lightgray};

  &:first-child {
    background: #a259ff;
  }
  &:nth-child(2) {
    background: #0ECF82;
  }
  &:nth-child(6) {
    background: #FEEAA0;
  }
  &:hover {
    transition: transform 0.4s;
    transform: scale(1.02);
  }
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
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.green};
  ${({ theme }) => theme.typography.size.subtitle.s01};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;
