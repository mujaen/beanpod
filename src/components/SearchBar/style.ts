import styled from '@emotion/styled'

export const SearchWrapper = styled.div`
  margin-bottom: 30px;
  padding: 20px;

  border: 1px solid ${({ theme }) => theme.colors.gray600};
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.gray100};

  > div {
    display: flex;
    margin-bottom: 6px;
  }
  dl {
    display: flex;
    align-items: center;
    width: 100%;
  }

  dt {
    min-width: 100px;
  }

  select {
    width: 140px;
  }

  input {
    min-width: 140px;
  }

  dt,
  dd {
    ${({ theme }) => theme.fonts.L100};
    color: ${({ theme }) => theme.colors.gray900};
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  width: 100%;
`
