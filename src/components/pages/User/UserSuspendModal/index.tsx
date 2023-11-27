import React from 'react'

import Modal, { ModalProps } from '#components/Modal'
import Input from '#components/Input'
import Button from '#components/Button'

interface UserSuspendModalProps extends ModalProps {
  suspend: string
}

function UserSuspendModal({ show, suspend, onClose }: UserSuspendModalProps) {
  const renderSuspend = (suspend: string): string => {
    switch (suspend) {
      default:
      case 'waring':
        return '경고'
      case 'pause':
        return '일시정지'
      case 'ban':
        return '영구정지'
    }
  }

  return (
    <Modal show={show} onClose={onClose}>
      <h2>회원 제재</h2>
      <dl>
        <dt>유형</dt>
        <dd>{renderSuspend(suspend)}</dd>
      </dl>
      <dl>
        <dt>정지 사유</dt>
        <dd>
          <Input placeholder="선택" />
        </dd>
      </dl>
      <Button size="medium" onClick={() => console.log('patch')}>
        확인
      </Button>
    </Modal>
  )
}
export default UserSuspendModal
