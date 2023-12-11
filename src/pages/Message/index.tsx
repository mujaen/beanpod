import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '#components/PageHeader'
import Table, { ColumnsProps } from '#components/Table'
import PaginationGroup from '#components/PaginationGroup'
import Button from '#components/Button'
import Sample from '#components/pages/Message/Sample'
import RefuseModal from '#components/pages/Message/Modal'

import { Contents } from '#components/Layout/style'
import { TableCell, Total } from '#components/Table/style'

interface MessageData {
  seq: number
  seq_sender: number //보낸사람 고유값
  seq_recipient: number //받는사람 고유값
  sender: string //보낸사람
  recipient: string //받는사람
  is_answer: boolean //답변 여부
  refuse_cnt: number //거절당한 횟수
  message: string //메시지 내용
  created_at: string //수신일
  reply?: boolean
}

export const data = [
  {
    seq: 1,
    seq_sender: 1283,
    seq_recipient: 1283,
    sender: '진저',
    recipient: '마카롱조아',
    is_answer: false,
    refuse_cnt: 0,
    message:
      '프로필을 보고 저와 결이 같다고 생각했어요 괜찮으시면 저랑 아이스티 한 잔 하면서 얘기나눠봐요',
    created_at: '2023/09/05',
  },
  {
    seq: 1,
    seq_sender: 1283,
    seq_recipient: 1283,
    sender: '진저',
    recipient: '마카롱조아',
    is_answer: false,
    refuse_cnt: 0,
    message:
      '프로필을 보고 저와 결이 같다고 생각했어요 괜찮으시면 저랑 아이스티 한 잔 하면서 얘기나눠봐요',
    created_at: '2023/09/05',
  },
  {
    seq: 1,
    seq_sender: 1283,
    seq_recipient: 1283,
    sender: '진저',
    recipient: '마카롱조아',
    is_answer: false,
    refuse_cnt: 1,
    message: '',
    created_at: '2023/09/05',
  },
] as MessageData[]

function Message({}) {
  const totalPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const [message, setMessage] = useState('')
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>()

  const columns: ColumnsProps<MessageData>[] = [
    {
      accessor: 'seq',
      value: '번호',
      width: 60,
    },
    {
      accessor: 'sender',
      value: '보낸사람',
    },
    {
      accessor: 'recipient',
      value: '받는사람',
    },
    {
      accessor: 'is_answer',
      value: '답변 여부',
      width: 120,
    },
    {
      accessor: 'refuse_cnt',
      value: '거절 횟수',
      width: 120,
    },
    {
      accessor: 'created_at',
      value: '수신일',
      width: 120,
    },
    {
      accessor: 'reply',
      value: '답변',
      width: 100,
    },
  ]

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <PageHeader title="메시지 목록" />
      <Contents>
        <Sample />
        <Total>
          총 <strong>1개</strong>의 내역이 검색되었습니다
        </Total>
        <Table
          columns={columns}
          data={data}
          renderItem={item => (
            <>
              <TableCell>{item.seq}</TableCell>
              <TableCell>
                <Link key={item.seq_sender} to={`/user/${item.seq_sender}`}>
                  {item.sender}
                </Link>
              </TableCell>
              <TableCell>
                <Link key={item.seq_recipient} to={`/user/${item.seq_recipient}`}>
                  {item.recipient}
                </Link>
              </TableCell>
              <TableCell>{item.is_answer ? 'Y' : 'N'}</TableCell>
              <TableCell>{item.refuse_cnt}</TableCell>
              <TableCell>{item.created_at}</TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    setIsVisibleModal(true)
                    setMessage(item.message)
                  }}
                >
                  보내기
                </Button>
              </TableCell>
            </>
          )}
        />
        <PaginationGroup totalPage={totalPage} page={currentPage} paginateTo={handleOnPageChange} />
      </Contents>
      <RefuseModal
        show={isVisibleModal}
        message={message}
        onClose={show => setIsVisibleModal(show)}
      />
    </>
  )
}

export default Message
