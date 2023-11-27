import React, { useState } from 'react'

import PageHeader from '#components/PageHeader'
import Table, { ColumnsProps } from '#components/Table'
import PaginationGroup from '#components/PaginationGroup'
import Button from '#components/Button'

import { Contents } from '#components/Layout/style'
import { TableCell, Total } from '#components/Table/style'

type State = 'active' | 'suspended' //활성화, 정지

type Access = 'genaral' | 'super' | 'master' //일반, 최고, 마스터

interface AccountData {
  seq: number
  name: string
  id: string
  state: State
  access: Access
  created_at: string // 가입일
  updated_at?: string // 수정일
  deleted_at?: string // 삭제일
  note: string
  detail?: boolean
}

export const data = [
  {
    seq: 1,
    name: '김민호',
    id: 'jinjer',
    state: 'suspended',
    access: 'master',
    created_at: '2023/09/05',
    updated_at: '',
    deleted_at: '',
    note: '',
  },
  {
    seq: 2,
    name: '임현승',
    id: 'hyun',
    state: 'active',
    access: 'super',
    created_at: '2023/09/05',
    updated_at: '',
    deleted_at: '',
    note: '',
  },
  {
    seq: 3,
    name: '김대현',
    id: 'kim',
    state: 'active',
    access: 'general',
    created_at: '2023/09/05',
    updated_at: '',
    deleted_at: '',
    note: '운영팀',
  },
] as AccountData[]

function Administrator({}) {
  const totalPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const columns: ColumnsProps<AccountData>[] = [
    {
      accessor: 'seq',
      value: '번호',
      width: 60,
    },
    {
      accessor: 'name',
      value: '이름',
      width: 120,
    },
    {
      accessor: 'id',
      value: '아이디',
    },
    {
      accessor: 'state',
      value: '상태',
      width: 120,
    },
    {
      accessor: 'access',
      value: '권한',
      width: 120,
    },
    {
      accessor: 'created_at',
      value: '가입일',
      width: 120,
    },
    {
      accessor: 'updated_at',
      value: '수정일',
      width: 120,
    },
    {
      accessor: 'deleted_at',
      value: '삭제일',
      width: 120,
    },
    {
      accessor: 'note',
      value: '비고',
      width: 100,
    },
    {
      accessor: 'detail',
      value: '정보',
      width: 100,
    },
  ]

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const renderAccess = (access: string) => {
    switch (access) {
      default:
      case 'general':
        return '일반관리자'
      case 'super':
        return '최고관리자'
      case 'master':
        return '마스터계정'
    }
  }

  return (
    <>
      <PageHeader title="관리자 목록" />
      <Contents>
        <Total>
          총 <strong>1개</strong>의 내역이 검색되었습니다
        </Total>
        <Table
          columns={columns}
          data={data}
          renderItem={item => (
            <>
              <TableCell>{item.seq}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.state === 'active' ? '활성화' : '정지'}</TableCell>
              <TableCell>{renderAccess(item.access)}</TableCell>
              <TableCell>{item.created_at}</TableCell>
              <TableCell>{item.updated_at}</TableCell>
              <TableCell>{item.deleted_at}</TableCell>
              <TableCell>{item.note}</TableCell>
              <TableCell>
                <Button disabled>상세보기</Button>
              </TableCell>
            </>
          )}
        />
        <PaginationGroup totalPage={totalPage} page={currentPage} paginateTo={handleOnPageChange} />
      </Contents>
    </>
  )
}

export default Administrator
