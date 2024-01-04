import React from 'react'
import { Link } from 'react-router-dom'

import { useForm } from 'react-hook-form'

import Button from '#components/Button'
import Icon from '#components/Icon'

import {
  Container,
  Content,
  ImageContent,
  FormContent,
  Form,
  Register,
} from '#components/pages/Login/style'

type SubmitType = {
  user_id: string
  pdata: string
}

function Login({}): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SubmitType>({
    mode: 'onSubmit',
    defaultValues: {
      user_id: '',
      pdata: '',
    },
  })

  const onSubmit = async (data: SubmitType) => {
    console.log(data)
    // const { token = '', message } = await api.signIn(data)
    // if (message) {
    //   alert(message)
    // }
    // if (token) {
    //   await nookies.set(null, 'token', token, {
    //     maxAge: 60 * 60,
    //     sameSite: 'strict',
    //     path: '/',
    //   })
    //   const profile = {
    //     id: data.user_id,
    //     name: data.user_id,
    //   }
    //   await dispatch(login(profile))
    //   localStorage.setItem('profile', JSON.stringify(profile))
    //   await router.push('/dashboard')
    // }
  }

  return (
    <Container>
      <Content>
        <ImageContent>
          <Icon icon="logo" width={200} height={200} />
          <h1>Welcome to Romang</h1>
          <p>내면의 가치관과 취향을 알 수 있도록</p>
          <p>
            <strong>가치관 테스트 컨텐츠를 제공하는 소개팅 서비스</strong>
          </p>
        </ImageContent>
        <FormContent>
          <h1>로그인</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <label>아이디</label>
            <input
              type="text"
              placeholder="아이디를 입력해주세요"
              {...register('user_id', {
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
            {errors.pdata && <span>{errors.pdata?.message}</span>}

            <Link to="/">아이디ㆍ비밀번호 찾기</Link>

            <Button type="submit">로그인</Button>

            <Register>
              아직 회원이 아닌가요?
              <Link to="/join">회원가입</Link>
            </Register>
          </Form>
        </FormContent>
      </Content>
    </Container>
  )
}

export default Login
