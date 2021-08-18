import { Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Messagelist, ChatList, ChooseChat } from './components'
import { increment } from './store/profile'

function App ({ count, incrementProps }) {
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
      <h1>COUNT ={count}</h1>
      <button onClick={incrementProps}>increment</button>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    count: state.count,
  }
}
const mapDispatchToProps = (dispatch) => {
  return { incrementProps: () => dispatch(increment()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
