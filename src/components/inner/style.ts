import styled from '@emotion/styled';

const Container = styled.div`
  margin: 0 auto;
  padding: 70px 16px;
  max-width: 1200px;
  ${({ theme }) => theme.mediaquery.media.pc} {
    width: 90%;
  }
`;

export default Container;
