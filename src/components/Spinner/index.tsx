import React, { CSSProperties } from 'react'
import * as SC from './style'

interface Style {
  style?: CSSProperties
}

function Spinner({ style }: Style) {
  return (
    <SC.Spinner style={{ ...style, top: 'calc(50% - 62px)' }}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </SC.Spinner>
  )
}

function WithBackground({ style }: Style) {
  return (
    <SC.BackgroundContainer style={style}>
      <SC.SpinnerContainer>
        <Spinner />
        <SC.Content>잠시만 기다려주세요.</SC.Content>
        <SC.Content>데이터를 로딩중입니다.</SC.Content>
      </SC.SpinnerContainer>
    </SC.BackgroundContainer>
  )
}

Spinner.WithBackground = WithBackground

export default Spinner
