import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  ${({ theme }) => theme.mediaquery.media.pc} {
    width: 90%;
  }
`;

export const Box = styled.div``;
