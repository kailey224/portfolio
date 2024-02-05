import styled from '@emotion/styled';

export const Container = styled.div<{ isAdmin: boolean }>`
  display: grid;
  grid-auto-rows: 1px;
  grid-template-columns: repeat(3, minmax(0px, 1fr));
  column-gap: 1rem;
  ${({ theme }) => theme.mediaquery.media.lap} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaquery.media.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ButtonBox = styled.div``;
