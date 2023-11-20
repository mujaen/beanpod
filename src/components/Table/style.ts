import styled from '@emotion/styled'

export const TableWrapper = styled.div`
  overflow: hidden;

  table {
    width: 100%;
    border-top: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  th,
  td {
    text-align: center;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
    border-right: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  th:last-of-type,
  td:last-of-type {
    border-right: none;
  }
`

export const TableHeadCell = styled.th`
  padding: 7px 0;
  background-color: ${({ theme }) => theme.colors.gray200};

  ${({ theme }) => theme.fonts.M100};
  color: ${({ theme }) => theme.colors.gray800};
`

export const TableCell = styled.td`
  padding: 7px 0;

  ${({ theme }) => theme.fonts.L100};
  color: ${({ theme }) => theme.colors.gray800};
`

export const Total = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.gray100};

  ${({ theme }) => theme.fonts.L100};
  color: ${({ theme }) => theme.colors.gray800};

  strong {
    ${({ theme }) => theme.fonts.M100};
  }
`