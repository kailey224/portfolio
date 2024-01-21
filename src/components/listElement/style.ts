import styled from '@emotion/styled';

export const Container = styled.div<{ isAdmin: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  ${({ isAdmin }) =>
    isAdmin
      ? 'width: 50%;'
      : `${({ theme }) => theme.mediaquery.media.pc} {
    width: 90%;
  }`}
`;

export const ButtonBox = styled.div``;
