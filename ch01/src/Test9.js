import React, { useState } from 'react'

const Test9 = () => {
    const [ message, setMessage ] = useState('');
    const onClickEnter = () => setMessage("어서오세요! 환영합니다!");
    const onClickLeave = () => setMessage("감사합니다! 안녕히가세요!");
    const [ color, setColor ] = useState('black');
  return (
    <div className='App'>
        <button onClick={onClickEnter}>입실</button>
        <button onClick={onClickLeave}>퇴실</button>
        <hr />
        <h1 style={{ color }}>{message}</h1>
        <hr />
        <button onClick={() => setColor('gold')}>금</button>
        <button onClick={() => setColor('gray')}>은</button>
        <button onClick={() => setColor('brown')}>동</button>
    </div>
  )
}

export default Test9