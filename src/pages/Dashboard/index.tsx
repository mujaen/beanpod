import React from 'react'

import PageHeader from '#components/PageHeader'
import ColumnTable from '#components/ColumnTable'
import Select from '#components/Select'
import Button from '#components/Button'
import ButtonGroup from '#components/ButtonGroup'

import { Contents } from '#components/Layout/style'
import { TableHead, TableData } from '#components/ColumnTable/style'

import ProfileImage from '#assets/images/pic.jpeg'

type Level = 'diamond' | 'gold' | 'silver' //다이아, 골드, 실버

type State = 'active' | 'dormancy' | 'pause' | 'ban' //활동중, 휴면, 일시정지, 영구정지

type Sex = 'male' | 'female' //남성, 여성

type Confirm = 'waiting' | 'public' | 'private' //대기, 공개, 비공개

interface MemberData {
  id: number //고유 id
  nickname: string //닉네임
  email: string //이메일
  age: number //나이
  height: number //키
  job: string //직업
  education: string //학력
  city: string //지역
  mbti: string
  hobby: string //취미
  sex: Sex //성별
  level: Level //등급
  drink: string //음주
  smoke: string //흡연
  religion: string //종교
  certify: boolean //번호인증 여부
  confirm: Confirm //프로필공개 여부
  state: State //회원상태
  recommender: string //추천인
  pause?: boolean //일시정지 여부
  ban?: boolean //영구정지 여부
  reason?: string //정지 사유
  block?: boolean //지인차단 여부
  warning: number //경고 횟수
  minAge: number //이상형 최소 나이
  maxAge: number //이상형 최대 나이
  firstCity: string //이상형 선호지역1
  secondCity: string //이상형 선호지역2
  drinkType: string //이상형 음주 여부
  religionType: string //이상형 종교 여부
  smokeType: string //이상형 흡연여부
  hobbyType: string //이상형 취미 여부
  createDate: string // 가입일
  updateDate?: string // 수정일
  deleteDate?: string // 삭제일
}

export const data = {
  id: 1,
  nickname: '진저',
  email: 'jinjerkim@gmail.com',
  age: 34,
  height: 172,
  job: '백엔드 개발자',
  education: '4년제',
  city: '서울',
  mbti: 'ENFJ',
  hobby: '악기연주',
  sex: 'male',
  level: 'gold',
  drink: '1',
  smoke: '2',
  religion: '기독교',
  certify: true,
  confirm: 'waiting',
  state: 'active',
  recommender: '오박사',
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
    { accessor: 'diamond', value: '다이아' },
    { accessor: 'gold', value: '골드' },
    { accessor: 'silver', value: '실버' },
  ]

  const confirmField = [
    { accessor: 'waiting', value: '대기' },
    { accessor: 'public', value: '공개' },
    { accessor: 'private', value: '비공개' },
  ]

  const renderState = (state: string): string => {
    switch (state) {
      default:
      case 'active':
        return '활동중'
      case 'dormancy':
        return '휴면'
      case 'pause':
        return '일시정지'
      case 'ban':
        return '영구정지'
    }
  }

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
                <TableData>{item.sex === 'male' ? '남성' : '여성'}</TableData>
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
                <TableData>
                  <Select
                    options={confirmField}
                    defaultValue={item.confirm}
                    onChange={value => alert(value.target.value)}
                  />
                </TableData>
                <TableHead>상태</TableHead>
                <TableData>{renderState(item.state)}</TableData>
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
                <TableData></TableData>
                <TableData></TableData>
                <TableData></TableData>
                <TableData></TableData>
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
