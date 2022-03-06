import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`

`

const animateLoadingDots = keyframes`
  0%, 100% {
    transform:scale(0.2);
    background-color: #7209b7;
  }
  40% {
    transform: scale(1);
    background-color: #d90429;
  }
  50% {
    transform:scale(1);
    background-color: #4a4e69;
  }
`

export const Dot = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  display: inline-block;
  & + div {
    margin-left: 0.5rem;
  }
  animation: ${animateLoadingDots} 2.5s ease-in-out infinite;

  &:nth-child(0) {
    animation-delay: 0s;
  }

  &:nth-child(1) {
    animation-delay: 0.2s;
  }

  &:nth-child(2) {
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  &:nth-child(4) {
    animation-delay: 0.8s;
  }

  &:nth-child(5) {
    animation-delay: 1s;
  }
`

