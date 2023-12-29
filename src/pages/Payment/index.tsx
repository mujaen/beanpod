import React, { useState } from 'react'

import PageHeader from '#components/PageHeader'
import Table, { ColumnsProps } from '#components/Table'
import Input from '#components/Input'
import Select from '#components/Select'
import SearchBar from '#components/SearchBar'
import PaginationGroup from '#components/PaginationGroup'
import Button from '#components/Button'

import { Contents } from '#components/Layout/style'
import { SearchWrapper, Wrapper } from '#components/SearchBar/style'
import { TableCell, Total } from '#components/Table/style'

type State = 'failed' | 'success'

interface PaymentData {
  seq: number
  nick_name: string
  email: string
  state: State
  payment_method: string
  payment_price: string
  created_at: string
  cancellation_at: string
  detail?: boolean
}

export const data = [
  {
    seq: 1,
    nick_name: '진저',
    email: 'jinjerkim@gmail.com',
    state: 'success',
    payment_method: '삼성카드',
    payment_price: '30,000원',
    created_at: '2023/09/05 16:12:11',
    cancellation_at: '2023/09/05 00:01:11',
  },
  {
    seq: 2,
    nick_name: '초코버터링',
    email: '',
    state: 'failed',
    payment_method: '국민카드',
    payment_price: '30,000원',
    created_at: '2023/09/05 16:12:11',
    cancellation_at: '2023/09/05 00:01:11',
  },
] as PaymentData[]

function Payment({}) {
  const totalPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const columns: ColumnsProps<PaymentData>[] = [
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
      accessor: 'state',
      value: '상태',
      width: 100,
    },
    {
      accessor: 'payment_method',
      value: '결제수단',
    },
    {
      accessor: 'payment_price',
      value: '결제금액',
    },
    {
      accessor: 'created_at',
      value: '결제날짜',
    },
    {
      accessor: 'cancellation_at',
      value: '취소날짜',
    },
    {
      accessor: 'detail',
      value: '상세보기',
    },
  ]

  const searchField = [
    { accessor: '', value: '전체' },
    { accessor: 'nickname', value: '닉네임' },
    { accessor: 'code', value: '주문코드' },
  ]

  const stateField = [
    { accessor: '', value: '전체' },
    { accessor: 'success', value: '결제완료' },
    { accessor: 'failed', value: '결제실패' },
  ]

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <PageHeader title="결제현황" />
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
              <TableCell>{item.state === 'failed' ? '결제 실패' : '결제 성공'}</TableCell>
              <TableCell>{item.payment_method}</TableCell>
              <TableCell>{item.payment_price}</TableCell>
              <TableCell>{item.created_at}</TableCell>
              <TableCell>{item.cancellation_at}</TableCell>
              <TableCell>
                <Button disabled>보기</Button>
              </TableCell>
            </>
          )}
        />
        <PaginationGroup totalPage={totalPage} page={currentPage} paginateTo={handleOnPageChange} />
      </Contents>
    </>
  )
}

export default Payment
