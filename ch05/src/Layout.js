import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    const goHome = () => {
        navigate('/', { replace : true });
    };
    const goArticles = () => { 
        navigate('/articles', { replace:true });
    };
    return (
        <div>
            <header style={{ background:'pink', padding:20, fontSize:48 }}>
                <button onClick={goBack} style={{background:'white', width:100, height:60, fontSize:24, margin:10}}>BACK</button>
                <button onClick={goHome} style={{background:'white', width:100, height:60, fontSize:24, margin:10}}>HOME</button>
                <button onClick={goArticles} style={{background:'white', width:100, height:60, fontSize:24, margin:10}}>게시판</button>
                <ul style={{float:'right', fontSize:32}}>
                    <li><Link to='/articles'>게시판</Link></li>
                    <li><Link to='/login'>로그인</Link></li>
                    <li><Link to='/mypage'>마이페이지</Link></li>
                </ul>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
  )
}

export default Layout