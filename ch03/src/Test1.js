import React from 'react'

const Test1 = () => {
    const names = ['일슬비','이슬비','삼슬비','사슬비','오슬비']
    const namelist = names.map((data) => <li><a href="/">{data}</a></li>);
  return (
    <div className='App'>
        <ul>{namelist}</ul>
    </div>
  )
}

export default Test1