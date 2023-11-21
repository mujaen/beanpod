import styled from '@emotion/styled'

import Icon from '#components/Icon'

export const Wrapper = styled.nav`
  width: 64px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.point100};

  h1 {
    margin-top: 10px;
    padding: 16px;
  }
`
export const ListItem = styled.li`
  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 44px;
  }
`

export const Title = styled.span`
  overflow: hidden;
  display: flex;
  width: 1px;
  height: 1px;
`

export const StyledIcon = styled(Icon)<{ isSelected: boolean }>`
  svg {
    width: 17px;
    height: 17px;
    opacity: ${({ isSelected }) => (isSelected ? '1' : '0.5')};
  }
`
