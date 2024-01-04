import React, { useState } from 'react'

import PageHeader from '#components/PageHeader'
import Table, { ColumnsProps } from '#components/Table'
import PaginationGroup from '#components/PaginationGroup'
import Input from '#components/Input'
import Select from '#components/Select'
import SearchBar from '#components/SearchBar'

import { Contents } from '#components/Layout/style'
import { SearchWrapper, Wrapper } from '#components/SearchBar/style'
import { TableCell, Total } from '#components/Table/style'

type Confirm = 'waiting' | 'public' | 'private' //대기, 공개, 비공개

type Gender = 'male' | 'female' //남성, 여성

interface SelfData {
  seq: number
  nick_name: string
  gender: Gender
  contents: string
  is_public: Confirm
  created_at: string
  updated_at: string
  deleted_at: string
  detail?: boolean
}

export const data = [
  {
    seq: 1,
    nick_name: '진저',
    gender: 'male',
    contents: '무쌍에 아담하신분',
    is_public: 'waiting',
    created_at: '2023/09/05',
    updated_at: '',
    deleted_at: '',
  },
  {
    seq: 2,
    nick_name: '마카롱조아',
    gender: 'female',
    contents: '경북 경남 사시는분',
    is_public: 'public',
    created_at: '2023/09/05',
    updated_at: '',
    deleted_at: '',
  },
] as SelfData[]

function Self() {
  const totalPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const columns: ColumnsProps<SelfData>[] = [
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
      accessor: 'gender',
      value: '성별',
      width: 80,
    },
    {
      accessor: 'contents',
      value: '내용',
    },
    {
      accessor: 'is_public',
      value: '공개여부',
    },
    {
      accessor: 'created_at',
      value: '등록일',
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
      accessor: 'detail',
      value: '회원정보',
      width: 100,
    },
  ]

  const searchField = [
    { accessor: '', value: '전체' },
    { accessor: 'email', value: '이메일' },
    { accessor: 'nickname', value: '닉네임' },
  ]

  const stateField = [
    { accessor: 'active', value: '활성화' },
    { accessor: 'inactive', value: '비활성화' },
  ]

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <>
      <PageHeader title="셀프소개 목록" />
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
              <TableCell>{item.gender === 'female' ? '여' : '남'}</TableCell>
              <TableCell>{item.contents}</TableCell>
              <TableCell>{item.is_public}</TableCell>
              <TableCell>{item.created_at}</TableCell>
              <TableCell>{item.updated_at}</TableCell>
              <TableCell>{item.deleted_at}</TableCell>
              <TableCell>
                <Select
                  options={stateField}
                  defaultValue={stateField[0].accessor}
                  onChange={value => alert(value.target.value)}
                />
              </TableCell>
            </>
          )}
        />
        <PaginationGroup totalPage={totalPage} page={currentPage} paginateTo={handleOnPageChange} />
      </Contents>
    </>
  )
}

export default Self
