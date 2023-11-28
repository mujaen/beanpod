import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '#components/PageHeader'
import Table, { ColumnsProps } from '#components/Table'
import PaginationGroup from '#components/PaginationGroup'
import Button from '#components/Button'
import Input from '#components/Input'
import Select from '#components/Select'
import SearchBar from '#components/SearchBar'

import { Contents } from '#components/Layout/style'
import { SearchWrapper, Wrapper } from '#components/SearchBar/style'
import { TableCell, Total } from '#components/Table/style'

type State = 'waiting' | 'done' | 'reject' //대기중, 처리완료, 반려

type Type = 'refund' | 'report'

interface SupportData {
  seq: number
  nick_name: string
  email: string
  phone: string
  state: State
  support_type: Type
  note: string
  detail?: boolean
  created_at: string
  updated_at: string
  deleted_at: string
}

export const data = [
  {
    seq: 1,
    nick_name: '진저',
    email: 'jinjerkim@gmail.com',
    phone: '',
    state: 'done',
    support_type: 'refund',
    note: '',
    created_at: '2023/09/05',
    updated_at: '',
    deleted_at: '',
  },
  {
    seq: 2,
    nick_name: '아메리카노',
    email: '',
    phone: '010-1245-5678',
    state: 'waiting',
    support_type: 'report',
    note: '',
    created_at: '2023/09/05',
    updated_at: '',
    deleted_at: '',
  },
] as SupportData[]

function Support({}) {
  const totalPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const columns: ColumnsProps<SupportData>[] = [
    {
      accessor: 'seq',
      value: '번호',
      width: 60,
    },
    {
      accessor: 'nick_name',
      value: '닉네임',
      width: 150,
    },
    {
      accessor: 'email',
      value: '이메일',
    },
    {
      accessor: 'phone',
      value: '휴대폰번호',
    },
    {
      accessor: 'state',
      value: '상태',
      width: 120,
    },
    {
      accessor: 'support_type',
      value: '문의 유형',
      width: 120,
    },
    {
      accessor: 'note',
      value: '비고',
      width: 120,
    },
    {
      accessor: 'created_at',
      value: '등록일',
      width: 120,
    },
    {
      accessor: 'detail',
      value: '상세내역',
      width: 100,
    },
  ]

  const searchField = [
    { accessor: '', value: '전체' },
    { accessor: 'refund', value: '환불' },
    { accessor: 'report', value: '신고' },
  ]

  const stateField = [
    { accessor: '', value: '전체' },
    { accessor: 'waiting', value: '대기중' },
    { accessor: 'done', value: '처리완료' },
    { accessor: 'reject', value: '반려' },
  ]

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page)
  }

  const renderState = (state: string) => {
    switch (state) {
      default:
      case 'waiting':
        return '대기중'
      case 'done':
        return '처리완료'
      case 'reject':
        return '반려'
    }
  }

  return (
    <>
      <PageHeader title="문의사항 목록" />
      <Contents>
        <SearchWrapper>
          <div>
            <dl>
              <dt>상태</dt>
              <dd>
                <Select
                  options={stateField}
                  defaultValue={stateField[0].accessor}
                  onChange={value => alert(value.target.value)}
                />
              </dd>
            </dl>
            <dl>
              <dt>검색 기간</dt>
              <dd>
                <Wrapper>
                  <Input type="date" max="9999-12-31" />
                  <span>-</span>
                  <Input type="date" max="9999-12-31" />
                </Wrapper>
              </dd>
            </dl>
          </div>
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
              <TableCell>{item.nick_name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.phone}</TableCell>
              <TableCell>{renderState(item.state)}</TableCell>
              <TableCell>{item.support_type === 'refund' ? '환불' : '신고'}</TableCell>
              <TableCell>{item.note}</TableCell>
              <TableCell>{item.created_at}</TableCell>

              <TableCell>
                <Link key={item.seq} to={`/support/${item.seq}`}>
                  <Button>상세보기</Button>
                </Link>
              </TableCell>
            </>
          )}
        />
        <PaginationGroup totalPage={totalPage} page={currentPage} paginateTo={handleOnPageChange} />
      </Contents>
    </>
  )
}

export default Support
