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

  dl {
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  dt,
  dd {
    display: flex;
    align-items: center;

    width: 100%;
    height: 48px;
    padding: 0 16px;
    box-sizing: border-box;

    color: ${({ theme }) => theme.colors.gray800};
    text-align: left;
  }

  select {
    width: 140px;
  }
`

export const TableHead = styled.dt`
  background-color: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.fonts.R100};
`

export const TableData = styled.dd`
  ${({ theme }) => theme.fonts.L100};
`
