import React from 'react'

import { NavLink } from 'react-router-dom'

import Icon from '#components/Icon'

import { Wrapper } from './style'

function Header() {
  return (
    <Wrapper>
      <div>
        <NavLink to="/mypage">
          <Icon icon="mypage" width={26} height={26} />
        </NavLink>
      </div>
    </Wrapper>
  )
}

export default Header
