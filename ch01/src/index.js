import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';

// 3. index.js에 컴포넌트 추가

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />

    <Test4 />
    <Test5 nick="뚜비공주" age="12" />
    <Test5 nick="슬박" age="20" addr="서울"/>
    <Test6 nick="술비" age="18" addr="인천"/>
    <Test7 nick="살비" age="100" addr="하늘"/>
    <Test8 />
    <Test9 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
