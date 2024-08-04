import React from 'react'
import styled, { keyframes } from 'styled-components';


const coin_rotation = keyframes`
  0% {
    transform: rotateX(0deg);
  }
  100% {
    transform: rotateX(36000deg);
  }
`;

const Motion = styled.div`
  animation: ${coin_rotation} 3s linear infinite;
  display: inline-block;
  border-radius: 100%;
  height: 100px;
  width: 100px;
  background: #ffd400;
  border: thick double black;
  text-align: center;
  font-size: 50px;
  line-height: 100px;
  font-weight: bold;
`

const CoinMotion = () => {
  return (
    <Motion />
  )
}

export default CoinMotion