import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 26px;
  width: 30.333%;
  height: auto;
  background-color: ${({ theme }) => theme.colors.green};
  ${({ theme }) => theme.mediaquery.media.lap} {
    width: 47%;
  }
  ${({ theme }) => theme.mediaquery.media.tabletS} {
    width: 100%;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.darkgreen};
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
  background-color: ${({ theme }) => theme.colors.darkgreen};
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
  border: 1px solid ${({ theme }) => theme.colors.darkgreen};
  ${({ theme }) => theme.typography.size.subtitle.s01};
  color: ${({ theme }) => theme.colors.black};
`;
