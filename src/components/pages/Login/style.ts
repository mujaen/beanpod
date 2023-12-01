import styled from '@emotion/styled'

export const Container = styled.div`
  background-color: #e8edf3;

  display: flex;

  height: 100vh;
  width: 100%;
`

export const Content = styled.div`
  height: 562px;

  margin: auto;

  display: grid;
  grid-template-columns: minmax(40%, 400px) minmax(60%, 600px);
`

export const ImageContent = styled.div`
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.blue500};

  color: #f1f5f9;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 150px 0;

  h1 {
    margin-bottom: 16px;
  }

  p {
    ${({ theme }) => theme.fonts.L100};
    line-height: 16px;
  }

  strong {
    ${({ theme }) => theme.fonts.M100};
  }
`

export const FormContent = styled.div`
  background-color: #fff;

  display: grid;
  align-content: center;

  gap: 24px;

  padding: 0 46px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  color: #333;
  ${({ theme }) => theme.fonts.M200};
  letter-spacing: 0.1px;

  label {
    margin-bottom: 5px;
  }

  input {
    ${({ theme }) => theme.fonts.L200};

    border-radius: 4px;
    border: none;
    outline: none;

    background-color: ${({ theme }) => theme.colors.gray100};

    margin-bottom: 19px;

    padding: 18px 15px;

    ::placeholder {
      color: #959ca8;
    }

    :last-of-type {
      margin-bottom: 16px;
    }
  }

  a {
    align-self: end;
    margin-bottom: 38px;

    :visited,
    :link {
      color: #000;
    }
  }

  button {
    background-color: ${({ theme }) => theme.colors.blue500};
    color: #fff;
    ${({ theme }) => theme.fonts.M200};

    height: 55px;
    width: 100%;
  }
`

export const Register = styled.span`
  margin-top: 16px;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.1px;
  align-self: center;

  a {
    margin-left: 6px;
    color: ${({ theme }) => theme.colors.blue500};
    font-weight: 700;

    :visited,
    :link {
      color: ${({ theme }) => theme.colors.blue500};
    }
  }
`
