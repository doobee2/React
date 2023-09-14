//표현식과 내부 스타일링, 인라인 스타일링, 조건 연산자, if문을 활용하여 컴포넌트 만들기

const style = {
    backgroundColor:"#5f9af1",
    color:"white",
    fontSize:"20px",
    fontWeight:"bold",
    padding:20
}
const tit = "리액트";
const Test2 = () => {
  return (
   
    <div className="App">
        <p style={ style }>1.내부 스타일링 적용해보자!</p>
        <h2 style={{
            color:"#5f9af1", fontSize:"24px"
        }}>2.인라인 스타일링 테스트 테스트!</h2>
        <h2 className="item_tit">{ tit === '리액퉁' ? '화이팅!' : '우웩'}2.조건 연산자</h2>
    </div>
    
  )
}

export default Test2