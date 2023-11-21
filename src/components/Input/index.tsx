import React from 'react'

import { InputProps } from './type'
import { StyledInput } from './style'

function Input({ ...props }: InputProps) {
  return <StyledInput {...props} />
}

export default Input
