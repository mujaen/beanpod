import React from 'react'

import { NavLink } from 'react-router-dom'

import Icon from '#components/Icon'

import { Wrapper, New } from './style'

function Header() {
  return (
    <Wrapper>
      <nav>
        <NavLink to="/user">
          <Icon icon="new" width={26} height={26} />
          <New>NEW</New>
        </NavLink>
        <NavLink to="/mypage">
          <Icon icon="mypage" width={26} height={26} />
        </NavLink>
      </nav>
    </Wrapper>
  )
}

export default Header
