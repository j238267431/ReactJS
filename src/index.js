import { React, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import { App } from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { db, firebaseApp } from './api/firebase'
import App from './App'
import { Page404, PrivateRoute, PublicRoute } from './components'
import { Mainpage } from './Mainpage'
// import { Profile } from './Profile'
import { Gists, Login, SignUp } from './pages'
import Profile from './Profile'
import { store, persistore } from './store'

const Applic = () => {
  const [session, setSession] = useState(null)
  const addChat = () => {
    db.ref('chat-list')
      .child('chat3')
      .set({ chat: 'chat3', id: 3 })
  }
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        setSession(user)
      } else {
        setSession(null)
      }
    })
  }, [])

  return (
    <PersistGate loading={null} persistor={persistore}>
      <Provider store={store}>
        <button onClick={addChat}>addChat</button>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path='/'>
              <Mainpage />
            </Route>
            <PrivateRoute isAut={session} path='/profile'>
              <Profile />
              <Link to='/'>back to main menu</Link>
            </PrivateRoute>
            <PrivateRoute isAut={session} path='/gists'>
              <Gists />
              <Link to='/'>back to main menu</Link>
            </PrivateRoute>
            <PrivateRoute isAut={session} path='/chats'>
              <App />
              <Link to='/'>back to main menu</Link>
            </PrivateRoute>
            <PublicRoute isAut={session} path='/login'>
              <Login />
              <Link to='/'>back to main menu</Link>
            </PublicRoute>
            <PublicRoute isAut={session} path='/sign-up'>
              <SignUp />
              <Link to='/'>back to main menu</Link>
            </PublicRoute>
            <Route path='/*'>
              <Page404 />
              <Link to='/'>back to main menu</Link>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  )
}

ReactDOM.render(
  // <React.StrictMode>
  <Applic />,
  // </React.StrictMode>,
  document.getElementById('root'),
)
