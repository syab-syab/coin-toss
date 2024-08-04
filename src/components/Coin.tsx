import React from 'react'
import styled from 'styled-components'

const CoinOutline = styled.div`
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


type Props = {
  value: string
}

const Coin = (props: Props) => {
  return (
    <CoinOutline>
      {props.value}
    </CoinOutline>
  )
}

export default Coin