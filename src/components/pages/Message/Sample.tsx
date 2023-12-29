import React from 'react'

import styled from '@emotion/styled'

const Wrapper = styled.div`
  margin-bottom: 30px;

  ul {
    display: flex;
    gap: 16px;

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
          <strong>1</strong>
          연락 주셔서 감사합니다, 다만 거리가 멀어 어려울 것 같습니다. 좋은 인연 찾으시길 바랍니다
        </li>
        <li>
          <strong>2</strong>
          보내주신 프로필이 저와는 가치관이 다르다고 느껴지네요. 죄송합니다.
        </li>
        <li>
          <strong>3</strong>
          용기내서 메세지 보내주셨는데 저와는 인연이 아닌것 같습니다. 죄송합니다.
        </li>
        <li>
          <strong>4</strong>
          저는 진중한 분을 찾고있는데 프로필이 진정성 없어보여 인연이 아닌듯 하네요.
        </li>
        <li>
          <strong>5</strong>
          저는 종교적인 부분이 중요해서 거절하게 되었습니다. 좋은 인연 찾으시길 바랍니다.
        </li>
        <li>
          <strong>6</strong>
          흡연하시는 부분 맘에 걸려서.. 죄송합니다.
        </li>
      </ul>
    </Wrapper>
  )
}

export default Sample
