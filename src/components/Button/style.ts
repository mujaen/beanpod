import styled from '@emotion/styled'

import { ButtonProps } from './type'

const fontSizes = {
  small: '12px',
  medium: '14px',
  large: '16px',
  wide: '14px',
}

const height = {
  small: '26px',
  medium: '38px',
  large: '46px',
  wide: '38px',
}

const width = {
  small: '58px',
  medium: '80px',
  large: '110px',
  wide: '140px',
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  appearance: none;

  height: ${({ size }) => size && height[size]};
  width: ${({ size }) => size && width[size]};

  font-size: ${({ size }) => size && fontSizes[size]};
  color: ${({ theme, disabled }) => (disabled ? theme.colors.gray600 : theme.colors.gray900)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  border: 1px solid
    ${({ theme, disabled }) => (disabled ? theme.colors.gray400 : theme.colors.gray600)};
  background-color: ${({ theme }) => theme.colors.white900};

  &:hover,
  &:focus {
    color: ${({ theme, disabled }) => (disabled ? theme.colors.gray600 : theme.colors.white900)};
    background-color: ${({ theme, disabled }) =>
      disabled ? theme.colors.white900 : theme.colors.gray600};
    outline: none;
  }
`
