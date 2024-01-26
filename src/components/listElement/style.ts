import styled from '@emotion/styled';

// export const Container = styled.div<{ isAdmin: boolean }>`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   align-items: center;
//   gap: 2rem;
//   ${({ isAdmin }) =>
//     isAdmin
//       ? 'width: 50%;'
//       : `${({ theme }) => theme.mediaquery.media.pc} {
//     width: 90%;
//   }`}
// `;

export const Container = styled.div<{ isAdmin: boolean }>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  ${({ theme }) => theme.mediaquery.media.lap} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${({ theme }) => theme.mediaquery.media.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ButtonBox = styled.div``;
