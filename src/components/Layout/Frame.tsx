import React, { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'

import { Wrapper, Container } from './style'

interface FrameProps {
  children: ReactNode
}

function Frame({ children }: FrameProps) {
  const location = useLocation()
  const pathname = location.pathname

  console.log(pathname)
  return (
    <Wrapper>
      {pathname === '/login' ? (
        <>{children}</>
      ) : (
        <>
          <Nav />
          <Container>
            <Header />
            <>{children}</>
          </Container>
        </>
      )}
    </Wrapper>
  )
}

export default Frame
