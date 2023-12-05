import React, { ReactNode } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Wrapper, ListItem, Title, StyledIcon } from './style'

import Icon from '#components/Icon'

interface IconProps {
  isActived: boolean
}

interface ItemProps {
  title: string
  path: string
  renderIcon: ({ isActived }: IconProps) => ReactNode
}

function Nav() {
  const navList = [
    {
      title: '대시보드',
      renderIcon: ({ isActived }: IconProps) => (
        <StyledIcon icon="dashboard" isSelected={isActived} />
      ),
      path: '/',
    },
    {
      title: '회원',
      renderIcon: ({ isActived }: IconProps) => <StyledIcon icon="member" isSelected={isActived} />,
      path: '/user/list',
    },
    {
      title: '결제',
      renderIcon: ({ isActived }: IconProps) => (
        <StyledIcon icon="payment" isSelected={isActived} />
      ),
      path: '/payment/list',
    },
    {
      title: '문의',
      renderIcon: ({ isActived }: IconProps) => <StyledIcon icon="cs" isSelected={isActived} />,
      path: '/support/list',
    },
    {
      title: '불량회원',
      renderIcon: ({ isActived }: IconProps) => <StyledIcon icon="bad" isSelected={isActived} />,
      path: '/member/list',
    },
    // {
    //   title: '우수회원',
    //   renderIcon: ({ isActived }: IconProps) => <StyledIcon icon="vip" isSelected={isActived} />,
    //   path: '/vip/list',
    // },
    // {
    //   title: '통계',
    //   renderIcon: ({ isActived }: IconProps) => <StyledIcon icon="chart" isSelected={isActived} />,
    //   path: '/chart',
    // },
    // {
    //   title: '마케팅',
    //   renderIcon: ({ isActived }: IconProps) => <StyledIcon icon="ad" isSelected={isActived} />,
    //   path: '/ad',
    // },
    {
      title: '계정',
      renderIcon: ({ isActived }: IconProps) => <StyledIcon icon="acount" isSelected={isActived} />,
      path: '/acount/list',
    },
  ]

  function Item({ title, path, renderIcon }: ItemProps) {
    const location = useLocation()
    const pathname = location.pathname

    const isActivePath = (path: string) =>
      path === '/' ? pathname === '/' : pathname.includes(path)

    return (
      <ListItem>
        <div>
          <NavLink to={path}>
            {renderIcon({ isActived: isActivePath(path) })}
            <Title>{title}</Title>
          </NavLink>
        </div>
      </ListItem>
    )
  }

  return (
    <Wrapper>
      <h1>
        <NavLink to="/">
          <Icon icon="logo" width={32} height={32} />
        </NavLink>
      </h1>
      <ul>
        {navList.map(items => (
          <Item key={items.title} {...items} />
        ))}
      </ul>
    </Wrapper>
  )
}

export default Nav
