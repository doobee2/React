
// 구조 할당(props)의 사용
const Test5 = (props) => {
  return (
    <div className="App">
        <h2>저의 이름은 {props.nick} 입니다.</h2>
        <h2>나이는 {props.age}쨜 입니다.</h2>
        <h2>사는 곳은 {props.addr} 입니다.</h2>
        <hr/>
    </div>
  )
}

Test5.defaultProps = {

    addr : '마법의 성'
}

export default Test5