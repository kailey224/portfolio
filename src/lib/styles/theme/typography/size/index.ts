import { css } from '@emotion/react';
import weights from '../weight';

const title = {
  t01: css`
    font-size: 1.5rem;
    line-height: 120%;
    ${weights.medium}
  `,
};

const subtitle = {
  s01: css`
    font-size: 0.875rem;
    ${weights.extralight}
  `,
};

const size = { title, subtitle };

export default size;
