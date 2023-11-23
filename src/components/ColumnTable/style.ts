import styled from '@emotion/styled'

export const Wrapper = styled.div`
  h3:first-of-type {
    margin-top: 0;
  }

  h3 {
    color: ${({ theme }) => theme.colors.gray800};
    ${({ theme }) => theme.fonts.M200};

    margin-top: 50px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  ul {
    display: flex;
    gap: 30px;

    margin-top: 30px;
  }

  button:first-of-type {
    color: ${({ theme }) => theme.colors.white900};
    border: 1px solid ${({ theme }) => theme.colors.point300};
    background-color: ${({ theme }) => theme.colors.point200};
  }

  dl {
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  dt {
    color: ${({ theme }) => theme.colors.gray900};
  }

  dd {
    color: ${({ theme }) => theme.colors.gray800};
  }

  dt,
  dd {
    display: flex;
    align-items: center;

    width: 100%;
    height: 38px;
    padding: 0 16px;
    box-sizing: border-box;
    text-align: left;
  }

  select {
    width: 100%;
  }

  img {
    width: 100%;
    max-width: 400px;
  }

  button {
    border-radius: 4px;
  }
`

export const TableHead = styled.dt`
  background-color: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.fonts.R100};
`

export const TableData = styled.dd`
  ${({ theme }) => theme.fonts.L100};
`
