import React, { ReactNode } from 'react'

import styled from '@emotion/styled'

const Wrapper = styled.div<{ align: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ align }) => align};
  gap: 10px;

  margin-top: 30px;
`

interface ButtonGroupProps {
  align: string
  children: ReactNode
}

function ButtonGroup({ align = 'left', children }: ButtonGroupProps) {
  return <Wrapper align={align}>{children}</Wrapper>
}

export default ButtonGroup
