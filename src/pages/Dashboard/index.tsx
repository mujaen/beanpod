import React from 'react'

import PageHeader from '#components/PageHeader'
import ColumnTable from '#components/ColumnTable'
import Select from '#components/Select'
import Button from '#components/Button'
import ButtonGroup from '#components/ButtonGroup'

import { Contents } from '#components/Layout/style'
import { TableHead, TableData } from '#components/ColumnTable/style'

import ProfileImage from '#assets/images/pic.jpeg'

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
  hobby: string
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
  ban?: boolean
  reason?: string
  block?: boolean
  warning: number
  minAge: number
  maxAge: number
  firstCity: string
  secondCity: string
  drinkType: string
  religionType: string
  smokeType: string
  hobbyType: string
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
  hobby: '악기연주',
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
  ban: false,
  reason: '허위 프로필',
  block: true,
  warning: 2,
  minAge: 27,
  maxAge: 35,
  firstCity: '서울',
  secondCity: '인천',
  drinkType: '상관없음',
  religionType: '상관없음',
  smokeType: '상관없음',
  hobbyType: '산책',
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
                <TableHead>나이</TableHead>
                <TableData>{item.age}세</TableData>
                <TableHead>성별</TableHead>
                <TableData>{item.sex}</TableData>
              </dl>
              <dl>
                <TableHead>키</TableHead>
                <TableData>{item.height}cm</TableData>
                <TableHead>가입일</TableHead>
                <TableData>{item.createDate}</TableData>
                <TableHead>수정일</TableHead>
                <TableData>{item.updateDate}</TableData>
                <TableHead>탈퇴일</TableHead>
                <TableData>{item.deleteDate}</TableData>
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
                <TableHead>프로필 공개 여부</TableHead>
                <TableData>{item.confirm}</TableData>
                <TableHead>상태</TableHead>
                <TableData>{item.state}</TableData>
                <TableHead>번호인증 여부</TableHead>
                <TableData>{item.certify ? 'Y' : 'N'}</TableData>
              </dl>
              <dl>
                <TableHead>지인차단 여부</TableHead>
                <TableData>{item.block ? 'Y' : 'N'}</TableData>
                <TableHead>일시정지 여부</TableHead>
                <TableData>{item.pause ? 'Y' : 'N'}</TableData>

                <TableHead>영구정지 여부</TableHead>
                <TableData>{item.ban ? 'Y' : 'N'}</TableData>
                <TableHead>정지 사유</TableHead>
                <TableData>{item.reason}</TableData>
              </dl>
              <dl>
                <TableHead>추천인</TableHead>
                <TableData>{item.recommender}</TableData>
                <TableHead>경고 횟수</TableHead>
                <TableData>{item.warning}</TableData>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
                <TableHead></TableHead>
              </dl>
              <ButtonGroup align="center">
                <Button size="medium" onClick={() => console.log('영구정지')}>
                  영구정지
                </Button>
                <Button size="medium" onClick={() => console.log('일시정지')}>
                  일시정지
                </Button>
                <Button size="medium" onClick={() => console.log('경고부여')}>
                  경고부여
                </Button>
              </ButtonGroup>
              <ul>
                <li>
                  <img src={ProfileImage} alt="프로필 이미지" />
                </li>
                <li>
                  <img src={ProfileImage} alt="프로필 이미지" />
                </li>
                <li>
                  <img src={ProfileImage} alt="프로필 이미지" />
                </li>
              </ul>
              <h3>프로필 정보</h3>
              <dl>
                <TableHead>직업</TableHead>
                <TableData>{item.job}</TableData>
                <TableHead>학력</TableHead>
                <TableData>{item.education}</TableData>
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
                <TableHead>종교</TableHead>
                <TableData>{item.religion}</TableData>
                <TableHead>취미</TableHead>
                <TableData>{item.hobby}</TableData>
              </dl>
              <h3>이상형 설정</h3>
              <dl>
                <TableHead>최소 나이</TableHead>
                <TableData>{item.minAge}세</TableData>
                <TableHead>최대 나이</TableHead>
                <TableData>{item.maxAge}세</TableData>
                <TableHead>선호 지역1</TableHead>
                <TableData>{item.firstCity}</TableData>
                <TableHead>선호 지역2</TableHead>
                <TableData>{item.secondCity}</TableData>
              </dl>

              <dl>
                <TableHead>음주 여부</TableHead>
                <TableData>{item.drinkType}</TableData>
                <TableHead>종교 여부</TableHead>
                <TableData>{item.religionType}</TableData>
                <TableHead>흡연 여부</TableHead>
                <TableData>{item.smokeType}</TableData>
                <TableHead>취미</TableHead>
                <TableData>{item.hobbyType}</TableData>
              </dl>
            </>
          )}
        />
      </Contents>
    </>
  )
}

export default Dashboard
