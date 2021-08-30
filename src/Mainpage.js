import { Link } from 'react-router-dom'
import { firebaseApp } from './api/firebase'
export const Mainpage = () => {
  const signOut = () => {
    firebaseApp.auth().signOut
  }

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
        <li>
          <Link to='/gists'>gists</Link>
        </li>
        <li>
          <Link to='/login'>login</Link>
        </li>
        <li>
          <Link to='/sign-up'>sign up</Link>
        </li>
        <h1 onClick={signOut}>sign out</h1>
      </ul>
    </div>
  )
}
