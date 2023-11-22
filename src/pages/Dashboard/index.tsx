import React from 'react'

import PageHeader from '#components/PageHeader'
import ColumnTable from '#components/ColumnTable'
import Select from '#components/Select'

import { Contents } from '#components/Layout/style'
import { TableHead, TableData } from '#components/ColumnTable/style'

type Level = 'diamon' | 'gold' | 'silver'

type State = '활동중' | '휴면' | '일시정지' | '정지'

type Sex = '남성' | '여성'

type Confirm = '1' | '2' | '3'

interface MemberData {
  id: number
  nickname: string
  email: string
  age: number
  height: number
  job: string
  salary: number
  education: string
  city: string
  mbti: string
  sex: Sex
  level: Level
  drink: string
  smoke: string
  religion: string
  certify: boolean
  confirm: Confirm
  state: State
  recommender: string
  pause?: boolean
  block?: boolean
  createDate: string // ISO8601 UTC
  updateDate?: string // ISO8601 UTC
  deleteDate?: string // ISO8601 UTC
  detail?: boolean
}

export const data = {
  id: 1,
  nickname: '진저',
  email: 'jinjerkim@gmail.com',
  age: 34,
  height: 172,
  job: '백엔드 개발자',
  salary: 6000,
  education: '4년제',
  city: '서울',
  mbti: 'ENFJ',
  sex: '남성',
  level: 'gold',
  drink: '1',
  smoke: '2',
  religion: '기독교',
  certify: true,
  confirm: '1',
  state: '활동중',
  recommender: '소소미',
  pause: false,
  block: true,
  createDate: '2023/09/05',
  updateDate: '',
  deleteDate: '',
} as MemberData

function Dashboard({}) {
  const levelField = [
    { accessor: '', value: '전체' },
    { accessor: 'diamond', value: '다이아' },
    { accessor: 'gold', value: '골드' },
    { accessor: 'silver', value: '실버' },
  ]

  return (
    <>
      <PageHeader title="회원 정보" />
      <Contents>
        <ColumnTable
          data={data}
          renderItem={item => (
            <>
              <h3>기본 정보</h3>
              <dl>
                <TableHead>닉네임</TableHead>
                <TableData>{item.nickname}</TableData>
                <TableHead>이메일</TableHead>
                <TableData>{item.email}</TableData>
              </dl>
              <dl>
                <TableHead>나이</TableHead>
                <TableData>{item.age}</TableData>
                <TableHead>성별</TableHead>
                <TableData>{item.sex}</TableData>
              </dl>
              <dl>
                <TableHead>키</TableHead>
                <TableData>{item.height}cm</TableData>
                <TableHead>가입일</TableHead>
                <TableData>{item.createDate}</TableData>
              </dl>
              <dl>
                <TableHead>수정일</TableHead>
                <TableData>{item.updateDate}</TableData>
                <TableHead>탈퇴일</TableHead>
                <TableData>{item.deleteDate}</TableData>
              </dl>
              <h3>프로필 정보</h3>
              <dl>
                <TableHead>직업</TableHead>
                <TableData>{item.job}</TableData>
                <TableHead>학력</TableHead>
                <TableData>{item.education}</TableData>
              </dl>
              <dl>
                <TableHead>지역</TableHead>
                <TableData>{item.city}</TableData>
                <TableHead>MBTI</TableHead>
                <TableData>{item.mbti}</TableData>
              </dl>
              <dl>
                <TableHead>흡연</TableHead>
                <TableData>{item.smoke}</TableData>
                <TableHead>음주</TableHead>
                <TableData>{item.drink}</TableData>
              </dl>
              <dl>
                <TableHead>종교</TableHead>
                <TableData>{item.religion}</TableData>
                <TableHead>연봉</TableHead>
                <TableData>{item.salary}</TableData>
              </dl>
              <h3>회원 상태</h3>
              <dl>
                <TableHead>등급</TableHead>
                <TableData>
                  <Select
                    options={levelField}
                    defaultValue={item.level}
                    onChange={value => alert(value.target.value)}
                  />
                </TableData>
                <TableHead>번호인증 여부</TableHead>
                <TableData>{item.certify ? 'Y' : 'N'}</TableData>
              </dl>
              <dl>
                <TableHead>프로필 공개 여부</TableHead>
                <TableData>{item.confirm}</TableData>
                <TableHead>상태</TableHead>
                <TableData>{item.state}</TableData>
              </dl>
              <dl>
                <TableHead>일시정지 여부</TableHead>
                <TableData>{item.pause ? 'Y' : 'N'}</TableData>
                <TableHead>지인차단 여부</TableHead>
                <TableData>{item.block ? 'Y' : 'N'}</TableData>
              </dl>
              <h3>이상형 설정</h3>
              <dl>
                <TableHead>일시정지 여부</TableHead>
                <TableData>{item.pause ? 'Y' : 'N'}</TableData>
                <TableHead>지인차단 여부</TableHead>
                <TableData>{item.block ? 'Y' : 'N'}</TableData>
              </dl>
              <dl>
                <TableHead>일시정지 여부</TableHead>
                <TableData>{item.pause ? 'Y' : 'N'}</TableData>
                <TableHead>지인차단 여부</TableHead>
                <TableData>{item.block ? 'Y' : 'N'}</TableData>
              </dl>
            </>
          )}
        />
      </Contents>
    </>
  )
}

export default Dashboard
