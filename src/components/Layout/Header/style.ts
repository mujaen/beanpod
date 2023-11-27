import styled from '@emotion/styled'

export const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 72px;
  padding-left: 50%;
  box-sizing: border-box;

  nav {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  nav a {
    position: relative;
  }
`

export const New = styled.span`
  overflow: hidden;
  position: absolute;
  top: 3px;
  right: 4px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #f23249;

  text-indent: 50px;
`
