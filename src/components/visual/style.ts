import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  ustify-content: flex-start;
  align-items: center;
`;

export const Border = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  border-bottom: 1px solid #373737;
  ${({ theme }) => theme.mediaquery.media.pc} {
    width: 90%;
  }
`;

export const ProfileBox = styled.div`
  margin-right: 46px;
`;

export const ProfileImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 160px;
  border-radius: 80px;
  background-color: ${({ theme }) => theme.colors.green};
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.size.title.t01};
  color: ${({ theme }) => theme.colors.white};
`;

export const Desc = styled.p`
  ${({ theme }) => theme.typography.size.subtitle.s01};
  color: ${({ theme }) => theme.colors.white};
`;
