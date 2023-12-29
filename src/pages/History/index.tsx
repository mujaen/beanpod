import React, { useState } from 'react'

import PageHeader from '#components/PageHeader'
import Table, { ColumnsProps } from '#components/Table'
import PaginationGroup from '#components/PaginationGroup'
import SearchBar from '#components/SearchBar'

import { Contents } from '#components/Layout/style'
import { SearchWrapper } from '#components/SearchBar/style'
import { TableCell, Total } from '#components/Table/style'

interface HistoryData {
  seq: number
  event_name: string // 이벤트명
  created_cnt: number // 생성된 하트수
  used_cnt: number // 사용된 하트수
  created_at: string // 생성일
  used_at: string // 사용일
  returned_at: string // 환불가능일
  deleted_at: string // 소멸일
}

export const data = [
  {
    seq: 1,
    event_name: '데일리 미션',
    created_cnt: 2,
    used_cnt: 0,
    created_at: '2023/09/05',
    used_at: '',
    returned_at: '',
    deleted_at: '',
  },
  {
    seq: 2,
    event_name: '메시지 보내기',
    created_cnt: 0,
    used_cnt: -20,
    created_at: '',
    used_at: '2023/09/05',
    returned_at: '',
    deleted_at: '',
  },
] as HistoryData[]

function History() {
  const totalPage = 10
  const [currentPage, setCurrentPage] = useState(1)

  const columns: ColumnsProps<HistoryData>[] = [
    {
      accessor: 'seq',
      value: '번호',
      width: 60,
    },
    {
      accessor: 'event_name',
      value: '이벤트명',
    },
    {
      accessor: 'created_cnt',
      value: '생성된 하트수',
    },
    {
      accessor: 'used_cnt',
      value: '사용된 하트수',
    },
    {
      accessor: 'created_at',
      value: '생성일',
      width: 100,
    },
    {
      accessor: 'used_at',
      value: '사용일',
      width: 100,
    },
    {
      accessor: 'returned_at',
      value: '환불일',
      width: 100,
    },
    {
      accessor: 'deleted_at',
      value: '소멸일',
      width: 100,
    },
  ]

  const searchField = [
    { accessor: '', value: '전체' },
    { accessor: 'email', value: '이메일' },
    { accessor: 'nickname', value: '닉네임' },
  ]

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <PageHeader title="사용내역 목록" />
      <Contents>
        <SearchWrapper>
          <div>
            <dl>
              <dt>상세 검색</dt>
              <dd>
                <SearchBar
                  searchField={searchField}
                  onCreate={({ type, value }) => console.log(type, value)}
                />
              </dd>
            </dl>
          </div>
        </SearchWrapper>
        <Total>
          총 <strong>1개</strong>의 내역이 검색되었습니다
        </Total>
        <Table
          columns={columns}
          data={data}
          renderItem={item => (
            <>
              <TableCell>{item.seq}</TableCell>
              <TableCell>{item.event_name}</TableCell>
              <TableCell>{item.created_cnt}</TableCell>
              <TableCell>{item.used_cnt}</TableCell>
              <TableCell>{item.created_at}</TableCell>
              <TableCell>{item.used_at}</TableCell>
              <TableCell>{item.returned_at}</TableCell>
              <TableCell>{item.deleted_at}</TableCell>
            </>
          )}
        />
        <PaginationGroup totalPage={totalPage} page={currentPage} paginateTo={handleOnPageChange} />
      </Contents>
    </>
  )
}

export default History
