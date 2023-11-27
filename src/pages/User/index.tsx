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

type Rank = 'diamond' | 'gold' | 'silver' //다이아, 골드, 실버

type State = 'active' | 'dormancy' | 'pause' | 'ban' //활동중, 휴면, 일시정지, 영구정지

type Gender = 'male' | 'female' //남성, 여성

type Confirm = 'waiting' | 'public' | 'private' //대기, 공개, 비공개

interface UserData {
  seq: number
  rank: Rank
  email: string
  nick_name: string
  age: number
  kakao_id?: string
  phone?: string
  gender: Gender
  height?: number
  job?: string
  education_level?: string
  location?: string
  mbti?: string
  hobbies?: string //취미

  drink?: string //음주
  smoke?: string //흡연
  religion?: string //종교
  is_phone_verified: boolean //번호인증 여부
  is_profile_public: Confirm //프로필공개 여부
  state: State //회원상태
  referrer_nick_name: string //추천인
  is_pause?: boolean //일시정지 여부
  is_suspended?: boolean //영구정지 여부
  suspension_reason?: string //정지 사유
  is_phone_block?: boolean //지인차단 여부
  warning_cnt?: number //경고 횟수
  created_at: string // 가입일
  updated_at?: string // 수정일
  deleted_at?: string // 삭제일
  min_age?: number //이상형 최소 나이
  max_age?: number //이상형 최대 나이
  preferred_location_1?: string //이상형 선호지역1
  preferred_location_2?: string //이상형 선호지역2
  is_drinker?: string //이상형 음주 여부
  is_religion?: string //이상형 종교 여부
  is_smoker?: string //이상형 흡연여부
  is_hobbies?: string //이상형 취미 여부
  detail?: boolean
}

export const data = [
  {
    seq: 1,
    nick_name: '진저',
    email: 'jinjerkim@gmail.com',
    age: 34,
    gender: 'male',
    rank: 'gold',
    is_phone_verified: true,
    is_profile_public: 'waiting',
    state: 'active',
    referrer_nick_name: '소소미',
    created_at: '2023/09/05',
  },
  {
    seq: 2,
    nick_name: '마카롱조아',
    email: 'jinjerkim@gmail.com',
    age: 37,
    gender: 'female',
    rank: 'diamond',
    is_phone_verified: false,
    is_profile_public: 'public',
    state: 'pause',
    referrer_nick_name: '',
    created_at: '2023/09/05',
  },
  {
    seq: 99999,
    nick_name: '스타벅스남',
    email: 'jinjerkim@gmail.com',
    age: 37,
    gender: 'male',
    rank: 'silver',
    is_phone_verified: false,
    is_profile_public: 'private',
    state: 'dormancy',
    referrer_nick_name: '',
    created_at: '2023/09/05',
  },
] as UserData[]

function User({}) {
  const totalPage = 10
  const [currentPage, setCurrentPage] = useState(1)
  const columns: ColumnsProps<UserData>[] = [
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
      accessor: 'gender',
      value: '성별',
      width: 80,
    },
    {
      accessor: 'rank',
      value: '등급',
      width: 80,
    },
    {
      accessor: 'is_phone_verified',
      value: '번호인증 여부',
      width: 100,
    },
    {
      accessor: 'is_profile_public',
      value: '프로필 공개여부',
    },
    {
      accessor: 'state',
      value: '상태',
      width: 100,
    },
    {
      accessor: 'referrer_nick_name',
      value: '추천인',
      width: 100,
    },
    {
      accessor: 'created_at',
      value: '가입일',
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

  const genderField = [
    { accessor: '', value: '전체' },
    { accessor: 'male', value: '남성' },
    { accessor: 'female', value: '여성' },
  ]

  const rankField = [
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
      <PageHeader title="회원 목록" />
      <Contents>
        <SearchWrapper>
          <div>
            <dl>
              <dt>성별</dt>
              <dd>
                <Select
                  options={genderField}
                  defaultValue={genderField[0].accessor}
                  onChange={value => alert(value.target.value)}
                />
              </dd>
            </dl>
            <dl>
              <dt>등급</dt>
              <dd>
                <Select
                  options={rankField}
                  defaultValue={rankField[0].accessor}
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
              <TableCell>{item.seq}</TableCell>
              <TableCell>{item.nick_name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.gender}</TableCell>
              <TableCell>{item.rank}</TableCell>
              <TableCell>{item.is_phone_verified ? '완료' : '미완료'}</TableCell>
              <TableCell>{item.is_profile_public}</TableCell>
              <TableCell>{item.state}</TableCell>
              <TableCell>{item.referrer_nick_name}</TableCell>
              <TableCell>{item.created_at}</TableCell>
              <TableCell>
                <Link key={item.seq} to={`/view/${item.seq}`}>
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

export default User
