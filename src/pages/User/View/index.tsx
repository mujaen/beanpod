import React, { useState } from 'react'

import PageHeader from '#components/PageHeader'
import ColumnTable from '#components/ColumnTable'
import Select from '#components/Select'
import Button from '#components/Button'
import ButtonGroup from '#components/ButtonGroup'

import { Contents } from '#components/Layout/style'
import { TableHead, TableData } from '#components/ColumnTable/style'

import ProfileImage from '#assets/images/pic.jpeg'
import UserSuspendModal from '#components/pages/User/UserSuspendModal'

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
  kakao_id: string
  phone: string
  gender: Gender
  height: number
  job: string
  education_level: string
  location: string
  mbti: string
  hobbies: string //취미

  drink: string //음주
  smoke: string //흡연
  religion: string //종교
  is_phone_verified: boolean //번호인증 여부
  is_profile_public: Confirm //프로필공개 여부
  is_profile_contents: boolean //소개글등록 여부
  state: State //회원상태
  referrer_nick_name: string //추천인
  is_special_member?: boolean // 우수회원 여부
  is_pause?: boolean //일시정지 여부
  is_suspended?: boolean //영구정지 여부
  suspension_reason?: string //정지 사유
  is_phone_block?: boolean //지인차단 여부
  warning_cnt: number //경고 횟수
  created_at: string // 가입일
  updated_at?: string // 수정일
  deleted_at?: string // 삭제일
  min_age: number //이상형 최소 나이
  max_age: number //이상형 최대 나이
  preferred_location_1: string //이상형 선호지역1
  preferred_location_2: string //이상형 선호지역2
  is_drinker: string //이상형 음주 여부
  is_religion: string //이상형 종교 여부
  is_smoker: string //이상형 흡연여부
  is_hobbies: string //이상형 취미 여부
}

export const data = {
  seq: 1,
  rank: 'gold',
  email: 'jinjerkim@gmail.com',
  nick_name: '진저',
  kakao_id: 'jinjer',
  phone: '010-1234-5678',
  age: 34,
  gender: 'male',
  height: 172,
  job: '백엔드 개발자',
  education_level: '4년제',
  location: '서울',
  mbti: 'ENFJ',
  hobbies: '악기연주',
  drink: '1',
  smoke: '2',
  religion: '기독교',
  is_phone_verified: true,
  is_profile_public: 'waiting',
  is_profile_contents: false,
  state: 'active',
  referrer_nick_name: '오박사',
  is_special_member: false,
  is_pause: false,
  is_suspended: false,
  suspension_reason: '허위 프로필',
  is_phone_block: true,
  warning_cnt: 2,
  min_age: 27,
  max_age: 35,
  preferred_location_1: '서울',
  preferred_location_2: '인천',
  is_drinker: '상관없음',
  is_religion: '상관없음',
  is_smoker: '상관없음',
  is_hobbies: '산책',
  created_at: '2023/09/05',
  updated_at: '',
  deleted_at: '',
} as UserData

