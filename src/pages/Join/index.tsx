import React from 'react'

import { useForm } from 'react-hook-form'

import Icon from '#components/Icon'
import Button from '#components/Button'

import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  width: 100%;
`

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white900};
`

const FormContent = styled.div`
  h1 {
    margin-bottom: 10px;

    ${({ theme }) => theme.fonts.M500};
    line-height: 28px;
  }

  h1 span {
    display: block;
  }

  p {
    margin-bottom: 40px;

    ${({ theme }) => theme.fonts.L100};
    color: ${({ theme }) => theme.colors.gray900};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;

  color: #333;
  ${({ theme }) => theme.fonts.M200};
  letter-spacing: 0.1px;

  label {
    margin-bottom: 7px;

    ${({ theme }) => theme.fonts.R100};
  }

  input {
    ${({ theme }) => theme.fonts.L100};

    border-radius: 4px;
    border: none;
    outline: none;

    background-color: ${({ theme }) => theme.colors.white900};
    border: 1px solid ${({ theme }) => theme.colors.gray400};

    margin-bottom: 19px;

    padding: 12px 10px;

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
    border: none;
    border-radius: 4px;

    color: #fff;
    ${({ theme }) => theme.fonts.R100};

    height: 40px;
    width: 100%;
  }
`

const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.blue500};

  color: ${({ theme }) => theme.colors.white900};

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

type SubmitType = {
  email: string
  pdata: string
}

function Join({}): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SubmitType>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      pdata: '',
    },
  })

  const onSubmit = async (data: SubmitType) => {
    console.log(data)
  }

  return (
    <Container>
      <Content>
        <FormContent>
          <h1>
            <span>회원가입 정보를</span>
            <span>입력해 주세요.</span>
          </h1>
          <p>아래의 가입정보를 입력 후 회원가입 버튼을 클릭해 주세요.</p>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label>이메일주소</label>
            <input
              type="text"
              placeholder="이메일주소를 입력해주세요"
              {...register('email', {
                required: true,
                minLength: { value: 4, message: '6자 이상 필수' },
              })}
            />
            <label>비밀번호</label>
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요"
              {...register('pdata', {
                required: true,
                minLength: { value: 4, message: '4자 이상 필수' },
              })}
            />
            <label>비밀번호 확인</label>
            <input
              type="password"
              placeholder="비밀번호를 다시 입력해주세요"
              onBlur={() => alert('blur')}
            />

            {errors.pdata && <span>{errors.pdata?.message}</span>}
            <Button type="submit">회원가입</Button>
          </Form>
        </FormContent>
      </Content>
      <ImageContent>
        <Icon icon="logo" width={200} height={200} />
        <h1>Welcome to Romang</h1>
        <p>내면의 가치관과 취향을 알 수 있도록</p>
        <p>
          <strong>가치관 테스트 컨텐츠를 제공하는 소개팅 서비스</strong>
        </p>
      </ImageContent>
    </Container>
  )
}

export default Join
