import React from 'react'

import Button from '#components/Button'

import { Wrapper } from './style'

function Modal({}) {
  return (
    <Wrapper>
      <div>
        <span>김민호</span>
        <em>jinjer / 마스터계정</em>
      </div>
      <div>
        <Button size="medium" onClick={() => console.log('로그아웃')}>
          로그아웃
        </Button>
      </div>
    </Wrapper>
  )
}

export default Modal
