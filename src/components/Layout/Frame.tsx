import React, { ReactNode } from 'react'

import Header from './Header'
import Nav from './Nav'

import { Wrapper, Container } from './style'

interface FrameProps {
  children: ReactNode
}

function Frame({ children }: FrameProps) {
  return (
    <Wrapper>
      <Nav />
      <Container>
        <Header />
        <>{children}</>
      </Container>
    </Wrapper>
  )
}

export default Frame
