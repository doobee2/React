import React , { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
//객체의 배열 : useState(객체나 변수를 관리하는 용도로 사용)
//useState를 이용한 객체의 배열 추가/제거

const Test2 = () => {
    const [names, setNames] = useState([
      { id:1, text:'일슬비' },
      { id:2, text:'이슬비' },
      { id:3, text:'삼슬비' },
      { id:4, text:'사슬비' },
    ])
  
  const [ inputText, setInputText ] = useState('');
  const [ nextId, setNextId ] = useState(5);
  const onChange = (e) => { setInputText(e.target.value); }
  const onClick = (e) => { 
    const nextNames = names.concat({    //하나의 객체 생성
      id : nextId,
      text : inputText
    });
    setNextId(nextId+1);  //아이디 하나 증가
    setNames(nextNames);  //객체를 배열에 추가
    setInputText('');
  }

  const onRemove = (id) => {
    const nextNames = names.filter(data => data.id !== id);
    setNames(nextNames);
  }

  const nameslist = names.map((data) => <li key={data.id} onDoubleClick={() => 
    onRemove(data.id)}> {data.id} : {data.text} </li>)
  return (
    <div className='App'>
        <input value={inputText} onChange={onChange} />
        <button onClick={onClick}>추가</button>
        <ul className=''>{nameslist}</ul>
    </div>
  )
}

export default Test2