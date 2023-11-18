import styled from '@emotion/styled'

import { IconStyleProps } from './type'

export const StyledIcon = styled.span<IconStyleProps>`
  pointer-events: none;

  display: flex;
  width: ${props => props.width && `${props.width}px`};
  height: ${props => props.height && `${props.height}px`};
  box-sizing: border-box;

  svg {
    pointer-events: none;
    width: 100%;
    height: 100%;
    fill: currentcolor;
  }
`
