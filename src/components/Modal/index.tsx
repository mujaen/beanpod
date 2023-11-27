import React, { useEffect, ReactNode } from 'react'

import Icon from '#components/Icon'

import { Container, Wrapper, Content, CloseButton } from './style'

export interface ModalProps {
  show: boolean | undefined
  onClose: (show: false) => void
  children?: ReactNode
}

function Modal({ show, onClose, children }: ModalProps) {
  const isHidden = typeof show === 'boolean' ? 'hidden' : ''

  const showClass = show ? 'show' : isHidden

  useEffect(() => {
    const body = document.getElementsByTagName('body')[0]
    if (show) {
      body.style.overflow = 'hidden'
    } else {
      body.removeAttribute('style')
    }
  }, [show])

  return (
    <Container className={`${showClass}`}>
      <Wrapper>
        <Content>
          <CloseButton onClick={() => onClose(false)}>
            <Icon icon="close" width={40} height={40} />
          </CloseButton>
          {children}
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Modal
