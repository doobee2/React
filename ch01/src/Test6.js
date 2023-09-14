//구조 분할(분리) => 비구조 할당

const Test6 = (props) => {
    const {nick, age, addr} = props;
  return (
    <div className="App">
        <h2>저는 {nick} 입니다.</h2>
        <h2>나이는 {age}살 입니다.</h2>
        <h2>사는 곳은 {addr} 입니다.</h2>
        <hr/>
    </div>
  )
}

export default Test6