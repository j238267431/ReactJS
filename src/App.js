import { Grid } from '@material-ui/core'
import { Route, Switch } from 'react-router-dom'
import { Messagelist, ChatList, ChooseChat } from './components'

export const App = () => {
  return (
    <div>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={6}>
          <ChatList />
        </Grid>
        <Switch>
          <Route path='/chats/:chatId'>
            <Grid item={true} xs={6}>
              <Messagelist />
            </Grid>
          </Route>
          <Route path='/chats'>
            <Grid item={true} xs={6}>
              <ChooseChat />
            </Grid>
          </Route>
        </Switch>
      </Grid>
    </div>
  )
}
