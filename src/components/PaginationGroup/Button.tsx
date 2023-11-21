import React, { PropsWithChildren } from 'react'

import styled from '@emotion/styled'

interface ButtonProps {
  isDisabled?: boolean
  isSelected?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledButton = styled.button<Pick<ButtonProps, 'isDisabled' | 'isSelected'>>`
  width: 28px;
  height: 28px;
  margin: 0 7px;
  outline: none;

  border-radius: 50%;
  border: none;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.point100 : 'transparent'};

  color: ${({ isSelected, theme }) => (isSelected ? theme.colors.white900 : theme.colors.gray800)};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  ${({ theme }) => theme.fonts.M200}

  &:hover {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
    background-color: ${({ theme, isSelected }) => !isSelected && theme.colors.gray400};
  }

  span {
    cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
  }

  path {
    fill: ${({ isDisabled, theme }) => (isDisabled ? theme.colors.gray700 : theme.colors.gray900)};
  }
`

function Button({
  isDisabled = false,
  isSelected = false,
  onClick,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton isSelected={isSelected} isDisabled={isDisabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button
