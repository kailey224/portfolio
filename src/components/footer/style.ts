import styled from '@emotion/styled';

export const Wrapper = styled.footer`
  margin-top: 80px;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  ${({ theme }) => theme.typography.size.title.t01};
`;

export const SnsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 46px;
  > a {
    ${({ theme }) => theme.typography.size.subtitle.s01};
    &:hover {
      ${({ theme }) => theme.typography.weights.light};
    }
  }
`;

export const TextBox = styled.div`
  padding-top: 34px;
`;

export const desc = styled.p`
  ${({ theme }) => theme.typography.size.subtitle.s01};
  color: ${({ theme }) => theme.colors.darkgreen};
`;
