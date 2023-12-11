import React from 'react'

import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-bottom: 30px;

  ul {
    display: flex;
    gap: 30px;

    width: 100%;
  }

  li {
    width: 100%;
    padding: 20px;

    border: 1px solid ${({ theme }) => theme.colors.gray600};
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.gray100};
  }

  strong {
    display: block;
    margin-bottom: 10px;
  }
`

function Sample({}) {
  return (
    <Wrapper>
      <ul>
        <li>
          <strong>1번 / 거리가 먼 경우</strong>
          좋으신 분 같은데 제가 거리를 중요하게 생각하고 있어서요 진심으로 좋은신 분 만나셨으면
          좋겠습니다 죄송합니다ㅠㅠ
        </li>
        <li>
          <strong>2번 / 자기소개 내용이 적은 경우</strong>
          죄송합니다..용기내서 먼저 메시지 주셨는데 적어주신 내용으로는 어떤분이신지 추측이 안되는
          것 같아요.. 좋은분 만나시길 바랄게요..!
        </li>
        <li>
          <strong>3번 / 종교가 다른 경우</strong>
          죄송해요 제가 종교가 다른분은 만나기 힘들 것 같아서요..
        </li>
        <li>
          <strong>4번 / 결이 다른 경우</strong>
          죄송합니다ㅠㅠ 제가 만나고 싶은 이상형과는 결이 조금 다르신 것 같네요
        </li>
      </ul>
    </Wrapper>
  )
}

export default Sample
