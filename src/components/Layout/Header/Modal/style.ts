import styled from '@emotion/styled'

export const Wrapper = styled.div`
  position: absolute;
  top: 64px;
  right: 20px;

  min-width: 160px;
  padding: 10px 20px;
  text-align: center;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white900};
  box-shadow:
    rgb(255, 255, 255) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.05) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  div {
    padding: 10px 0;
  }

  div > span {
    ${({ theme }) => theme.fonts.R200};
  }

  em {
    display: block;
    font-style: normal;
    margin-top: 5px;

    ${({ theme }) => theme.fonts.L100};
    color: ${({ theme }) => theme.colors.gray700};
  }

  button {
    border-radius: 3px;
    width: 100%;
  }
`