function UserView({}) {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>()
  const [suspend, setSuspend] = useState('warning')

  const rankField = [
    { accessor: 'diamond', value: '다이아' },
    { accessor: 'gold', value: '골드' },
    { accessor: 'silver', value: '실버' },
  ]

  const profileField = [
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
                <TableData>{item.nick_name}</TableData>
                <TableHead>이메일</TableHead>
                <TableData>{item.email}</TableData>
                <TableHead>나이</TableHead>
                <TableData>{item.age}세</TableData>
                <TableHead>성별</TableHead>
                <TableData>{item.gender === 'male' ? '남성' : '여성'}</TableData>
              </dl>
              <dl>
                <TableHead>키</TableHead>
                <TableData>{item.height}cm</TableData>
                <TableHead>등록일</TableHead>
                <TableData>{item.created_at}</TableData>
                <TableHead>수정일</TableHead>
                <TableData>{item.updated_at}</TableData>
                <TableHead>탈퇴일</TableHead>
                <TableData>{item.deleted_at}</TableData>
              </dl>
              <dl>
                <TableHead>전화번호</TableHead>
                <TableData>{item.phone}</TableData>
                <TableHead>카카오톡 아이디</TableHead>
                <TableData>{item.kakao_id}</TableData>
                <TableData></TableData>
                <TableData></TableData>
                <TableData></TableData>
                <TableData></TableData>
              </dl>
              <h3>회원 상태</h3>
              <dl>
                <TableHead>등급</TableHead>
                <TableData>
                  <Select
                    options={rankField}
                    defaultValue={item.rank}
                    onChange={value => alert(value.target.value)}
                  />
                </TableData>
                <TableHead>프로필 공개 여부</TableHead>
                <TableData>
                  <Select
                    options={profileField}
                    defaultValue={item.is_profile_public}
                    onChange={value => alert(value.target.value)}
                  />
                </TableData>
                <TableHead>우수회원 여부</TableHead>
                <TableData>{item.is_special_member ? 'Y' : 'N'}</TableData>
                <TableHead>소개글 등록 여부</TableHead>
                <TableData>{item.is_profile_contents ? 'Y' : 'N'}</TableData>
              </dl>
              <dl>
                <TableHead>지인차단 여부</TableHead>
                <TableData>{item.is_phone_block ? 'Y' : 'N'}</TableData>
                <TableHead>일시정지 여부</TableHead>
                <TableData>{item.is_pause ? 'Y' : 'N'}</TableData>

                <TableHead>영구정지 여부</TableHead>
                <TableData>{item.is_suspended ? 'Y' : 'N'}</TableData>
                <TableHead>정지 사유</TableHead>
                <TableData>{item.suspension_reason}</TableData>
              </dl>
              <dl>
                <TableHead>추천인</TableHead>
                <TableData>{item.referrer_nick_name}</TableData>
                <TableHead>경고 횟수</TableHead>
                <TableData>{item.warning_cnt}</TableData>
                <TableHead>번호인증 여부</TableHead>
                <TableData>{item.is_phone_verified ? 'Y' : 'N'}</TableData>
                <TableHead>상태</TableHead>
                <TableData>{renderState(item.state)}</TableData>
              </dl>
              <ButtonGroup align="center">
                <Button
                  size="medium"
                  onClick={() => {
                    setSuspend('ban')
                    setIsVisibleModal(true)
                  }}
                >
                  영구정지
                </Button>
                <Button
                  size="medium"
                  onClick={() => {
                    setSuspend('pause')
                    setIsVisibleModal(true)
                  }}
                >
                  일시정지
                </Button>
                <Button
                  size="medium"
                  onClick={() => {
                    setSuspend('warning')
                    setIsVisibleModal(true)
                  }}
                >
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
                <TableData>{item.education_level}</TableData>
                <TableHead>지역</TableHead>
                <TableData>{item.location}</TableData>
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
                <TableData>{item.hobbies}</TableData>
              </dl>
              <dl>
                <TableHead>나의 스타일</TableHead>
                <TableData>E001, E018, E026</TableData>
                <TableHead>이상형</TableHead>
                <TableData>B001, B018, B026</TableData>
                <TableData></TableData>
                <TableData></TableData>
                <TableData></TableData>
                <TableData></TableData>
              </dl>
              <h3>이상형 설정</h3>
              <dl>
                <TableHead>최소 나이</TableHead>
                <TableData>{item.min_age}세</TableData>
                <TableHead>최대 나이</TableHead>
                <TableData>{item.max_age}세</TableData>
                <TableHead>선호 지역1</TableHead>
                <TableData>{item.preferred_location_1}</TableData>
                <TableHead>선호 지역2</TableHead>
                <TableData>{item.preferred_location_2}</TableData>
              </dl>

              <dl>
                <TableHead>음주 여부</TableHead>
                <TableData>{item.is_drinker}</TableData>
                <TableHead>종교 여부</TableHead>
                <TableData>{item.is_religion}</TableData>
                <TableHead>흡연 여부</TableHead>
                <TableData>{item.is_smoker}</TableData>
                <TableHead>취미</TableHead>
                <TableData>{item.is_hobbies}</TableData>
              </dl>
            </>
          )}
        />
      </Contents>
      <UserSuspendModal
        show={isVisibleModal}
        suspend={suspend}
        onClose={show => setIsVisibleModal(show)}
      />
    </>
  )
}

export default UserView
