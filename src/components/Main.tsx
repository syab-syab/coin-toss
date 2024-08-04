import React, { useState } from 'react';
// import './App.css';
import styled from 'styled-components';
import Coin from './Coin';
import CoinMotion from './CoinMotion';

// 適当だから後で直す
const Wrapper = styled.main`
  padding: 0 3rem;
`

const Main = () => {
  const [ran, setRan] = useState<number>(0)

  const [motion, setMotion] = useState<boolean>(false)

  // ボタンをクリックして数秒アニメーションを表示させてから
  // 停止して結果を表示する
  const createRandom = (): void => {
    setMotion(true)
    setTimeout(() => {
      setMotion(false)
    }, 1000);
    
    const tmp: number =  Math.floor(Math.random() * 2)
    setRan(tmp+1)

    // 1を足さないと0スタートになってややこしい

  }

  const CoinStatus = ["", "表", "裏"]
  return (
    <Wrapper>
      <h1>コイントス</h1>
      <h1>デザインはスマホ画面で進める</h1>
      {
        !motion && <Coin value={CoinStatus[ran]} />
      }
      {
        motion && <CoinMotion />
      }
      <p>
        <button onClick={createRandom}>コイントス</button>
      </p>
    </Wrapper>
  )
}

export default Main