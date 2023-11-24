import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h2>Home</h2>
        <hr/>    
        <ul>
            <li>
                <Link to="/about">Intro</Link>
            </li>
            <li>
                <Link to="/profile/seulpark">Developer 1</Link>
            </li>
            <li>
                <Link to="/profile/seulbee">Developer 2</Link>
            </li>
            <li>
                <Link to="/profile/doobee">Developer 3</Link>
            </li>
        </ul>
    </div>
  )
}

export default Home