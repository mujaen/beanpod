import { css } from '@emotion/react'

export const flex = {
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerColumn: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  between: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
}

export const ellipsis = (maxLine: number) => css`
  display: -webkit-box;
  overflow: hidden;

  text-overflow: ellipsis;
  word-wrap: break-word;

  -webkit-line-clamp: ${maxLine};
  -webkit-box-orient: vertical;
`
