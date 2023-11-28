import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import Icon from '#components/Icon'
import Modal from './Modal'

import { Wrapper, New } from './style'

function Header() {
  const [isVisibleModal, setIsVisibleModal] = useState<boolean>(false)

  return (
    <Wrapper>
      <nav>
        <NavLink to="/user">
          <Icon icon="new" width={26} height={26} />
          <New>NEW</New>
        </NavLink>
        <span onClick={() => setIsVisibleModal(!isVisibleModal)}>
          <Icon icon="mypage" width={26} height={26} />
        </span>
      </nav>
      {isVisibleModal && <Modal />}
    </Wrapper>
  )
}

export default Header
