import React from 'react'

import PageHeader from '#components/PageHeader'
import Table, { ColumnsProps } from '#components/Table'
import Button from '#components/Button'
import Select from '#components/Select'

import { Contents } from '#components/Layout/style'
import { TableCell, Total } from '#components/Table/style'

type Level = '다이아' | '골드' | '실버'

type State = '활동중' | '휴면' | '일시정지' | '정지'

type Sex = '남성' | '여성'

type Confirm = '대기' | '노출' | '숨김'

interface MemberData {
  id: number
  email: string
  nickname: string
  age: number
  sex: Sex
  level: Level
  certify: boolean
  confirm: Confirm
  state: State
  pauseDate?: string // ISO8601 UTC
  createDate: string // ISO8601 UTC
  updateDate?: string // ISO8601 UTC
  deleteDate?: string // ISO8601 UTC
  detail?: boolean
}

export const data = [
  {
    id: 1,
    email: 'jinjerkim@gmail.com',
    nickname: '진저',
    age: 34,
    sex: '남성',
    level: '골드',
    certify: true,
    confirm: '노출',
    state: '활동중',
    pauseDate: '',
    createDate: '2023/09/05',
    updateDate: '',
    deleteDate: '',
  },
  {
    id: 2,
    email: 'jinjerkim@gmail.com',
    nickname: '마카롱조아',
    age: 37,
    sex: '여성',
    level: '다이아',
    certify: false,
    confirm: '숨김',
    state: '휴면',
    pauseDate: '',
    createDate: '2023/09/05',
    updateDate: '',
    deleteDate: '',
  },
  {
    id: 3,
    email: 'jinjerkim@gmail.com',
    nickname: '스타벅스남',
    age: 37,
    sex: '남성',
    level: '실버',
    certify: false,
    confirm: '대기',
    state: '일시정지',
    pauseDate: '',
    createDate: '2023/09/05',
    updateDate: '',
    deleteDate: '',
  },
] as MemberData[]

function Member({}) {
  const columns: ColumnsProps<MemberData>[] = [
    {
      accessor: 'id',
      value: '번호',
    },
    {
      accessor: 'email',
      value: '이메일',
    },
    {
      accessor: 'nickname',
      value: '닉네임',
    },
    {
      accessor: 'sex',
      value: '성별',
    },
    {
      accessor: 'level',
      value: '등급',
    },
    {
      accessor: 'certify',
      value: '번호인증 여부',
    },
    {
      accessor: 'confirm',
      value: '프로필 공개여부',
    },
    {
      accessor: 'state',
      value: '상태',
    },
    {
      accessor: 'pauseDate',
      value: '일시정지 기간',
    },
    {
      accessor: 'createDate',
      value: '가입일',
    },
    {
      accessor: 'updateDate',
      value: '수정일',
    },
    {
      accessor: 'deleteDate',
      value: '탈퇴일',
    },
    {
      accessor: 'detail',
      value: '상세보기',
    },
  ]

  const options = [
    {
      accessor: '1',
      value: '대기',
    },
    {
      accessor: '2',
      value: '공개',
    },
    {
      accessor: '3',
      value: '미공개',
    },
  ]

  return (
    <>
      <PageHeader title="회원관리" />
      <Contents>
        <Total>
          총 <strong>1개</strong>의 내역이 검색되었습니다
        </Total>
        <Table
          columns={columns}
          data={data}
          renderItem={item => (
            <>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.nickname}</TableCell>
              <TableCell>{item.sex}</TableCell>
              <TableCell>{item.level}</TableCell>
              <TableCell>{item.certify ? '완료' : '미완료'}</TableCell>
              <TableCell>
                <Select options={options} onChange={value => alert(value.target.value)} />
              </TableCell>
              <TableCell>{item.state}</TableCell>
              <TableCell>{item.pauseDate}</TableCell>
              <TableCell>{item.createDate}</TableCell>
              <TableCell>{item.updateDate}</TableCell>
              <TableCell>{item.deleteDate}</TableCell>
              <TableCell>
                <Button>보기</Button>
              </TableCell>
            </>
          )}
        />
      </Contents>
    </>
  )
}

export default Member
