import React, { useState } from 'react'

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

type Level = '다이아' | '골드' | '실버'

type State = '활동중' | '휴면' | '일시정지' | '정지'

type Sex = '남성' | '여성'

type Confirm = '1' | '2' | '3'

interface MemberData {
  id: number
  nickname: string
  email: string
  age: number
  sex: Sex
  level: Level
  certify: boolean
  confirm: Confirm
  state: State
  recommender: string
  pauseDate?: string // ISO8601 UTC
  createDate: string // ISO8601 UTC
  updateDate?: string // ISO8601 UTC
  deleteDate?: string // ISO8601 UTC
  detail?: boolean
}

export const data = [
  {
    id: 1,
    nickname: '진저',
    email: 'jinjerkim@gmail.com',
    age: 34,
    sex: '남성',
    level: '골드',
    certify: true,
    confirm: '1',
    state: '활동중',
    recommender: '소소미',
    createDate: '2023/09/05',
  },
  {
    id: 2,
    nickname: '마카롱조아',
    email: 'jinjerkim@gmail.com',
    age: 37,
    sex: '여성',
    level: '다이아',
    certify: false,
    confirm: '2',
    state: '휴면',
    recommender: '',
    createDate: '2023/09/05',
  },
  {
    id: 99999,
    nickname: '스타벅스남',
    email: 'jinjerkim@gmail.com',
    age: 37,
    sex: '남성',
    level: '실버',
    certify: false,
    confirm: '3',
    state: '일시정지',
    recommender: '',
    createDate: '2023/09/05',
  },
] as MemberData[]

function Member({}) {
  const totalPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const columns: ColumnsProps<MemberData>[] = [
    {
      accessor: 'id',
      value: '번호',
      width: 60,
    },
    {
      accessor: 'nickname',
      value: '닉네임',
      width: 150,
    },
    {
      accessor: 'email',
      value: '이메일',
    },
    {
      accessor: 'sex',
      value: '성별',
      width: 80,
    },
    {
      accessor: 'level',
      value: '등급',
      width: 80,
    },
    {
      accessor: 'certify',
      value: '번호인증 여부',
      width: 100,
    },
    {
      accessor: 'confirm',
      value: '프로필 공개여부',
    },
    {
      accessor: 'state',
      value: '상태',
      width: 100,
    },
    {
      accessor: 'recommender',
      value: '추천인',
      width: 100,
    },
    {
      accessor: 'createDate',
      value: '가입일',
      width: 120,
    },
    {
      accessor: 'detail',
      value: '회원정보',
      width: 100,
    },
  ]

  const options = [
    {
      accessor: '1',
      value: '대기',
    },
    {
      accessor: '2',
      value: '노출',
    },
    {
      accessor: '3',
      value: '숨김',
    },
  ]

  const searchField = [
    { accessor: '', value: '전체' },
    { accessor: 'email', value: '이메일' },
    { accessor: 'nickname', value: '닉네임' },
  ]

  const sexField = [
    { accessor: '', value: '전체' },
    { accessor: 'male', value: '남성' },
    { accessor: 'female', value: '여성' },
  ]

  const levelField = [
    { accessor: '', value: '전체' },
    { accessor: 'diamond', value: '다이아' },
    { accessor: 'gold', value: '골드' },
    { accessor: 'silver', value: '실버' },
  ]

  const stateField = [
    { accessor: '', value: '전체' },
    { accessor: 'active', value: '활동중' },
    { accessor: 'dormancy', value: '휴면' },
    { accessor: 'pause', value: '일시정지' },
    { accessor: 'inactive', value: '정지' },
  ]

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <PageHeader title="회원관리" />
      <Contents>
        <SearchWrapper>
          <div>
            <dl>
              <dt>성별</dt>
              <dd>
                <Select
                  options={sexField}
                  defaultValue={sexField[0].accessor}
                  onChange={value => alert(value.target.value)}
                />
              </dd>
            </dl>
            <dl>
              <dt>등급</dt>
              <dd>
                <Select
                  options={levelField}
                  defaultValue={levelField[0].accessor}
                  onChange={value => alert(value.target.value)}
                />
              </dd>
            </dl>
          </div>
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
              <dt>가입기간</dt>
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
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.nickname}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.sex}</TableCell>
              <TableCell>{item.level}</TableCell>
              <TableCell>{item.certify ? '완료' : '미완료'}</TableCell>
              <TableCell>
                <Select
                  options={options}
                  key={item.confirm}
                  defaultValue={item.confirm}
                  onChange={value => alert(value.target.value)}
                />
              </TableCell>
              <TableCell>{item.state}</TableCell>
              <TableCell>{item.recommender}</TableCell>
              <TableCell>{item.createDate}</TableCell>
              <TableCell>
                <Button>상세보기</Button>
              </TableCell>
            </>
          )}
        />
        <PaginationGroup totalPage={totalPage} page={currentPage} paginateTo={handleOnPageChange} />
      </Contents>
    </>
  )
}

export default Member
