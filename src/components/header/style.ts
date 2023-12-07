import styled from '@emotion/styled';

export const Wrapper = styled.header`
  position: fixed;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
`;

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.common.container.Margin};
  padding: 20px 16px;
  max-width: ${({ theme }) => theme.common.container.maxWidth};
  ${({ theme }) => theme.mediaquery.media.pc} {
    width: 90%;
  }
`;

export const Logo = styled.h1`
  font-size: 24px;
  a {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const MenuWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
`;

export const MenuButton = styled.button<{ isBtn: boolean }>`
  padding: 6px 26px;
  border-radius: 50px;
  background: ${({ isBtn }) => (isBtn ? '#fff' : 'none')};
  color: ${({ isBtn, theme }) =>
    isBtn ? theme.colors.black : theme.colors.white};
`;

export const ContactButton = styled.button`
  padding: 6px 26px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.black};
`;
