import styled from '@emotion/styled'

import { SelectProps } from './type'

export const StyledSelect = styled.select<SelectProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  height: 26px;
  width: 100px;

  font-size: 12px;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray600 : theme.colors.gray800)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  border: 1px solid
    ${({ theme, disabled }) => (disabled ? theme.colors.gray400 : theme.colors.gray600)};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray100 : theme.colors.white900};
`
