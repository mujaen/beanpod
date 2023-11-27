import styled from '@emotion/styled'

import { fadeIn, fadeOut, scaleDown, scaleUp, quickScaleDown } from './animations'

export const Content = styled.div`
  margin: auto;
  height: auto;
  background: #fff;
  padding: 30px;
  display: inline-block;
  border-radius: 3px;
  position: relative;
  box-sizing: border-box;

  h2 {
    ${({ theme }) => theme.fonts.R400};
    margin-bottom: 30px;
    text-align: left;
  }

  p {
    font-size: 18px;
    line-height: 22px;
  }

  dl {
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  dl:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.gray500};
  }

  dl:last-of-type {
    margin-bottom: 30px;
  }

  dt {
    width: 100px;

    color: ${({ theme }) => theme.colors.gray900};
    background-color: ${({ theme }) => theme.colors.gray200};

    ${({ theme }) => theme.fonts.R100};
  }

  dd {
    width: 180px;

    color: ${({ theme }) => theme.colors.gray800};
    ${({ theme }) => theme.fonts.L100};
  }

  dt,
  dd {
    display: flex;
    align-items: center;

    height: 38px;
    padding: 0 16px;
    box-sizing: border-box;
    text-align: left;
  }

  input {
    width: 100%;
  }
`

export const CloseButton = styled.button`
  position: fixed;
  right: 15px;
  top: 15px;
  background: none;
  border: none;
  stroke: #ffffff;
  cursor: pointer;
`

export const Wrapper = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  vertical-align: middle;
  transition: 0.3s;
  overflow: auto;
`

export const Container = styled.div`
  overflow: hidden;

  position: fixed;
  left: 0;
  top: 0;
  display: grid;
  height: 100%;
  width: 100%;
  z-index: 1;
  /* hidden 처리 */
  transform: scale(0);

  &.show {
    transform: scale(1);

    > div {
      background: transparent;
      animation: ${fadeIn} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    > div > div {
      opacity: 0;
      animation: ${scaleUp} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }

  &.hidden {
    transform: scale(1);

    animation: ${quickScaleDown} 0s 0.5s linear forwards;

    > div {
      animation: ${fadeOut} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }

    > div > div {
      animation: ${scaleDown} 0.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
    }
  }
`
