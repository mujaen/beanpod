import React from 'react'
import { Link } from 'react-router-dom'

import PageHeader from '#components/PageHeader'

import styled from '@emotion/styled'

const List = styled.div`
  li {
    margin-bottom: 10px;
  }

  a {
    color: #555;
  }
`

import { Contents } from '#components/Layout/style'
function Dashboard({}) {
  return (
    <>
      <PageHeader title="대시보드" />
      <Contents>
        <List>
          <ul>
            <li>
              <Link to="/user/list">회원 목록 바로가기</Link>
            </li>
            <li>
              <Link to="/history/list">하트 사용내역 바로가기</Link>
            </li>
            <li>
              <Link to="/login">로그인 바로가기</Link>
            </li>
            <li>
              <Link to="/join">회원가입 바로가기</Link>
            </li>
            <li>
              <Link to="/self/list">셀프소개 바로가기</Link>
            </li>
            <li>
              <Link to="/payment/list">결제현황 바로가기</Link>
            </li>
            <li>
              <Link to="/support/list">문의사항 목록</Link>
            </li>
            <li>
              <Link to="/member/list">불량회원 목록</Link>
            </li>
            <li>
              <Link to="/acount/list">관리자 목록</Link>
            </li>
          </ul>
        </List>
      </Contents>
    </>
  )
}

export default Dashboard
