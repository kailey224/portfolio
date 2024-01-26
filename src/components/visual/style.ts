import styled from '@emotion/styled';

export const Container = styled.div`
  position: sticky;
  top: 36px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  min-width: 320px;
  border-radius: 18px;
  background: ${({ theme }) => theme.colors.lightgray};
  color: ${({ theme }) => theme.colors.black};
`;

export const Border = styled.div`
  width: 100%;
  border-bottom: 1px solid #373737;
`;

export const TextBox = styled.div``;

export const Title = styled.h2`
  margin-bottom: 10px;
  ${({ theme }) => theme.typography.size.title.t01};
`;

export const Desc = styled.p`
  ${({ theme }) => theme.typography.size.subtitle.s01};
`;

export const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const SkillBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 6px;
`;

export const Skill = styled.div`
  padding: 2px 12px;
  border-radius: 50px;
  border: 1px solid ${({ theme }) => theme.colors.darkgreen};
  ${({ theme }) => theme.typography.size.subtitle.s01};
`;
