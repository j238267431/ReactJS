import { Route, Switch } from 'react-router-dom'
export const ChooseChat = () => {
  return (
    <Switch>
      <Route exact={true} path='/chats'>
        <h2>choose chat</h2>
      </Route>
    </Switch>
  )
}
