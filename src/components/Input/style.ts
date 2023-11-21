import styled from '@emotion/styled'

import { InputProps } from './type'

export const StyledInput = styled.input<InputProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  width: 100%;
  height: 26px;
  margin: 0;
  padding: 0 0.4em;

  font-size: 12px;
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray600 : theme.colors.gray800)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  border: 1px solid
    ${({ theme, disabled }) => (disabled ? theme.colors.gray400 : theme.colors.gray600)};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.gray100 : theme.colors.white900};
  box-sizing: border-box;

  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.blue500};
  }
`
