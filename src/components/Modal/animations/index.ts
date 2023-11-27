import { keyframes } from '@emotion/react'

/* Hide modal container */
export const quickScaleDown = keyframes`
  0% {
    transform: scale(1);
  }
  99.9% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`

/* Dimmed showing */
export const fadeIn = keyframes`
  0% { 
    background: transparent; 
  } 
  100% { 
    background: rgba(0, 0, 0, .7); 
  }
`

/* Dimmed hiding */
export const fadeOut = keyframes`
  0% {
    background: rgba(0, 0, 0, .7); 
  }
  100% { 
    background: transparent; 
  }
`

/* Show modal content from bottom to top */
export const scaleUp = keyframes`
  0% {
    /* 모달 콘텐츠를 하단에 위치시킴 */
    transform: scale(.8) translateY(300px);
    opacity: 0;
  }
  100% {
    /* 모달 콘텐츠를 본래 위치로 돌려놓음 */
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`

/* modal content from top to bottom */
export const scaleDown = keyframes`
  0% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  100% {
    transform: scale(.8) translateY(300px);
    opacity: 0;
  }
`
