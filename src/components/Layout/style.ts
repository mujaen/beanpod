import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`

export const Container = styled.div`
  width: 100%;
  padding: 0 26px;
  box-sizing: border-box;
`

export const Contents = styled.div`
  padding: 30px 26px;

  background-color: ${({ theme }) => theme.colors.white900};
  border-radius: 6px;
`
