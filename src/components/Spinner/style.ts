import styled from '@emotion/styled'

export const Spinner = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  div {
    transform-origin: 35px 35px;
    animation: lds-spinner 1.2s linear infinite;
  }
  div:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 6px;
    left: 32px;
    width: 4px;
    height: 9px;
    border-radius: 35%;
    background: ${({ theme }) => theme.colors.blue500};
  }
  div:nth-child(1) {
    transform: rotate(0deg);
    animation-delay: -1.1s;
  }
  div:nth-child(2) {
    transform: rotate(30deg);
    animation-delay: -1s;
  }
  div:nth-child(3) {
    transform: rotate(60deg);
    animation-delay: -0.9s;
  }
  div:nth-child(4) {
    transform: rotate(90deg);
    animation-delay: -0.8s;
  }
  div:nth-child(5) {
    transform: rotate(120deg);
    animation-delay: -0.7s;
  }
  div:nth-child(6) {
    transform: rotate(150deg);
    animation-delay: -0.6s;
  }
  div:nth-child(7) {
    transform: rotate(180deg);
    animation-delay: -0.5s;
  }
  div:nth-child(8) {
    transform: rotate(210deg);
    animation-delay: -0.4s;
  }
  div:nth-child(9) {
    transform: rotate(240deg);
    animation-delay: -0.3s;
  }
  div:nth-child(10) {
    transform: rotate(270deg);
    animation-delay: -0.2s;
  }
  div:nth-child(11) {
    transform: rotate(300deg);
    animation-delay: -0.1s;
  }
  div:nth-child(12) {
    transform: rotate(330deg);
    animation-delay: 0s;
  }
  @keyframes lds-spinner {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

export const BackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 0;
  left: 0;
  background: rgba(49, 55, 72, 0.9);
  z-index: 9;
`

export const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Content = styled.p`
  color: #f1f5f9;

  text-align: center;
  font-family: Roboto;
  ${({ theme }) => theme.fonts.L200};
  line-height: 140%;
  letter-spacing: 0.1px;
`
