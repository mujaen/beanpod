import React from 'react'

import Modal, { ModalProps } from '#components/Modal'
import Button from '#components/Button'
import Select from '#components/Select'

interface RefuseModalProps extends ModalProps {
  message: string
}

function RefuseModal({ show, message, onClose }: RefuseModalProps) {
  const replyField = [
    { accessor: '', value: '무응답' },
    { accessor: '1', value: '거리때문에' },
    { accessor: '2', value: '가치관이 달라서' },
    { accessor: '3', value: '인연이 아닌듯해서' },
    { accessor: '4', value: '프로필 내용이 적어서' },
    { accessor: '5', value: '종교가 달라서' },
    { accessor: '6', value: '흡연때문에' },
  ]

  return (
    <Modal show={show} onClose={onClose}>
      <h2>답변하기</h2>
      <dl>
        <dt>받은 메시지</dt>
        <dd>{message}</dd>
      </dl>
      <dl>
        <dt>답변 선택</dt>
        <dd>
          <Select
            options={replyField}
            defaultValue={replyField[0].accessor}
            onChange={value => alert(value.target.value)}
          />
        </dd>
      </dl>
      <Button size="medium" onClick={() => console.log('patch')}>
        확인
      </Button>
    </Modal>
  )
}

export default RefuseModal
