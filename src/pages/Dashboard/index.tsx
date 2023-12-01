import React from 'react'

import PageHeader from '#components/PageHeader'

import { Contents } from '#components/Layout/style'
function Dashboard({}) {
  return (
    <>
      <PageHeader title="대시보드" />
      <Contents>내용</Contents>
    </>
  )
}

export default Dashboard
