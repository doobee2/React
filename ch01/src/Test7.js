//비구조 할당
const Test7 = ({nick, age, addr}) => {
  return (
    <div className="App">
        <h1>비구조 할당</h1>
        <h2>저는 {nick} 입니다.</h2>
        <h2>나이는 {age}살 입니다.</h2>
        <h2>사는 곳은 {addr} 입니다.</h2>
        <hr/>
    </div>
  )
}

export default Test7