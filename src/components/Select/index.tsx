import React from 'react'

import { SelectProps } from './type'
import { StyledSelect } from './style'

function Select({ options = [], onChange, ...props }: SelectProps) {
  return (
    <StyledSelect {...props} onChange={onChange}>
      {options.map(option => (
        <option key={option.accessor} value={option.accessor}>
          {option.value}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Select
