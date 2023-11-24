import React, { useContext } from 'react'
import { AgeContext } from './AgeContext';
import { NameContext } from './NameContext';

const Header = () => {
    const age = useContext(AgeContext);     //'20'출력됨
    const user = useContext(NameContext);   //'술비'출력됨
    console.log('user :'+user);
    console.log('age :'+age);
  return (
    <div>
        <p>안녕하세요 저는 {user} 입니다.</p>
        <p>제 나이는 {age}살 이에요!</p>
    </div>
  )
}

export default Header