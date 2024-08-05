import React from 'react'
import styled from 'styled-components'

const CoinOutline = styled.div`
  display: inline-block;
  border-radius: 100%;
  height: 20rem;
  width: 20rem;
  background-image: linear-gradient(90deg, rgba(233, 233, 233, 1) 50%, rgba(172, 172, 172, 1));
  border: thick double black;
  text-align: center;
  font-size: 10rem;
  line-height: 20rem;
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