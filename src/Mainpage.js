import { Link } from 'react-router-dom'

export const Mainpage = () => {
  return (
    <div>
      <h1> MAIN</h1>
      <ul>
        <li>
          <Link to='/chats'>chats</Link>
        </li>
        <li>
          <Link to='/profile'>profile</Link>
        </li>
      </ul>
    </div>
  )
}
