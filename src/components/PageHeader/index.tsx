import React from 'react'

import styled from '@emotion/styled'

const Title = styled.h2`
  ${({ theme }) => theme.fonts.M400}
  line-height: 72px;

  height: 72px;
  margin-top: -72px;
  padding-left: 24px;
`

interface PageHeaderProps {
  title: string
}

function PageHeader({ title }: PageHeaderProps) {
  return <Title>{title}</Title>
}

export default PageHeader
