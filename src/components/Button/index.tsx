import React from 'react'

import { ButtonProps } from './type'
import { StyledButton } from './style'

function Button({ type = 'button', size = 'small', ...props }: ButtonProps) {
  return <StyledButton size={size} type={type} {...props} />
}

export default Button
