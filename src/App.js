import { Grid } from '@material-ui/core'
import { Messagelist, ChatList } from './components'

export const App = () => {
  return (
    <div>
      <Grid container={true} spacing={3}>
        <Grid item={true} xs={6}>
          <ChatList />
        </Grid>
        <Grid item={true} xs={6}>
          <Messagelist />
        </Grid>
      </Grid>
    </div>
  )
}
