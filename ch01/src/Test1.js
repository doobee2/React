//4. Tset1 컴포넌트 생성 : 컴포넌트의 이름은 대문자로 시작(소문자도 무관하지만, 추후에 못알아들을 수도)
//5. 표현식과 if 조건 연산, OR(||) 연산
//6. 내부 스타일링
//7. 인라인 스타일링
function Test1() {
    const name = "이슬비";
    const param = undefined;
    const style = {
        backgroundColor:"pink",
        color:"white",
        fontSize:"32px",
        fontWeight:"bold",
        padding:10
    }
  return (
    <div className="App">
      <h2 className="title">{name} 컴포넌트 테스트</h2>
      <h3 className="item_tit">{ name === '이슬비' ? '공주님' : '바보'}</h3>
      <h4 className="cate_tit">{ param || <sapn>아름다워</sapn>}</h4>
      <p style={ style }>이 내용은 내부 스타일 적용부 입니다.</p>
      <div style = {{
        backgroundColor:"beige", color:"pink", fontSize:"30px" 
      }}>{ name } - 인라인 스타일 입니다.</div>
      <p className="comment">정신 차리세요!</p>
    </div>
  );
}

export default Test1;