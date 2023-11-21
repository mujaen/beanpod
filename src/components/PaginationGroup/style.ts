import Icon from '#components/Icon'

import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 5px 0;
`
export const PrevButtonWrapper = styled.div`
  display: flex;

  margin-right: 20px;

  button {
    width: auto;
    margin: 0;
    margin-left: 7px;
    padding: 0 2px;
  }
`
export const NextButtonWrapper = styled.div`
  display: flex;

  margin-left: 20px;

  button {
    width: auto;
    margin: 0;
    margin-right: 7px;
    padding: 0 2px;
  }
`

export const IconButton = styled(Icon)`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`
