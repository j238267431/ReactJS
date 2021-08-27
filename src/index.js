import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
// import { App } from './App'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import { Page404 } from './components'
import { Mainpage } from './Mainpage'
// import { Profile } from './Profile'
import { Gists } from './pages'
import Profile from './Profile'

import { store, persistore } from './store'

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistore}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact={true} path='/'>
              <Mainpage />
            </Route>
            <Route path='/profile'>
              <Profile />
              <Link to='/'>back to main menu</Link>
            </Route>
            <Route path='/gists'>
              <Gists />
              <Link to='/'>back to main menu</Link>
            </Route>
            <Route path='/chats'>
              <App />
              <Link to='/'>back to main menu</Link>
            </Route>
            <Route path='/*'>
              <Page404 />
              <Link to='/'>back to main menu</Link>
            </Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root'),
)
