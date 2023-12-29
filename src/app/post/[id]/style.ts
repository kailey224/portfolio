import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-bottom: 20px;
  ${({ theme }) => theme.typography.size.title.t01};
  color: ${({ theme }) => theme.colors.white};
`;

export const Desc = styled.p`
  ${({ theme }) => theme.typography.size.title.t02};
  color: ${({ theme }) => theme.colors.white};
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  margin-top: 20px;
`;

export const Category = styled.div`
  padding: 6px 14px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.green};
  ${({ theme }) => theme.typography.size.subtitle.s01};
  color: ${({ theme }) => theme.colors.black};
`;

export const Border = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  border-bottom: 1px solid #373737;
  ${({ theme }) => theme.mediaquery.media.pc} {
    width: 90%;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Image = styled.div`
  width: 100%;
  height: 640px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
