// Router > Routes > Route
import React, { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './Layout';

import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Mypage from './pages/Mypage';

import Notfound from './pages/Notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/articles" element={<Articles />}>
              <Route path=":id" element= {<Article />}/>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="*" element={<Notfound />} />
          </Route>
      </Routes>
    </Router>
  );
}

export default App;
