import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

import Test8 from './Test8';
//부트스트랩 설치 명령어 
//yarn으로 설치 - D:\seulbee\react\ch03(위치잡기) > yarn add react-bootstrap bootstrap
//npm으로 설치 - D:\seulbee\react\ch03(위치잡기) > npm install react-bootstrap bootstrap
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>


    <Test8 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
