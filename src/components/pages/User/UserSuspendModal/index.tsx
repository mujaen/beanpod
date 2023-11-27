import React from 'react'

import Modal from '#components/Modal'
import Input from '#components/Input'
import Button from '#components/Button'

function UserSuspendModal({ show, onClose }) {
  return (
    <Modal show={show} onClose={onClose}>
      <h2>경고 부여 및 정지</h2>
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
